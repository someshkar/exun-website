(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{145:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(158),o=n(168),l=n(165),c=n(166),u=n(156);t.default=function(){return i.a.createElement(o.a,null,i.a.createElement(l.a,null,i.a.createElement(c.a,null),i.a.createElement(u.a,null,i.a.createElement("div",{style:{minHeight:"95vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}},i.a.createElement("h1",null,"404 Not Found"),i.a.createElement("p",null,"The page you're looking for wasn't found.",i.a.createElement("br",null)),i.a.createElement("p",{style:{textAlign:"center"}},i.a.createElement(r.Link,{to:"/"},"Go Home"))))))}},156:function(e,t,n){"use strict";var a=n(155).a.div.withConfig({displayName:"Container"})(["position:relative;width:100%;max-width:960px;margin:0 auto;padding:0 20px;box-sizing:border-box;@media (min-width:400px){width:90%;padding:0;}@media (min-width:550px){width:80%;}"]);t.a=a},157:function(e,t,n){var a;e.exports=(a=n(159))&&a.default||a},158:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return A});var a=n(0),i=n.n(a),r=n(8),o=n.n(r),l=n(154),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(157),d=n.n(u);n.d(t,"PageRenderer",function(){return d.a});var s=n(31);n.d(t,"parsePath",function(){return s.a});var m=i.a.createContext({}),A=function(e){return i.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}A.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},159:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(8),o=n.n(r),l=n(32),c=n(1),u=function(e){var t=e.location,n=c.a.getResourcesForPathname(t.pathname);return i.a.createElement(l.a,{location:t,pageResources:n})};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},160:function(e,t){e.exports="data:image/png;base64,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"},161:function(e,t,n){},163:function(e,t,n){},165:function(e,t,n){"use strict";var a=n(155).a.div.withConfig({displayName:"Header"})(["padding-top:3rem;padding-bottom:3rem;background:rgb(245,248,255);"]);t.a=a},166:function(e,t,n){"use strict";n(79),n(172);var a=n(12),i=n.n(a),r=n(50),o=n.n(r),l=n(0),c=n.n(l),u=n(158),d=n(155),s=n(156),m=n(167),A=n.n(m),p=[{title:"About",href:"/about"},{title:"Members",href:"/members"},{title:"Alumni",href:"/alumni"},{title:"Faculty",href:"/faculty"},{title:"Archive",href:"/archive"},{title:"Contact",href:"/contact"},{title:"lnexun",href:"//lnexun.com",external:!0}],g=d.a.div.withConfig({displayName:"Navbar__Wrapper"})(["display:flex;justify-content:space-between;align-items:center;"]),h=d.a.div.withConfig({displayName:"Navbar__Cross"})(["display:none;@media screen and (max-width:920px){display:block;font-size:3rem;line-height:0;margin-top:-10rem;margin-bottom:10rem;}"]),f=d.a.div.withConfig({displayName:"Navbar__Hamburger"})(["display:none;@media screen and (max-width:920px){display:block;flex:1;text-align:right;}"]),Q=d.a.div.withConfig({displayName:"Navbar__Nav"})(["flex:1;display:flex;justify-content:flex-end;@media screen and (max-width:920px){display:none;",";}"],function(e){return e.active?"\n    display: block;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    background: rgba(255, 255, 255, 0.9);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n    ":null}),E=d.a.ul.withConfig({displayName:"Navbar__Links"})(["list-style-type:none;margin:0;cursor:default;text-align:center;"]),C=d.a.li.withConfig({displayName:"Navbar__LinksItem"})(["padding:0;margin:0;display:inline-block;margin-left:18px;font-size:1.35rem;letter-spacing:1px;font-weight:600;text-transform:uppercase;cursor:pointer;a{color:inherit;}a:hover{color:#2977f5;}@media screen and (max-width:920px){display:block;margin-bottom:1em;}"]),v=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={active:!1},n.toggle=n.toggle.bind(o()(o()(n))),n}i()(t,e);var n=t.prototype;return n.toggle=function(){this.setState(function(e){return{active:!e.active}})},n.render=function(){var e=this.state.active;return c.a.createElement(s.a,null,c.a.createElement(g,null,c.a.createElement(u.Link,{to:"/"},c.a.createElement("img",{height:"60",src:A.a,alt:""})),c.a.createElement(f,{onClick:this.toggle},"☰"),c.a.createElement(Q,{active:e},c.a.createElement(h,{onClick:this.toggle},"✕"),c.a.createElement(E,null,p.map(function(e){return c.a.createElement(C,{key:e.href},e.external?c.a.createElement("a",{href:e.href},e.title):c.a.createElement(u.Link,{to:e.href},e.title))})))))},t}(c.a.Component);t.a=v},167:function(e,t,n){e.exports=n.p+"static/logo-68375e30142a8f5faa97f58bbb36842c.png"},168:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(8),o=n.n(r),l=n(171),c=n.n(l),u=n(155),d=n(156),s=u.a.div.withConfig({displayName:"Footer__Wrapper"})(["padding-top:3rem;padding-bottom:3rem;background:rgb(245,248,255);"]),m=function(){return i.a.createElement(s,null,i.a.createElement(d.a,{style:{textAlign:"center"}},i.a.createElement("a",{href:"//facebook.com"},"Facebook")," · ",i.a.createElement("a",{href:"//lnexun.com"},"ln(exun)")))},A=n(160),p=n.n(A),g=(n(161),n(163),function(e){var t=e.children;return i.a.createElement("div",null,i.a.createElement(c.a,{title:"Exun Clan",meta:[{name:"description",content:"Exun Clan is the computer club at Delhi Public School, R.K. Puram"}],link:[{rel:"shortcut icon",type:"image/png",href:""+p.a}]}),i.a.createElement("div",null,t),i.a.createElement(m,null))});g.propTypes={children:o.a.node},g.defaultProps={children:null},t.a=g}}]);
//# sourceMappingURL=component---src-pages-404-js-572177bfc1f5a2cc1919.js.map