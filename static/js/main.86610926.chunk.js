(this["webpackJsonpnews-viewer"]=this["webpackJsonpnews-viewer"]||[]).push([[0],{65:function(n,e,t){},66:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t(0),c=t.n(a),i=t(31),o=t.n(i),l=t(2),s=t(8),d=t(9);function m(){var n=Object(s.a)(["\n  width: 100%;\n  font-family: 'IM Fell English', serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 4px black double;\n  padding: 1rem 0;\n  .title {\n    margin: 0;\n    font-size: 60px;\n    font-style: italic;\n    letter-spacing: 3px;\n  }\n  .title2 {\n    margin: 0;\n    font-size: 20px;\n    letter-spacing: 3px;\n  }\n  .today {\n    font-size: 20px;\n  }\n  @media screen and (max-width: 500px) {\n    .title {\n      font-size: 40px;\n    }\n    .title2 {\n      font-size: 15px;\n    }\n    .today {\n      font-size: 13px;\n    }\n  }\n\n"]);return m=function(){return n},n}var u=d.a.div(m()),b=new Date,h=function(){return Object(r.jsxs)(u,{children:[Object(r.jsx)("h1",{className:"title",children:"Daily Paper"}),Object(r.jsx)("h3",{className:"title2",children:"SOUTH KOREA"}),Object(r.jsx)("p",{className:"today",children:"Date: ".concat(b.getFullYear(),". ").concat(b.getMonth()+1,". ").concat(b.getDate())})]})},p=t(12);function f(){var n=Object(s.a)(["\n  font-size: 1.125rem;\n  cursor: pointer;\n  white-space: pre;\n  text-decoration: none;\n  color: inherit;\n  padding-bottom: 0.25rem;\n\n  &:hover {\n    color: #495057;\n  }\n\n  &.active {\n    font-weight: 600;\n    border-bottom: 2px solid black;\n    color: black;\n    &:hover {\n      color:color: #3bc9db;\n    }\n  }\n\n  & + & {\n    margin-left: 1rem;\n  }\n\n  @media screen and (max-width: 768px) {\n    font-size: 12px;\n    & + & {\n      margin-left: 5px;\n    }\n  }\n"]);return f=function(){return n},n}function x(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  border-bottom: 4px black double;\n  padding: 1rem;\n  width: 100%;\n  margin: 0 auto 1rem auto;\n\n  @media screen and (max-width: 768px) {\n    width: 100%;\n    overflow-x: auto;\n  }\n"]);return x=function(){return n},n}var j=[{name:"all",text:"\uc804\uccb4\ubcf4\uae30"},{name:"business",text:"\ube44\uc988\ub2c8\uc2a4"},{name:"entertainment",text:"\uc5d4\ud130\ud14c\uc778\uba3c\ud2b8"},{name:"health",text:"\uac74\uac15"},{name:"science",text:"\uacfc\ud559"},{name:"sports",text:"\uc2a4\ud3ec\uce20"},{name:"technology",text:"\ud14c\ud06c"}],g=d.a.div(x()),v=Object(d.a)(p.b)(f()),O=function(){return Object(r.jsx)(g,{children:j.map((function(n){return Object(r.jsx)(v,{activeClassName:"active",exact:"all"===n.name,to:"all"===n.name?"/":"".concat(n.name),children:n.text},n.name)}))})},y=t(19),w=t.n(y),k=t(35),N=t(20);function z(){var n=Object(s.a)(["\n  display: inline-block;\n  margin: 0 0 2rem 0;\n  padding: 0 1rem;\n  width: 100%;\n  .thumbnail {\n    img {\n      display: block;\n      width: 100%;\n      height: auto;\n      object-fit: cover;\n      filter: grayscale(100%);\n      transition: 0.2s ease-in;\n    }\n    img:hover {\n      filter: grayscale(50%);\n    }\n  }\n\n  .contents {\n    h2 {\n      margin: 1rem 0 ;\n      font-family: 'Nanum Myeongjo', serif;\n      a {\n        color: black;\n        font-weight: bold;\n        text-decoration: none;\n        &:hover {\n          color: #495057;\n        }\n      }\n    }\n    .date {\n      text-align: right;\n    }\n    .description {\n      margin: 1rem 0;\n      font-family: 'Nanum Gothic Coding', monospace;\n      line-height: 1.5;\n      margin-top: 0.5rem;\n      white-space: normal;\n      &:hover {\n        color: #495057;\n      }\n    }\n    \n  }\n\n"]);return z=function(){return n},n}var E=d.a.div(z()),M=function(n){var e=n.article,t=e.title,a=e.description,c=e.url,i=e.urlToImage,o=e.publishedAt;return Object(r.jsxs)(E,{children:[i&&Object(r.jsx)("div",{className:"thumbnail",children:Object(r.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)("img",{src:i,alt:"Thumbnail"})})}),Object(r.jsxs)("div",{className:"contents",children:[Object(r.jsx)("h2",{children:Object(r.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:t})}),Object(r.jsx)("p",{className:"date",children:o}),Object(r.jsx)("p",{className:"description",children:a})]})]})},D=t(36),I=t.n(D);function S(){var n=Object(s.a)(["\n  column-count: 2;\n  column-gap: 1em;\n  box-sizing: border-box;\n  padding-bottom: 3rem;\n  margin: 0 auto;\n  margin-top: 2rem;\n\n  .theEnd {\n    border-top: 4px double black;\n    text-align: center;\n    font-family: 'IM Fell English', serif;\n    font-style: italic;\n    padding: 1rem 0;\n  }\n\n  @media screen and (max-width: 768px) {\n    column-count: 1;\n    width: 100%;\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n"]);return S=function(){return n},n}var T=d.a.div(S()),B=function(n){var e=n.category,t=Object(a.useState)(null),c=Object(N.a)(t,2),i=c[0],o=c[1],l=Object(a.useState)(!1),s=Object(N.a)(l,2),d=s[0],m=s[1];return Object(a.useEffect)((function(){(function(){var n=Object(k.a)(w.a.mark((function n(){var t,r;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return m(!0),n.prev=1,t="all"===e?"":"&category=".concat(e),n.next=5,I.a.get("http://newsapi.org/v2/top-headlines?country=kr".concat(t,"&apiKey=fc9b588ff6524ed789b40247a05ff783"));case 5:r=n.sent,o(r.data.articles),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:m(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(){return n.apply(this,arguments)}})()()}),[e]),d?Object(r.jsx)(T,{children:"\ub300\uae30 \uc911..."}):i?Object(r.jsxs)(T,{children:[i.map((function(n){return Object(r.jsx)(M,{article:n},n.url)})),Object(r.jsx)("div",{className:"theEnd",children:"- The End -"})]}):null};function F(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  background-color: #fbf4ea;\n  .newsBorder {\n    width: 90vw;\n    max-width: 1220px;\n    border: 3px black solid;\n    margin-top: 1rem;\n  }\n  \n"]);return F=function(){return n},n}var A=d.a.div(F()),C=function(n){var e=n.match.params.category||"all";return Object(r.jsx)(A,{children:Object(r.jsxs)("div",{className:"newsBorder",children:[Object(r.jsx)(h,{}),Object(r.jsx)(O,{}),Object(r.jsx)(B,{category:e})]})})},J=function(){return Object(r.jsx)(l.a,{path:"/:category?",component:C})};t(65);o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(p.a,{children:Object(r.jsx)(J,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.86610926.chunk.js.map