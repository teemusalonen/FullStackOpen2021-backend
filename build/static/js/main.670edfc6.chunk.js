(this["webpackJsonptehtavat2.6-2.10"]=this["webpackJsonptehtavat2.6-2.10"]||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(16),a=t.n(c),r=t(17),u=t(3),o=t(1),i=t(0),s=function(e){var n=e.personsToShow,t=e.handleDelete;return Object(i.jsx)("div",{children:n.map((function(e){return Object(i.jsxs)("p",{children:[e.name," ",e.number,Object(i.jsx)("button",{onClick:function(){return t(e.id,e)},children:"delete"})]},e.name)}))})},d=function(e){var n=e.visibilityHandler,t=e.searchValue;return Object(i.jsxs)("div",{children:["filter shown with ",Object(i.jsx)("input",{onChange:n,value:t})]})},l=function(e){var n=e.message,t=e.type;return null===n?null:Object(i.jsx)("div",{className:t,children:n})},h=function(e){var n=e.addPerson,t=e.handleNameInput,c=e.handleNumberInput,a=e.newName,r=e.newNumber;return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{onSubmit:n,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{onChange:t,value:a})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{onChange:c,value:r})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})})},f=t(5),b=t.n(f),j="/api/persons",m={getAll:function(){return b.a.get(j).then((function(e){return e.data}))},create:function(e){return b.a.post(j,e).then((function(e){return e.data}))},del:function(e){return b.a.delete("".concat(j,"/").concat(e)).then((function(e){return e}))},replace:function(e,n){return b.a.put("".concat(j,"/").concat(n),e).then((function(e){return e}))}},O=(t(41),function(){var e=Object(o.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],a=Object(o.useState)(""),f=Object(u.a)(a,2),b=f[0],j=f[1],O=Object(o.useState)(""),v=Object(u.a)(O,2),p=v[0],w=v[1],x=Object(o.useState)(""),y=Object(u.a)(x,2),g=y[0],N=y[1],S=Object(o.useState)(null),k=Object(u.a)(S,2),C=k[0],I=k[1],D=Object(o.useState)("error"),T=Object(u.a)(D,2),P=T[0],A=T[1];Object(o.useEffect)((function(){m.getAll().then((function(e){c(e)}))}),[]);var E=function(e){A("".concat(e,"In")),setTimeout((function(){A("".concat(e,"Out"))}),3e3),setTimeout((function(){I(null)}),3500)},H=t.filter((function(e){return e.name.toLowerCase().includes(g.toLowerCase())})),J=""===g||H===[]?t:H;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(l,{message:C,type:P}),Object(i.jsx)(d,{visibilityHandler:function(e){N(e.target.value)},searchValue:g}),Object(i.jsx)("h3",{children:"add a new"}),Object(i.jsx)(h,{addPerson:function(e){e.preventDefault();var n={name:b,number:p},a=t.find((function(e){return e.name===n.name}));a?window.confirm("".concat(b," is already added to the phonebook, replace the old number with the new one?"))&&m.replace(n,a.id).then((function(e){if(200===e.status||204===e.status){n.id=e.data.id;var a=Object(r.a)(t);a[a.indexOf(t.find((function(n){return n.name===e.data.name})))]=n,c(a),j(""),w(""),I("".concat(n.name," was succesfully changed")),E("success")}})).catch((function(){I("".concat(b," has already been deleted from server and the phonebook was updated")),E("error");var e=t.filter((function(e){return e.name!==b}));c(e),j(""),w("")})):m.create(n).then((function(e){c(t.concat(e)),j(""),w(""),I("".concat(e.name," was succesfully added")),E("success")})).catch((function(e){I(e),E("error")}))},handleNameInput:function(e){j(e.target.value)},handleNumberInput:function(e){w(e.target.value)},newName:b,newNumber:p}),Object(i.jsx)("h3",{children:"Numbers"}),Object(i.jsx)(s,{personsToShow:J,handleDelete:function(e,n){if(window.confirm("Do you really want to delete ".concat(n.name,"?"))){var a=m.del(n.id);a.then((function(e){if(200===e.status|204===e.status){var a=t.filter((function(e){return e.name!==n.name}));c(a),I("".concat(n.name," was succesfully deleted")),E("success")}})),a.catch((function(){I("".concat(n.name," has already been deleted from server and the phonebook was updated")),E("error");var e=t.filter((function(e){return e.name!==n.name}));c(e)}))}}})]})});a.a.render(Object(i.jsx)(O,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.670edfc6.chunk.js.map