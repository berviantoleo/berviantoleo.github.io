"use strict";(self.webpackChunkberviantoleo_github_io=self.webpackChunkberviantoleo_github_io||[]).push([[3085],{3230:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var i=t(512),a=t(4061),s=t(5281),l=t(9047),r=t(5893);function c(e){let{className:n}=e;return(0,r.jsx)(l.Z,{type:"caution",title:(0,r.jsx)(a.cI,{}),className:(0,i.Z)(n,s.k.common.unlistedBanner),children:(0,r.jsx)(a.eU,{})})}function o(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.T$,{}),(0,r.jsx)(c,{...e})]})}},7662:(e,n,t)=>{t.d(n,{Z:()=>d});t(7294);var i=t(512),a=t(4061),s=t(5281),l=t(9047),r=t(5893);function c(e){let{className:n}=e;return(0,r.jsx)(l.Z,{type:"caution",title:(0,r.jsx)(a.ht,{}),className:(0,i.Z)(n,s.k.common.draftBanner),children:(0,r.jsx)(a.xo,{})})}var o=t(3230);function d(e){let{metadata:n}=e;const{unlisted:t,frontMatter:i}=n;return(0,r.jsxs)(r.Fragment,{children:[(t||i.unlisted)&&(0,r.jsx)(o.Z,{}),i.draft&&(0,r.jsx)(c,{})]})}},4247:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});t(7294);var i=t(512),a=t(8264),s=t(5281),l=t(6040),r=t(7395),c=t(9407),o=t(7662),d=t(7265);const m={mdxPageWrapper:"mdxPageWrapper_j9I6"};var u=t(5893);function f(e){const{content:n}=e,{metadata:t,assets:f}=n,{title:h,editUrl:v,description:x,frontMatter:g,lastUpdatedBy:p,lastUpdatedAt:j}=t,{keywords:b,wrapperClassName:L,hide_table_of_contents:N}=g,C=f.image??g.image,H=!!(v||j||p);return(0,u.jsx)(a.FG,{className:(0,i.Z)(L??s.k.wrapper.mdxPages,s.k.page.mdxPage),children:(0,u.jsxs)(l.Z,{children:[(0,u.jsx)(a.d,{title:h,description:x,keywords:b,image:C}),(0,u.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,u.jsxs)("div",{className:(0,i.Z)("row",m.mdxPageWrapper),children:[(0,u.jsxs)("div",{className:(0,i.Z)("col",!N&&"col--8"),children:[(0,u.jsx)(o.Z,{metadata:t}),(0,u.jsx)("article",{children:(0,u.jsx)(r.Z,{children:(0,u.jsx)(n,{})})}),H&&(0,u.jsx)(d.Z,{className:(0,i.Z)("margin-top--sm",s.k.pages.pageFooterEditMetaRow),editUrl:v,lastUpdatedAt:j,lastUpdatedBy:p})]}),!N&&n.toc.length>0&&(0,u.jsx)("div",{className:"col col--2",children:(0,u.jsx)(c.Z,{toc:n.toc,minHeadingLevel:g.toc_min_heading_level,maxHeadingLevel:g.toc_max_heading_level})})]})})]})})}},9407:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var i=t(512),a=t(3743);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=t(5893);const r="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function o(e){let{className:n,...t}=e;return(0,l.jsx)("div",{className:(0,i.Z)(s.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(a.Z,{...t,linkClassName:r,linkActiveClassName:c})})}},3743:(e,n,t)=>{t.d(n,{Z:()=>v});var i=t(7294),a=t(6668);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):i.push(a)})),i}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>r(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function o(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.L)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,i.useRef)(void 0),t=o();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:s,maxHeadingLevel:l}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let a=n;a<=t;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:s,maxHeadingLevel:l}),o=c(r,{anchorTopOffset:t.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var m=t(3692),u=t(5893);function f(e){let{toc:n,className:t,linkClassName:i,isChild:a}=e;return n.length?(0,u.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.Z,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const h=i.memo(f);function v(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:o,maxHeadingLevel:m,...f}=e;const v=(0,a.L)(),x=o??v.tableOfContents.minHeadingLevel,g=m??v.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>l({toc:s(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:x,maxHeadingLevel:g});return d((0,i.useMemo)((()=>{if(r&&c)return{linkClassName:r,linkActiveClassName:c,minHeadingLevel:x,maxHeadingLevel:g}}),[r,c,x,g])),(0,u.jsx)(h,{toc:p,className:t,linkClassName:r,...f})}},4061:(e,n,t)=>{t.d(n,{T$:()=>c,cI:()=>l,eU:()=>r,ht:()=>o,xo:()=>d});t(7294);var i=t(5999),a=t(5742),s=t(5893);function l(){return(0,s.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,s.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,s.jsx)(a.Z,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function o(){return(0,s.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,s.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);