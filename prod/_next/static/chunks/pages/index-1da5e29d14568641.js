(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2119:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r=n(266),a=n(7757),l=n.n(a),o=n(7294),c=n(6943),u=n(1519),i=n(6536),s=n(887),m=n(6846),d=n(8729),h=n(4211),f=n(550),g=n(7002),w=n(354),E=n(2883),k=n(9276),v=n(9802);function _(){var e=(0,o.useState)(0),t=e[0],n=e[1],a=(0,o.useState)(20),m=a[0],d=(a[1],(0,o.useState)(0)),h=d[0],f=d[1],g=(0,o.useState)([]),w=g[0],E=g[1],k=(0,o.useState)(""),v=k[0],_=k[1],x=(0,o.useState)([]),C=x[0],L=x[1];function S(){return(S=(0,r.Z)(l().mark((function e(){var t,r,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/data.json");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,E(r),L(r),console.log(r),a=Math.ceil(r.length/m),n(a);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,o.useEffect)((function(){!function(){S.apply(this,arguments)}()}),[]),o.createElement(c.Z,{w:"100vw",h:"100vh",_dark:b.dark,_light:b.light},o.createElement(c.Z,null,o.createElement(u.Z,{w:"100vw",h:"20",justifyContent:"center"},o.createElement(Z,null),o.createElement(i.II,{w:["45vw","45vw","40vw","60vw"],mx:"4",my:"auto",placeholder:"Search",value:v,onChangeText:function(e){return function(e){_(e);var t=C.filter((function(t){return t.Title.toLowerCase().includes(e.toLocaleLowerCase())}));E(t);var r=Math.ceil(t.length/m);n(r)}(e)}}),o.createElement(y,null)),o.createElement(c.Z,{w:"100vw",p:"4",h:"90vh",overflowY:"scroll"},o.createElement(u.Z,{m:"2",space:"2",h:"10",w:"72vw",mx:"auto",rounded:10,_dark:b.dark,_light:b.light,justifyContent:"space-between"},o.createElement(s.Z,{w:"30%"},"Title"),o.createElement(s.Z,{ml:"-10"},"Author"),o.createElement(s.Z,{ml:"-10"},"Pages"),o.createElement(s.Z,{ml:"-10"},"Year"),o.createElement(s.Z,null)),o.createElement(p,{currentPage:h,itemsPerPage:m,data:w}),o.createElement(P,{currentPage:h,noOfPages:t,setCurrentPage:f}))))}function y(){var e=(0,m.If)(),t=e.colorMode,n=e.toggleColorMode;return o.createElement(d.u,{label:"dark"===t?"Enable light mode":"Enable dark mode",placement:"bottom right",openDelay:300,closeOnClick:!1},o.createElement(h.Z,{onPress:n,icon:"dark"===t?o.createElement(f.N,null):o.createElement(g.k,null),accessibilityLabel:"Color Mode Switch"}))}var Z=function(){var e=["Itihas","\u0907\u0924\u093f\u0939\u093e\u0938"],t=(0,o.useState)(e[0]),n=t[0],r=t[1];return(0,o.useEffect)((function(){var t=0;setInterval((function(){r(e[t]),t=(t+1)%e.length}),2e3)}),[]),o.createElement(s.Z,{my:"auto",mx:"5",w:"40",fontSize:"4xl",fontWeight:"bold"},n)},p=function(e){var t=e.currentPage,n=e.itemsPerPage,r=e.data,a=(0,o.useState)(0),l=a[0],i=a[1];return(0,o.useEffect)((function(){i(window.innerWidth);window.addEventListener("resize",(function(){i(window.innerWidth)}))}),[t,i,l]),o.createElement(u.Z,{justifyContent:"center",h:"80%",overflow:"scroll"},o.createElement(c.Z,null,r.length>0&&Array.from(Array(n).keys()).map((function(e){return o.createElement(u.Z,{key:e},r[t*n+e]&&o.createElement(u.Z,{key:e,m:"2",space:"2",h:"20",w:"70vw",rounded:10,_dark:b.dark,_light:b.light,shadow:4},o.createElement(s.Z,{mx:"10%",my:"auto",noOfLines:3,_dark:b.dark,_light:b.light,w:"40%"},r[t*n+e].Title),o.createElement(s.Z,{my:"auto",noOfLines:2,_dark:b.dark,_light:b.light,w:"20%"},r[t*n+e].Author),o.createElement(s.Z,{my:"auto",noOfLines:2,_dark:b.dark,_light:b.light,w:"20%",px:"3"},r[t*n+e].Pages),o.createElement(s.Z,{my:"auto",noOfLines:2,_dark:b.dark,_light:b.light,w:"20%",px:"3"},r[t*n+e].Year)),r[t*n+e]&&o.createElement(w.Z,{href:"http://arweave.net/"+r[t*n+e].Link,m:"auto"},o.createElement(E.ZP,{w:"10vw",h:"50",rounded:10,_dark:b.dark,_light:b.light,shadow:4},o.createElement(s.Z,{my:"auto",mx:"auto",_dark:b.dark,_light:b.light},"Read"))))}))))},P=function(e){var t=e.currentPage,n=e.noOfPages,r=e.setCurrentPage;return o.createElement(u.Z,{mx:"auto"},o.createElement(k.z,{disabled:0===t,onPress:function(){return r(0)}},"First"),Array.from(Array(n).keys()).map((function(e){return o.createElement(v.Z,{key:e},t-e<2&&t-e>-2&&o.createElement(k.z,{w:"10",m:"2",key:e,onPress:function(){return r(e)}},e+1))})),o.createElement(k.z,{disabled:t===n-1,onPress:function(){return r(n-1)}},"Last"))},b={dark:{bg:"gray.800",color:"gray.50"},light:{bg:"gray.50",color:"gray.800"}}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2119)}])}},function(e){e.O(0,[790,888,774,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);