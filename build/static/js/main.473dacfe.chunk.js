(this["webpackJsonpreact-shopping-list"]=this["webpackJsonpreact-shopping-list"]||[]).push([[0],{38:function(e,t,n){e.exports=n(51)},43:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),i=n.n(c),l=(n(43),n(6)),o=n(7),u=n(9),s=n(8),m=(n(44),n(30)),p=n(35),f=n(31),E=n(36),d=n(20),h=n(13),v="SHOW_ALL",b="SHOW_COMPLETED",O="SHOW_ACTIVE",j=0;var y=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e,t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{className:"mb-5 mt-2"},r.a.createElement(f.a.Body,null,r.a.createElement(E.a,{onSubmit:function(n){var a;(n.preventDefault(),e.value.trim())&&(t.props.dispatch((a=e.value,{type:"ADD_ITEM",id:j++,text:a})),e.value="")}},r.a.createElement("input",{ref:function(t){e=t}}),r.a.createElement(d.a,{className:"ml-5",type:"submit"},"Add Item ")))))}}]),n}(r.a.Component),g=Object(h.b)()(y),I=n(17),k=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a.Item,null,r.a.createElement(I.a.Link,{eventKey:this.props.children,onClick:this.props.onClick,disabled:this.props.active},this.props.children)))}}]),n}(r.a.Component);var C=Object(h.b)((function(e,t){return{active:t.filter===e.visibilityFilter}}),(function(e,t){return{onClick:function(){e({type:"SET_VISIBILITY_FILTER",filter:t.filter})}}}))(k),T=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{variant:"tabs",defaultActiveKey:"All"},r.a.createElement(C,{filter:v},"All"),r.a.createElement(C,{filter:O},"To Complete"),r.a.createElement(C,{filter:b},"To complete")))}}]),n}(r.a.Component),S=n(34),_=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("tr",null,r.a.createElement("td",null,this.props.id),r.a.createElement("td",null,r.a.createElement("span",{style:{textDecoration:this.props.completed?"line-through":"none"},onClick:this.props.onClick},this.props.description)),r.a.createElement("td",null,r.a.createElement(d.a,{variant:"danger",onClick:this.props.removeClick},"remove")))}}]),n}(r.a.Component),L=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null," ID"),r.a.createElement("th",null,"Item"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,this.props.items.map((function(t){return r.a.createElement(_,Object.assign({key:t.id},t,{onClick:function(){return e.props.onItemClick(t.id)},removeClick:function(){return e.props.removeClick(t.id)}}))})))))}}]),n}(r.a.Component);function w(e,t){switch(t){case"SHOW_COMPLETED":return e.filter((function(e){return e.completed}));case"SHOW_ACTIVE":return e.filter((function(e){return!e.completed}));case"SHOW_ALL":default:return e}}var A=Object(h.b)((function(e){return{items:w(e.items,e.visibilityFilter)}}),(function(e){return{onItemClick:function(t){e(function(e){return{type:"TOGGLE_ITEM",id:e}}(t))},removeClick:function(t){e(function(e){return{type:"REMOVE_ITEM ",id:e}}(t))}}}))(L),M=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{bg:"info",variant:"dark"},r.a.createElement(m.a.Brand,null,"React Shopping List")),r.a.createElement(p.a,null,r.a.createElement(g,null),r.a.createElement(T,null),r.a.createElement(A,null)))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=n(16),D=n(37);var W=Object(F.b)({visibilityFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":return[].concat(Object(D.a)(e),[{id:t.id,description:t.text,completed:!1}]);case"REMOVE_ITEM ":return e.filter((function(e,n){return t.id!==n}));case"TOGGLE_ITEM":return e.map((function(e){return e.id===t.id?Object.assign({},e,{completed:!e.completed}):e}));default:return e}}});var B=function(){var e=localStorage.getItem("state");if(e)return JSON.parse(e)}(),H=Object(F.c)(W,B);H.subscribe((function(){!function(e){var t=JSON.stringify(e);localStorage.setItem("state",t)}(H.getState())})),i.a.render(r.a.createElement(h.a,{store:H},r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.473dacfe.chunk.js.map