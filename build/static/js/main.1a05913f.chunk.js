(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),l=a(7),r=a.n(l),c=(a(17),a(2)),i=(a(19),a(5)),d=(a(21),a(4)),m=a(0);function u(e){var t=Object(n.useState)("none"),a=Object(c.a)(t,2),l=a[0],r=a[1],u=Object(n.useState)("none"),s=Object(c.a)(u,2),b=s[0],g=s[1],E=Object(m.e)();return Object(n.useEffect)(function(){"/"===window.location.pathname?(r("underline"),g("none")):"/contact"===window.location.pathname&&(g("underline"),r("none"))},[E]),o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",{style:e.darkLightModeNav,onClick:e.clicking},o.a.createElement("section",{className:"rightSideNav"},o.a.createElement("h1",{style:e.darkLightModeText},"Text Tool Services"),o.a.createElement("div",{className:"about"},o.a.createElement(d.b,{to:"/",style:Object(i.a)({textDecoration:l},e.darkLightModeText)},"Home")),o.a.createElement("div",{className:"contacts"},o.a.createElement(d.b,{to:"/contact",style:Object(i.a)({textDecoration:b},e.darkLightModeText)},"Contact Us"))),o.a.createElement("section",{className:"leftSideNav"},o.a.createElement("input",{type:"checkbox",className:"dark-light-mode-checkbox","aria-label":"Choose to enable dark or light mode"}),o.a.createElement("label",{htmlFor:"dark-light-mode-label",className:"dark-light-mode-toggle-label",onClick:e.enableDarkModeOnClick,style:e.backgroundColorDarkMode},o.a.createElement("div",{className:"dark-light-mode-enabled-circle",style:e.transitionCircle})),o.a.createElement("h4",{style:e.darkLightModeText},"Enable ",e.darkLightModeTextNav," Mode"))))}a(23);function s(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),l=a[0],r=a[1],i=Object(n.useState)(0),d=Object(c.a)(i,2),m=d[0],u=d[1],s=Object(n.useState)(0),b=Object(c.a)(s,2),g=b[0],E=b[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container"},o.a.createElement("strong",null,"Playing with the text"),o.a.createElement("label",{htmlFor:"text-area"}),o.a.createElement("textarea",{id:"text-area",placeholder:"Enter your Text",value:l,onInput:function(e){r(e.target.value),u(e.target.value.split(" ").join("").length),E(e.target.value.split(" ").filter(function(e){return""!==e}).length)}}),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{onClick:function(){r(l.toUpperCase())},style:e.backgroundColorButton},"Click to change to UpperCase"),o.a.createElement("button",{onClick:function(){r(l.toLowerCase())},style:e.backgroundColorButton},"Click to change to LowerCase"),o.a.createElement("button",{onClick:function(){r(""),u(0),E(0)},style:e.backgroundColorButton},"Clear All"),o.a.createElement("button",{onClick:function(){navigator.clipboard.writeText(l)},style:e.backgroundColorButton},"Copy"),o.a.createElement("button",{onClick:function(){navigator.clipboard.readText().then(function(e){r(e),u(e.split(" ").join("").length),E(e.split(" ").filter(function(e){return""!==e}).length)})},style:e.backgroundColorButton},"Paste")),o.a.createElement("div",{className:"numberOfWords"},o.a.createElement("h3",{style:e.textAreaColor},"The Number of Characters are ",o.a.createElement("span",null,m)," and the Number of Words are ",o.a.createElement("span",null,g)))))}a(25);function b(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),l=a[0],r=a[1];return o.a.createElement("div",{className:"contact-container"},o.a.createElement("h1",null,"Contact Us"),o.a.createElement("p",{style:e.textAreaColor},"Need additional information, want to report a defect or have a question or comment? Use below form or email us at contact us ",o.a.createElement("code",null,"@texttools.services")," to share your feedbacks and experience about our services."),o.a.createElement("div",{className:"contact-details"},o.a.createElement("div",{className:"name-container"},o.a.createElement("label",{htmlFor:"name-input",style:e.textAreaColor},"Name: "),o.a.createElement("input",{type:"text",id:"name-input",placeholder:"Enter your Name",name:"name"})),o.a.createElement("div",{className:"email-container"},o.a.createElement("label",{htmlFor:"email-input",style:e.textAreaColor},"Email: "),o.a.createElement("input",{type:"email",id:"email-input",placeholder:"Enter your Email",name:"email"})),o.a.createElement("div",{className:"textarea-container"},o.a.createElement("label",{htmlFor:"text-area-contact"}),o.a.createElement("textarea",{id:"text-area-contact",placeholder:"Enter your Message",value:l,onChange:function(e){r(e.target.value)}}))))}var g=function(){var e=Object(n.useState)({modeEnabled:"#1F2633",textModeEnabled:"white",modeTextNav:"Dark",translateXValue:"0px",labelBackgroundColor:"#c5d1dc84",btnBgColor:"green",textColor:"black",contactPgUnderline:"none"}),t=Object(c.a)(e,2),a=t[0],l=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(u,{enableDarkModeOnClick:function(){"#1F2633"===a.modeEnabled?(document.body.style.backgroundColor="#1F2633",l({modeEnabled:"rgb(185, 192, 198)",textModeEnabled:"black",modeTextNav:"Light",translateXValue:"+70%",btnBgColor:"rgb(185, 192, 198)",textColor:"white",labelBackgroundColor:"#00D1FF"})):(document.body.style.backgroundColor="white",l({modeEnabled:"#1F2633",textModeEnabled:"white",modeTextNav:"Dark",translateXValue:"0px",btnBgColor:"green",textColor:"black",labelBackgroundColor:"#c5d1dc84"}))},darkLightModeNav:{backgroundColor:a.modeEnabled},darkLightModeTextNav:a.modeTextNav,darkLightModeText:{color:a.textModeEnabled},transitionCircle:{transform:"translateX( ".concat(a.translateXValue," )")},backgroundColorDarkMode:{backgroundColor:a.labelBackgroundColor},currentPgIsContact:{textDecoration:a.contactPgUnderline}}),o.a.createElement(m.c,null,o.a.createElement(m.a,{path:"/",element:o.a.createElement(s,{backgroundColorButton:{backgroundColor:a.btnBgColor,color:a.textModeEnabled},textAreaColor:{color:a.textColor}})}),o.a.createElement(m.a,{path:"/contact",element:o.a.createElement(b,{textAreaColor:{color:a.textColor}})})))},E=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,28)).then(function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),n(e),o(e),l(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d.a,null,o.a.createElement(g,null)))),E()},8:function(e,t,a){e.exports=a(27)}},[[8,3,2]]]);
//# sourceMappingURL=main.1a05913f.chunk.js.map