(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(8),r=(n(0),n(247)),i={title:"Advice for new contributors"},s={unversionedId:"contributing/new-contributors",id:"contributing/new-contributors",isDocsHomePage:!1,title:"Advice for new contributors",description:"New contributor and not sure what to do? Want to help but just don't know how",source:"@site/docs/contributing/new-contributors.md",slug:"/contributing/new-contributors",permalink:"/docs/contributing/new-contributors",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/contributing/new-contributors.md",version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616933370,formattedLastUpdatedAt:"3/28/2021",sidebar:"docs",previous:{title:"Contributing to Wechaty",permalink:"/docs/contributing/"},next:{title:"Write documentation",permalink:"/docs/contributing/documentation"}},c=[{value:"First steps",id:"first-steps",children:[]},{value:"Guidelines",id:"guidelines",children:[]},{value:"FAQ",id:"faq",children:[]},{value:"Special Thanks",id:"special-thanks",children:[]}],p={toc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"New contributor and not sure what to do? Want to help but just don't know how\nto get started? This is the section for you."),Object(r.b)("p",null,"This page contains more general advice on ways you can contribute to Wechaty,\nand how to approach that."),Object(r.b)("p",null,"If you are looking for a reference on the details of making code contributions,\nsee the ",Object(r.b)("a",{parentName:"p",href:"/docs/contributing/coding"},"Writing code")," documentation."),Object(r.b)("h2",{id:"first-steps"},"First steps"),Object(r.b)("p",null,"Start with these steps to discover Wechaty's development process."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Triage issues")),Object(r.b)("p",{parentName:"li"},"If an ",Object(r.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/issues?q=is%3Aopen+is%3Aissue"},"open issue"),"\nreports a bug, try and reproduce it.\nIf you can reproduce it and it seems valid,\nmake a note that you confirmed the bug\nand accept the ticket. Make sure the ticket is filed under the correct\ncomponent area. Consider writing a patch that adds a test for the bug's\nbehavior, even if you don't fix the bug itself.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Look for issues that are accepted and review patches to build familiarity\nwith the codebase and the process")),Object(r.b)("p",{parentName:"li"},"Mark the appropriate flags if a patch needs docs or tests.\nRun the tests and make sure they pass.\nWhere possible and relevant, try them out on your environment.\nLeave comments and feedback!")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Keep old patches up to date")),Object(r.b)("p",{parentName:"li"},"Oftentimes the codebase will change between a patch being submitted and the\ntime it gets reviewed. Make sure it still applies cleanly and functions as\nexpected. Updating a patch is both useful and important!")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Write some documentation")),Object(r.b)("p",{parentName:"li"},"Wechaty's documentation is great but it can always be improved. Did you find\na typo? Do you think that something should be clarified? Go ahead and\nsuggest a documentation patch! See also the guide on ",Object(r.b)("a",{parentName:"p",href:"/docs/contributing/documentation"},"writing documentation"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Sign the Contributor License Agreement")),Object(r.b)("p",{parentName:"li"},"The code that you write belongs to you or your employer. If your\ncontribution is more than one or two lines of code, you need to sign the\n",Object(r.b)("a",{parentName:"p",href:"https://cla-assistant.io/wechaty/wechaty"},"CLA"),". See the\n",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Contributor_License_Agreement"},"Contributor License Agreement"),"\nfor a more thorough explanation."))),Object(r.b)("h2",{id:"guidelines"},"Guidelines"),Object(r.b)("p",null,"As a newcomer on a large project, it's easy to experience frustration. Here's\nsome advice to make your work on Wechaty more useful and rewarding."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Pick a subject area that you care about, that you are familiar with, or\nthat you want to learn about")),Object(r.b)("p",{parentName:"li"},"You don't already have to be an expert on the area you want to work on; you\nbecome an expert through your ongoing contributions to the code.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Analyze issues' context and history")),Object(r.b)("p",{parentName:"li"},"Issue isn't an absolute; the context is just as important as the words.\nWhen reading Issue, you need to take into account who says things, and when\nthey were said. Support for an idea two years ago doesn't necessarily mean\nthat the idea will still have support. You also need to pay attention to who\n",Object(r.b)("em",{parentName:"p"},"hasn't")," spoken -- for example, if an experienced contributor hasn't been\nrecently involved in a discussion, then a ticket may not have the support\nrequired to get into Wechaty.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Start small")),Object(r.b)("p",{parentName:"li"},"It's easier to get feedback on a little issue than on a big one. See the\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/search?q=org%3Awechaty+label%3A%22good+first+issue%22&type=issues"},"good first issue"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"If you're going to engage in a big task, make sure that your idea has\nsupport first")),Object(r.b)("p",{parentName:"li"},"This means getting someone else to confirm that a bug is real before you fix\nthe issue, and ensuring that there's consensus on a proposed feature before\nyou go implementing it.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Be bold! Leave feedback!")),Object(r.b)("p",{parentName:"li"},'Sometimes it can be scary to put your opinion out to the world and say "this\nticket is correct" or "this patch needs work", but it\'s the only way the\nproject moves forward. The contributions of the broad Wechaty community\nultimately have a much greater impact than that of any one person. We can\'t\ndo it without ',Object(r.b)("strong",{parentName:"p"},"you"),"!")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Err on the side of caution when marking things Ready For Check-in")),Object(r.b)("p",{parentName:"li"},"If you're really not certain if a ticket is ready, don't mark it as\nsuch. Leave a comment instead, letting others know your thoughts.  If you're\nmostly certain, but not completely certain, you might also try asking on Gitter\nto see if someone else can confirm your suspicions.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Wait for feedback, and respond to feedback that you receive")),Object(r.b)("p",{parentName:"li"},"Focus on one or two issues, see them through from start to finish, and\nrepeat. The shotgun approach of taking on lots of issues and letting some\nfall by the wayside ends up doing more harm than good.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Be rigorous")),Object(r.b)("p",{parentName:"li"},'When we say "must have docs and tests", we mean it. If a patch\ndoesn\'t have docs and tests, there had better be a good reason. Arguments\nlike "I couldn\'t find any existing tests of this feature" don\'t carry much\nweight--while it may be true, that means you have the extra-important job of\nwriting the very first tests for that feature, not that you get a pass from\nwriting tests altogether.'))),Object(r.b)("h2",{id:"faq"},"FAQ"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"This issue I care about has been ignored for days/weeks/months! What can\nI do to get it committed?")),Object(r.b)("p",{parentName:"li"},"First off, it's not personal. Wechaty is entirely developed by volunteers\n(except the Wechaty fellow), and sometimes folks just don't have time. The\nbest thing to do is to send a gentle reminder to the Wechaty maillist\nasking for review on the issue, or to bring it up in the\n",Object(r.b)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"Gitter channel"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"I'm sure my issue is absolutely 100% perfect, can I mark it as RFC\nmyself?")),Object(r.b)("p",{parentName:"li"},"Short answer: No. It's always better to get another set of eyes on a\nticket. If you're having trouble getting that second set of eyes, see\nquestion 1, above."))),Object(r.b)("h2",{id:"special-thanks"},"Special Thanks"),Object(r.b)("p",null,"I have to credit Django doc authors, because this documentation page is inspired by, and mostly copy/pasted from ",Object(r.b)("a",{parentName:"p",href:"https://github.com/django/django/blob/main/docs/internals/contributing/new-contributors.txt"},"Django contributing docs")))}b.isMDXComponent=!0},247:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(n),h=a,d=u["".concat(i,".").concat(h)]||u[h]||l[h]||r;return n?o.a.createElement(d,s(s({ref:t},p),{},{components:n})):o.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);