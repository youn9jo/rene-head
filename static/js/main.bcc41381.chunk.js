(this.webpackJsonprene=this.webpackJsonprene||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(4),i=n.n(c),s=(n(9),n(3)),o=n.p+"static/media/1.95522ba4.png",u=n.p+"static/media/2.acab4988.png",l=n.p+"static/media/3.4ae16072.png",d=(n.p,n(10),n(0));var j=function(){var e,t=Object(a.useState)(!1),n=Object(s.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),j=Object(s.a)(i,2),g=j[0],m=j[1],h=Object(a.useRef)(),v=Object(a.useRef)(),b=Object(a.useRef)();return navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,g&&navigator.mediaDevices.getUserMedia({video:!1,audio:!0}).then((function(t){var n=new AudioContext,a=n.createMediaStreamSource(t),c=n.createAnalyser();if(a.connect(c),e=0,r){(function t(){var n=new Uint8Array(c.frequencyBinCount),a=0;c.getByteFrequencyData(n);for(var r=n.length,i=0;i<r;i++)a+=n[i];var s=a/r;s>10?(e+=1)<100&&e>=0?b.current.style.width=s<=15?"".concat(Math.round(s),"%"):"10%":e<300&&e>=100?(b.current.style.width=s<=30?"".concat(Math.round(s),"%"):"15%",b.current.style.width="15%",v.current.style.top="15%",v.current.style.width="35%",console.log("15")):e<500&&e>=300?(b.current.style.width=s<=50?"".concat(Math.round(s),"%"):"30%",b.current.style.width="30%",v.current.style.top="5%",v.current.style.width="25%",console.log("30")):e<700&&e>=500&&(b.current.style.animation="y-axis 3s ease-in-out",h.current.style.animation="x-axis 3s linear"):(b.current.style.width="10%",v.current.style.top="25%",v.current.style.width="47%",e=0,b.current.style.animation="none",h.current.style.animation="none"),requestAnimationFrame(t)})()}})).catch((function(e){return console.log(e)})),Object(a.useEffect)((function(){h.current?c(!0):c(!1),navigator&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?(m(!0),console.log("support")):(m(!1),console.log("not support"))}),[]),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"one",children:Object(d.jsx)("img",{src:o,alt:"one"})}),Object(d.jsx)("div",{className:"wrapper",ref:b,children:Object(d.jsxs)("div",{className:"two",ref:h,children:[Object(d.jsx)("img",{className:"head",src:u,alt:"two"}),Object(d.jsx)("img",{className:"face",ref:v,src:l,alt:"three"})]})})]})})};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.bcc41381.chunk.js.map