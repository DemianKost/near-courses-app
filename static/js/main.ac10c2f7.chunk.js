(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{160:function(e,t,n){},165:function(e,t){},175:function(e,t){},193:function(e,t){},223:function(e,t,n){},228:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(44),s=n.n(r),o=n(19),i=n(39),l=n(7),u=n(239),j=n(243),d=(n(160),Object({NODE_ENV:"production",PUBLIC_URL:"/near-courses-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"courses.demiankost.testnet");var b=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:d,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:d,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unknown environment '".concat(e,"'."))}},h=n(59),p=n(68),x=b("testnet");function O(){return(O=Object(i.a)(Object(o.a)().mark((function e(){var t;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.connect)(Object.assign({deps:{keyStore:new h.keyStores.BrowserLocalStorageKeyStore}},x));case 2:t=e.sent,window.walletConnection=new h.WalletConnection(t),window.accountId=window.walletConnection.getAccountId(),window.contract=new h.Contract(window.walletConnection.account(),x.contractName,{viewMethods:["getCourse","getCourses"],changeMethods:["buyCourse","setCourse","deleteCourse"]});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p.formatNearAmount,e.next=3,window.walletConnection.account().getAccountBalance();case 3:return e.t1=e.sent.total,e.abrupt("return",(0,e.t0)(e.t1,2));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){window.walletConnection.requestSignIn(x.contractName)}function w(){window.walletConnection.signOut(),window.location.reload()}var v=n(241),y=n(236),N=n(246),C=n(1),k=function(e){var t=e.address,n=e.amount,c=e.symbol,a=e.destroy;return t?Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(v.a,{children:[Object(C.jsx)(v.a.Toggle,{variant:"light",align:"end",id:"dropdown-basic",className:"d-flex align-items-center border rounded-pill py-1",children:n?Object(C.jsxs)(C.Fragment,{children:[n," ",Object(C.jsxs)("span",{className:"ms-1",children:[" ",c]})]}):Object(C.jsx)(y.a,{animation:"border",size:"sm",className:"opacity-25"})}),Object(C.jsxs)(v.a.Menu,{className:"shadow-lg border-0",children:[Object(C.jsx)(v.a.Item,{href:"https://explorer.testnet.near.org/accounts/".concat(t),target:"_blank",children:Object(C.jsxs)(N.a,{direction:"horizontal",gap:2,children:[Object(C.jsx)("i",{className:"bi bi-person-circle fs-4"}),Object(C.jsx)("span",{className:"font-monospace",children:t})]})}),Object(C.jsx)(v.a.Divider,{}),Object(C.jsxs)(v.a.Item,{as:"button",className:"d-flex align-items-center",onClick:function(){a()},children:[Object(C.jsx)("i",{className:"bi bi-box-arrow-right me-2 fs-4"}),"Disconnect"]})]})]})}):null},S=(n(223),n.p+"static/media/logo.587ff340.svg"),I=function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("div",{className:"top__wrapper",children:[Object(C.jsx)("img",{src:S,width:800}),Object(C.jsx)("h2",{className:"top__wrapper-subtitle text-white",children:"Here you can find course and buy it by NEAR!"})]})})},F=n(2),E=n(150),T=n(240),_=n(242),P=n(152),U=function(e){var t=e.save,n=Object(c.useState)(""),a=Object(l.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(""),i=Object(l.a)(o,2),u=i[0],j=i[1],d=Object(c.useState)(""),b=Object(l.a)(d,2),h=b[0],p=b[1],x=Object(c.useState)(""),O=Object(l.a)(x,2),m=O[0],f=O[1],g=Object(c.useState)(0),w=Object(l.a)(g,2),v=w[0],y=w[1],N=Object(c.useState)(!1),k=Object(l.a)(N,2),S=k[0],I=k[1],F=function(){return I(!1)};return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(E.a,{onClick:function(){return I(!0)},variant:"dark",className:"rounded-pill px-0",style:{width:"38px"},children:Object(C.jsx)("i",{className:"bi bi-plus"})}),Object(C.jsxs)(T.a,{show:S,onHide:F,centered:!0,children:[Object(C.jsx)(T.a.Header,{closeButton:!0,children:Object(C.jsx)(T.a.Title,{children:"New Product"})}),Object(C.jsx)(_.a,{children:Object(C.jsxs)(T.a.Body,{children:[Object(C.jsx)(P.a,{controlId:"inputName",label:"Product name",className:"mb-3",children:Object(C.jsx)(_.a.Control,{type:"text",onChange:function(e){s(e.target.value)},placeholder:"Enter name of product"})}),Object(C.jsx)(P.a,{controlId:"inputUrl",label:"Image URL",className:"mb-3",children:Object(C.jsx)(_.a.Control,{type:"text",placeholder:"Image URL",onChange:function(e){j(e.target.value)}})}),Object(C.jsx)(P.a,{controlId:"inputDescription",label:"Description",className:"mb-3",children:Object(C.jsx)(_.a.Control,{as:"textarea",placeholder:"description",style:{height:"80px"},onChange:function(e){p(e.target.value)}})}),Object(C.jsx)(P.a,{controlId:"inputLocation",label:"Location",className:"mb-3",children:Object(C.jsx)(_.a.Control,{type:"text",placeholder:"Tags",onChange:function(e){f(e.target.value)}})}),Object(C.jsx)(P.a,{controlId:"inputPrice",label:"Price",className:"mb-3",children:Object(C.jsx)(_.a.Control,{type:"text",placeholder:"Price",onChange:function(e){y(e.target.value)}})})]})}),Object(C.jsxs)(T.a.Footer,{children:[Object(C.jsx)(E.a,{variant:"outline-secondary",onClick:F,children:"Close"}),Object(C.jsx)(E.a,{variant:"dark",disabled:!(r&&u&&h&&m&&v),onClick:function(){t({name:r,image:u,description:h,tags:m,price:v}),F()},children:"Save product"})]})]})]})},A=n(151),R=n(245),L=n(237),B=function(e){var t=e.course,n=e.buy,c=t.id,a=t.name,r=t.description,s=t.image,o=t.tags,i=t.price,l=t.owner,u=t.sold;return Object(C.jsx)(A.a,{children:Object(C.jsxs)(R.a,{className:" h-100",children:[Object(C.jsx)(R.a.Header,{children:Object(C.jsxs)(N.a,{direction:"horizontal",gap:2,children:[Object(C.jsx)("span",{className:"font-monospace text-secondary",children:l}),Object(C.jsxs)(L.a,{bg:"secondary",className:"ms-auto",children:[u," Sold"]})]})}),Object(C.jsx)("div",{className:" ratio ratio-4x3",children:Object(C.jsx)("img",{src:s,alt:a,style:{objectFit:"cover"}})}),Object(C.jsxs)(R.a.Body,{className:"d-flex  flex-column text-center",children:[Object(C.jsx)(R.a.Title,{children:a}),Object(C.jsx)(R.a.Text,{className:"flex-grow-1 ",children:r}),Object(C.jsx)(R.a.Text,{className:"text-secondary",children:Object(C.jsx)("span",{children:o})}),Object(C.jsxs)(E.a,{variant:"outline-dark",onClick:function(){n(c,i)},className:"w-100 py-3",children:["Buy for ",h.utils.format.formatNearAmount(i)," NEAR"]})]})]})},c)},D=function(){return Object(C.jsx)("div",{className:"d-flex justify-content-center",children:Object(C.jsx)(y.a,{animation:"border",role:"status",className:"opacity-25",children:Object(C.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},H=n(238),W=n(244),M=1e14;function K(e){return z.apply(this,arguments)}function z(){return(z=Object(i.a)(Object(o.a)().mark((function e(t){var n,c;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,c=t.price,e.next=3,window.contract.buyCourse({courseId:n},M,c);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(l.a)(r,2),u=s[0],j=s[1],d=Object(c.useCallback)(Object(i.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.t0=a,e.next=5,window.contract.getCourses();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log({error:e.t2});case 12:return e.prev=12,j(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))),b=function(){var e=Object(i.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{j(!0),(n=t,n.id=Object(W.a)(),n.price=Object(p.parseNearAmount)(n.price+""),window.contract.setCourse({course:n})).then((function(e){d()})),alert("Course added successfully.")}catch(c){console.log({error:c}),alert("Failed to purchase course.")}finally{j(!1)}case 1:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(Object(o.a)().mark((function e(t,n){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K({id:t,price:n}).then((function(e){return d()}));case 3:alert("Course buy works"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert("Failed to purchase course.");case 9:return e.prev=9,j(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){d()}),[]),Object(C.jsx)(C.Fragment,{children:u?Object(C.jsx)(D,{}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[Object(C.jsx)("h1",{className:"fs-4 fw-bold mb-0",children:"Courses"}),Object(C.jsx)(U,{save:b})]}),Object(C.jsx)(H.a,{xs:1,sm:2,lg:3,className:"g-3  mb-5 g-xl-4 g-xxl-5",children:n.map((function(e){return Object(C.jsx)(B,{course:Object(F.a)({},e),buy:h})}))})]})})},q=function(e){var t=e.name,n=e.login,c=e.coverImg;return c?Object(C.jsxs)("div",{className:"d-flex justify-content-center flex-column text-center ",style:{background:"#000",minHeight:"100vh"},children:[Object(C.jsxs)("div",{className:"mt-auto text-light mb-5",children:[Object(C.jsx)("div",{className:" ratio ratio-1x1 mx-auto mb-2",style:{maxWidth:"520px"},children:Object(C.jsx)("img",{src:c,alt:""})}),Object(C.jsx)("h1",{children:t}),Object(C.jsx)("p",{children:"Please connect your wallet to continue."}),Object(C.jsx)(E.a,{onClick:n,variant:"outline-light",className:"rounded-pill px-3 mt-3",children:"Connect Wallet"})]}),Object(C.jsx)("p",{className:"mt-auto text-secondary",children:"Powered by NEAR"})]}):null};q.defaultProps={name:""};var V=q;var G=function(){var e=window.walletConnection.account(),t=Object(c.useState)("0"),n=Object(l.a)(t,2),a=n[0],r=n[1],s=Object(c.useCallback)(Object(i.a)(Object(o.a)().mark((function t(){return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.accountId){t.next=6;break}return t.t0=r,t.next=4,m();case 4:t.t1=t.sent,(0,t.t0)(t.t1);case 6:case"end":return t.stop()}}),t)}))));return Object(c.useEffect)((function(){s()}),[s]),Object(C.jsx)(C.Fragment,{children:e.accountId?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(I,{}),Object(C.jsxs)(u.a,{fluid:"md",children:[Object(C.jsx)(j.a,{className:"justify-content-end pt-3 pb-5",children:Object(C.jsx)(j.a.Item,{children:Object(C.jsx)(k,{address:e.accountId,amount:a,symbol:"NEAR",destroy:w})})}),Object(C.jsx)("main",{children:Object(C.jsx)(J,{})})]})]}):Object(C.jsx)(V,{name:"",login:g,coverImg:S})})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,247)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(229),n(226),n(227);window.nearInitPromise=function(){return O.apply(this,arguments)}().then((function(){s.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(G,{})}),document.getElementById("root"))})).catch(console.error),Q()}},[[228,1,2]]]);
//# sourceMappingURL=main.ac10c2f7.chunk.js.map