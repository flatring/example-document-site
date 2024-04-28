"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8141],{73477:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var i=t(86106),s=t(85782),l=t(84295);const r={sidebar_position:2,tags:["batch","product"]},c="import-products - \u5546\u54c1\u53d6\u8fbc",d={id:"internal/batches/import-products",title:"import-products - \u5546\u54c1\u53d6\u8fbc",description:"\u6982\u8981",source:"@site/docs/internal/batches/import-products.mdx",sourceDirName:"internal/batches",slug:"/internal/batches/import-products",permalink:"/example-document-site/docs/internal/batches/import-products",draft:!1,unlisted:!1,tags:[{label:"batch",permalink:"/example-document-site/docs/tags/batch"},{label:"product",permalink:"/example-document-site/docs/tags/product"}],version:"current",lastUpdatedBy:"hoh",lastUpdatedAt:1714320581e3,sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["batch","product"]},sidebar:"internal",previous:{title:"\u30d0\u30c3\u30c1\u4e00\u89a7",permalink:"/example-document-site/docs/internal/batches/"},next:{title:"\u753b\u9762\u5b9a\u7fa9",permalink:"/example-document-site/docs/internal/screens/"}},o={},h=[{value:"\u6982\u8981",id:"overview",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"prerequisite",level:2},{value:"\u30b5\u30a4\u30af\u30eb",id:"cycle",level:2},{value:"\u30d5\u30ed\u30fc",id:"flow",level:2},{value:"\u95a2\u6570",id:"functions",level:2},{value:"funcFileExistenceCheck - TSV\u30d5\u30a1\u30a4\u30eb\u306e\u5b58\u5728\u78ba\u8a8d",id:"funcfileexistencecheck---tsv\u30d5\u30a1\u30a4\u30eb\u306e\u5b58\u5728\u78ba\u8a8d",level:3},{value:"funcFileRead - TSV\u30d5\u30a1\u30a4\u30eb\u8aad\u8fbc",id:"funcfileread---tsv\u30d5\u30a1\u30a4\u30eb\u8aad\u8fbc",level:3},{value:"TSV\u30d5\u30a1\u30a4\u30eb\u30ab\u30e9\u30e0",id:"tsv-file-columns",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"import-products---\u5546\u54c1\u53d6\u8fbc",children:"import-products - \u5546\u54c1\u53d6\u8fbc"}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"\u6982\u8981"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5546\u54c1\u60c5\u5831\u3092TSV\u30d5\u30a1\u30a4\u30eb\u3067\u53d7\u3051\u53d6\u308a\u3001\u30c6\u30fc\u30d6\u30eb",(0,i.jsx)(n.code,{children:"product"}),"\u306b\u30ec\u30b3\u30fc\u30c9\u3092\u8ffd\u52a0\u30fb\u66f4\u65b0(upsert)\u3059\u308b"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisite",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(l.A,{}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u8aad\u8fbc\u5148\u30d5\u30a9\u30eb\u30c0\u30fc","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(l.A,{}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["TSV\u30d5\u30a1\u30a4\u30eb\u540d","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"abc-yyyymmdd-hhnn-x.tsv"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["TSV\u306emax\u884c\u6570\u306f10000\u3068\u3059\u308b","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u305d\u308c\u3088\u308a\u5927\u304d\u3044\u884c\u6570\u3060\u3063\u305f\u5834\u5408\u3001\u8b66\u544a\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u51fa\u529b\u3059\u308b"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"cycle",children:"\u30b5\u30a4\u30af\u30eb"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["cron","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"5 0 * * MON-FRI"})}),"\n",(0,i.jsx)(n.li,{children:"\u571f\u65e5\u306f\u30c7\u30fc\u30bf\u91cf\u304c\u5c11\u306a\u3044\u305f\u3081\u3001\u5b9f\u884c\u3057\u306a\u3044"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"flow",children:"\u30d5\u30ed\u30fc"}),"\n",(0,i.jsx)(n.admonition,{title:"info",type:"info",children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u8a2d\u8a08\u306f\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u56f3\u3067\u306f\u306a\u304f\u3001\u30b7\u30fc\u30b1\u30f3\u30b9\u56f3\u304c\u30aa\u30b9\u30b9\u30e1"}),"\n",(0,i.jsx)(n.li,{children:"\u5404\u30d5\u30a7\u30fc\u30ba\u3054\u3068\u306e\u30a8\u30e9\u30fc\u51e6\u7406\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u5185\u5bb9\u306f\u660e\u78ba\u306b\u3059\u308b"}),"\n"]})}),"\n",(0,i.jsx)(n.img,{src:"https://www.plantuml.com/plantuml/png/ROz1QyCm38Nl_XKQE-oK-bvAQRnIwBLZst6eZjAQod9cozlV7ycoqi8kWiVxtfEqAOfPQsJp10yTzK48QcGugmvbQMt6xyKfwBaUQw7iaoY9BdoAjcVK7EHa1qOP6vgY93vmiH63Z7r1FDTkAhG-SSg5r2PFACsHAot2lFTVxgDSWWoOCPOhE6GyHOHQw8so1e-yxo7rlJ43ZZeCA0glXR8P1pHhQ9UmJUyfNmnw3L-e12qyxdREEMS0sfdPYr8MPF38R01kuItcomjoJ680veXRmce5FXCg7UYpKb5OhoV_6dMJ173G_2wPmUSfrKrkHtVuZMp_hXi_6PyGCdVsXgIhaNy0"}),"\n",(0,i.jsx)(n.h2,{id:"functions",children:"\u95a2\u6570"}),"\n",(0,i.jsx)(n.h3,{id:"funcfileexistencecheck---tsv\u30d5\u30a1\u30a4\u30eb\u306e\u5b58\u5728\u78ba\u8a8d",children:"funcFileExistenceCheck - TSV\u30d5\u30a1\u30a4\u30eb\u306e\u5b58\u5728\u78ba\u8a8d"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(l.A,{}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"funcfileread---tsv\u30d5\u30a1\u30a4\u30eb\u8aad\u8fbc",children:"funcFileRead - TSV\u30d5\u30a1\u30a4\u30eb\u8aad\u8fbc"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(l.A,{}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"tsv-file-columns",children:"TSV\u30d5\u30a1\u30a4\u30eb\u30ab\u30e9\u30e0"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"#"}),(0,i.jsx)(n.th,{children:"Header"}),(0,i.jsx)(n.th,{children:"Logical name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"right"},children:"Digit"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"1"}),(0,i.jsx)(n.td,{children:"id"}),(0,i.jsx)(n.td,{children:"ID"}),(0,i.jsx)(n.td,{children:"integer"}),(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"-"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"2"}),(0,i.jsx)(n.td,{children:"name"}),(0,i.jsx)(n.td,{children:"\u540d\u524d"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"255"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"3"}),(0,i.jsx)(n.td,{children:"is_member"}),(0,i.jsx)(n.td,{children:"is\u4f1a\u54e1"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"-"}),(0,i.jsxs)(n.td,{children:["true:\u4f1a\u54e1",(0,i.jsx)("br",{}),"false:\u975e\u4f1a\u54e1"]})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},84295:(e,n,t)=>{t.d(n,{A:()=>r});t(7378);var i=t(86106);function s(e){const[n,t,i]=function(e){let n=e;/^#/.test(n)&&(n=n.slice(1));if(![3,6].includes(n.length))throw new Error(`Invalid hex string. digit are 3 or 6. hex=${n}`);3===n.length&&(n=n.replace(/(.)/g,"$1$1"));if(!/^[0-9A-Fa-f]{6}$/.test(n))throw new Error(`Invalid hex string. not hex number. hex=${n}`);const t=n.match(/../g);if(!t)throw new Error(`Invalid hex string. unknown. hex=${n}`);return[parseInt(t[0],16),parseInt(t[1],16),parseInt(t[2],16)]}(e);return(299*n+587*t+114*i)/1e3<120?"#FFF":"#000"}const l=function(e){let{children:n,color:t}=e;return(0,i.jsx)("span",{style:{backgroundColor:t,borderRadius:"0.5rem",color:s(t),padding:"0.2rem"},children:n})};const r=function(){return(0,i.jsx)(l,{color:"#1877F2",children:"TBD"})}},85782:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(7378);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);