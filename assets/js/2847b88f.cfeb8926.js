(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),o=n(8),r=(n(0),n(247)),i={title:"Using Plugin with Wechaty"},c={unversionedId:"tutorials/using-plugin-with-wechaty",id:"tutorials/using-plugin-with-wechaty",isDocsHomePage:!1,title:"Using Plugin with Wechaty",description:"Wechaty Plugin Contrib",source:"@site/docs/tutorials/using-plugin-with-wechaty.md",slug:"/tutorials/using-plugin-with-wechaty",permalink:"/docs/tutorials/using-plugin-with-wechaty",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/tutorials/using-plugin-with-wechaty.md",version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616933370,formattedLastUpdatedAt:"3/28/2021",sidebar:"docs",previous:{title:"Usage with Heroku",permalink:"/docs/tutorials/usage-with-heroku"},next:{title:"Using Vorpal with Wechaty",permalink:"/docs/tutorials/using-vorpal-with-wechaty"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Plugins Contrib",id:"plugins-contrib",children:[{value:"1 DingDong",id:"1-dingdong",children:[]},{value:"2 EventLogger",id:"2-eventlogger",children:[]},{value:"3 QR Code Terminal",id:"3-qr-code-terminal",children:[]},{value:"4 Heartbeat",id:"4-heartbeat",children:[]},{value:"5 ChatOps",id:"5-chatops",children:[]},{value:"6 <code>RoomConnector</code>(s)",id:"6-roomconnectors",children:[]},{value:"7 FriendshipAccepter",id:"7-friendshipaccepter",children:[]},{value:"8 RoomInviter",id:"8-roominviter",children:[]},{value:"9 EventHotHandler",id:"9-eventhothandler",children:[]},{value:"10 RoomInvitationAccepter",id:"10-roominvitationaccepter",children:[]},{value:"11 MessageAwaiter",id:"11-messageawaiter",children:[]}]},{value:"Wechaty Plugin Directory",id:"wechaty-plugin-directory",children:[]},{value:"History",id:"history",children:[]}],b={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-plugin-contrib"},Object(r.b)("img",{parentName:"a",src:"https://img.shields.io/badge/Wechaty%20Plugin-Contrib-brightgreen.svg",alt:"Wechaty Plugin Contrib"})),"\n",Object(r.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-plugin-contrib"},Object(r.b)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-plugin-contrib?color=brightgreen",alt:"NPM Version"})),"\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-plugin-contrib/actions?query=workflow%3ANPM"},Object(r.b)("img",{parentName:"a",src:"https://github.com/wechaty/wechaty-plugin-contrib/workflows/NPM/badge.svg",alt:"NPM"}))),Object(r.b)("p",null,"Wechaty Plugin Contrib Package for the Community"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://wechaty.github.io/wechaty-plugin-contrib/images/plugin.png",alt:"Wechaty Plugin"})),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Image Credit: ",Object(r.b)("a",{parentName:"p",href:"https://www.computerhope.com/jargon/p/plugin.htm"},"What is Plugin"))),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/Wechaty/wechaty"},Object(r.b)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg",alt:"Powered by Wechaty"})),"\n",Object(r.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},Object(r.b)("img",{parentName:"a",src:"https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg",alt:"TypeScript"}))),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"When you find yourself writing repetitive code, it's time to extract it into a plugin."),Object(r.b)("p",null,"Wechaty has a great support for using Plugins by calling ",Object(r.b)("inlineCode",{parentName:"p"},"Wechaty.use(WechatyPlugin())"),". A Wechaty Plugin is a JavaScript function that returns a function which accepts a Wechaty instance."),Object(r.b)("p",null,"The first Wechaty Plugin system was design by our core team developer ",Object(r.b)("a",{parentName:"p",href:"https://github.com/gcaufy"},"@gcaufy")," from issue ",Object(r.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/issues/1939"},"#1939"),"(Wechaty Plugin Support with Kick out Example) to PR ",Object(r.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/pull/1946"},"#1946"),"(feat: added wechaty plugin)."),Object(r.b)("p",null,"This package is for publishing the Wechaty Plugins that are very common used by the core developer team."),Object(r.b)("h2",{id:"requirements"},"Requirements"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Wechaty v0.40 or above versions")),Object(r.b)("h2",{id:"plugins-contrib"},"Plugins Contrib"),Object(r.b)("p",null,"You are welcome to send your plugin to our contrib by creating a Pull Request!"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"#"),Object(r.b)("th",{parentName:"tr",align:"left"},"Plugin"),Object(r.b)("th",{parentName:"tr",align:"left"},"Author"),Object(r.b)("th",{parentName:"tr",align:"left"},"Feature"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"1"),Object(r.b)("td",{parentName:"tr",align:"left"},"DingDong"),Object(r.b)("td",{parentName:"tr",align:"left"},"@huan"),Object(r.b)("td",{parentName:"tr",align:"left"},"Reply ",Object(r.b)("inlineCode",{parentName:"td"},"dong")," if bot receives a ",Object(r.b)("inlineCode",{parentName:"td"},"ding")," message.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"2"),Object(r.b)("td",{parentName:"tr",align:"left"},"EventLogger"),Object(r.b)("td",{parentName:"tr",align:"left"},"@huan"),Object(r.b)("td",{parentName:"tr",align:"left"},"Log Wechaty Events for ",Object(r.b)("inlineCode",{parentName:"td"},"'scan' \\| 'login' \\| 'message'")," ... etc.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"3"),Object(r.b)("td",{parentName:"tr",align:"left"},"QRCodeTerminal"),Object(r.b)("td",{parentName:"tr",align:"left"},"@huan"),Object(r.b)("td",{parentName:"tr",align:"left"},"Show QR Code for Scan in Terminal")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"4"),Object(r.b)("td",{parentName:"tr",align:"left"},"Heartbeat"),Object(r.b)("td",{parentName:"tr",align:"left"},"@huan"),Object(r.b)("td",{parentName:"tr",align:"left"},"Send emoji periodically")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"5"),Object(r.b)("td",{parentName:"tr",align:"left"},"ChatOps"),Object(r.b)("td",{parentName:"tr",align:"left"},"@huan"),Object(r.b)("td",{parentName:"tr",align:"left"},"Forward DM & Mention messages to a room")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"6"),Object(r.b)("td",{parentName:"tr",align:"left"},"RoomConnector"),Object(r.b)("td",{parentName:"tr",align:"left"},"@huan"),Object(r.b)("td",{parentName:"tr",align:"left"},"Connect rooms together with ",Object(r.b)("inlineCode",{parentName:"td"},"1:N"),", ",Object(r.b)("inlineCode",{parentName:"td"},"M:1"),", and ",Object(r.b)("inlineCode",{parentName:"td"},"M:N")," modes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"7"),Object(r.b)("td",{parentName:"tr",align:"left"},"FriendshipAccepter"),Object(r.b)("td",{parentName:"tr",align:"left"},"@huan"),Object(r.b)("td",{parentName:"tr",align:"left"},"Accept friendship automatically, and say/do something for greeting.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"8"),Object(r.b)("td",{parentName:"tr",align:"left"},"RoomInviter"),Object(r.b)("td",{parentName:"tr",align:"left"},"@huan"),Object(r.b)("td",{parentName:"tr",align:"left"},"Invite user to rooms by keyword")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"9"),Object(r.b)("td",{parentName:"tr",align:"left"},"EventHotHandler"),Object(r.b)("td",{parentName:"tr",align:"left"},"@huan"),Object(r.b)("td",{parentName:"tr",align:"left"},"Hot reloading event handler module files")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"10"),Object(r.b)("td",{parentName:"tr",align:"left"},"RoomInvitationAccepter"),Object(r.b)("td",{parentName:"tr",align:"left"},"@huan"),Object(r.b)("td",{parentName:"tr",align:"left"},"Automatically accepting any room invitations")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"11"),Object(r.b)("td",{parentName:"tr",align:"left"},"MessageAwaiter"),Object(r.b)("td",{parentName:"tr",align:"left"},"@ssine"),Object(r.b)("td",{parentName:"tr",align:"left"},"Wait for a particular message using ",Object(r.b)("inlineCode",{parentName:"td"},"await")," syntax ",Object(r.b)("a",{parentName:"td",href:"https://github.com/wechaty/wechaty-plugin-contrib/issues/13"},"#13"))))),Object(r.b)("h3",{id:"1-dingdong"},"1 DingDong"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Description: Reply ",Object(r.b)("inlineCode",{parentName:"li"},"dong")," if bot receives a ",Object(r.b)("inlineCode",{parentName:"li"},"ding")," message."),Object(r.b)("li",{parentName:"ul"},"Author: @huan")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { DingDong } from 'wechaty-plugin-contrib'\n\nconst config = {\n  mention : true,    // default: true - Response to Mention Self (@/at) Message in Room\n  contact : true,    // default: true - Response to Direct Message\n  room    : true,    // default: true - Response to Rooms Message\n  self    : true,    // default: true - Response to Message that send from the bot itself\n}\n\nwechaty.use(DingDong(config))\n")),Object(r.b)("h4",{id:"config-as-a-function"},Object(r.b)("inlineCode",{parentName:"h4"},"config")," as a Function"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"config")," can also be a function which receives a ",Object(r.b)("inlineCode",{parentName:"p"},"message: Message")," and returns a ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")," result to decide whether response a ",Object(r.b)("inlineCode",{parentName:"p"},"ding")," message."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Config: (message: Message) => boolean | Promise<boolean>")),Object(r.b)("h3",{id:"2-eventlogger"},"2 EventLogger"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Description: Log Wechaty Events: ",Object(r.b)("inlineCode",{parentName:"li"},'"dong" | "message" | "error" | "friendship" | "heartbeat" | "login" | "logout" | "ready" | "reset" | "room-invite" | "room-join" | "room-leave" | "room-topic" | "scan"')),Object(r.b)("li",{parentName:"ul"},"Author: @huan")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { EventLogger } from 'wechaty-plugin-contrib'\nconst config = ['login', 'ready', 'message']\n// Do not provide an config will log all events.\nwechaty.use(EventLogger(config))\n")),Object(r.b)("h3",{id:"3-qr-code-terminal"},"3 QR Code Terminal"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Description: Show QR Code for Scan in Terminal"),Object(r.b)("li",{parentName:"ul"},"Author: @huan")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { QRCodeTerminal } from 'wechaty-plugin-contrib'\nconst config = {\n  small: false,   // default: false - the size of the printed QR Code in terminal\n}\nwechaty.use(QRCodeTerminal(config))\n")),Object(r.b)("h3",{id:"4-heartbeat"},"4 Heartbeat"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Description: Send emoji periodically"),Object(r.b)("li",{parentName:"ul"},"Author: @huan")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { Heartbeat } from 'wechaty-plugin-contrib'\nconst config = {\n  contact: 'filehelper',    // default: filehelper - Contact id who will receive the emoji\n  emoji: {\n    heartbeat: '[\u7231\u5fc3]',    // default: [\u7231\u5fc3] - Heartbeat emoji\n  },\n  intervalSeconds: 60 * 60, // Default: 1 hour - Send emoji for every 1 hour\n}\nwechaty.use(Heartbeat(config))\n")),Object(r.b)("h3",{id:"5-chatops"},"5 ChatOps"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Description: Forward DM & Mention messages to a ChatOps room for logging."),Object(r.b)("li",{parentName:"ul"},"Author: @huan")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { ChatOps } from 'wechaty-plugin-contrib'\n\nconst config = {\n  room : 'xxx@chatroom',      // required: room id for ChatOps\n  mention?  : true,                // default: true - Response to Mention Self (@/at) Message in Room\n  contact?  : true,                // default: true - Response to Direct Message\n  whitelist?: ChatOpsFilter,  // whitelist for messages that allow to send to ChatOps Room\n  blacklist?: ChatOpsFilter,  // blacklist for messages that forbidden to send to ChatOps Room\n}\n\nwechaty.use(ChatOps(config))\n")),Object(r.b)("h3",{id:"6-roomconnectors"},"6 ",Object(r.b)("inlineCode",{parentName:"h3"},"RoomConnector"),"(s)"),Object(r.b)("p",null,"Connect rooms together, it supports three modes:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"1:N")," - ",Object(r.b)("inlineCode",{parentName:"li"},"OneToManyRoomConnector")," can broadcast the messages in one room to others."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"M:1")," - ",Object(r.b)("inlineCode",{parentName:"li"},"ManyToOneRoomConnector")," can summary messages from rooms into one room."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"M:N")," - ",Object(r.b)("inlineCode",{parentName:"li"},"ManyToManyRoomConnector")," will broadcast every message in any room to all other rooms.")),Object(r.b)("h4",{id:"61-onetomanyroomconnector"},"6.1 ",Object(r.b)("inlineCode",{parentName:"h4"},"OneToManyRoomConnector()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { OneToManyRoomConnector, OneToManyRoomConnectorConfig } from 'wechaty-plugin-contrib'\nconst config: OneToManyRoomConnectorConfig = {\n  blacklist: [ async () => true ],\n  many: [\n    '20049383519@chatroom',     // \u5c0f\u53e5\u5b50\u6d4b\u8bd5\n    '5611663299@chatroom',      // 'ChatOps - Mike BO'\n  ],\n  map: async message => message.from()?.name() + '(one to many): ' + message.text(),\n  one: '17237607145@chatroom',  // PreAngel \u52a8\u6001\n  whitelist: [ async message => message.type() === Message.Type.Text ],\n}\nwechaty.use(OneToManyRoomConnector(config))\n")),Object(r.b)("h4",{id:"62-manytooneroomconnector"},"6.2 ",Object(r.b)("inlineCode",{parentName:"h4"},"ManyToOneRoomConnector()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { ManyToOneRoomConnector, ManyToOneRoomConnectorConfig } from 'wechaty-plugin-contrib'\nconst config: ManyToOneRoomConnectorConfig = {\n  blacklist: [ async () => true ],\n  many: [\n    '20049383519@chatroom',     // \u5c0f\u53e5\u5b50\u6d4b\u8bd5\n    '5611663299@chatroom',      // 'ChatOps - Mike BO'\n  ],\n  map: async message => message.from()?.name() + '(many to one): ' + message.text(),\n  one: '17237607145@chatroom',  // PreAngel \u52a8\u6001\n  whitelist: [ async message => message.type() === Message.Type.Text ],\n}\nwechaty.use(ManyToOneRoomConnector(config))\n")),Object(r.b)("h4",{id:"63-manytomanyroomconnector"},"6.3 ",Object(r.b)("inlineCode",{parentName:"h4"},"ManyToManyRoomConnector()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { ManyToManyRoomConnector, ManyToManyRoomConnectorConfig } from 'wechaty-plugin-contrib'\nconst config: ManyToManyRoomConnectorConfig = {\n  blacklist: [ async () => true ],\n  many: [\n    '20049383519@chatroom',     // \u5c0f\u53e5\u5b50\u6d4b\u8bd5\n    '5611663299@chatroom',      // 'ChatOps - Mike BO'\n  ],\n  map: async message => message.from()?.name() + '(many to many): ' + message.text(),\n  whitelist: [ async message => message.type() === Message.Type.Text ],\n}\nwechaty.use(ManyToManyRoomConnector(config))\n")),Object(r.b)("h3",{id:"7-friendshipaccepter"},"7 FriendshipAccepter"),Object(r.b)("p",null,"Accept friendship automatically, and say/do something for greeting."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { FriendshipAccepter, FriendshipAccepterConfig } from 'wechaty-plugin-contrib'\nconst config: FriendshipAccepterConfig = {\n  greeting: 'we are friends now!',\n  keyword: '42',\n}\nwechaty.use(FriendshipAccepter(config))\n")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"greeting")," will be sent after the friendship has been accepted."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"keyword")," if set, the friendship must match the ",Object(r.b)("inlineCode",{parentName:"li"},"keyword")," text.")),Object(r.b)("h3",{id:"8-roominviter"},"8 RoomInviter"),Object(r.b)("p",null,"Invite a contact to the room with ",Object(r.b)("inlineCode",{parentName:"p"},"password"),", ",Object(r.b)("inlineCode",{parentName:"p"},"welcome"),"(public message), and ",Object(r.b)("inlineCode",{parentName:"p"},"rule"),"(private message) options supported."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { RoomInviter, RoomInviterConfig } from 'wechaty-plugin-contrib'\nconst config: RoomInviterConfig = {\n  password : 'wechaty',\n  room     : '18171595067@chatroom',\n  welcome  : 'Welcome to join the room!',\n  rule     : 'Please be a good people',\n  repeat   : 'You have already in our room',\n}\nwechaty.use(RoomInviter(config))\n")),Object(r.b)("h3",{id:"9-eventhothandler"},"9 EventHotHandler"),Object(r.b)("p",null,"Hot reloading event handler module files."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { EventHotHandler, EventHotHandlerConfig } from 'wechaty-plugin-contrib'\nconst config: EventHotHandlerConfig = {\n  login: './handlers/on-login',\n  logout: './handlers/on0-logout',\n}\nwechaty.use(EventHotHandler(config))\n")),Object(r.b)("h3",{id:"10-roominvitationaccepter"},"10 RoomInvitationAccepter"),Object(r.b)("p",null,"Automatically accepting any room invitations."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { RoomInvitationAccepter } from 'wechaty-plugin-contrib'\nwechaty.use(RoomInvitationAccepter())\n")),Object(r.b)("h3",{id:"11-messageawaiter"},"11 MessageAwaiter"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Description: Wait for a particular message using ",Object(r.b)("inlineCode",{parentName:"li"},"await")," syntax (",Object(r.b)("inlineCode",{parentName:"li"},"await bot.waitForMessage(...)"),")."),Object(r.b)("li",{parentName:"ul"},"Author: @ssine")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { MessageAwaiter } from 'wechaty-plugin-contrib'\nwechaty.use(MessageAwaiter())\n\nwechaty.on('message' async (message) => {\n  if (message.text() === 'whatever triggers the dialog') {\n    await message.say('hint message')\n\n    // wait for the reply from the same sender\n    let reply = await wechaty.waitForMessage({ contact: msg.from()?.id, room: msg.room()?.id })\n\n    // do anything you want...\n  }\n})\n")),Object(r.b)("p",null,"Other arguments include ",Object(r.b)("inlineCode",{parentName:"p"},"regex")," which is tested on the message and ",Object(r.b)("inlineCode",{parentName:"p"},"timeoutSecond")," which automatically rejects the dialog after specified seconds."),Object(r.b)("p",null,"Learn more from ",Object(r.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-plugin-contrib/issues/13"},"New Plugin: Message Awaiter #13")),Object(r.b)("h2",{id:"wechaty-plugin-directory"},"Wechaty Plugin Directory"),Object(r.b)("p",null,"The Wechaty Plugin Contrib will only accept simple plugins which does not dependence very heavy NPM modules, and the SLOC (Source Line Of Code) is no more than 100."),Object(r.b)("p",null,"There are many great Wechaty Plugins can not be included in the contrib because they are too powerful. They will be published as a NPM by itself."),Object(r.b)("p",null,"We are listing those powerful Wechaty Plugins outside the contrib as in the following list, and you are welcome to add your plugin below if you have published any!"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-plugin-contrib#wechaty-plugin-directory"},Object(r.b)("img",{parentName:"a",src:"https://img.shields.io/badge/Wechaty%20Plugin-Directory-brightgreen.svg",alt:"Wechaty Plugin Contrib"}))),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/Gcaufy/wechaty-voteout"},"VoteOut Plugin")," by ",Object(r.b)("a",{parentName:"li",href:"https://github.com/gcaufy"},"@gcaufy")," - help you to have a vote and kick out feature for you room."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/Gcaufy/wechaty-schedule"},"Schedule")," by ",Object(r.b)("a",{parentName:"li",href:"https://github.com/gcaufy"},"@gcaufy")," - easily schedule jobs for your Wechaty bots."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-got-kicked-out"},"GotKicked")," by ",Object(r.b)("a",{parentName:"li",href:"https://github.com/JesseWeb"},"@JesseWeb")," - monitor whether your bot got kicked out of group chat. Just few line of code to implement this instead fussy judging."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/gengchen528/wechaty-web-panel"},"WebPanel")," by ",Object(r.b)("a",{parentName:"li",href:"https://github.com/gengchen528"},"@Leo_chen")," - help you quickly access the web panel"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-plugin-intercom"},"Intercom")," by ",Object(r.b)("a",{parentName:"li",href:"https://github.com/huan"},"@huan")," - helps you to manage your customers/leads/users in the WeChat Room, with the power of the Intercom service."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-vorpal"},"Wechaty Vorpal")," by ",Object(r.b)("a",{parentName:"li",href:"https://github.com/huan"},"@huan")," - CLI for Chatbot - Extensible Commands for ChatOps, Powered by Vorpal."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-freshdesk"},"Freshdesk")," by ",Object(r.b)("a",{parentName:"li",href:"https://github.com/huan"},"@huan")," - Managing Conversations in WeChat Rooms by Freshdesk."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-plugin-qnamaker"},"QnAMaker")," by ",Object(r.b)("a",{parentName:"li",href:"https://github.com/huan"},"@huan")," - Wechaty QnAMaker Plugin helps you to answer questions in WeChat with the power of ",Object(r.b)("a",{parentName:"li",href:"https://QnAMaker.ai"},"https://QnAMaker.ai"),"."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-weixin-openai"},"Weixin OpenAI")," by ",Object(r.b)("a",{parentName:"li",href:"https://github.com/windmemory"},"@windmemory")," - Wechaty Weixin OpenAI Plugin helps you to answer questions in WeChat with the power of ",Object(r.b)("a",{parentName:"li",href:"https://openai.weixin.qq.com"},"https://openai.weixin.qq.com"),"."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/chs97/wechaty-plugin-youdao"},"YouDao Translate")," by ",Object(r.b)("a",{parentName:"li",href:"https://github.com/chs97"},"@Chs97")," - Wechaty YouDao Translate Plugin helps you to translate word in WeChat with the power of ",Object(r.b)("a",{parentName:"li",href:"https://ai.youdao.com/"},"https://ai.youdao.com/"),"."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/archywillhe/wechaty-log-monitor"},"Log Monitor")," by ",Object(r.b)("a",{parentName:"li",href:"https://github.com/archywillhe"},"@ArchyWillHe")," - For log-related DevOps using only WeChat! Fully functional! Very loose coupling! Pretty much pure (other than side effects in I.O.)! Also contains features like QR Rescue (aka \u6389\u7ebf\u7ed9\u7801) for 2 Wechaties to rescue one another when one is disconnected from the grpc server."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/watertao/wechaty-plugin-xyao"},"Wechaty Xyao")," by ",Object(r.b)("a",{parentName:"li",href:"https://github.com/watertao"},"@watertao")," - Wechaty Xyao Plugin gives bot ability to execute instruction with distributed brain module.")),Object(r.b)("h2",{id:"history"},"History"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Wechaty Plugin Support with Kickout Example ",Object(r.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/issues/1939"},"#1939")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://wechaty.js.org/2020/07/22/wechaty-plugin-milestone/"},"Wechaty\u63d2\u4ef6\u7cfb\u7edf\u53d1\u5e03\uff0c\u8ba9\u4f60\u7684\u673a\u5668\u4eba\u5feb\u901f\u63a5\u5165\u590d\u6742\u7ba1\u7406\u548c\u667a\u80fd\u5bf9\u8bdd\u80fd\u529b, @rickyyin98, Jul 22, 2020")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://wechaty.js.org/2020/07/19/wechaty-plugin-youdao/"},"\u6709\u9053\u667a\u4e91\u7ffb\u8bd1\u63d2\u4ef6, @chs97, Jul 19, 2020"))))}s.isMDXComponent=!0},247:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,u=p["".concat(i,".").concat(h)]||p[h]||m[h]||r;return n?o.a.createElement(u,c(c({ref:t},b),{},{components:n})):o.a.createElement(u,c({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<r;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);