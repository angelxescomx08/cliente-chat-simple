(this.webpackJsonpcliente=this.webpackJsonpcliente||[]).push([[0],{104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){"use strict";c.r(t);var n,a=c(0),s=c.n(a),i=c(49),r=c.n(i),u=c(15),o=c(2),j=(c(57),c(1)),l=function(){return Object(j.jsx)("header",{className:"header",children:Object(j.jsx)("nav",{className:"nav",children:Object(j.jsx)("ul",{className:"nav-ul",children:Object(j.jsx)("li",{className:"nav-li",children:Object(j.jsx)(u.b,{to:"/",className:"link",children:"Login"})})})})})},b=c(12),O=(c(66),function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),c=t[0],n=t[1];return Object(j.jsxs)("div",{className:"container-login",children:[Object(j.jsx)("h2",{className:"tittle",children:"Login"}),Object(j.jsx)("input",{className:"input",type:"text",placeholder:"usuario",onChange:function(e){n(e.target.value)}}),Object(j.jsx)(u.b,{to:"/chat?usuario=".concat(c),children:Object(j.jsx)("button",{className:"button",type:"submit",children:"Aceptar"})})]})}),h=c(23),d=c(51),x=c.n(d),m=c(52),f=c.n(m),p=(c(104),function(e,t,c,n){e.emit("enviar",{usuario:t,destino:c,msg:n})}),v=function(e){var t=e.location,c="https://servidor-chat-simple.herokuapp.com/",s=Object(a.createRef)(),i=Object(a.useState)(),r=Object(b.a)(i,2),u=r[0],o=r[1],l=Object(a.useState)(),O=Object(b.a)(l,2),d=O[0],m=O[1],v=Object(a.useState)(),N=Object(b.a)(v,2),g=N[0],S=N[1],k=Object(a.useState)([]),y=Object(b.a)(k,2),C=y[0],E=y[1],w=Object(a.useState)([]),J=Object(b.a)(w,2),L=J[0],A=J[1];return Object(a.useEffect)((function(){n=f()(c);var e=x.a.parse(t.search).usuario;return o(e),n.emit("usuario",{usuario:e}),n.on("conectados",(function(e){A(e)})),n.on("recibir",(function(e){var t=e.usuario,c=e.msg;E((function(e){return[].concat(Object(h.a)(e),[{user:t,text:c}])}))})),function(){n.off()}}),[c,t]),Object(j.jsxs)("div",{className:"container-chat",children:[Object(j.jsxs)("h2",{className:"tittle",children:["Chat ",u]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"",children:"Usuarios conectados: "}),Object(j.jsx)("select",{name:"select",ref:s,children:L.map((function(e){return e!==u?Object(j.jsx)("option",{value:e,children:e},e):null}))}),Object(j.jsx)("div",{className:"container-mensajes",children:C.map((function(e,t){var c=e.user,n=e.text;return n.length>0?void 0!==c?Object(j.jsxs)("span",{className:"mensaje",children:[c,": ",n]},"".concat(t)):Object(j.jsxs)("span",{className:"mensaje",children:["T\xfa: ",n]},"".concat(t)):null}))}),Object(j.jsxs)("div",{className:"container-input",children:[Object(j.jsx)("input",{className:"input-mensaje",type:"text",onChange:function(e){S(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(E((function(e){return[].concat(Object(h.a)(e),[{usuario:u,text:g}])})),m(s.current.value),p(n,u,d,g))}}),Object(j.jsx)("button",{className:"button",onClick:function(){E((function(e){return[].concat(Object(h.a)(e),[{usuario:u,text:g}])})),m(s.current.value),p(n,u,d,g)},children:"Enter"})]})]})]})};c(105);var N=function(){return Object(j.jsxs)(u.a,{children:[Object(j.jsx)(l,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",children:Object(j.jsx)(O,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/chat",component:v})]})]})};c(106);r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))},57:function(e,t,c){},66:function(e,t,c){}},[[107,1,2]]]);
//# sourceMappingURL=main.20380479.chunk.js.map