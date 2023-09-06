"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[71251],{6470:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496),i=n(13352),o=n(7426);function a(e){let{name:t}=e;const n=(0,o.eZ)("ngrok-parse-integrations").find((e=>e.name===t)),a=[];let c=[];for(let o=0;o<n.docs.length;o++){const{contentTitle:e,excerpt:t,path:s,frontMatter:d}=n.docs[o];c.push(r.createElement(i.Z,{to:s,size:"sm",title:d?.title||e,description:d?.description||t})),(2==c.length||n.docs.length<2||o==n.docs.length-1)&&(a.push(r.createElement("div",{className:"ngrok--cards ngrok--cards-row"},c)),c=[])}return r.createElement(r.Fragment,null,a)}},13352:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(59496),i=n(45924),o=n(62515);function a(e){let{size:t,title:n}=e;switch(t){case"xs":case"sm":return r.createElement("h4",{className:"fw-600"},n);case"xl":return r.createElement("h2",{className:"fw-600"},n);default:return r.createElement("h3",{className:"fw-600"},n)}}function c(e){let{size:t,title:n,icon:i}=e;return i?r.createElement("div",{className:"ngrok--card-heading jc-space-between"},n&&r.createElement(a,{size:t,title:n}),i):n?r.createElement("div",{className:"ngrok--card-heading"},r.createElement(a,{size:t,title:n})):null}function s(e){let{to:t,note:n=!1,size:a="",title:s,img:d="",icon:l=!1,description:m=!1,descriptionLink:g=!1}=e;a=a.toLowerCase();let u=(0,i.W)("ngrok--card",{"ngrok--card-note":n,"ngrok--card-sm":"sm"==a,"ngrok--card-lg":"lg"==a,"ngrok--card-xl":"xl"==a});return r.createElement(o.Z,{to:t},r.createElement("div",{className:u},d&&r.createElement("img",{src:d}),r.createElement(c,{size:a,title:s,icon:l}),m&&r.createElement("p",null,m),g&&r.createElement("a",null,g)))}},981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(51163),i=(n(59496),n(49613)),o=n(6470);const a={name:"trendmicro",title:"Trend Micro Integration Hub",sidebar_label:"Trend Micro",description:"Listen to Trend Micro Conformity events without updating your code or poking\nyour firewall. All with security and access from ngrok.\n",excerpt:"Securely integrate your applications with Trend Micro using ngrok.\n"},c=void 0,s={unversionedId:"integrations/trendmicro/index",id:"integrations/trendmicro/index",title:"Trend Micro Integration Hub",description:"Listen to Trend Micro Conformity events without updating your code or poking\nyour firewall. All with security and access from ngrok.\n",source:"@site/docs/integrations/trendmicro/index.mdx",sourceDirName:"integrations/trendmicro",slug:"/integrations/trendmicro/",permalink:"/docs/integrations/trendmicro/",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/trendmicro/index.mdx",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{name:"trendmicro",title:"Trend Micro Integration Hub",sidebar_label:"Trend Micro",description:"Listen to Trend Micro Conformity events without updating your code or poking\nyour firewall. All with security and access from ngrok.\n",excerpt:"Securely integrate your applications with Trend Micro using ngrok.\n"},sidebar:"docs",previous:{title:"TikTok Webhooks",permalink:"/docs/integrations/tiktok/webhooks"},next:{title:"Trend Micro Webhooks",permalink:"/docs/integrations/trendmicro/webhooks"}},d={},l=[],m={toc:l},g="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,a.description),(0,i.kt)(o.Z,{name:a.name,mdxType:"IntegrationPageList"}))}u.isMDXComponent=!0}}]);