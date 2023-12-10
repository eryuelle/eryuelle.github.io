(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(6668)}])},6668:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return M}});var i=s(5893),a=s(7294),r=s(312),o=s(7169);let c={"Vanishing Journey":{name:"Vanishing Journey",icon:"/icons/symbols/vanishing_journey.png",exp:732132258},"Chu Chu Island":{name:"Chu Chu Island",icon:"/icons/symbols/chu_chu_island.png",exp:2141658246},Lachelein:{name:"Lachelein",icon:"/icons/symbols/lachelein.png",exp:3189098250},Arcana:{name:"Arcana",icon:"/icons/symbols/arcana.png",exp:3305187639},Morass:{name:"Morass",icon:"/icons/symbols/morass.png",exp:4398266165},Esfera:{name:"Esfera",icon:"/icons/symbols/esfera.png",exp:4530843954},Moonbridge:{name:"Moonbridge",icon:"/icons/symbols/moonbridge.png",exp:8397548775},"Labyrinth of Suffering":{name:"Labyrinth of Suffering",icon:"/icons/symbols/labyrinth_of_suffering.png",exp:905769e4},Limina:{name:"Limina",icon:"/icons/symbols/limina.png",exp:10225741680}},t=()=>{for(let[e,n]of Object.entries(c))void 0!==n.exp&&(c[e].flavor="".concat((0,o.dj)(n.exp)," EXP"));return c},l=["Vanishing Journey","Chu Chu Island","Lachelein","Arcana","Morass","Esfera","Moonbridge","Labyrinth of Suffering"],d={Gollux:{name:"Gollux",icon:"/icons/bosses/gollux.png",flavor:"Gollux Coins / Superior Accessory Set"},Arkarium:{name:"Arkarium",icon:"/icons/bosses/arkarium.png",flavor:"Dominator Pendant"}},m=()=>d,u=["Gollux","Arkarium"],h={Ursus:{name:"Ursus",icon:"/icons/tasks/ursus_map.png",mesos:"90,000,000+"},"Maple Tour":{name:"Maple Tour",icon:"/icons/tasks/maple_tour.png",mesos:"27,000,000+"},"Monster Park":{name:"Monster Park",icon:"/icons/tasks/monster_park.png",exp:"???"},"Ninja Castle":{name:"Ninja Castle",icon:"/icons/tasks/ninja_castle.png",flavor:"Frenzied Gigatoad = WAP Recipes"}},f=()=>{for(let[e,n]of Object.entries(h))void 0!==n.exp?h[e].flavor="".concat(n.exp," EXP"):void 0!==n.mesos&&(h[e].flavor="".concat(n.mesos," Mesos"));return h},p=["Ursus","Maple Tour","Monster Park","Ninja Castle"],g={"Vanishing Journey":{name:"Erda Spectrum",icon:"/icons/symbols/vanishing_journey.png",level:200},"Chu Chu Island":{name:"Hungry Muto",icon:"/icons/symbols/chu_chu_island.png",level:210},Lachelein:{name:"Midnight Chaser",icon:"/icons/symbols/lachelein.png",level:220},Arcana:{name:"Spirit Savior",icon:"/icons/symbols/arcana.png",level:225},Morass:{name:"Ranheim Defense",icon:"/icons/symbols/morass.png",level:230},Esfera:{name:"Protect Esfera",icon:"/icons/symbols/esfera.png",level:235}},x=()=>g,v=["Vanishing Journey","Chu Chu Island","Lachelein","Arcana","Morass","Esfera"],_={Scrapyard:{name:"Scrapyard",icon:"/icons/tasks/diffusion_line_energy_core_grade_a.png",flavor:(0,i.jsx)("a",{href:"https://strategywiki.org/wiki/MapleStory/Towns/Scrapyard#Weekly_Quests",children:"Scrapyard Guide"})},"Dark World Tree":{name:"Dark World Tree",icon:"/icons/tasks/faint_stigma_spirit_stone.png",flavor:"oops",forcePadding:!0}},y=()=>_,j=["Scrapyard","Dark World Tree"];function b(){let e,n,s;let[r,o]=(0,a.useState)(0),c=()=>{let e=new Date,n=new Date;return n.setUTCHours(24,0,0,0),(n.getTime()-e.getTime())/1e3},t=e=>(e<10?"0":"")+e;return(0,a.useEffect)(()=>{o(c());let e=setInterval(()=>{o(c())},1e3);return()=>clearInterval(e)},[]),(0,i.jsxs)("div",{children:["Day resets in ",(e=t(Math.floor(r%86400/3600)),n=t(Math.floor(r%3600/60)),s=t(Math.floor(r%60)),"".concat(e,"h ").concat(n,"m ").concat(s,"s"))," (5pm MT)"]})}function k(e){let{tabs:n}=e,[s,r]=(0,a.useState)(0),o=e=>{r(e)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"flex space-evenly tmargin-8",children:(()=>{let e=Object.keys(n);return e.map((e,n)=>(0,i.jsx)("div",{className:"text-center w-150 bordered pointer padding-4 ".concat(s===n?"bg-lightgray":""),onClick:()=>o(n),children:e}))})()}),(()=>{let e=Object.keys(n);return n[e[s]]})()]})}function M(){let e={Dailies:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z,{bordered:!0,compact:!0,title:"Arcane River",items:l,dictionary:t()}),(0,i.jsx)(r.Z,{compact:!0,title:"Misc. Tasks",items:p,dictionary:f()}),(0,i.jsx)(r.Z,{compact:!0,title:"Bosses",items:u,dictionary:m()})]}),"Sunday Reset":(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z,{bordered:!0,title:"Misc. Tasks",items:j,dictionary:y()}),(0,i.jsx)(r.Z,{compact:!0,bordered:!0,title:"Arcane River",items:v,dictionary:x()})]}),"Wednesday Reset":(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"tmargin-8",children:["Check out the ",(0,i.jsx)("a",{href:"/bosses",children:"Bosses"})," tab!"]})})};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{children:"Chores"}),(0,i.jsx)(b,{}),(0,i.jsx)(k,{tabs:e})]})}},312:function(e,n,s){"use strict";s.d(n,{Z:function(){return o}});var i=s(5893),a=s(2686),r=s.n(a);function o(e){let{bordered:n=!1,compact:s,title:a,items:o,dictionary:c}=e,t=()=>n?"icon-border":"",l=e=>e.forcePadding?"icon-padded":"icon";return(0,i.jsxs)("div",{className:r().container,children:[(0,i.jsx)("h2",{children:a}),s?o.map(e=>{let n=c[e];return(0,i.jsxs)("div",{className:r().iconitem,children:[(0,i.jsx)("div",{className:"icon-cage-30 ".concat(t()),children:(0,i.jsx)("img",{className:"icon",src:n.icon})}),(0,i.jsx)("div",{className:"".concat(r().iconhalf),children:n.name})]})}):o.map(e=>{let n=c[e];return(0,i.jsxs)("div",{className:r().iconitem,children:[(0,i.jsx)("div",{className:"icon-cage-40 ".concat(t()),children:(0,i.jsx)("img",{className:l(n),src:n.icon})}),(0,i.jsxs)("div",{className:r().icondesc,children:[(0,i.jsxs)("div",{className:r().iconhalf,children:[(0,i.jsx)("div",{children:n.name}),(0,i.jsx)("div",{className:"flavortext",children:n.flavor})]}),(0,i.jsxs)("div",{className:r().iconhalfright,children:[(0,i.jsx)("div",{className:"bigflavortext",children:n.cornerFlavor}),(0,i.jsx)("div",{className:"flavortext",children:n.lastFlavor})]})]})]})})]})}},7169:function(e,n,s){"use strict";s.d(n,{Sm:function(){return r},dj:function(){return a},dm:function(){return i}});let i=e=>{let n=["","K","M","B","T","Q"],s=0;for(;e>=1e3&&s<n.length-1;)e/=1e3,s++;return e.toFixed(1)+n[s]},a=e=>e.toLocaleString("en-US"),r=e=>e.reduce((e,n)=>e+n,0)},2686:function(e){e.exports={container:"icon-list_container__UdJ6o",iconitem:"icon-list_iconitem__XnX__",iconhalf:"icon-list_iconhalf__Kv1AZ",icondesc:"icon-list_icondesc__cSWp3",iconhalfright:"icon-list_iconhalfright___SJ26"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);