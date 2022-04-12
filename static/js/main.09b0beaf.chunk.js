(this["webpackJsonptrivia-test"]=this["webpackJsonptrivia-test"]||[]).push([[0],{30:function(e,t,a){e.exports=a(56)},38:function(e,t,a){},41:function(e,t){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),s=a(4),i=a(10),u=a(13),l=a(24),m=a(25),d=a(1),f={name:"",score:0,assertions:0,gravatarEmail:"",gravatarImage:""},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_REQUEST":return Object(d.a)(Object(d.a)({},e),{},{name:t.value.name,gravatarEmail:t.value.email});case"GRAVATAR_IMAGE":return Object(d.a)(Object(d.a)({},e),{},{gravatarImage:t.value});case"ADD_SCORE":return Object(d.a)(Object(d.a)({},e),{},{score:e.score+t.value,assertions:e.assertions+1});case"CLEAR_SCORE":return Object(d.a)(Object(d.a)({},e),{},{score:0});default:return e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOKEN_REQUEST":return t.value;default:return e}},E={localStorage:[{name:"",score:"",picture:""}]},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RANKING_REQUEST":return Object(d.a)(Object(d.a)({},e),{},{localStorage:t.value});default:return e}},v={questions:""},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"QUESTION_ACTION":return Object(d.a)(Object(d.a)({},e),{},{questions:t.value});case"CLEAR_QUESTION":return Object(d.a)(Object(d.a)({},e),{},{questions:""});default:return e}},h={correct:"",answers:[],disabledBtn:!1,newAnswer:!1,answer:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ANSWER":if(e.correct===t.type.correct)return e;var a=.5,n=t.answers.sort((function(){return Math.random()-a}));return Object(d.a)(Object(d.a)({},e),{},{correct:t.correct,answers:n});case"DISABLED_AWNSWERS":return Object(d.a)(Object(d.a)({},e),{},{disabledBtn:t.value});case"CLEAR_ANSWER":return Object(d.a)(Object(d.a)({},e),{},{correct:"",answers:[]});default:return e}},y={timerRunning:!0,time:30,timerId:void 0},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TIMER_RUNNING":return t.value?Object(d.a)(Object(d.a)({},e),{},{timerRunning:t.value,time:30}):Object(d.a)(Object(d.a)({},e),{},{timerRunning:t.value});case"TIMER":return Object(d.a)(Object(d.a)({},e),{},{time:e.time-1});case"TIMER_ID":return Object(d.a)(Object(d.a)({},e),{},{timerId:t.value});default:return e}},S=Object(u.combineReducers)({player:b,token:p,ranking:g,questions:O,answers:j,timer:N}),w=Object(u.createStore)(S,Object(l.composeWithDevTools)(Object(u.applyMiddleware)(m.a)));window.Cypress&&(window.store=w);var k=w,R=a(3),_=(a(38),a(11)),I=a.n(_),A=a(16),C=a(8),T=a(26),q=a.n(T),x=function(e){return{type:"USER_REQUEST",value:e}},U=function(e){return{type:"TIMER_RUNNING",value:e}},D=function(e){return{type:"TIMER_ID",value:e}},W=function(e){return{type:"DISABLED_AWNSWERS",value:e}},Q=function(e){var t=q()(e).toString();return{type:"GRAVATAR_IMAGE",value:"https://www.gravatar.com/avatar/".concat(t)}},M=function(){return function(){var e=Object(A.a)(I.a.mark((function e(t){var a,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api_token.php?command=request");case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t({type:"TOKEN_REQUEST",value:n.token});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};a(42);function L(e){var t=Object(n.useState)(""),a=Object(C.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(""),u=Object(C.a)(i,2),l=u[0],m=u[1],d=Object(n.useState)(!0),f=Object(C.a)(d,2),b=f[0],p=f[1],E=Object(s.b)();function g(){return(g=Object(A.a)(I.a.mark((function t(){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:E(M()),E(x({name:c,email:l})),E(Q(l)),(0,e.history.push)("/game");case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){c.length>0&&l.length>0?p(!1):p(!0)}),[c,l]),r.a.createElement("div",{className:"login"},r.a.createElement("form",{className:"form-login"},r.a.createElement("label",{htmlFor:"login-name"},r.a.createElement("input",{className:"input-login","data-testid":"input-player-name",id:"login-name",name:"name",value:c,onChange:function(e){var t=e.target;o(t.value)},placeholder:"Name"})),r.a.createElement("label",{htmlFor:"login-email"},r.a.createElement("input",{className:"input-login","data-testid":"input-gravatar-email",id:"login-email",name:"email",value:l,onChange:function(e){var t=e.target;m(t.value)},placeholder:"E-mail"})),r.a.createElement("button",{className:"btn-login","data-testid":"btn-play",disabled:b,type:"button",onClick:function(){return g.apply(this,arguments)}},"Play"),r.a.createElement("button",{className:"btn-settings","data-testid":"btn-settings",type:"button",onClick:function(){(0,e.history.push)("/settings")}},"Settings")))}a(43);function J(){var e=Object(s.c)((function(e){return e.player})),t=e.name,a=e.score,n=e.gravatarImage;return r.a.createElement("div",{className:"header-game"},r.a.createElement("img",{className:"imagem-game","data-testid":"header-profile-picture",src:n,alt:"user"}),r.a.createElement("span",{className:"span-header","data-testid":"header-player-name"},"Jogador: ",t),r.a.createElement("span",null,"Pontos: "),r.a.createElement("span",{className:"span-header","data-testid":"header-score"}," ",a))}var B=a(29),G=a(27);a(44);function P(e){var t=Object(s.c)((function(e){return e.answers})),a=t.answers,c=t.correct,o=t.disabledBtn,i=Object(s.c)((function(e){return e.timer})),u=i.timerId,l=i.time,m=i.timerRunning,d=e.setHasClick,f=e.difficulty,b=Object(n.useState)(["","","",""]),p=Object(C.a)(b,2),E=p[0],g=p[1],v=Object(s.b)();Object(n.useEffect)((function(){g(["","","",""]),v(W(!1))}),[a,v]);var O=function(){var e=[],t=0;return a.forEach((function(a){a!==c?(e.push("wrong-answer-".concat(t)),t+=1):e.push("correct-answer")})),e}();function h(e){!function(e){if(e===c){v({type:"ADD_SCORE",value:10+{hard:3,medium:2,easy:1}[f]*l})}}(e.target.id),v(U(!1));var t=O.map((function(e){return"correct-answer"===e?"green":"red"}));g(t),d(!0),clearInterval(u),v(W(!0))}return Object(n.useEffect)((function(){if(l<1&&!0===m){v(U(!1));var e=O.map((function(e){return"correct-answer"!==e?"red":"green"}));g(e),d(!0),clearInterval(u)}}),[l,m,v,O,d,u]),r.a.createElement("div",{"data-testid":"answer-options",className:"answers"},a.map((function(e,t){return r.a.createElement("button",{key:t,type:"button","data-testid":O[t],onClick:function(e){return h(e)},className:E[t],disabled:o,id:e},e)})))}a(45),a(46);function F(){var e=Object(s.c)((function(e){return e.timer})),t=e.time,a=e.timerId,c=Object(n.useState)("timer"),o=Object(C.a)(c,2),i=o[0],u=o[1],l=Object(s.b)();return Object(n.useEffect)((function(){if(void 0===a){var e=setInterval((function(){l({type:"TIMER"})}),1e3);l(D(e))}}),[a,l]),Object(n.useEffect)((function(){t<1&&clearInterval(a)}),[t,a]),Object(n.useEffect)((function(){0===t&&l(W(!0)),5!==t||/pulse/.test(i)||u("".concat(i," pulse"))}),[t,l,u,i]),r.a.createElement("span",{className:i},t)}function K(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.questions.questions})),a=Object(s.c)((function(e){return e.player})),c=a.score,o=a.name,i=a.gravatarImage,u=Object(n.useState)(null),l=Object(C.a)(u,2),m=l[0],d=l[1],f=Object(s.c)((function(e){return e})).token,b=Object(n.useState)([]),p=Object(C.a)(b,2),E=p[0],g=p[1],v=Object(n.useState)({}),O=Object(C.a)(v,2),h=O[0],j=O[1],y=Object(n.useState)(0),N=Object(C.a)(y,2),S=N[0],w=N[1],R=Object(n.useState)(!1),_=Object(C.a)(R,2),T=_[0],q=_[1];Object(n.useEffect)((function(){e({type:"CLEAR_SCORE"}),e(function(){var e=Object(A.a)(I.a.mark((function e(t){var a,n,r,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=k.getState(),n=a.token,e.next=3,fetch("https://opentdb.com/api.php?amount=5&token=".concat(n));case 3:return r=e.sent,e.next=6,r.json();case 6:c=e.sent,t({type:"QUESTION_ACTION",value:c});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(n.useEffect)((function(){3===t.response_code?e(M()):g(t.results)}),[t,e,f]),Object(n.useEffect)((function(){E&&(w(1),j(E[0]))}),[E]);function x(){j(E[S]),w(S+1),q(!1),e(U(!0)),e(D(void 0)),T&&5===S&&(!function(){if(localStorage.ranking){var e=JSON.parse(localStorage.ranking);e.push({name:o,score:c,picture:i}),localStorage.ranking=JSON.stringify(e)}else localStorage.ranking=JSON.stringify([{name:o,score:c,picture:i}])}(),e({type:"CLEAR_ANSWER"}),e({type:"CLEAR_QUESTION"}))}return Object(n.useEffect)((function(){var t,a;h&&h.category&&(e((t=[].concat(Object(B.a)(h.incorrect_answers),[h.correct_answer]),a=h.correct_answer,{type:"ANSWER",answers:t,correct:a})),d("questions"))}),[h,e]),r.a.createElement("div",{className:m},h&&h.category&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{"data-testid":"question-category",className:"questions__category"},h.category),r.a.createElement("p",{"data-testid":"question-text",className:"questions__question"},h.question),r.a.createElement(F,null),r.a.createElement(P,{difficulty:h.difficulty,setHasClick:q})),T&&S<5&&r.a.createElement("button",{type:"button","data-testid":"btn-next",onClick:x,className:"questions__next-question"},"Next Question"),T&&5===S&&r.a.createElement(G.Link,{to:"/feedback",onClick:x},r.a.createElement("button",{type:"button","data-testid":"btn-next",className:"questions__next-question"},"Next Question")))}a(52);function H(){return r.a.createElement("div",{className:"game"},r.a.createElement(J,null),r.a.createElement(K,null))}function V(){return r.a.createElement("div",null,r.a.createElement("h1",{"data-testid":"settings-title"},"Settings"))}a(53);function $(){var e=JSON.parse(localStorage.ranking);return r.a.createElement("div",{className:"ranking"},r.a.createElement("div",{className:"container-ranking"},r.a.createElement("h1",{"data-testid":"ranking-title"},"Ranking"),e.sort((function(e,t){return t.score-e.score})).map((function(e,t){return r.a.createElement("div",{key:t,className:"ranking-jogador"},r.a.createElement("img",{src:e.picture,alt:"player",className:"img-ranking"}),r.a.createElement("span",{"data-testid":"player-name-".concat(t)},e.name),r.a.createElement("span",null,"- Pontos:"),r.a.createElement("span",{"data-testid":"player-score-".concat(t)},e.score))})),r.a.createElement(i.b,{to:"/"},r.a.createElement("button",{className:"button-ranking",type:"button","data-testid":"btn-go-home"},"Jogar novamente"))))}a(54);function z(){var e=Object(s.c)((function(e){return e.player})),t=e.assertions,a=e.score;return r.a.createElement("div",{className:"feedback"},r.a.createElement(J,null),r.a.createElement("h2",{"data-testid":"feedback-text"},t>=3?"Well Done!":"Could be better..."),r.a.createElement("section",null,r.a.createElement("h3",null,"Placar final:"," ",r.a.createElement("span",{"data-testid":"feedback-total-score"},Number(a))," ","pontos"),r.a.createElement("h3",null,"Total de perguntas corretas:"," ",r.a.createElement("span",{"data-testid":"feedback-total-question"},t)," ")),r.a.createElement("section",null),r.a.createElement(i.b,{to:"/ranking"},r.a.createElement("button",{className:"button-feedback",type:"button","data-testid":"btn-ranking"},"Ranking")),r.a.createElement(i.b,{to:"/"},r.a.createElement("button",{className:"button-feedback",type:"button",id:"button-play-again","data-testid":"btn-play-again"},"Play Again")))}function X(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(R.Switch,null,r.a.createElement(R.Route,{exact:!0,path:"/",component:L}),r.a.createElement(R.Route,{exact:!0,path:"/game",component:H}),r.a.createElement(R.Route,{path:"/settings",component:V}),r.a.createElement(R.Route,{path:"/ranking",component:$}),r.a.createElement(R.Route,{path:"/feedback",component:z}))))}a(55),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(i.a,null,r.a.createElement(s.a,{store:k},r.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.09b0beaf.chunk.js.map