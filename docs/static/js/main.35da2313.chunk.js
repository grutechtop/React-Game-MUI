(this.webpackJsonpleaf=this.webpackJsonpleaf||[]).push([[0],{49:function(e,a,t){e.exports=t.p+"static/media/net.0cc42fd5.png"},50:function(e,a,t){e.exports=t.p+"static/media/shovel.eb8df777.png"},51:function(e,a,t){e.exports=t.p+"static/media/fishing.e1ab5587.png"},61:function(e,a,t){e.exports=t(72)},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(7),o=t.n(i),c=t(52),l=t(111),u=t(120),m=t(114),s=t(116),f=t(117),d=Object(l.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function p(){var e=d();return r.a.createElement("div",{className:e.root},r.a.createElement(m.a,{position:"fixed"},r.a.createElement(s.a,null,r.a.createElement(f.a,{variant:"h6",className:e.title},"\ud83d\udc1d\xa0\xa0leaf"))))}var g=t(53),v=t(47),E=t(121),h=t(15),x=t(122),b=t(118),N=t(35),S=t.n(N),O=t(34),C=t.n(O),k=Object(l.a)({root:{maxWidth:400,flexGrow:1,background:"none"}});function w(e){var a=e.name,t=void 0===a?"":a,n=e.activeStep,i=void 0===n?0:n,o=e.minStep,c=void 0===o?0:o,l=e.maxStep,u=void 0===l?30:l,m=e.onValueChange,s=k(),f=Object(h.a)();return r.a.createElement(x.a,{variant:"progress",steps:u-c+1,position:"static",activeStep:i,className:s.root,nextButton:r.a.createElement(b.a,{size:"large",onClick:function(){m(t,i+1)},disabled:i>=u},"rtl"===f.direction?r.a.createElement(C.a,null):r.a.createElement(S.a,null)),backButton:r.a.createElement(b.a,{size:"large",onClick:function(){m(t,i-1)},disabled:i<=c},"rtl"===f.direction?r.a.createElement(S.a,null):r.a.createElement(C.a,null))})}t(70);var j=Object(l.a)((function(e){return{background:{background:"#fff",borderRadius:"15px",boxShadow:"0px 0px 4px rgba(0,0,0,0.2)",margin:"10px",maxWidth:"300px"},image:{margin:0,paddingTop:"10px"},name:{fontWeight:500,margin:0},value:{fontSize:"3em",fontWeight:100,padding:0,margin:0}}}));function J(e){var a=e.name,t=void 0===a?"Star Net":a,n=e.image,i=void 0===n?"":n,o=e.value,c=void 0===o?50:o,l=e.minValue,u=void 0===l?0:l,m=e.maxValue,s=void 0===m?50:m,f=e.onValueChange,d=e.onNameInputChange,p=j();return r.a.createElement("div",{className:p.container},r.a.createElement("center",null,r.a.createElement("div",{className:p.background},r.a.createElement("p",{className:p.image},r.a.createElement("img",{src:i,width:"50",height:"50"})),r.a.createElement("form",{className:p.name,noValidate:!0,autoComplete:"off"},r.a.createElement(E.a,{className:p.input,id:"standard-basic",value:t,onChange:function(e){d(e.target.value)}})),r.a.createElement("p",{className:p.value},c),r.a.createElement(w,{name:t,activeStep:c,minStep:u,maxStep:s,onValueChange:f}))))}var y=t(119),V=t(48),I=t.n(V),B=Object(l.a)((function(e){return{root:{position:"fixed",right:"15px",bottom:"15px","& > *":{margin:e.spacing(1)}},extendedIcon:{marginRight:e.spacing(1)}}}));function T(e){var a=e.onButtonClick,t=B();return r.a.createElement("div",{className:t.root},r.a.createElement(y.a,{color:"primary","aria-label":"add",onClick:a},r.a.createElement(I.a,null)))}var R=t(49),W=t.n(R),z=t(50),G=t.n(z),L=t(51),D=t.n(L),U=Object(l.a)((function(e){return{}}));var A=function(){var e=function(e){for(var a=e+"=",t=decodeURIComponent(document.cookie).split(";"),n=0;n<t.length;n++){for(var r=t[n];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(a))return r.substring(a.length,r.length)}return""}("LeafStepperItems");return e?JSON.parse(e):{}},F=function(e){!function(e,a,t){var n=new Date;n.setTime(n.getTime()+24*t*60*60*1e3);var r="expires="+n.toUTCString();document.cookie=e+"="+a+";"+r+";path=/"}("LeafStepperItems",JSON.stringify(e))};function M(e){Object(v.a)(e);U();var a=r.a.useState(A()),t=Object(g.a)(a,2),n=t[0],i=t[1],o=function(e,a){var t=JSON.parse(JSON.stringify(n));t[e]=a,i(t),F(t)},c=function(e){return r.a.createElement(J,{name:e.name,image:e.image,value:e.value,minValue:0,maxValue:30,onValueChange:o,onNameInputChange:function(a){return function(e,a){var t=!1;if(a&&!(a.length<=0)||(t=window.confirm("Do you want to delete this item?"))){var r=JSON.parse(JSON.stringify(n)),o=r[e];r[a]=o,delete r[e],t&&delete r[a],i(r),F(r)}}(e.name,a)}})},l=function(e){var a=e.toLowerCase();return a.includes("net")?W.a:a.includes("shovel")?G.a:a.includes("fish")?D.a:void 0};return r.a.createElement("div",null,r.a.createElement("div",null,Object.keys(n).sort((function(e,a){return n[a]-n[e]})).map((function(e){return c({name:e,image:l(e),value:n[e]?n[e]:0})}))),r.a.createElement("div",null,r.a.createElement(T,{onButtonClick:function(){var e=JSON.parse(JSON.stringify(n));e["New Item"]=0,i(e),F(e)}})))}var q=Object(c.a)({palette:{primary:{main:"#00ae6f",contrastText:"#fff"}}}),H=Object(l.a)((function(e){return{page:{marginTop:"80px"}}}));function K(){var e=H();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{theme:q},r.a.createElement("div",{className:e.page},r.a.createElement(M,null)),r.a.createElement(p,null)))}t(71);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.35da2313.chunk.js.map