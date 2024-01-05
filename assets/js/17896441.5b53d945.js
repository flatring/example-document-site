"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7918],{7200:(e,t,s)=>{s.r(t),s.d(t,{default:()=>pe});var a=s(959),n=s(4407),i=s(7966),l=s(1527);const o=a.createContext(null);function r(e){let{children:t,content:s}=e;const n=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(s);return(0,l.jsx)(o.Provider,{value:n,children:t})}function d(){const e=(0,a.useContext)(o);if(null===e)throw new i.i6("DocProvider");return e}function c(){const{metadata:e,frontMatter:t,assets:s}=d();return(0,l.jsx)(n.d,{title:e.title,description:e.description,keywords:t.keywords,image:s.image??t.image})}var u=s(5341),h=s(6031),m=s(8068),p=s(5409);function b(e){const{permalink:t,title:s,subLabel:a,isNext:n}=e;return(0,l.jsxs)(p.Z,{className:(0,u.Z)("pagination-nav__link",n?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,l.jsx)("div",{className:"pagination-nav__label",children:s})]})}function x(e){const{previous:t,next:s}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(b,{...t,subLabel:(0,l.jsx)(m.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,l.jsx)(b,{...s,subLabel:(0,l.jsx)(m.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function v(){const{metadata:e}=d();return(0,l.jsx)(x,{previous:e.previous,next:e.next})}var g=s(5896),j=s(5066),f=s(4908),_=s(5448),N=s(6871);const Z={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,l.jsx)(m.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,l.jsx)(m.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function k(e){const t=Z[e.versionMetadata.banner];return(0,l.jsx)(t,{...e})}function L(e){let{versionLabel:t,to:s,onClick:a}=e;return(0,l.jsx)(m.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,l.jsx)("b",{children:(0,l.jsx)(p.Z,{to:s,onClick:a,children:(0,l.jsx)(m.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function C(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:a}}=(0,g.Z)(),{pluginId:n}=(0,j.gA)({failfast:!0}),{savePreferredVersionName:i}=(0,_.J)(n),{latestDocSuggestion:o,latestVersionSuggestion:r}=(0,j.Jo)(n),d=o??(c=r).docs.find((e=>e.id===c.mainDocId));var c;return(0,l.jsxs)("div",{className:(0,u.Z)(t,f.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,l.jsx)("div",{children:(0,l.jsx)(k,{siteTitle:a,versionMetadata:s})}),(0,l.jsx)("div",{className:"margin-top--md",children:(0,l.jsx)(L,{versionLabel:r.label,to:d.path,onClick:()=>i(r.name)})})]})}function U(e){let{className:t}=e;const s=(0,N.E)();return s.banner?(0,l.jsx)(C,{className:t,versionMetadata:s}):null}function T(e){let{className:t}=e;const s=(0,N.E)();return s.badge?(0,l.jsx)("span",{className:(0,u.Z)(t,f.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(m.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}function w(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:s}=e;return(0,l.jsx)(m.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:s})})},children:" on {date}"})}function y(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(m.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function A(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:s,lastUpdatedBy:a}=e;return(0,l.jsxs)("span",{className:f.k.common.lastUpdated,children:[(0,l.jsx)(m.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&s?(0,l.jsx)(w,{lastUpdatedAt:t,formattedLastUpdatedAt:s}):"",byUser:a?(0,l.jsx)(y,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const B={iconEdit:"iconEdit_yo3h"};function M(e){let{className:t,...s}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.Z)(B.iconEdit,t),"aria-hidden":"true",...s,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function I(e){let{editUrl:t}=e;return(0,l.jsxs)(p.Z,{to:t,className:f.k.common.editThisPage,children:[(0,l.jsx)(M,{}),(0,l.jsx)(m.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var E=s(4613);const H={tags:"tags_IJS8",tag:"tag_xQpE"};function S(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(m.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,u.Z)(H.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:s}=e;return(0,l.jsx)("li",{className:H.tag,children:(0,l.jsx)(E.Z,{label:t,permalink:s})},s)}))})]})}const P={lastUpdated:"lastUpdated_aspI"};function V(e){return(0,l.jsx)("div",{className:(0,u.Z)(f.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(S,{...e})})})}function R(e){let{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:a,formattedLastUpdatedAt:n}=e;return(0,l.jsxs)("div",{className:(0,u.Z)(f.k.docs.docFooterEditMetaRow,"row"),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(I,{editUrl:t})}),(0,l.jsx)("div",{className:(0,u.Z)("col",P.lastUpdated),children:(s||a)&&(0,l.jsx)(A,{lastUpdatedAt:s,formattedLastUpdatedAt:n,lastUpdatedBy:a})})]})}function D(){const{metadata:e}=d(),{editUrl:t,lastUpdatedAt:s,formattedLastUpdatedAt:a,lastUpdatedBy:n,tags:i}=e,o=i.length>0,r=!!(t||s||n);return o||r?(0,l.jsxs)("footer",{className:(0,u.Z)(f.k.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,l.jsx)(V,{tags:i}),r&&(0,l.jsx)(R,{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n,formattedLastUpdatedAt:a})]}):null}var z=s(2768),F=s(4776);const J={tocCollapsibleButton:"tocCollapsibleButton_k4El",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_t2k4"};function O(e){let{collapsed:t,...s}=e;return(0,l.jsx)("button",{type:"button",...s,className:(0,u.Z)("clean-btn",J.tocCollapsibleButton,!t&&J.tocCollapsibleButtonExpanded,s.className),children:(0,l.jsx)(m.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const W={tocCollapsible:"tocCollapsible_je8z",tocCollapsibleContent:"tocCollapsibleContent_NZp6",tocCollapsibleExpanded:"tocCollapsibleExpanded_3zZk"};function q(e){let{toc:t,className:s,minHeadingLevel:a,maxHeadingLevel:n}=e;const{collapsed:i,toggleCollapsed:o}=(0,z.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.Z)(W.tocCollapsible,!i&&W.tocCollapsibleExpanded,s),children:[(0,l.jsx)(O,{collapsed:i,onClick:o}),(0,l.jsx)(z.z,{lazy:!0,className:W.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(F.Z,{toc:t,minHeadingLevel:a,maxHeadingLevel:n})})]})}const G={tocMobile:"tocMobile_UARY"};function Q(){const{toc:e,frontMatter:t}=d();return(0,l.jsx)(q,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(f.k.docs.docTocMobile,G.tocMobile)})}var Y=s(1292);function $(){const{toc:e,frontMatter:t}=d();return(0,l.jsx)(Y.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:f.k.docs.docTocDesktop})}var K=s(8082),X=s(6768);function ee(e){let{children:t}=e;const s=function(){const{metadata:e,frontMatter:t,contentTitle:s}=d();return t.hide_title||void 0!==s?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.Z)(f.k.docs.docMarkdown,"markdown"),children:[s&&(0,l.jsx)("header",{children:(0,l.jsx)(K.Z,{as:"h1",children:s})}),(0,l.jsx)(X.Z,{children:t})]})}var te=s(7992),se=s(5958),ae=s(2508);function ne(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const ie={breadcrumbHomeIcon:"breadcrumbHomeIcon_ZGSJ"};function le(){const e=(0,ae.Z)("/");return(0,l.jsx)("li",{className:"breadcrumbs__item",children:(0,l.jsx)(p.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,l.jsx)(ne,{className:ie.breadcrumbHomeIcon})})})}const oe={breadcrumbsContainer:"breadcrumbsContainer_CwHh"};function re(e){let{children:t,href:s,isLast:a}=e;const n="breadcrumbs__link";return a?(0,l.jsx)("span",{className:n,itemProp:"name",children:t}):s?(0,l.jsx)(p.Z,{className:n,href:s,itemProp:"item",children:(0,l.jsx)("span",{itemProp:"name",children:t})}):(0,l.jsx)("span",{className:n,children:t})}function de(e){let{children:t,active:s,index:a,addMicrodata:n}=e;return(0,l.jsxs)("li",{...n&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,l.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function ce(){const e=(0,te.s1)(),t=(0,se.Ns)();return e?(0,l.jsx)("nav",{className:(0,u.Z)(f.k.docs.docBreadcrumbs,oe.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,l.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,l.jsx)(le,{}),e.map(((t,s)=>{const a=s===e.length-1,n="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,l.jsx)(de,{active:a,index:s,addMicrodata:!!n,children:(0,l.jsx)(re,{href:n,isLast:a,children:t.label})},s)}))]})}):null}var ue=s(8836);const he={docItemContainer:"docItemContainer_fkyW",docItemCol:"docItemCol_iStE"};function me(e){let{children:t}=e;const s=function(){const{frontMatter:e,toc:t}=d(),s=(0,h.i)(),a=e.hide_table_of_contents,n=!a&&t.length>0;return{hidden:a,mobile:n?(0,l.jsx)(Q,{}):void 0,desktop:!n||"desktop"!==s&&"ssr"!==s?void 0:(0,l.jsx)($,{})}}(),{metadata:{unlisted:a}}=d();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.Z)("col",!s.hidden&&he.docItemCol),children:[a&&(0,l.jsx)(ue.Z,{}),(0,l.jsx)(U,{}),(0,l.jsxs)("div",{className:he.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(ce,{}),(0,l.jsx)(T,{}),s.mobile,(0,l.jsx)(ee,{children:t}),(0,l.jsx)(D,{})]}),(0,l.jsx)(v,{})]})]}),s.desktop&&(0,l.jsx)("div",{className:"col col--3",children:s.desktop})]})}function pe(e){const t=`docs-doc-id-${e.content.metadata.id}`,s=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(n.FG,{className:t,children:[(0,l.jsx)(c,{}),(0,l.jsx)(me,{children:(0,l.jsx)(s,{})})]})})}},4613:(e,t,s)=>{s.d(t,{Z:()=>o});s(959);var a=s(5341),n=s(5409);const i={tag:"tag_jdBa",tagRegular:"tagRegular_AHZS",tagWithCount:"tagWithCount_uAcR"};var l=s(1527);function o(e){let{permalink:t,label:s,count:o}=e;return(0,l.jsxs)(n.Z,{href:t,className:(0,a.Z)(i.tag,o?i.tagWithCount:i.tagRegular),children:[s,o&&(0,l.jsx)("span",{children:o})]})}}}]);