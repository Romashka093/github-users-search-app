(this["webpackJsonpgithub-users-search-app"]=this["webpackJsonpgithub-users-search-app"]||[]).push([[0],{40:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),s=c(9),a=c.n(s),i=c(28),o=c(7),l=(c(40),c(0));var u=function(){return Object(l.jsx)("footer",{className:"Footer",children:Object(l.jsx)("div",{className:"Footer__wrap",children:Object(l.jsxs)("p",{className:"Footer__wrap-content",children:["Created by"," ",Object(l.jsx)("span",{className:"Footer__wrap-content-spanning",children:"Anna Romashchenko"})]})})})},j=c.p+"static/media/GitHub.4cc7cf2e.svg";c(42);var h=function(){return Object(l.jsxs)("header",{className:"Header",children:[Object(l.jsxs)("div",{className:"Header__content",children:[Object(l.jsx)("h1",{className:"Header__content-logo",children:Object(l.jsx)("img",{className:"Header__content-logo-img",src:j,alt:"logo app",width:"46",height:"46"})}),Object(l.jsxs)("div",{className:"Header__content-name",children:[Object(l.jsx)("h2",{className:"Header__content-name-title",children:"requestum"}),Object(l.jsx)("p",{className:"Header__content-name-kind",children:"web development company"})]})]}),Object(l.jsx)("div",{className:"Header__description",children:"Github users search app"})]})};c(43);var d=function(e){var t=e.item,c=t.language,r=t.name,n=t.description;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("li",{className:"ResultItem",children:[Object(l.jsx)("h3",{className:"ResultItem__heading",children:r}),Object(l.jsxs)("p",{className:"ResultItem__language",children:["Language:"," ",Object(l.jsx)("span",{className:"ResultItem__language-data",children:c||null})]}),Object(l.jsxs)("p",{className:"ResultItem__description",children:["Description:"," ",Object(l.jsx)("span",{className:"ResultItem__description-data",children:n||null})]})]})})};c(44);var b=Object(o.b)((function(e){return{items:e.data.repositories,isLoading:e.data.loading,error:e.data.error}}))((function(e){var t=e.items,c=(e.isLoading,e.error);return Object(l.jsx)(l.Fragment,{children:null===c?Object(l.jsx)(l.Fragment,{children:t.length>0?Object(l.jsxs)("section",{className:"ResultSection",children:[Object(l.jsx)("h2",{className:"ResultSection__heading",children:"Here is your result"}),Object(l.jsx)("ul",{className:"ResultSection__list",children:t.map((function(e){return Object(l.jsx)(d,{item:e},e.id)}))})]}):Object(l.jsx)(l.Fragment,{})}):Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("section",{className:"ResultSection",children:[Object(l.jsx)("h2",{className:"ResultSection__heading",children:c.statusCode}),Object(l.jsx)("p",{className:"ResultSection__error",children:c.text})]})})})})),m=c(29),O=c.n(m),g=c(2),p={searchValue:Object(g.b)("searcher/changeValue"),searchHistory:Object(g.b)("searcher/createHistory")},f=c(14),x=c.n(f),_=c(30),y=c(15),N=c.n(y),v=Object(g.b)("items/createItemsRequest"),H=Object(g.b)("items/createItemsSuccess"),S=Object(g.b)("items/createItemsError");N.a.defaults.baseURL="https://api.github.com/";var F=function(e){return function(){var t=Object(_.a)(x.a.mark((function t(c){var r,n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(v()),t.prev=1,t.next=4,N.a.get("search/repositories?q=".concat(e,"{&page,per_page,sort,order}"));case 4:r=t.sent,n=r.data,c(H(n.items)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),c(S(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()};c(74);var R=Object(o.b)((function(e){return{history:(t=e.search.history,t.length>4?t.slice(-5):t)};var t}),(function(e){return{getItems:function(t){return e(F(t))}}}))((function(e){var t=e.history,c=e.getItems;return Object(r.useEffect)((function(){return c(t.length>0?t[t.length-1]:""),function(){c(t.length>0?t[t.length-1]:"")}})),Object(l.jsx)(l.Fragment,{children:0===t.length?Object(l.jsx)(l.Fragment,{}):Object(l.jsxs)("div",{className:"Histoty",children:[Object(l.jsx)("h3",{className:"Histoty__title",children:"Search history:"}),Object(l.jsx)("ul",{className:"Histoty__list",onClick:function(e){return c(e.target.textContent)},children:t.map((function(e,t){return Object(l.jsx)("li",{className:"Histoty__list-item",children:e},t)}))})]})})})),C=c(8),I=c.n(C);c(75);function q(e){var t=e.query,c=e.onChangeSearchValue,r=e.onAddHistory,n=O()(c,500);return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("section",{className:"Searcher",children:[Object(l.jsx)("h2",{className:"Searcher__heading",children:"Here you can find any repositories from github"}),Object(l.jsxs)("form",{className:"Searcher__form",action:"",method:"GET",onSubmit:function(e){return r(t,e.preventDefault())},children:[Object(l.jsxs)("label",{htmlFor:"search",className:"Searcher__form-label",children:["Search here:"," "]}),Object(l.jsx)("input",{className:"Searcher__form-input",onChange:n,type:"search",id:"search",placeholder:"Type here..."})]}),Object(l.jsx)(R,{})]})})}q.protoTypes={query:I.a.string,onChangeSearchValue:I.a.func.isRequired,onAddHistory:I.a.func.isRequired};var k=Object(o.b)((function(e){return{query:e.search.query}}),(function(e){return{onChangeSearchValue:function(t){return e(p.searchValue(t.target.value))},onAddHistory:function(t){return e(p.searchHistory(t))}}}))(q);var w,L=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(h,{}),Object(l.jsxs)("main",{className:"main",children:[Object(l.jsx)(k,{}),Object(l.jsx)(b,{})]}),Object(l.jsx)(u,{})]})},V=c(10),T=c(5),A=c(3),E=Object(g.c)("",Object(T.a)({},p.searchValue,(function(e,t){return t.payload}))),D=Object(g.c)([],Object(T.a)({},p.searchHistory,(function(e,t){var c=t.payload;return[].concat(Object(V.a)(e),[c])}))),G=Object(A.b)({query:E,history:D}),B=Object(g.c)([],Object(T.a)({},H,(function(e,t){return t.payload}))),J=Object(g.c)(!1,(w={},Object(T.a)(w,v,(function(){return!0})),Object(T.a)(w,H,(function(){return!1})),Object(T.a)(w,S,(function(){return!1})),w)),P=Object(g.c)(null,Object(T.a)({},S,(function(e,t){var c=t.payload;return{text:c.message,statusCode:c.response.status}}))),z=Object(A.b)({repositories:B,loading:J,error:P}),M=c(31),U=c.n(M),K=c(32),Q=c.n(K),W=c(6),X=[].concat(Object(V.a)(Object(g.d)({serializableCheck:{ignoredActions:[W.a,W.f,W.b,W.c,W.d,W.e]}})),[Q.a]),Y={key:"githubRepositoriesSearchHistory",storage:U.a,blacklist:["query"]},Z=Object(g.a)({reducer:{search:Object(W.g)(Y,G),data:z},middleware:X,devTools:!1}),$={store:Z,persistor:Object(W.h)(Z)},ee=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,80)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),r(e),n(e),s(e),a(e)}))};c(78);a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(o.a,{store:$.store,children:Object(l.jsx)(i.a,{loading:"Loading...",persistor:$.persistor,children:Object(l.jsx)(L,{})})})}),document.getElementById("root")),ee()}},[[79,1,2]]]);
//# sourceMappingURL=main.ce909f7e.chunk.js.map