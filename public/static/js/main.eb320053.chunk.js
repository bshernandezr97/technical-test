(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{174:function(e,t,n){},175:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(22),i=n.n(c),r=n(7),o=n(27),s=n(62),u=n(33),l=n(3),f="[clasification] add",j="[clasification] load",b="[clasification] update",d="[clasification] delete",m="[clasification] setActive",p="[clasification] clearActive",O="[movie] add",h="[movie] load",v="[movie] update",x="[movie] delete",y="[movie] setActive",_="[movie] clearActive",g="[ui] showLoading",w="[ui] hideLoading",N="[ui] showClassificationModal",C="[ui] hideClassificationModal",k="[ui] showMovieModal",E="[ui] hideMovieModal",I={clasifications:[],active:null},M={movies:[],active:null},T={loading:!1,movieModal:!1,classificationModal:!1},S="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,A=Object(o.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{loading:!0};case w:return{loading:!1};case N:return Object(l.a)(Object(l.a)({},e),{},{classificationModal:!0});case C:return Object(l.a)(Object(l.a)({},e),{},{classificationModal:!1});case k:return Object(l.a)(Object(l.a)({},e),{},{movieModal:!0});case E:return Object(l.a)(Object(l.a)({},e),{},{movieModal:!1});default:return e}},movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(l.a)(Object(l.a)({},e),{},{movies:[t.payload].concat(Object(u.a)(e.movies))});case x:return Object(l.a)(Object(l.a)({},e),{},{movies:e.movies.filter((function(e){return e._id!==t.payload}))});case h:return console.log(t.payload),Object(l.a)(Object(l.a)({},e),{},{movies:t.payload});case v:return Object(l.a)(Object(l.a)({},e),{},{movies:e.movies.map((function(e){return e._id===t.payload._id?Object(l.a)({},t.payload):e}))});case y:return Object(l.a)(Object(l.a)({},e),{},{active:t.payload});case _:return Object(l.a)(Object(l.a)({},e),{},{active:null});default:return e}},clasification:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(l.a)(Object(l.a)({},e),{},{clasifications:[t.payload].concat(Object(u.a)(e.clasifications))});case d:return Object(l.a)(Object(l.a)({},e),{},{clasifications:e.clasifications.filter((function(e){return e._id!==t.payload}))});case j:return console.log(t.payload),Object(l.a)(Object(l.a)({},e),{},{clasifications:t.payload});case b:return Object(l.a)(Object(l.a)({},e),{},{clasifications:e.clasifications.map((function(e){return e._id===t.payload._id?Object(l.a)({},t.payload):e}))});case m:return Object(l.a)(Object(l.a)({},e),{},{active:t.payload});case p:return Object(l.a)(Object(l.a)({},e),{},{active:null});default:return e}}}),B=Object(o.d)(A,S(Object(o.a)(s.a))),D=n(25),J=n(9),L=n(6),P=n.n(L),R=n(15),Y=n(14),U=n(1),X=function(){return Object(U.jsxs)("div",{className:"nav__container",children:[Object(U.jsx)(D.b,{className:"nav__link ml-5",to:"/movies",children:" Movies "}),Object(U.jsx)(Y.a,{className:"nav__brand ml-5",icon:R.b}),Object(U.jsx)(D.b,{className:"nav__link ml-5",to:"/clasification",children:" Classification "})]})},V=n(18),q=n(19),z=n.n(q),F={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},G=n(20),H=n.n(G),K=n(8),Q=n.n(K),W=n(16),Z=function(){return{type:g}},$=function(){return{type:w}},ee=function(){return{type:N}},te=function(){return{type:k}},ne="https://technical-test-bshr.herokuapp.com/api/movie",ae=function(e){return{type:O,payload:e}},ce=function(e){return{type:x,payload:e}},ie=function(e){return{type:v,payload:e}},re=function(){return function(){var e=Object(W.a)(Q.a.mark((function e(t){var n,a;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ne);case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?t((c=a.movies,{type:h,payload:c})):P.a.fire("Information",a.message,"error");case 7:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}()},oe="https://technical-test-bshr.herokuapp.com/api/clasification",se=function(e){return{type:f,payload:e}},ue=function(e){return{type:d,payload:e}},le=function(e){return{type:b,payload:e}};z.a.setAppElement("#root");var fe=function(){var e=Object(a.useState)(""),t=Object(V.a)(e,2),n=t[0],c=t[1],i=Object(r.c)((function(e){return e.ui})).classificationModal,o=Object(r.c)((function(e){return e.clasification})).active,s=Object(a.useRef)(!1),u=Object(r.b)(),f=function(){return!H.a.isEmpty(n)||(P.a.fire("Information","Name cannot be empty","error"),!1)},j=function(){u({type:C}),u({type:p})};return Object(a.useEffect)((function(){o&&!s.current&&(s.current=!0,c(o.name))}),[o]),Object(U.jsxs)(z.a,{isOpen:i,style:F,children:[Object(U.jsx)("button",{className:"btn btn-danger btn-close-modal",onClick:j,children:"Close"}),Object(U.jsx)("div",{className:"form__title mb-5",children:"Classification"}),Object(U.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault(),f()&&(u(o?(t=Object(l.a)(Object(l.a)({},o),{},{name:n}),function(){var e=Object(W.a)(Q.a.mark((function e(n){var a,c;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Z()),e.next=3,fetch("".concat(oe,"/").concat(t._id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,n($()),c.ok?(n(le(c.clasification)),n(re()),P.a.fire("Information","Classification updated successfully","success")):P.a.fire("Information",c.message,"error");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(W.a)(Q.a.mark((function t(n){var a,c;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Z()),t.next=3,fetch(oe,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 3:return a=t.sent,t.next=6,a.json();case 6:c=t.sent,n($()),c.ok?(n(se(c.clasification)),P.a.fire("Information","Classification added successfully","success")):P.a.fire("Information",c.message,"error");case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}({name:n})),c(""),j())},className:"form__app",children:[Object(U.jsx)("label",{children:"Name:"}),Object(U.jsx)("input",{value:n,onChange:function(e){c(e.target.value)},className:"mb-5"}),Object(U.jsx)("button",{className:"btn btn-success mt-5",children:"Save"})]})]})},je=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.clasification})).clasifications,n=function(t){e(function(e){return{type:m,payload:e}}(t)),e(ee())},a=function(t){e(function(e){return function(){var t=Object(W.a)(Q.a.mark((function t(n){return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:P.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(){var t=Object(W.a)(Q.a.mark((function t(a){var c,i;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a.isConfirmed){t.next=10;break}return n(Z()),t.next=4,fetch("".concat(oe,"/").concat(e),{method:"DELETE"});case 4:return c=t.sent,t.next=7,c.json();case 7:i=t.sent,n($()),i.ok?(n(ue(e)),n(re()),P.a.fire("Information","Classification deleted successfully","success")):P.a.fire("Information",i.message,"error");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},c=t.map((function(e){return Object(U.jsxs)("tr",{children:[Object(U.jsx)("td",{children:e.name}),Object(U.jsxs)("td",{children:[Object(U.jsx)(Y.a,{onClick:function(){return n(e)},className:"table__action-primary",icon:R.a}),Object(U.jsx)(Y.a,{onClick:function(){return a(e._id)},className:"table__action-danger ml-1",icon:R.d})]})]},e._id)}));return Object(U.jsxs)("div",{className:"page__table-container",children:[Object(U.jsxs)("table",{className:"table__app",children:[Object(U.jsx)("thead",{children:Object(U.jsxs)("tr",{children:[Object(U.jsx)("th",{children:"Name"}),Object(U.jsx)("th",{children:"Actions"})]})}),Object(U.jsx)("tbody",{children:c})]}),0===t.length&&Object(U.jsx)("div",{className:"table__empty-message",children:" There are not any classification, you can add one with the bottow below "})]})},be=function(){var e=Object(r.b)();return Object(U.jsxs)("div",{children:[Object(U.jsx)(fe,{}),Object(U.jsxs)("div",{className:"page__container",children:[Object(U.jsx)(je,{}),Object(U.jsxs)("button",{onClick:function(){e(ee())},className:"btn btn-primary mt-5",children:[Object(U.jsx)(Y.a,{className:"mr-5",icon:R.c}),"Add Classification"]})]})]})},de=n(63),me=n(32),pe=["clasification"];z.a.setAppElement("#root");var Oe={name:"",director:"",clasification:""},he=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(V.a)(t,2),c=n[0],i=n[1];return[c,function(e){var t=e.target;i(Object(l.a)(Object(l.a)({},c),{},Object(me.a)({},t.name,t.value)))},function(e){i(e)},function(){i(e)}]}(Oe),t=Object(V.a)(e,3),n=t[0],c=t[1],i=t[2],o=n.name,s=n.director,u=n.clasification,f=Object(r.c)((function(e){return e.movies})).active,j=Object(a.useRef)(!1),b=Object(r.c)((function(e){return e.ui})).movieModal,d=Object(r.c)((function(e){return e.clasification})).clasifications,m=Object(r.b)(),p=function(){j.current=!1,m({type:E}),m({type:_})},O=function(){return H.a.isEmpty(o)?(P.a.fire("Information","Name cannot be empty","error"),!1):H.a.isEmpty(s)?(P.a.fire("Information","Director cannot be empty","error"),!1):!H.a.isEmpty(u)||(P.a.fire("Information","Classification cannot be empty, If there are not classification you can create one in classification menu","error"),!1)};return Object(a.useEffect)((function(){if(f&&!j.current){j.current=!0;var e=f.clasification,t=Object(de.a)(f,pe);i(Object(l.a)(Object(l.a)({},t),{},{clasification:null===e||void 0===e?void 0:e._id}))}}),[f,i]),Object(U.jsxs)(z.a,{isOpen:b,style:F,children:[Object(U.jsx)("button",{className:"btn btn-danger btn-close-modal",onClick:p,children:"Close"}),Object(U.jsx)("div",{className:"form__title mb-5",children:"Movie"}),Object(U.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault(),O()&&(m(f?(t=n,function(){var e=Object(W.a)(Q.a.mark((function e(n,a){var c,i,r,o;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Z()),c=a().clasification.clasifications,i=c.find((function(e){return e._id===t.clasification})),e.next=5,fetch("".concat(ne,"/").concat(t._id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 5:return r=e.sent,e.next=8,r.json();case 8:o=e.sent,n($()),o.ok?(n(ie(Object(l.a)(Object(l.a)({},o.movie),{},{clasification:i}))),P.a.fire("Information","Movie updated successfully","success")):P.a.fire("Information",o.message,"error");case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(W.a)(Q.a.mark((function t(n,a){var c,i,r,o;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Z()),c=a().clasification.clasifications,i=c.find((function(t){return t._id===e.clasification})),t.next=5,fetch(ne,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 5:return r=t.sent,t.next=8,r.json();case 8:o=t.sent,n($()),o.ok?(n(ae(Object(l.a)(Object(l.a)({},o.movie),{},{clasification:i}))),P.a.fire("Information","Movie added successfully","success")):P.a.fire("Information",o.message,"error");case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n)),i(Oe),p())},className:"form__app",children:[Object(U.jsx)("label",{children:"Name:"}),Object(U.jsx)("input",{value:o,name:"name",onChange:c,className:"mb-5"}),Object(U.jsx)("label",{children:"Director:"}),Object(U.jsx)("input",{value:s,name:"director",onChange:c,className:"mb-5"}),Object(U.jsx)("label",{children:"Classification:"}),Object(U.jsxs)("select",{value:u,name:"clasification",onChange:c,className:"mb-5",children:[Object(U.jsx)("option",{}),d.map((function(e){return Object(U.jsx)("option",{value:e._id,children:e.name},e._id)}))]}),Object(U.jsx)("button",{className:"btn btn-success mt-5",children:"Save"})]})]})},ve=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.movies})).movies,n=function(t){e(function(e){return{type:y,payload:e}}(t)),e(te())},a=function(t){e(function(e){return function(){var t=Object(W.a)(Q.a.mark((function t(n){return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:P.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(){var t=Object(W.a)(Q.a.mark((function t(a){var c,i;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a.isConfirmed){t.next=10;break}return n(Z()),t.next=4,fetch("".concat(ne,"/").concat(e),{method:"DELETE"});case 4:return c=t.sent,t.next=7,c.json();case 7:i=t.sent,n($()),i.ok?(n(ce(e)),P.a.fire("Information","Movie deleted successfully","success")):P.a.fire("Information",i.message,"error");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},c=null===t||void 0===t?void 0:t.map((function(e){var t;return Object(U.jsxs)("tr",{children:[Object(U.jsx)("td",{children:e.name}),Object(U.jsx)("td",{children:e.director}),Object(U.jsx)("td",{children:null===(t=e.clasification)||void 0===t?void 0:t.name}),Object(U.jsxs)("td",{children:[Object(U.jsx)(Y.a,{onClick:function(){return n(e)},className:"table__action-primary",icon:R.a}),Object(U.jsx)(Y.a,{onClick:function(){return a(e._id)},className:"table__action-danger ml-1",icon:R.d})]})]},e._id)}));return Object(U.jsxs)("div",{className:"page__table-container",children:[Object(U.jsxs)("table",{className:"table__app",children:[Object(U.jsx)("thead",{children:Object(U.jsxs)("tr",{children:[Object(U.jsx)("th",{children:"Name"}),Object(U.jsx)("th",{children:"Director"}),Object(U.jsx)("th",{children:"Classification"}),Object(U.jsx)("th",{children:"Actions"})]})}),Object(U.jsx)("tbody",{children:c})]}),0===t.length&&Object(U.jsx)("div",{className:"table__empty-message",children:" There are not any movie, you can add one with the bottow below "})]})},xe=function(){var e=Object(r.b)();return Object(U.jsxs)("div",{children:[Object(U.jsx)(he,{}),Object(U.jsxs)("div",{className:"page__container",children:[Object(U.jsx)(ve,{}),Object(U.jsxs)("button",{onClick:function(){e(te())},className:"btn btn-primary mt-5",children:[Object(U.jsx)(Y.a,{className:"mr-5",icon:R.c}),"Add Movie"]})]})]})},ye=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.ui})).loading;return Object(a.useEffect)((function(){e(function(){var e=Object(W.a)(Q.a.mark((function e(t){var n,a;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(oe);case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,console.log(a.clasifications),a.ok?t((c=a.clasifications,{type:j,payload:c})):P.a.fire("Information",a.message,"error");case 8:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}()),e(re())}),[e]),Object(a.useEffect)((function(){t&&P.a.showLoading(P.a.getDenyButton())}),[t]),Object(U.jsx)(D.a,{children:Object(U.jsxs)("div",{className:"container",children:[Object(U.jsx)(X,{}),Object(U.jsxs)(J.d,{children:[Object(U.jsx)(J.b,{exact:!0,path:"/movies",component:xe}),Object(U.jsx)(J.b,{exact:!0,path:"/clasification",component:be}),Object(U.jsx)(J.a,{to:"/movies"})]})]})})},_e=(n(174),function(){return Object(U.jsx)(r.a,{store:B,children:Object(U.jsx)(ye,{})})});i.a.render(Object(U.jsx)(_e,{}),document.getElementById("root"))}},[[175,1,2]]]);
//# sourceMappingURL=main.eb320053.chunk.js.map