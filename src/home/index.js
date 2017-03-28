import _ from 'lodash';
import React, { PropTypes } from 'react';
import s from './Home.css';
import Road from '../../components/Road/Road';
import ROADS from '../../config/roads';
import WALLS from '../../config/walls';

const TIME_INTERVAL = 300;

const degreesToRadians = degree => degree * (Math.PI / 180.0);
const radiansToDegrees = radians => radians * (180 / Math.PI);

const calcDistance = (x1, y1, x2, y2) => {
  const xDistance = Math.abs(x2 - x1);
  const yDistance = Math.abs(y2 - y1);
  return Math.sqrt((xDistance ** 2) + (yDistance ** 2));
};

const isHandlerInRange = degree => _.inRange(degree, -40, 40);

const limitDegreesInRange = (degree) => {
  let result = degree;
  if (degree > 270) {
    result = degree - 360;
  } else if (degree < -90) {
    result = degree + 360;
  }
  return result;
};

const DIREC = {
  // keyboard code
  left: 37,
  up: 38,
  right: 39,
  down: 40,
};

const CONFIG = {
  mapWidth: 80,
  mapHeight: 80,
  carRadius: 3,
  coordToPixel: 10,
  rotateStep: 10,
  // rule
  SMF_RULE_NUMBER: 3,
  PZN_RULE_NUMBER: 3,
  DESTINATION: {
    x: 24,
    y: 37,
    radius: 1,
  },
};

const makeTextFile = (text) => {
  let textFile = null;
  const data = new Blob([text], { type: 'text/plain' });
    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
  if (textFile !== null) {
    window.URL.revokeObjectURL(textFile);
  }
  textFile = window.URL.createObjectURL(data);
  return textFile;
};

