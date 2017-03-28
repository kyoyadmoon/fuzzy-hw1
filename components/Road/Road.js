import React, { PropTypes } from 'react';
import s from './Road.css';

class Road extends React.Component {
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  };

  render() {
    const { x, y, width, height } = this.props;
    return (
      <div
        className={s.road}
        style={{
          left: `${x}px`,
          top: `${y}px`,
          width: `${width}px`,
          height: `${height}px`,
        }}
      />
    );
  }
}

export default Road;
