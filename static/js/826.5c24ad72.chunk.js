"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[826],{9071:function(e,t,s){s.d(t,{Z:function(){return o}});var r=s(8909),n=s(501),i=s(6871),a={cardList:"MoviesList_cardList__wj5f0",movieCard:"MoviesList_movieCard__t3FKM",movieTitle:"MoviesList_movieTitle__4c-8q"},c=s(184),o=function(e){var t=e.response,s=(0,i.s0)();return(0,c.jsx)(r.Z,{className:a.movieDetails,children:(0,c.jsx)("ul",{className:a.movieList,children:t.results.map((function(e){return(0,c.jsx)("li",{className:a.movieCard,children:(0,c.jsxs)(n.rU,{to:"/movies/".concat(e.id),state:{from:s},children:[(0,c.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w300".concat(e.poster_path):"https://cdn.pixabay.com/photo/2016/03/31/18/36/cinema-1294496_1280.png",alt:e.title,width:"200px"}),(0,c.jsx)("h3",{className:a.movieTitle,children:e.title})]})},e.id)}))})})}},1812:function(e,t,s){s.d(t,{Z:function(){return i}});var r="PageHeading_heading__ewceW",n=s(184),i=function(e){var t=e.children;return(0,n.jsx)("h2",{className:r,children:t})}},8826:function(e,t,s){s.r(t),s.d(t,{default:function(){return h}});var r=s(885),n={search:"MoviesPage_search__KjsW0"},i=s(1812),a=s(2791),c=s(591),o=s(9071),l=s(501),u=s(184),h=function(){var e=(0,a.useState)(null),t=(0,r.Z)(e,2),s=t[0],h=t[1],m=(0,a.useState)(""),d=(0,r.Z)(m,2),f=d[0],_=d[1],v=(0,l.lr)({}),p=(0,r.Z)(v,2),x=p[0],g=p[1],j=x.get("query");(0,a.useEffect)((function(){j&&(0,c.bI)(j).then(h)}),[j]),(0,a.useEffect)((function(){f&&(0,c.bI)(f).then(h)}),[f]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("form",{onSubmit:function(e){e.preventDefault(),f?g({query:f}):alert("Please, enter movie name")},className:n.searchForm,children:(0,u.jsx)("input",{className:n.search,type:"text",placeholder:"Search...",value:f,onChange:function(e){return _(e.currentTarget.value)}})}),s&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.Z,{children:"List of found films"}),(0,u.jsx)(o.Z,{response:s})]}),s&&0===s.total_results&&(0,u.jsx)(i.Z,{children:"There are no movies matching your search"})]})}}}]);
//# sourceMappingURL=826.5c24ad72.chunk.js.map