(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{455:function(t,e,n){},465:function(t,e,n){"use strict";n.r(e);n(128),n(170);var r=n(1),o=n.n(r),c=n(61),i=n.n(c),u=n(42),a=(n(455),n(77));function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return e&&p(t.prototype,e),n&&p(t,n),t}function b(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var m=function(t){function e(t){var n;return s(this,e),(n=b(this,y(e).call(this,t))).state={},n}return h(e,t),l(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Go66888899999login")))}},{key:"componentWillMount",value:function(){u.a.getCaptcha({code:11}).then((function(t){}))}}]),e}(r.Component),d=(r.Component,Object(a.a)({id:"Login",stop:!1,component:m,requestApi:"getCaptcha",requestOption:{code:11},success:function(t,e,n){return e=merge(e,t)},fail:function(t,e,n){return e=merge(e,t)}})),v=n(99),g=n(48),j=n(100);i.a.render(o.a.createElement(g.a,{store:j.a},o.a.createElement(d,null)),document.getElementById("root")),v.a()},77:function(t,e,n){"use strict";var r=n(1),o=n.n(r),c=n(48),i=n(42),u=n(22),a=n(98);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(n,!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function O(t,e,n){return e&&h(t.prototype,e),n&&h(t,n),t}function m(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={id:"",stop:!1,requestApi:"",requestOption:{},component:o.a.createElement("div",null),success:function(t,e,n){return e},fail:function(t,e,n){return e}};Object.keys(t).forEach((function(n){e[n]=t[n]}));var n=function(t){function e(t){var n;return y(this,e),(n=m(this,d(e).call(this,t))).state={},n.dispatchRequest=function(){var t=n.props.setting,e=t.requestApi,r=t.requestOption,o=t.success,c=t.fail;if(!t.stop){var a=Object(u.a)({},n.state),f=Object(u.a)({},n.props);i.a[e]&&i.a[e](l({},r)).then((function(t){a.loadingStatus="success",a=o(t,a,f),n.props._setState(a),n.setState(a)})).catch((function(t){a.loadingStatus="failed",a=c({error:t},a,f),n.props._setState(a)}))}},n.initState=function(t){var e=t.state;e.path&&Object.keys(e.path).length?n.state=Object(u.a)(e.path,e.defaults):n.state=Object(u.a)(e.defaults)},n.initState(n.props),n}return v(e,t),O(e,[{key:"render",value:function(){return o.a.createElement(this.props.setting.component,s({},this.props,{state:this.state}))}},{key:"componentDidMount",value:function(){this.dispatchRequest()}},{key:"componentWillReceiveProps",value:function(t){}},{key:"componentDidUpdate",value:function(){}}]),e}(o.a.Component);return n.defaultProps={setting:e},Object(c.b)((function(t,n){return{state:t[e.id]}}),(function(t,n){return{_setState:function(n){t(Object(a.a)(e.id,n))}}}))(n)}}},[[465,2,1,0]]]);