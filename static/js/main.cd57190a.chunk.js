(this["webpackJsonpmonster-rolodex"]=this["webpackJsonpmonster-rolodex"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(3),o=n.n(s),a=(n(12),n(4)),i=n(5),u=n(7),l=n(6),h=(n(13),n(0)),d=function(e){return Object(h.jsxs)("div",{className:"card-container",children:[Object(h.jsx)("img",{alt:"monster-image",src:"https://robohash.org/".concat(e.monster.id,"?set=set2")}),Object(h.jsx)("h3",{children:e.monster.name}),Object(h.jsx)("p",{children:e.monster.email})]})},j=(n(15),function(e){return Object(h.jsx)("div",{className:"card-list",children:e.monster.map((function(e){return Object(h.jsx)(d,{monster:e},e.id)}))})}),m=(n(16),function(e){return Object(h.jsx)("input",{className:"search",type:"search",placeholder:e.placeholder,onChange:e.handelChange})}),f=(n(17),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={monster:[],searchFilter:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monster:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monster,r=t.searchFilter,c=n.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return console.log(c),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Monster Rolodex"}),Object(h.jsx)(m,{placeholder:"search monster",handelChange:function(t){return e.setState({searchFilter:t.target.value})}}),Object(h.jsx)(j,{monster:c})]})}}]),n}(r.Component)),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.cd57190a.chunk.js.map