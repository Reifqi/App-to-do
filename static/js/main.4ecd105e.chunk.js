(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(5),r=n.n(c),l=(n(18),n(3)),u=n(2);n(20);var i=function(e){var t=Object(a.useState)(e.edit?e.edit.value:""),n=Object(u.a)(t,2),c=n[0],r=n[1],l=Object(a.useRef)(null);Object(a.useEffect)(function(){l.current.focus()});var i=function(e){r(e.target.value)},d=function(t){t.preventDefault(),e.onSubmit({id:Math.floor(1e4*Math.random()),text:c}),r("")};return o.a.createElement("form",{onSubmit:d,className:"todo-form"},e.edit?o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{placeholder:"Update your item",value:c,onChange:i,name:"text",ref:l,className:"todo-input edit"}),o.a.createElement("button",{onClick:d,className:"todo-button edit"},"Update")):o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{placeholder:"Add a todo",value:c,onChange:i,name:"text",className:"todo-input",ref:l}),o.a.createElement("button",{onClick:d,className:"todo-button"},"Add todo")))},d=n(6),m=n(7),s=n(8),f=function(e){var t=e.todos,n=e.completeTodo,c=e.removeTodo,r=e.updateTodo,l=Object(a.useState)({id:null,value:""}),f=Object(u.a)(l,2),p=f[0],v=f[1];return p.id?o.a.createElement(i,{edit:p,onSubmit:function(e){r(p.id,e),v({id:null,value:""})}}):t.map(function(e,t){return o.a.createElement("div",{className:e.completed?"todo-row complete":"todo-row",key:t},e.text,o.a.createElement("div",{className:"icons"},o.a.createElement(d.a,{onClick:function(){return c(e.id)},className:"delete-icon"}),o.a.createElement(m.a,{onClick:function(){return v({id:e.id,value:e.text})},className:"edit-icon"}),o.a.createElement(s.a,{onClick:function(){return n(e.id)},className:"edit-icon"})))})};var p=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1];return o.a.createElement("div",{className:"todo-app"},o.a.createElement("h1",null,"To-do List"),o.a.createElement(i,{onSubmit:function(e){var t;if(e.text&&!/^\s*$/.test(e.text)){var a=[e].concat(Object(l.a)(n));c(a),(t=console).log.apply(t,Object(l.a)(n))}}}),o.a.createElement("hr",{className:"seperator"}),o.a.createElement(f,{updateTodo:function(e,t){t.text&&!/^\s*$/.test(t.text)&&c(function(n){return n.map(function(n){return n.id===e?t:n})})},removeTodo:function(e){var t=Object(l.a)(n).filter(function(t){return t.id!==e});c(t)},completeTodo:function(e){var t=n.map(function(t){return t.id===e&&(t.completed=!t.completed),t});c(t)},todos:n}))},v=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,23)).then(function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null))),v()},9:function(e,t,n){e.exports=n(22)}},[[9,3,2]]]);
//# sourceMappingURL=main.4ecd105e.chunk.js.map