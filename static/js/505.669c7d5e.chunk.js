"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[505],{9071:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(8909),c=n(3504),a=n(6871),i={cardList:"MoviesList_cardList__wj5f0",movieCard:"MoviesList_movieCard__t3FKM",movieTitle:"MoviesList_movieTitle__4c-8q"},o=n(184),u=function(e){var t=e.response,n=(0,a.s0)();return(0,o.jsx)(r.Z,{children:(0,o.jsx)("ul",{className:i.movieList,children:t.results.map((function(e){return(0,o.jsx)("li",{className:i.movieCard,children:(0,o.jsxs)(c.rU,{to:"/movies/".concat(e.id),state:{from:n},children:[(0,o.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w300".concat(e.poster_path):"https://cdn.pixabay.com/photo/2016/03/31/18/36/cinema-1294496_1280.png",alt:e.title,width:"200px"}),(0,o.jsx)("h3",{className:i.movieTitle,children:e.title})]})},e.id)}))})})}},1812:function(e,t,n){n.d(t,{Z:function(){return a}});var r="PageHeading_heading__ewceW",c=n(184),a=function(e){var t=e.children;return(0,c.jsx)("h2",{className:r,children:t})}},8595:function(e,t,n){n.d(t,{Zn:function(){return f},bI:function(){return d},fS:function(){return h},yd:function(){return m},SB:function(){return v}});var r=n(5861),c=n(7757),a=n.n(c),i=n(4569),o=n.n(i),u="https://api.themoviedb.org/3/",s="43826aff38e7e981731c2a4c4f74555d";function l(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get(t);case 3:return n=e.sent,e.next=6,n.data;case 6:return r=e.sent,e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),alert("".concat(e.t0)),e.abrupt("return",Promise.reject(e.t0));case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function f(){return l("".concat(u,"trending/all/day?api_key=").concat(s))}function d(e){return l("".concat(u,"search/movie?api_key=").concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(e))}function h(e){return l("".concat(u,"movie/").concat(e,"?api_key=").concat(s,"&language=en-US"))}function m(e){return l("".concat(u,"movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"))}function v(e){return l("".concat(u,"movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"))}},5505:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(8152),c=n(1812),a=n(9071),i=n(2791),o=n(8595),u=n(8909),s=n(184),l=function(){var e=(0,i.useState)(null),t=(0,r.Z)(e,2),n=t[0],l=t[1];return(0,i.useEffect)((function(){(0,o.Zn)().then(l)}),[]),(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(c.Z,{children:"Popular Films"}),n&&(0,s.jsx)(a.Z,{response:n})]})}}}]);
//# sourceMappingURL=505.669c7d5e.chunk.js.map