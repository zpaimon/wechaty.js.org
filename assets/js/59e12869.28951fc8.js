(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),a=(n(0),n(247)),i={title:"Write code"},c={unversionedId:"contributing/coding",id:"contributing/coding",isDocsHomePage:!1,title:"Write code",description:"So you'd like to write some code to improve Wechaty? Awesome! There are several",source:"@site/docs/contributing/coding.md",slug:"/contributing/coding",permalink:"/docs/contributing/coding",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/contributing/coding.md",version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616933370,formattedLastUpdatedAt:"3/28/2021",sidebar:"docs",previous:{title:"Publish blog",permalink:"/docs/contributing/blog"},next:{title:"Working with git",permalink:"/docs/contributing/git"}},s=[{value:"Special Thanks",id:"special-thanks",children:[]}],b={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"So you'd like to write some code to improve Wechaty? Awesome! There are several\nways you can help Wechaty's development:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",{parentName:"p",href:"/docs/contributing/issues"},"Report bugs")," in GitHub issues.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Join the ",Object(a.b)("em",{parentName:"p"},"wechaty")," mailing list and share your ideas for how to\nimprove Wechaty. We're always open to suggestions. You can also interact on\nthe ",Object(a.b)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"Wechaty Gitter channel"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",{parentName:"p",href:"/docs/contributing/git"},"Working with git")," for new and/or fixed behavior. If\nyou're looking for a way to get started contributing to Wechaty read the\n",Object(a.b)("a",{parentName:"p",href:"/docs/contributing/"},"Contributing to Wechaty")," tutorial and have a look at the\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/search?q=org%3Awechaty+label%3A%22good+first+issue%22&type=issues"},"good first issues"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",{parentName:"p",href:"/docs/contributing/documentation"},"Improve the documentation")," or ",Object(a.b)("a",{parentName:"p",href:"/docs/contributing/testing"},"write unit tests"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",{parentName:"p",href:"/docs/contributing/issues"},"Triage issues and review pull requests")," created by\nother users.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Read the ",Object(a.b)("a",{parentName:"p",href:"/docs/contributing/new-contributors"},"Advice for new contributors")," to help you\nget orientated in the development process."))),Object(a.b)("p",null,"Browse the following sections to find out how to give your code patches the\nbest chances to be included in Wechaty core:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",{parentName:"li",href:"/docs/contributing/pulls"},"Committing code")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",{parentName:"li",href:"/docs/contributing/coding"},"Writing code")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",{parentName:"li",href:"/docs/contributing/git"},"Working with Git"))),Object(a.b)("h2",{id:"special-thanks"},"Special Thanks"),Object(a.b)("p",null,"I have to credit Django doc authors, because this documentation page is inspired by, and mostly copy/pasted from ",Object(a.b)("a",{parentName:"p",href:"https://github.com/django/django/blob/main/docs/internals/contributing/writing-code/index.txt"},"Django contributing docs")))}u.isMDXComponent=!0},247:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),u=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||l[d]||a;return n?o.a.createElement(m,c(c({ref:t},b),{},{components:n})):o.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<a;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);