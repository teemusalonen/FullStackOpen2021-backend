(this["webpackJsonptehtavat2.6-2.10"]=this["webpackJsonptehtavat2.6-2.10"]||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var a=t(16),c=t.n(a),r=t(17),o=t(3),u=t(1),s=t(0),i=function(e){var n=e.personsToShow,t=e.handleDelete;return Object(s.jsx)("div",{children:n.map((function(e){return Object(s.jsxs)("p",{children:[e.name," ",e.number,Object(s.jsx)("button",{onClick:function(){return t(e.id,e)},children:"delete"})]},e.name)}))})},d=function(e){var n=e.visibilityHandler,t=e.searchValue;return Object(s.jsxs)("div",{children:["filter shown with ",Object(s.jsx)("input",{onChange:n,value:t})]})},l=function(e){var n=e.message,t=e.type;return null===n?null:Object(s.jsx)("div",{className:t,children:n})},f=function(e){var n=e.addPerson,t=e.handleNameInput,a=e.handleNumberInput,c=e.newName,r=e.newNumber;return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{onSubmit:n,children:[Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{onChange:t,value:c})]}),Object(s.jsxs)("div",{children:["number: ",Object(s.jsx)("input",{onChange:a,value:r})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})})},b=t(5),h=t.n(b),j="/api/persons",m={getAll:function(){return h.a.get(j).then((function(e){return e.data}))},create:function(e){return h.a.post(j,e).then((function(e){return e.data}))},del:function(e){return h.a.delete("".concat(j,"/").concat(e)).then((function(e){return e}))},replace:function(e,n){return h.a.put("".concat(j,"/").concat(n),e).then((function(e){return e}))}},O=(t(41),function(){var e=Object(u.useState)([]),n=Object(o.a)(e,2),t=n[0],a=n[1],c=Object(u.useState)(""),b=Object(o.a)(c,2),h=b[0],j=b[1],O=Object(u.useState)(""),p=Object(o.a)(O,2),v=p[0],x=p[1],w=Object(u.useState)(""),g=Object(o.a)(w,2),y=g[0],N=g[1],S=Object(u.useState)(null),k=Object(o.a)(S,2),C=k[0],I=k[1],D=Object(u.useState)("error"),T=Object(o.a)(D,2),P=T[0],A=T[1];Object(u.useEffect)((function(){m.getAll().then((function(e){a(e)}))}),[]);var E=function(e){A("".concat(e,"In")),setTimeout((function(){A("".concat(e,"Out"))}),3e3),setTimeout((function(){I(null)}),3500)},H=t.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())})),J=""===y||H===[]?t:H;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(l,{message:C,type:P}),Object(s.jsx)(d,{visibilityHandler:function(e){N(e.target.value)},searchValue:y}),Object(s.jsx)("h3",{children:"add a new"}),Object(s.jsx)(f,{addPerson:function(e){e.preventDefault();var n={name:h,number:v},c=t.find((function(e){return e.name===n.name}));c?window.confirm("".concat(h," is already added to the phonebook, replace the old number with the new one?"))&&m.replace(n,c.id).then((function(e){if(200===e.status||204===e.status){console.log("ollaan saatu status 200 saatana",e),n.id=e.data.id;var c=Object(r.a)(t);c[c.indexOf(t.find((function(n){return n.name===e.data.name})))]=n,console.log("personsindexof",t.indexOf(t.find((function(n){return n.name===e.data.name})))),console.log("find:",t.find((function(n){return n.name===e.data.name}))),console.log("name:",e.data.name),console.log("copy:",c),console.log("personObject.id",n.id),console.log("res.name:",e.data.name),a(c),j(""),x(""),I("".concat(n.name," was succesfully changed")),E("success")}})).catch((function(){I("".concat(h," has already been deleted from server and the phonebook was updated")),E("error");var e=t.filter((function(e){return e.name!==h}));a(e),j(""),x("")})):m.create(n).then((function(e){a(t.concat(e)),j(""),x(""),I("".concat(e.name," was succesfully added")),E("success")}))},handleNameInput:function(e){j(e.target.value)},handleNumberInput:function(e){x(e.target.value)},newName:h,newNumber:v}),Object(s.jsx)("h3",{children:"Numbers"}),Object(s.jsx)(i,{personsToShow:J,handleDelete:function(e,n){if(window.confirm("Do you really want to delete ".concat(n.name,"?"))){var c=m.del(n.id);c.then((function(e){if(200===e.status|204===e.status){var c=t.filter((function(e){return e.name!==n.name}));a(c),I("".concat(n.name," was succesfully deleted")),E("success")}})),c.catch((function(){I("".concat(n.name," has already been deleted from server and the phonebook was updated")),E("error");var e=t.filter((function(e){return e.name!==n.name}));a(e)}))}}})]})});c.a.render(Object(s.jsx)(O,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.a69b5ca7.chunk.js.map