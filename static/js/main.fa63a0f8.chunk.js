(window.webpackJsonppipeclone=window.webpackJsonppipeclone||[]).push([[0],{39:function(e,n,t){e.exports=t(50)},50:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(28),c=t.n(o),i=t(17),l=t(35),s=t(4),d=t(5);function u(){var e=Object(s.a)(["\n    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');\n\n    * {\n        margin: 0;\n        padding: 0;\n        outline: 0;\n        box-sizing: border-box;\n    }\n\n    html, body, #root {\n        height: 100%;\n    }\n\n    body {\n        font: 14px 'Roboto', sans-serif;\n        background: #ecf1f8;\n        color: #333;\n        -webkit-font-smoothing: antialiased !important;\n    }\n\n    ul {\n        list-style: none;\n    }\n"]);return u=function(){return e},e}var p=Object(d.a)(u());function b(){var e=Object(s.a)(["\n  height: auto;\n  padding: 0 30px;\n  background: #7159c1;\n  color: #fff;\n\n  display: flex;\n  align-items: center;\n"]);return b=function(){return e},e}var m=d.c.div(b());function f(){return r.a.createElement(m,null,r.a.createElement("h1",{className:"py-2 mt-1"},"Piperfy Clone"))}var g=t(14),x=t(10),h=t(9);function v(){var e=Object(s.a)(["\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    div {\n        width: 100%;\n        max-width: 300px;\n        display: flex;\n        flex-direction: column;\n    }\n\n    label {\n        color: #666;\n        font-size: 16px;\n    }\n\n    input {\n        margin-top: 20px;\n        border: 1px solid #ddd;\n        border-radius: 4px;\n        height: 48px;\n        padding: 0 20px;\n        font-size: 16px;\n        color: #666;\n    }\n\n    input::placeholder {\n        color: #999;\n    }\n\n    .botoes {\n        display: inline-block;\n        padding-top: 5px;\n    }\n  \n"]);return v=function(){return e},e}var y=d.c.div(v());function E(){var e=Object(a.useState)(""),n=Object(h.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),i=Object(h.a)(c,2),l=(i[0],i[1],JSON.stringify({title:"Fazendo",creatable:!0,cards:[{content:"Bruno Alc\xe2ntara",labels:["#7159c1"],user:"https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png"}]}));JSON.parse(l);return localStorage.setItem("Fazendo",l),r.a.createElement(y,null,r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},r.a.createElement("label",null,"T\xedtulo"),r.a.createElement("input",{type:"text",placeholder:"Texto",value:t,onChange:function(e){return o(e.target.value)}}),r.a.createElement("div",{className:"botoes"},r.a.createElement(g.b,{to:"/",className:"py-1"},r.a.createElement("button",{type:"button",className:"btn btn-secondary"},"Sair")),r.a.createElement("button",{type:"submit",className:"btn btn-primary ml-2"},"Salvar")))))}var j=t(34);var w=t(36);function O(){var e=Object(s.a)(["\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    display: inline-block;\n    background: ","\n"]);return O=function(){return e},e}function k(){var e=Object(s.a)(["\n      border: 2px dashed rgba(0, 0, 0, 0.2);\n      padding-top: 31px;\n      border-radius: 0;\n      background: transparent;\n      box-shadow: none;\n      cursor: grabbing;\n\n      p, img, header {\n        opacity: 0;\n      }\n   "]);return k=function(){return e},e}function z(){var e=Object(s.a)(["\n  position: relative;\n  background: #fff;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  padding: 15px;\n  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);\n  border-top: 20px solid rgba(230, 236, 245, 0.4);\n  cursor: grab;\n\n  header {\n    position: absolute;\n    top: -22px;\n    left: 15px;\n  }\n\n  p {\n      font-weight: 500;\n      line-height: 20px;\n  }\n\n  img {\n      width: 24px;\n      height: 24px;\n      border-radius: 2px;\n      margin-top: 5px;\n  }\n   ","\n"]);return z=function(){return e},e}var R=d.c.div(z(),function(e){return e.isDragging&&Object(d.b)(k())}),S=d.c.span(O(),function(e){return e.color}),N=Object(a.createContext)({});function C(e){var n=e.data,t=e.index,o=e.listIndex,c=Object(a.useRef)(),l=Object(a.useContext)(N).move,s=Object(i.c)({item:{type:"CARD",index:t,listIndex:o},collect:function(e){return{isDragging:e.isDragging()}}}),d=Object(h.a)(s,2),u=d[0].isDragging,p=d[1],b=Object(i.d)({accept:"CARD",hover:function(e,n){var a=e.listIndex,r=o,i=e.index,s=t;if(i!==s||a!==r){var d=c.current.getBoundingClientRect(),u=(d.bottom-d.top)/2,p=n.getClientOffset().y-d.top;i<s&&p<u||i>s&&p>u||(l(a,r,i,s),e.index=s,e.listIndex=r)}}});return p((0,Object(h.a)(b,2)[1])(c)),r.a.createElement(R,{ref:c,isDragging:u},r.a.createElement("header",null,n.labels.map(function(e){return r.a.createElement(S,{key:e,color:e})})),r.a.createElement("p",null,n.content),n.user&&r.a.createElement("img",{src:n.user,alt:""}))}function J(){var e=Object(s.a)(["\n  padding: 15px;\n  height: 100%;\n  flex: 0 0 320px;\n  opacity: ","\n\n  & + div {\n    border-left: 1px solid rgba(0, 0, 0, 0.05);\n  }\n\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 42px;\n\n    h2 {\n        font-weight: 500;\n        font-size: 16px;\n        padding: 0 10px;\n    }\n\n    button {\n        width: 32px;\n        height: 32px;\n        border-radius: 18px;\n        background: #3b5bfd;\n        border: 0;\n        cursor: pointer;\n    }\n  }\n\n  ul {\n      margin-top: 30px;\n  }\n"]);return J=function(){return e},e}var I=d.c.div(J(),function(e){return e.done?.6:1});function D(e){var n=e.data,t=e.index;return r.a.createElement(I,{done:n.done},r.a.createElement("header",null,r.a.createElement("h2",null,n.title),n.creatable&&r.a.createElement(g.b,{to:"/adicionar"},r.a.createElement("button",{type:"button"},r.a.createElement(w.a,{size:24,color:"#fff"})))),r.a.createElement("ul",null,n.cards.map(function(e,n){return r.a.createElement(C,{key:e.id,listIndex:t,index:n,data:e})})))}function G(){var e=Object(s.a)(["\n  display: flex;\n  padding: 10px 0;\n  height: calc(100% - 80px);\n"]);return G=function(){return e},e}var A=d.c.div(G()),P=[{title:"Tarefas",creatable:!0,cards:[{id:1,content:"Estudar m\xf3dulo 01 de NodeJS",labels:["#7159c1"],user:"https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png"},{id:2,content:"Criar v\xeddeo para o Youtube ensinando a recriar a interface do Pipefy",labels:["#7159c1"],user:"https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png"},{id:3,content:"Estudar m\xf3dulo 03 de React Native",labels:["#7159c1"],user:"https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png"},{id:4,content:'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',labels:["#54e1f7"],user:"https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png"},{id:5,content:"Gravar testes e deploy ReactJS",labels:["#54e1f7"],user:"https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png"}]},{title:"Fazendo",creatable:!1,cards:[{id:6,content:"Recriando clone do Pipefy",labels:[],user:"https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png"}]},{title:"Pausado",creatable:!1,cards:[{id:7,content:"Gravar sobre Geolocaliza\xe7\xe3o e mapas com React Native",labels:["#7159c1"],user:"https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png"},{id:8,content:"Gravar testes e deploy ReactJS",labels:["#54e1f7"],user:"https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png"},{id:9,content:"Ajustes na biblioteca unform",labels:[]}]},{title:"Conclu\xeddo",creatable:!1,done:!0,cards:[{id:10,content:"Gravar aula sobre deploy e CI com React Native",labels:[]},{id:12,content:"Gravar testes e deploy ReactJS",labels:["#54e1f7"]},{id:13,content:'Gravar Aula "Internacionaliza\xe7\xe3o de aplica\xe7\xf5es Node.js, ReactJS e React Native"',labels:["#7159c1"]}]}];function B(){var e=Object(a.useState)(P),n=Object(h.a)(e,2),t=n[0],o=n[1];return r.a.createElement(N.Provider,{value:{lists:t,move:function(e,n,a,r){o(Object(j.a)(t,function(t){var o=t[e].cards[a];t[e].cards.splice(a,1),t[n].cards.splice(r,0,o)}))}}},r.a.createElement(A,null,t.map(function(e,n){return r.a.createElement(D,{key:e.title,index:n,data:e})})))}function F(){return r.a.createElement(g.a,null,r.a.createElement(x.a,{path:"/",exact:!0,component:B}),r.a.createElement(x.a,{path:"/adicionar",component:E}))}var T=function(){return r.a.createElement(i.b,{backend:l.a},r.a.createElement(f,null),r.a.createElement(F,null),r.a.createElement(p,null))};c.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.fa63a0f8.chunk.js.map