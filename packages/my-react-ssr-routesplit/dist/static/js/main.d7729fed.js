!function(l){function e(e){for(var t,n,r=e[0],a=e[1],o=e[2],u=0,i=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(d,n)&&d[n]&&i.push(d[n][0]),d[n]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(l[t]=a[t]);for(m&&m(e);i.length;)i.shift()();return s.push.apply(s,o||[]),c()}function c(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==d[o]&&(r=!1)}r&&(s.splice(t--,1),e=p(p.s=n[0]))}return e}var n={},f={3:0},d={3:0},s=[];function p(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,p),t.l=!0,t.exports}p.e=function(s){var e=[];f[s]?e.push(f[s]):0!==f[s]&&{0:1}[s]&&e.push(f[s]=new Promise(function(e,r){for(var t="css/"+({0:"chunk-index",1:"chunk-list"}[s]||s)+"."+{0:"6c5587d9",1:"31d6cfe0"}[s]+".css",a=p.p+t,n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var u=(l=n[o]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===t||u===a))return e()}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){var l;if((u=(l=i[o]).getAttribute("data-href"))===t||u===a)return e()}var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.onload=e,c.onerror=function(e){var t=e&&e.target&&e.target.src||a,n=new Error("Loading CSS chunk "+s+" failed.\n("+t+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=t,delete f[s],c.parentNode.removeChild(c),r(n)},c.href=a,document.getElementsByTagName("head")[0].appendChild(c)}).then(function(){f[s]=0}));var n=d[s];if(0!==n)if(n)e.push(n[2]);else{var t=new Promise(function(e,t){n=d[s]=[e,t]});e.push(n[2]=t);var r,a=document.createElement("script");a.charset="utf-8",a.timeout=120,p.nc&&a.setAttribute("nonce",p.nc),a.src=function i(e){return p.p+"js/"+({0:"chunk-index",1:"chunk-list"}[e]||e)+"."+{0:"5bb16d39",1:"7d6ad5a7"}[e]+".js"}(s);var o=new Error;r=function(e){a.onerror=a.onload=null,clearTimeout(u);var t=d[s];if(0!==t){if(t){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;o.message="Loading chunk "+s+" failed.\n("+n+": "+r+")",o.name="ChunkLoadError",o.type=n,o.request=r,t[1](o)}d[s]=undefined}};var u=setTimeout(function(){r({type:"timeout",target:a})},12e4);a.onerror=a.onload=r,document.head.appendChild(a)}return Promise.all(e)},p.m=l,p.c=n,p.d=function(e,t,n){p.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},p.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(t,e){if(1&e&&(t=p(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(p.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)p.d(n,r,function(e){return t[e]}.bind(null,r));return n},p.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return p.d(t,"a",t),t},p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p.p="/",p.oe=function(e){throw e};var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var a=0;a<t.length;a++)e(t[a]);var m=r;s.push([26,2]),c()}({24:function(e,t){e.exports={wdsPort:9002,nodeServerPort:9001,asyncComponentKey:"__IS_ASYNC_COMP_FLAG__"}},26:function(e,t,n){e.exports=n(39)},33:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(20),u=n.n(o),i=n(21),l=n.n(i),c=n(7),s=n.n(c),f=n(8),d=n.n(f),p=n(9),m=n.n(p),h=n(10),v=n.n(h),y=n(11),g=n.n(y),b=n(12),E=(n(33),function(e){function t(e){return s()(this,t),m()(this,v()(t).call(this,e))}return g()(t,e),d()(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"layout-box"},a.a.createElement("h1",null,"koa+react+ssr"),a.a.createElement(b.b,{to:"/index",style:{marginLeft:"10px"}},"首页"),a.a.createElement(b.b,{style:{marginLeft:"10px"},to:"/list"},"列表页"),this.props.children)}}]),t}(a.a.Component)),x=n(4);function k(){return a.a.createElement("div",null,"404拉 ")}var w=function M(e){var t=e.routeList;return a.a.createElement(E,null,a.a.createElement(x.c,null,t.map(function(t){return t.initialData?a.a.createElement(x.a,{key:t.path,exact:t.exact,path:t.path,render:function(e){return e.initialData=t.initialData,a.a.createElement(t.component,e)}}):a.a.createElement(x.a,l()({key:t.path},t))}),a.a.createElement(x.a,{to:"*",component:k})))};function S(e){return a.a.createElement("div",null,"loading......")}var _=function(e){function n(e){var t;return s()(this,n),(t=m()(this,v()(n).call(this,e))).state={mod:null},t}return g()(n,e),d()(n,[{key:"componentDidMount",value:function(){this.state.mod||this.load(this.props)}},{key:"load",value:function(e){var t=this;this.setState({mod:null}),e.load().then(function(e){t.setState({mod:e["default"]?e["default"]:e})})}},{key:"render",value:function(){return this.state.mod?this.props.children(this.state.mod):a.a.createElement(S,null)}}]),n}(a.a.Component),C=n(24),O=n.n(C);var P=function B(e){function t(){return a.a.createElement(_,{load:e},function(e){return a.a.createElement(e,null)})}return t[O.a.asyncComponentKey]=!0,t};var j=[{path:["/","/index"],component:P(function(){return n.e(0).then(n.bind(null,47))}),exact:!0},{path:"/list",component:P(function(){return n.e(1).then(n.bind(null,46))}),exact:!0},{path:"*",component:function I(){return a.a.createElement("div",null,"404页面")},exact:!0}],L=n(15),A=n.n(L),D=n(25),N=n.n(D),T=a.a.createContext({});a.a.Component;!function J(){var e=JSON.parse(document.getElementById("ssrTextInitData").value),t=function(e,t){var n,r,a=!0,o=!1,u=undefined;try{for(var i,l=t[Symbol.iterator]();!(a=(i=l.next()).done);a=!0){var c=i.value;if(r=Object(x.e)(e,c)){n=c;break}}}catch(s){o=!0,u=s}finally{try{a||null==l["return"]||l["return"]()}finally{if(o)throw u}}return{targetRoute:n,targetMatch:r}}(document.location.pathname,j).targetRoute;t&&(t.initialData=e),u.a.hydrate(a.a.createElement(b.a,null,a.a.createElement(w,{routeList:j})),document.getElementById("root"))}()}});