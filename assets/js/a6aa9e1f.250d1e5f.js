"use strict";(self.webpackChunkberviantoleo_github_io=self.webpackChunkberviantoleo_github_io||[]).push([[3089],{4351:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});a(7294);var i=a(512),n=a(2263),r=a(8264),o=a(5281),s=a(1460),l=a(9703),d=a(197),g=a(9985),c=a(5742),u=a(136),p=a(5893);function m(e){const t=(0,u.C)(e);return(0,p.jsx)(c.Z,{children:(0,p.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function h(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,n.Z)(),{blogDescription:i,blogTitle:o,permalink:s}=t,l="/"===s?a:o;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.d,{title:l,description:i}),(0,p.jsx)(d.Z,{tag:"blog_posts_list"})]})}function b(e){const{metadata:t,items:a,sidebar:i}=e;return(0,p.jsxs)(s.Z,{sidebar:i,children:[(0,p.jsx)(g.Z,{items:a}),(0,p.jsx)(l.Z,{metadata:t})]})}function f(e){return(0,p.jsxs)(r.FG,{className:(0,i.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage),children:[(0,p.jsx)(h,{...e}),(0,p.jsx)(m,{...e}),(0,p.jsx)(b,{...e})]})}},9703:(e,t,a)=>{a.d(t,{Z:()=>o});a(7294);var i=a(5999),n=a(2244),r=a(5893);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,i.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,r.jsx)(n.Z,{permalink:a,title:(0,r.jsx)(i.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),o&&(0,r.jsx)(n.Z,{permalink:o,title:(0,r.jsx)(i.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},9985:(e,t,a)=>{a.d(t,{Z:()=>o});a(7294);var i=a(9460),n=a(3665),r=a(5893);function o(e){let{items:t,component:a=n.Z}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(i.n,{content:t,children:(0,r.jsx)(a,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},136:(e,t,a)=>{a.d(t,{C:()=>g,i:()=>c});var i=a(4996),n=a(2263),r=a(5102);var o=a(9460);const s=e=>new Date(e).toISOString();function l(e){const t=e.map(u);return{author:1===t.length?t[0]:t}}function d(e,t,a){return e?{image:p({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function g(e){const{siteConfig:t}=(0,n.Z)(),{withBaseUrl:a}=(0,i.C)(),{metadata:{blogDescription:r,blogTitle:o,permalink:g}}=e,c=`${t.url}${g}`;return{"@context":"https://schema.org","@type":"Blog","@id":c,mainEntityOfPage:c,headline:o,description:r,blogPost:e.items.map((e=>function(e,t,a){const{assets:i,frontMatter:n,metadata:r}=e,{date:o,title:g,description:c,lastUpdatedAt:u}=r,p=i.image??n.image,m=n.keywords??[],h=`${t.url}${r.permalink}`,b=u?s(u):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:g,name:g,description:c,datePublished:o,...b?{dateModified:b}:{},...l(r.authors),...d(p,a,g),...m?{keywords:m}:{}}}(e.content,t,a)))}}function c(){const e=function(){const e=(0,r.Z)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:a}=(0,o.C)(),{siteConfig:g}=(0,n.Z)(),{withBaseUrl:c}=(0,i.C)(),{date:u,title:p,description:m,frontMatter:h,lastUpdatedAt:b}=a,f=t.image??h.image,x=h.keywords??[],j=b?s(b):void 0,k=`${g.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":k,mainEntityOfPage:k,url:k,headline:p,name:p,description:m,datePublished:u,...j?{dateModified:j}:{},...l(a.authors),...d(f,c,p),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${g.url}${e.blogBasePath}`,name:e.blogTitle}}}function u(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function p(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}}}]);