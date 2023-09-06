"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[34105],{76701:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(51163),o=(n(59496),n(49613));const r={sidebar_position:7},l="Global Infrastructure",i={unversionedId:"cloud-edge/pops",id:"cloud-edge/pops",title:"Global Infrastructure",description:"---",source:"@site/docs/cloud-edge/pops.md",sourceDirName:"cloud-edge",slug:"/cloud-edge/pops",permalink:"/docs/cloud-edge/pops",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/cloud-edge/pops.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docs",previous:{title:"Observability",permalink:"/docs/cloud-edge/observability"},next:{title:"IP Policies and Restrictions",permalink:"/docs/cloud-edge/ip-policies"}},s={},d=[{value:"Locations",id:"locs",level:3},{value:"Usage",id:"usage",level:3},{value:"Limitations",id:"limits",level:3}],u={toc:d},p="wrapper";function g(t){let{components:e,...n}=t;return(0,o.kt)(p,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"global-infrastructure"},"Global Infrastructure"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"ngrok runs globally distributed tunnel servers around the world to enable fast, low latency traffic to your applications."),(0,o.kt)("h3",{id:"locs"},"Locations"),(0,o.kt)("p",null,"ngrok runs servers in data centers around the world. The location of the data center within a given region may change without notice (e.g. the European servers may move from Frankfurt to London)."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Region Code"),(0,o.kt)("th",{parentName:"tr",align:null},"Location"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ap"),(0,o.kt)("td",{parentName:"tr",align:null},"Asia/Pacific (Singapore)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"au"),(0,o.kt)("td",{parentName:"tr",align:null},"Australia (Sydney)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"eu"),(0,o.kt)("td",{parentName:"tr",align:null},"Europe (Frankfurt)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"in"),(0,o.kt)("td",{parentName:"tr",align:null},"India (Mumbai)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"jp"),(0,o.kt)("td",{parentName:"tr",align:null},"Japan (Tokyo)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sa"),(0,o.kt)("td",{parentName:"tr",align:null},"South America (S\xe3o Paulo)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"us"),(0,o.kt)("td",{parentName:"tr",align:null},"United States (Ohio)")))),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("p",null,"If you do not explicitly pick a region when starting the ngrok agent, the agent will attempt to pick the region with the least latency, which is usually the one geographically closest to your machine."),(0,o.kt)("p",null,"To explicitly choose the region, add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--region")," flag or set the ",(0,o.kt)("inlineCode",{parentName:"p"},"region")," property in your configuration file. For example, to start a tunnel in the European region:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ngrok http --region eu 8080\n")),(0,o.kt)("p",null,"Reserved domains are globally routable to agents connected into any region."),(0,o.kt)("p",null,"TCP addresses are allocated for a specific region (the US region by default). When you reserve a TCP address, you must select a target region. You may not bind a TCP address reserved in another region other than the one it was allocated for. Attempting to do so will yield an error and prevent your tunnel session from initializing."),(0,o.kt)("h3",{id:"limits"},"Limitations"),(0,o.kt)("p",null,"An ngrok agent may only be connected a single region, meaning you cannot host tunnels in multiple regions simultaneously with the same agent. You can run multiple ngrok agents if you need to do this."),(0,o.kt)("p",null,"To geo-balance DNS in multiple regions you can use labeled tunnels with ngrok Cloud Edges or use region-specific subdomains or TLDs."))}g.isMDXComponent=!0}}]);