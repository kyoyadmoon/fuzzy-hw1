webpackJsonp([0],{281:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(92),i=a.n(t),s=a(93),r=a.n(s),o=a(94),l=a.n(o),c=a(96),u=a.n(c),m=a(95),p=a.n(m),d=a(36),h=a.n(d),f=a(667),v=a(675),_=a.n(v),b=a(676),y=(a.n(b),function(e){function n(){return r()(this,n),u()(this,(n.__proto__||i()(n)).apply(this,arguments))}return p()(n,e),l()(n,[{key:"componentDidMount",value:function(){document.title=b.title}},{key:"render",value:function(){return h.a.createElement(f.a,{className:_.a.content},h.a.createElement("h1",null,b.title),h.a.createElement("div",{dangerouslySetInnerHTML:{__html:b.html}}))}}]),n}(h.a.Component));n.default=y},665:function(e,n,a){"use strict";function t(){return s.a.createElement("footer",{className:"mdl-mini-footer"},s.a.createElement("div",{className:"mdl-mini-footer__left-section"},s.a.createElement("div",{className:"mdl-logo"},"© Company Name"),s.a.createElement("ul",{className:"mdl-mini-footer__link-list"},s.a.createElement("li",null,s.a.createElement(r.a,{to:"/privacy"},"Privacy & Terms")),s.a.createElement("li",null,s.a.createElement(r.a,{to:"/not-found"},"Not Found")))),s.a.createElement("div",{className:"mdl-mini-footer__right-section"},s.a.createElement("ul",{className:"mdl-mini-footer__link-list"},s.a.createElement("li",{className:"mdl-mini-footer--social-btn",style:{backgroundColor:"transparent"}},s.a.createElement("a",{href:"https://github.com/kriasoft/react-static-boilerplate",role:"button",title:"GitHub"},s.a.createElement("svg",{width:"36",height:"36",viewBox:"0 0 24 24"},s.a.createElement("path",{fill:"#fff",d:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14, 17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63, 16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17, 16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2, 7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85, 6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81, 16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"})))),s.a.createElement("li",{className:"mdl-mini-footer--social-btn",style:{backgroundColor:"transparent"}},s.a.createElement("a",{href:"https://twitter.com/ReactStatic",role:"button",title:"Twitter"},s.a.createElement("svg",{width:"36",height:"36",viewBox:"0 0 24 24"},s.a.createElement("path",{fill:"#fff",d:"M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97, 7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z"})))))))}var i=a(36),s=a.n(i),r=a(280);n.a=t},666:function(e,n,a){"use strict";var t=a(92),i=a.n(t),s=a(93),r=a.n(s),o=a(94),l=a.n(o),c=a(96),u=a.n(c),m=a(95),p=a.n(m),d=a(36),h=a.n(d),f=a(668),v=a(280),_=a(673),b=a.n(_),y=function(e){function n(){return r()(this,n),u()(this,(n.__proto__||i()(n)).apply(this,arguments))}return p()(n,e),l()(n,[{key:"componentDidMount",value:function(){window.componentHandler.upgradeElement(this.root)}},{key:"componentWillUnmount",value:function(){window.componentHandler.downgradeElements(this.root)}},{key:"render",value:function(){var e=this;return h.a.createElement("header",{className:"mdl-layout__header "+b.a.header,ref:function(n){return e.root=n}},h.a.createElement("div",{className:"mdl-layout__header-row "+b.a.row},h.a.createElement(v.a,{className:"mdl-layout-title "+b.a.title,to:"/"},"React Static Boilerplate"),h.a.createElement("div",{className:"mdl-layout-spacer"}),h.a.createElement(f.a,null)))}}]),n}(h.a.Component);n.a=y},667:function(e,n,a){"use strict";var t=a(99),i=a.n(t),s=a(92),r=a.n(s),o=a(93),l=a.n(o),c=a(94),u=a.n(c),m=a(96),p=a.n(m),d=a(95),h=a.n(d),f=a(36),v=a.n(f),_=a(669),b=a.n(_),y=a(666),g=a(665),w=a(674),C=a.n(w),E=function(e){function n(){return l()(this,n),p()(this,(n.__proto__||r()(n)).apply(this,arguments))}return h()(n,e),u()(n,[{key:"componentDidMount",value:function(){window.componentHandler.upgradeElement(this.root)}},{key:"componentWillUnmount",value:function(){window.componentHandler.downgradeElements(this.root)}},{key:"render",value:function(){var e=this;return v.a.createElement("div",{className:"mdl-layout mdl-js-layout",ref:function(n){return e.root=n}},v.a.createElement("div",{className:"mdl-layout__inner-container"},v.a.createElement(y.a,null),v.a.createElement("main",{className:"mdl-layout__content"},v.a.createElement("div",i()({},this.props,{className:b()(C.a.content,this.props.className)})),v.a.createElement(g.a,null))))}}]),n}(v.a.Component);E.propTypes={className:f.PropTypes.string},n.a=E},668:function(e,n,a){"use strict";var t=a(92),i=a.n(t),s=a(93),r=a.n(s),o=a(94),l=a.n(o),c=a(96),u=a.n(c),m=a(95),p=a.n(m),d=a(36),h=a.n(d),f=a(280),v=function(e){function n(){return r()(this,n),u()(this,(n.__proto__||i()(n)).apply(this,arguments))}return p()(n,e),l()(n,[{key:"componentDidMount",value:function(){window.componentHandler.upgradeElement(this.root)}},{key:"componentWillUnmount",value:function(){window.componentHandler.downgradeElements(this.root)}},{key:"render",value:function(){var e=this;return h.a.createElement("nav",{className:"mdl-navigation",ref:function(n){return e.root=n}},h.a.createElement(f.a,{className:"mdl-navigation__link",to:"/"},"Home"),h.a.createElement(f.a,{className:"mdl-navigation__link",to:"/about"},"About"))}}]),n}(h.a.Component);n.a=v},669:function(e,n,a){var t,i;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function a(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t))e.push(a.apply(null,t));else if("object"===i)for(var r in t)s.call(t,r)&&t[r]&&e.push(r)}}return e.join(" ")}var s={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=a:(t=[],void 0!==(i=function(){return a}.apply(n,t))&&(e.exports=i))}()},670:function(e,n,a){n=e.exports=a(97)(!1),n.push([e.i,"._3tq9{padding:40px}._3iy7{color:#fff;text-decoration:none}@media screen and (max-width:1024px){._3-h5{display:-webkit-box;display:-ms-flexbox;display:flex}._3tq9{padding:0 16px}}",""]),n.locals={row:"_3tq9",title:"_3iy7",header:"_3-h5"}},671:function(e,n,a){n=e.exports=a(97)(!1),n.push([e.i,"._14nt{margin:0 auto;max-width:1000px;width:100%}",""]),n.locals={content:"_14nt"}},672:function(e,n,a){n=e.exports=a(97)(!1),n.push([e.i,"@media screen and (max-width:1024px){._3opI{padding:0 16px}}",""]),n.locals={content:"_3opI"}},673:function(e,n,a){var t=a(670);"string"==typeof t&&(t=[[e.i,t,""]]);a(98)(t,{});t.locals&&(e.exports=t.locals)},674:function(e,n,a){var t=a(671);"string"==typeof t&&(t=[[e.i,t,""]]);a(98)(t,{});t.locals&&(e.exports=t.locals)},675:function(e,n,a){var t=a(672);"string"==typeof t&&(t=[[e.i,t,""]]);a(98)(t,{});t.locals&&(e.exports=t.locals)},676:function(e,n){e.exports={title:"About Us",html:'<h2>Cadme comitum fecere</h2>\n<p>Lorem markdownum velis auras figuram spes solebat spectabat, cum alium,\nplenissima aratri visae herbarum in corpore silvas consumpta. Subito virgae nec\nparatae flexit et niveae repperit erat paratu cum albis steterat conclamat hic!</p>\n<p>Nocte suae ligat! <em>Si</em> nitidum pervia, illa tua, ab minimo pasci dabitur? In\nfictus concurreret pennis, illis cum accipe rogavi in et nostro cum lacertis\nhostibus ab saxo ne. Genibusque vixque; sine videt terribili lucos ipsum vobis\nresque, et suum pietatis fulvis, est velle. Semele oscula ferat frigidus mactata\nmontes, es me parari, piae.</p>\n<h2>Inflataque ait leves frigida</h2>\n<p>Letum per ipsa nostro animae, mari illuc in levi corpus aestibus excussam\ndeflentem sic cuius. Venere dedit illa cui in quo senecta artus bella inficit,\nAchaica. Videbatur crinem resonantia alto dea umida dicitur igne; meus signa\nhabet; est. Cognovit coepta: similes fugis: habuissem votivi liquida: ictus visi\nnostra me Adoni.</p>\n<h2>Laedar cum margine quoque</h2>\n<p>Quam dato ullis, acer venturi volantes! Tuam non non cursu acta hic, novem\nnutrit, in sidera viscera iam fontes tempora, omnes. Saturnius artus inquit,\nconatoque erectos lenius, carinae, ora est infamia elige per Medusaei induitur.\nQuem quem ab postquam tunc frondescere nodis capiam labique. Voluere luce\nSemeles.</p>\n<pre><code>    <span class="hljs-keyword">if</span> (delete(digital, hibernateSoft, dynamicExcelVpn) &gt; io_secondary_led /\n            <span class="hljs-number">84</span>) {\n        disk = load;\n        orientationPci.matrix_laptop(modelSsdTweet);\n    } <span class="hljs-keyword">else</span> {\n        kdeEmoticonLed.mebibyte_algorithm_domain(<span class="hljs-number">2</span>,\n                hackerCtr.rom_iso_desktop.scarewarePrimaryBankruptcy(station,\n                disk_mask_matrix, restore_crt));\n        cameraSpyware(<span class="hljs-number">4</span>, multitasking(<span class="hljs-number">-3</span>, log_dfs_controller));\n        menuCisc.swappable -= w(mount_vle_unicode, <span class="hljs-number">5</span>);\n    }\n    <span class="hljs-keyword">var</span> optic_spider = <span class="hljs-keyword">new</span><span class="hljs-type">bieFunctionThick</span>(<span class="hljs-number">-3</span>, esportsKbpsUnix);\n    <span class="hljs-keyword">var</span> dvd_ctp_resolution = dithering;\n</code></pre>\n<h2>Usus fixurus illi petunt</h2>\n<p>Domosque tune amas mihi adhuc et <em>alter per</em> suasque versavitque iners\ncrescentemque nomen verba nunc. Acervos hinc natus si habet. Et cervix imago\nquod! Arduus dolet!</p>\n<pre><code>    cpcDdrCommand.window(moodleAlpha, im, server_alpha.doubleVrmlMonochrome(\n            iosBar - -<span class="hljs-number">2</span>, white_dual, ad(<span class="hljs-number">2</span>, <span class="hljs-number">94</span>, <span class="hljs-number">83</span>)));\n    mbps_typeface_publishing.bit.host_flash_capacity(click(<span class="hljs-number">90</span>,\n            cyberspace_srgb_pup - mpeg, marketing_trackback +\n            table_plagiarism_domain));\n    syn_e = powerExtension * defragmentNntpOsd(alertOutputNode(pop,\n            pageResponsiveDrive));\n    <span class="hljs-function"><span class="hljs-keyword">method</span> -= <span class="hljs-title">switch_newsgroup_flaming</span>;</span>\n</code></pre>\n<p>Aliquid mansura arida altismunera <strong>in illi</strong>. Dignus vir pontum <em>crimen\nversabat</em> carpunt omnes rotis Canentem erant in Oebalio, et manu senecta\niungere. Prima diurnis!</p>\n'}}});