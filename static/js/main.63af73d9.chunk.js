(this["webpackJsonpcrypto-wallet"]=this["webpackJsonpcrypto-wallet"]||[]).push([[0],{181:function(e,t,n){},354:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(21),i=n.n(a),s=(n(181),n(78)),o=n(23),u=(n(182),n(53)),b=n.n(u),j=n(80),l=n(173),d=n(69),f=n(47),O=n(174),h=function(e){return Object(O.a)(new Set(e.map((function(e){return e.currency})))).reduce((function(t,n){return Object(f.a)(Object(f.a)({},t),{},Object(d.a)({},n,e.filter((function(e){return e.currency===n}))))}),{})},p=function(){var e=Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{CAD_BTC:1716e-8,BTC_CAD:58257.33,CAD_ETH:.000233186952759646,ETH_CAD:4288.4,USD_BTC:2166e-8,BTC_USD:46164.68,USD_ETH:.000294264779448547,ETH_USD:3398.3,BTC_ETH:13.585110718652357,ETH_BTC:.07361,CAD_USD:.79,USD_CAD:1.26});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(j.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://shakepay.github.io/programming-exercise/web/transaction_history.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",h(n));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m={CAD:{name:"Dollar",iconUrl:"https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-dollar-money-currency-those-icons-lineal-color-those-icons-7.png"},BTC:{name:"Bitcoin",iconUrl:"https://img.icons8.com/office/16/000000/bitcoin.png"},ETH:{name:"Ethereum",iconUrl:"https://img.icons8.com/color/48/000000/ethereum.png"}},y=function(e){return m[e].iconUrl},C=function(e,t,n){if("CAD"===e)return Number(t).toFixed(2);if(!n["".concat(e,"_CAD")])return 0;var r=n["".concat(e,"_CAD")];return Number(t*r).toFixed(2)},g=n(12),v={loading:!0,error:!1,balances:{},total:0,transactions:{},rates:{}},T="ACTION_POPULATE_STORE",D=function(e,t){switch(t.type){case T:var n=t.payload,r=n.transactions,c=n.rates,a=Object.keys(r).reduce((function(e,t){return Object(f.a)(Object(f.a)({},e),{},Object(d.a)({},t,function(e){return(Number(e.filter((function(e){return"credit"===e.direction})).reduce((function(e,t){return Number(e)+Number(t.amount)}),0))-Number(e.filter((function(e){return"debit"===e.direction})).reduce((function(e,t){return Number(e)+Number(t.amount)}),0))).toFixed(2)}(r[t])))}),{}),i=Object.keys(a).reduce((function(e,t){return Number(e)+Number(C(t,a[t],c))}),0);return Object(f.a)(Object(f.a)({},e),{},{transactions:r,balances:a,total:i,rates:c,loading:!1});default:return Object(f.a)({},v)}},w=Object(r.createContext)(),_=function(e){var t=e.children,n=Object(r.useReducer)(D,v),c=Object(l.a)(n,2),a=c[0],i=c[1];return Object(r.useEffect)((function(){function e(){return(e=Object(j.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x();case 3:return t=e.sent,e.next=6,p();case 6:n=e.sent,i({type:T,payload:{transactions:t,rates:n}}),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(g.jsx)(w.Provider,{value:{state:a,dispatch:i},children:t})},k=n(358),A=n(166),B=n(356),S=n(357),E=n(104),U=n.n(E),N=k.a.Title,I=function(){var e=Object(r.useContext)(w).state,t=Object(o.f)(),n=e.loading,c=e.total,a=e.balances,i=e.rates;return Object(g.jsxs)(g.Fragment,{children:[n&&Object(g.jsx)(A.a,{}),!n&&Object(g.jsxs)("div",{style:{padding:"10px"},children:[Object(g.jsxs)(N,{type:"success",style:{textAlign:"center"},children:["$",c]}),Object(g.jsx)(B.a,{}),Object(g.jsx)(S.b,{itemLayout:"horizontal",dataSource:Object.keys(a),renderItem:function(e){return Object(g.jsx)(S.b.Item,{extra:a[e],onClick:function(){return t.push("/wallet?curr=".concat(e))},children:Object(g.jsx)(S.b.Item.Meta,{avatar:Object(g.jsx)(U.a,{src:y(e)}),title:e,description:"$".concat(C(e,a[e],i))})})}})]})]})},F=n(359),H=n(169),L=n.n(H);var P=function(){return new URLSearchParams(Object(o.g)().search)},M=function(){var e,t=P(),n=Object(o.f)(),c=t.get("curr"),a=Object(r.useContext)(w).state,i=a.balances,s=a.transactions;return Object(g.jsxs)("div",{style:{padding:"10px"},children:[Object(g.jsx)(L.a,{children:(e=c,m[e].name)}),Object(g.jsx)(F.a,{type:"link",onClick:function(){return n.goBack()},children:"Go Back"}),Object(g.jsxs)("h3",{children:["Balance - ",i[c]]}),Object(g.jsx)(B.a,{}),Object(g.jsx)(S.b,{itemLayout:"horizontal",dataSource:s[c],renderItem:function(e){return Object(g.jsx)(S.b.Item,{extra:e.amount,children:Object(g.jsx)(S.b.Item.Meta,{avatar:Object(g.jsx)(U.a,{src:y(c)}),title:e.type})})}})]})};var R=function(){return Object(g.jsx)(s.a,{basename:"/crypto-wallet",children:Object(g.jsx)(_,{children:Object(g.jsxs)(o.c,{children:[Object(g.jsx)(o.a,{path:"/",exact:!0,children:Object(g.jsx)(I,{})}),Object(g.jsx)(o.a,{path:"/wallet",children:Object(g.jsx)(M,{})}),Object(g.jsx)(o.a,{path:"*",children:"404"})]})})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,360)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(R,{})}),document.getElementById("root")),z()}},[[354,1,2]]]);
//# sourceMappingURL=main.63af73d9.chunk.js.map