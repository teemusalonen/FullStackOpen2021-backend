(this["webpackJsonptehtavat2.6-2.10"]=this["webpackJsonptehtavat2.6-2.10"]||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(14),c=n.n(a),r=n(3),u=n(1),o=n(0),s=function(e){var t=e.personsToShow,n=e.handleDelete;return Object(o.jsx)("div",{children:t.map((function(e){return Object(o.jsxs)("p",{children:[e.name," ",e.number,Object(o.jsx)("button",{onClick:function(){return n(e.id,e)},children:"delete"})]},e.name)}))})},i=function(e){var t=e.visibilityHandler,n=e.searchValue;return Object(o.jsxs)("div",{children:["filter shown with ",Object(o.jsx)("input",{onChange:t,value:n})]})},l=function(e){var t=e.message,n=e.type;return null===t?null:Object(o.jsx)("div",{className:n,children:t})},d=function(e){var t=e.addPerson,n=e.handleNameInput,a=e.handleNumberInput,c=e.newName,r=e.newNumber;return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:t,children:[Object(o.jsxs)("div",{children:["name: ",Object(o.jsx)("input",{onChange:n,value:c})]}),Object(o.jsxs)("div",{children:["number: ",Object(o.jsx)("input",{onChange:a,value:r})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"submit",children:"add"})})]})})},h=n(4),b=n.n(h),j="/api/persons",f={getAll:function(){return b.a.get(j).then((function(e){return e.data}))},create:function(e){return b.a.post(j,e).then((function(e){return e.data}))},del:function(e){return b.a.delete("".concat(j,"/").concat(e)).then((function(e){return e}))},replace:function(e,t){return b.a.put("".concat(j,"/").concat(t),e).then((function(e){return e}))}},m=(n(38),function(){var e=Object(u.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(u.useState)(""),h=Object(r.a)(c,2),b=h[0],j=h[1],m=Object(u.useState)(""),O=Object(r.a)(m,2),v=O[0],p=O[1],w=Object(u.useState)(""),x=Object(r.a)(w,2),g=x[0],y=x[1],N=Object(u.useState)(null),S=Object(r.a)(N,2),k=S[0],C=S[1],I=Object(u.useState)("error"),D=Object(r.a)(I,2),T=D[0],A=D[1];Object(u.useEffect)((function(){f.getAll().then((function(e){a(e)}))}),[]);var P=function(e){A("".concat(e,"In")),setTimeout((function(){A("".concat(e,"Out"))}),3e3),setTimeout((function(){C(null)}),3500)},E=n.filter((function(e){return e.name.toLowerCase().includes(g.toLowerCase())})),H=""===g||E===[]?n:E;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Phonebook"}),Object(o.jsx)(l,{message:k,type:T}),Object(o.jsx)(i,{visibilityHandler:function(e){y(e.target.value)},searchValue:g}),Object(o.jsx)("h3",{children:"add a new"}),Object(o.jsx)(d,{addPerson:function(e){e.preventDefault();var t={name:b,number:v},c=n.find((function(e){return e.name===t.name}));c?window.confirm("".concat(b," is already added to the phonebook, replace the old number with the new one?"))&&f.replace(t,c.id).then((function(e){200!==e.status&&204!==e.status||(console.log("ollaan saatu status 200 saatana"),j(""),p(""),C("".concat(t.name," was succesfully changed")),P("success"),f.getAll().then((function(e){a(e)})))})).catch((function(){C("".concat(b," has already been deleted from server and the phonebook was updated")),P("error");var e=n.filter((function(e){return e.name!==b}));a(e),j(""),p("")})):f.create(t).then((function(e){a(n.concat(e)),j(""),p(""),C("".concat(e.name," was succesfully added")),P("success")}))},handleNameInput:function(e){j(e.target.value)},handleNumberInput:function(e){p(e.target.value)},newName:b,newNumber:v}),Object(o.jsx)("h3",{children:"Numbers"}),Object(o.jsx)(s,{personsToShow:H,handleDelete:function(e,t){if(window.confirm("Do you really want to delete ".concat(t.name,"?"))){var c=f.del(t.id);c.then((function(e){if(200===e.status|204===e.status){var c=n.filter((function(e){return e.name!==t.name}));a(c),C("".concat(t.name," was succesfully deleted")),P("success")}})),c.catch((function(){C("".concat(t.name," has already been deleted from server and the phonebook was updated")),P("error");var e=n.filter((function(e){return e.name!==t.name}));a(e)}))}}})]})});c.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.2a68c132.chunk.js.map