class Home extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      content: PropTypes.string,
    })).isRequired,
  };

  constructor(props) {
    super(props);
    const { DESTINATION } = CONFIG;
    this.state = {
      carX: 0,
      carY: 0,
      carAngle: 90,
      handlerAngle: 0,
      destinationX: ((CONFIG.mapWidth / 2) + (DESTINATION.x - DESTINATION.radius)),
      destinationY: (CONFIG.mapHeight - (DESTINATION.y - DESTINATION.radius)),
      path: [],
      downloadUrl: null,
    };
  }

  reset = () => {
    this.stopInterval();
    this.setState({
      carX: 0,
      carY: 0,
      carAngle: 90,
      handlerAngle: 0,
      path: [],
    });
  }

  carXToPixel = (carX) => {
    const leftPixel = ((CONFIG.mapWidth / 2) + (carX - CONFIG.carRadius)) * CONFIG.coordToPixel;
    return leftPixel;
  }

  carYToPixel= (carY) => {
    const topPixel = (CONFIG.mapHeight - (carY + CONFIG.carRadius)) * CONFIG.coordToPixel;
    return topPixel;
  }

  handleKeyDown = (event) => {
    const key = event.keyCode || event.charCode || 0;
    switch (key) {
      case DIREC.left:
        this.setState((nextState) => {
          const nextHandlerAngle = nextState.handlerAngle - CONFIG.rotateStep;
          if (isHandlerInRange(nextHandlerAngle)) {
            return {
              handlerAngle: nextHandlerAngle,
            };
          }
        });
        break;
      case DIREC.right:
        this.setState((nextState) => {
          const nextHandlerAngle = nextState.handlerAngle + CONFIG.rotateStep;
          if (isHandlerInRange(nextHandlerAngle)) {
            return {
              handlerAngle: nextHandlerAngle,
            };
          }
        });
        break;
      default:
    }
  }

  startInterval = () => {
    // ensure only one timeInterval
    if (_.isNil(this.state.intervalId)) {
      const intervalId = setInterval(() => {
        const { carX, carY, carAngle, handlerAngle } = this.state;
        if (carY > CONFIG.DESTINATION.y) {
          this.stopInterval();
        }
        const { nextX, nextY, nextCarAngle } = this.motionEquation({ x: carX, y: carY, handlerAngle, carAngle });
        const sensors = this.senseDistance();
        this.fuzzyRotate(sensors);
        this.setState(nextState => ({
          carX: nextX,
          carY: nextY,
          carAngle: nextCarAngle,
          path: [
            ...nextState.path,
            {
              carX,
              carY,
              left: sensors[0].distance,
              front: sensors[1].distance,
              right: sensors[2].distance,
              handler: handlerAngle,
            },
          ],
        }));
      }, TIME_INTERVAL);
      this.setState({ intervalId });
    } else {
      this.stopInterval();
    }
  }

  stopInterval = () => {
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: null });
  }

  senseDistance = () => {
    const { carX, carY, carAngle, handlerAngle } = this.state;
    const sensors = [{
      degree: 45,
    }, {
      degree: 0,
    }, {
      degree: -45,
    }];
    sensors.forEach((sensor, index) => {
      const sensorAngle = limitDegreesInRange(carAngle + sensor.degree);
      WALLS.forEach((wall) => {
        const isVertical = (wall.x1 === wall.x2);
        if (isVertical) {
          const xCoord = wall.x1;
          // vertical wall
          const isNotParallel = (sensorAngle !== 90 && sensorAngle !== -90 && sensorAngle !== 270);
          if (isNotParallel) {
            const wallOnLeft = (sensorAngle > 90 && sensorAngle < 270 && xCoord < carX);
            const wallOnRight = (sensorAngle < 90 && sensorAngle > -90 && xCoord > carX);
            const isWallOnVector = wallOnLeft || wallOnRight;
            if (isWallOnVector) {
              // 令方程式為 y=ax+b
              const a = Math.tan(degreesToRadians(sensorAngle));
              const b = carY - (a * carX);
              const yCoord = (a * xCoord) + b;
              if (_.inRange(yCoord, wall.y1, wall.y2)) {
                const distance = calcDistance(xCoord, yCoord, carX, carY);
                if (_.isUndefined(sensors[index].distance) || sensors[index].distance > distance) {
                  sensors[index].distance = distance;
                }
              }
            }
          }
        } else {
          // horizonal wall
          const isNotParallel = (sensorAngle !== 0 && sensorAngle !== 180);
          if (isNotParallel) {
            const yCoord = wall.y1;
            const wallOnTop = (sensorAngle > 0 && sensorAngle < 180 && yCoord > carY);
            const wallOnDown = ((sensorAngle < 0 || sensorAngle > 180) && yCoord < carY);
            const isWallOnVector = wallOnTop || wallOnDown;
            if (isWallOnVector) {
              // 令方程式為 y=ax+b
              const a = Math.tan(degreesToRadians(sensorAngle));
              const b = carY - (a * carX);
              const xCoord = (yCoord - b) / a;
              if (_.inRange(xCoord, wall.x1, wall.x2)) {
                const distance = calcDistance(xCoord, yCoord, carX, carY);
                if (_.isUndefined(sensors[index].distance) || sensors[index].distance > distance) {
                  sensors[index].distance = distance;
                }
              }
            }
          }
        }
      });
      // console.log('sensors');
      // console.log(sensors[2].distance - sensors[0].distance);
    });
    return sensors;
  }

  fuzzyRotate = (sensorsData) => {
    const RLDiff = sensorsData[2].distance - sensorsData[0].distance;
    console.log(RLDiff);
    let handlerAngle;
    if (_.inRange(RLDiff, 1, 9)) {
      handlerAngle = RLDiff + 3;
    } else if (_.inRange(RLDiff, -1, -9)) {
      handlerAngle = RLDiff - 3;
    } else if (_.inRange(RLDiff, 9, 18)) {
      handlerAngle = RLDiff - 2;
    } else if (_.inRange(RLDiff, -9, -18)) {
      handlerAngle = RLDiff + 2;
    } else if (RLDiff > 18) {
      handlerAngle = 23;
    } else if (RLDiff < -18) {
      handlerAngle = -23;
    } else if (RLDiff === 0) {
      handlerAngle = 0;
    }
    if (!_.isNil(handlerAngle)) {
      this.setState({ handlerAngle });
    }
  }

  motionEquation = (prevRecord) => {
    const { x, y, handlerAngle, carAngle } = prevRecord;
    const handlerRadians = degreesToRadians(handlerAngle);
    const carRadians = degreesToRadians(carAngle);
    const carHandlerRadians = degreesToRadians(carAngle + handlerAngle);
    const nextX = x + Math.cos(carHandlerRadians) + (Math.sin(handlerRadians) * Math.sin(carRadians));
    const nextY = y + (Math.sin(carHandlerRadians) - (Math.sin(handlerRadians) * Math.cos(carRadians)));
    const carLength = 2 * CONFIG.carRadius;
    let nextCarAngle = radiansToDegrees(carRadians - Math.asin((2 * Math.sin(handlerRadians)) / carLength));
    // limit carAngle degreee
    nextCarAngle = limitDegreesInRange(nextCarAngle);
    return {
      nextX,
      nextY,
      nextCarAngle,
    };
  }

  exportTrain4D = () => {
    const { path } = this.state;
    let str = '';
    path.forEach((t) => {
      str += `${t.front} ${t.right} ${t.left} ${t.handler}\n`;
    });
    // return str;
    const downloadUrl = makeTextFile(str);
    window.open(downloadUrl);
  }

  exportTrain6D = () => {
    const { path } = this.state;
    let str = '';
    path.forEach((t) => {
      str += `${t.carX} ${t.carY} ${t.front} ${t.right} ${t.left} ${t.handler}\n`;
    });
    const downloadUrl = makeTextFile(str);
    window.open(downloadUrl);
  }

  render() {
    const { DESTINATION } = CONFIG;
    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <div className={s.root}>
          {
            ROADS.map((road, i) => (
              <Road
                key={i}
                width={road.width * CONFIG.coordToPixel}
                height={road.height * CONFIG.coordToPixel}
                x={((CONFIG.mapWidth / 2) + road.x) * CONFIG.coordToPixel}
                y={(CONFIG.mapHeight - road.y) * CONFIG.coordToPixel}
              />
              ))
          }
          {
            this.state.path.map(t => (
              <div
                className={s.pathDot}
                style={{
                  left: `${this.carXToPixel(t.carX) + 15}px`,
                  top: `${this.carYToPixel(t.carY) + 15}px`,
                }}
              />
            ))
          }
          <div
            className={s.car}
            style={{
              left: `${this.carXToPixel(this.state.carX)}px`,
              top: `${this.carYToPixel(this.state.carY)}px`,
              transform: `rotate(${90 - this.state.carAngle}deg)`,
            }}
          >
           |
          </div>
          <div
            className={s.destination}
            style={{
              left: `${this.state.destinationX * CONFIG.coordToPixel}px`,
              top: `${this.state.destinationY * CONFIG.coordToPixel}px`,
              width: `${2 * DESTINATION.radius * CONFIG.coordToPixel}px`,
              height: `${2 * DESTINATION.radius * CONFIG.coordToPixel}px`,
              borderRadius: `${DESTINATION.radius * CONFIG.coordToPixel}px`,
            }}
          />

        </div>
        <div className={s.controlPanel} style={{ height: `${CONFIG.mapHeight * CONFIG.coordToPixel}px` }}>
          <button className={s.btn} onClick={this.startInterval}>
            {
              _.isNil(this.state.intervalId) ? 'Start' : 'Stop'
            }
          </button>
          <button className={s.btn} onClick={this.reset}>Reset</button>
          <button className={s.btn} onClick={this.exportTrain4D}>Download train4D</button>
          <button className={s.btn} onClick={this.exportTrain6D}>Download train6D</button>
        </div>
      </div>
    );
  }
}

export default Home;
