(this["webpackJsonptehtavat2.6-2.10"]=this["webpackJsonptehtavat2.6-2.10"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(16),a=n.n(c),r=n(17),u=n(3),o=n(1),s=n(0),i=function(e){var t=e.personsToShow,n=e.handleDelete;return Object(s.jsx)("div",{children:t.map((function(e){return Object(s.jsxs)("p",{children:[e.name," ",e.number,Object(s.jsx)("button",{onClick:function(){return n(e.id,e)},children:"delete"})]},e.name)}))})},d=function(e){var t=e.visibilityHandler,n=e.searchValue;return Object(s.jsxs)("div",{children:["filter shown with ",Object(s.jsx)("input",{onChange:t,value:n})]})},l=function(e){var t=e.message,n=e.type;return null===t?null:Object(s.jsx)("div",{className:n,children:t})},h=function(e){var t=e.addPerson,n=e.handleNameInput,c=e.handleNumberInput,a=e.newName,r=e.newNumber;return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{onSubmit:t,children:[Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{onChange:n,value:a})]}),Object(s.jsxs)("div",{children:["number: ",Object(s.jsx)("input",{onChange:c,value:r})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})})},b=n(5),j=n.n(b),f="https://tesa-fso-2021.herokuapp.com/api/persons",m={getAll:function(){return j.a.get(f).then((function(e){return e.data}))},create:function(e){return j.a.post(f,e).then((function(e){return e.data}))},del:function(e){return j.a.delete("".concat(f,"/").concat(e)).then((function(e){return e}))},replace:function(e,t){return j.a.put("".concat(f,"/").concat(t),e).then((function(e){return e}))}},O=(n(41),function(){var e=Object(o.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(o.useState)(""),b=Object(u.a)(a,2),j=b[0],f=b[1],O=Object(o.useState)(""),p=Object(u.a)(O,2),v=p[0],w=p[1],x=Object(o.useState)(""),y=Object(u.a)(x,2),g=y[0],N=y[1],S=Object(o.useState)(null),k=Object(u.a)(S,2),C=k[0],I=k[1],D=Object(o.useState)("error"),T=Object(u.a)(D,2),P=T[0],A=T[1];Object(o.useEffect)((function(){m.getAll().then((function(e){c(e)}))}),[]);var E=function(e){A("".concat(e,"In")),setTimeout((function(){A("".concat(e,"Out"))}),3e3),setTimeout((function(){I(null)}),3500)},H=n.filter((function(e){return e.name.toLowerCase().includes(g.toLowerCase())})),J=""===g||H===[]?n:H;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(l,{message:C,type:P}),Object(s.jsx)(d,{visibilityHandler:function(e){N(e.target.value)},searchValue:g}),Object(s.jsx)("h3",{children:"add a new"}),Object(s.jsx)(h,{addPerson:function(e){e.preventDefault();var t={name:j,number:v},a=n.find((function(e){return e.name===t.name}));a?window.confirm("".concat(j," is already added to the phonebook, replace the old number with the new one?"))&&m.replace(t,a.id).then((function(e){if(200===e.status){var u=Object(r.a)(n);t.id=a.id,u[a.id-1]=t,c(u),f(""),w(""),I("".concat(t.name," was succesfully changed")),E("success")}})).catch((function(){I("".concat(j," has already been deleted from server and the phonebook was updated")),E("error");var e=n.filter((function(e){return e.name!==j}));c(e),f(""),w("")})):m.create(t).then((function(e){c(n.concat(e)),f(""),w(""),I("".concat(e.name," was succesfully added")),E("success")}))},handleNameInput:function(e){f(e.target.value)},handleNumberInput:function(e){w(e.target.value)},newName:j,newNumber:v}),Object(s.jsx)("h3",{children:"Numbers"}),Object(s.jsx)(i,{personsToShow:J,handleDelete:function(e,t){if(window.confirm("Do you really want to delete ".concat(t.name,"?"))){var a=m.del(t.id);a.then((function(e){if(200===e.status|204===e.status){var a=n.filter((function(e){return e.name!==t.name}));c(a),I("".concat(t.name," was succesfully deleted")),E("success")}})),a.catch((function(){I("".concat(t.name," has already been deleted from server and the phonebook was updated")),E("error");var e=n.filter((function(e){return e.name!==t.name}));c(e)}))}}})]})});a.a.render(Object(s.jsx)(O,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.692b0d4d.chunk.js.map