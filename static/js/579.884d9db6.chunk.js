"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[579],{9610:function(e,t,n){n.d(t,{Z:function(){return C}});var r=n(5861),a=n(4687),i=n.n(a),o=n(1243),c=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];var u=function(e){return e.map((function(e){return c.find((function(t){return t.id===e}))})).map((function(e){return e.name})).join(", ")},s=n.p+"static/media/poster.baa212b4ab56e6c8735f.jpg",p=s,l=function(e){return e?"".concat("https://image.tmdb.org/t/p/w500").concat(e):p},d=function(e){return e.split("-")[0]},f=function(e){return Math.floor(e)},m=function(e){return e.map((function(e){return e.name})).join(", ")},v=function(e){return e.toFixed(1)},g=n.p+"static/media/avatar.9c54ede653c8ca2c7384.jpg",h=g,w=function(e){return e?"".concat("https://image.tmdb.org/t/p/w500").concat(e):h},x={dataFilter:function(e){var t=e.results.map((function(e){return{adult:e.adult,genre_ids:u(e.genre_ids),id:e.id,poster_path:l(e.poster_path),release_date:d(e.release_date),title:e.title.toUpperCase(),vote_average:v(e.vote_average)}}));return{page:e.page,results:t,total_pages:e.total_pages}},dataDetailsFilter:function(e){return{budget:e.budget,genres:m(e.genres),original_title:e.original_title,overview:e.overview,popularity:f(e.popularity),poster_path:l(e.poster_path),release_date:d(e.release_date),title:e.title.toUpperCase(),vote_average:v(e.vote_average),vote_count:e.vote_count}},dataCastFilter:function(e){return e.cast.map((function(e){return{id:e.id,profile_path:w(e.profile_path),name:e.name,character:e.character}}))}},_=x;o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var b="4efc7dd075300afeff5dc61a2436592d",k=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.signal,e.next=3,o.Z.get("trending/movie/day?api_key=".concat(b),{signal:n});case 3:if(r=e.sent,0!==(a=r.data).results.length){e.next=7;break}throw new Error;case 7:return c=_.dataFilter(a),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=(0,r.Z)(i().mark((function e(t,n){var r,a,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("search/movie?api_key=".concat(b,"&query=").concat(t,"&page=").concat(n,"&include_adult=false"));case 2:if(r=e.sent,0!==(a=r.data).results.length){e.next=6;break}throw new Error;case 6:return c=_.dataFilter(a),e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Z=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a,c,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.movieId,r=t.signal,e.next=3,o.Z.get("movie/".concat(n,"?api_key=").concat(b,"&language=en-US"),{signal:r});case 3:if(a=e.sent,0!==(c=a.data).length){e.next=7;break}throw new Error;case 7:return u=_.dataDetailsFilter(c),e.abrupt("return",u);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a,c,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.movieId,r=t.signal,e.next=3,o.Z.get("movie/".concat(n,"/credits?api_key=").concat(b,"&language=en-US"),{signal:r});case 3:if(a=e.sent,0!==(c=a.data).length){e.next=7;break}throw new Error;case 7:return u=_.dataCastFilter(c),e.abrupt("return",u);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.movieId,r=t.signal,e.next=3,o.Z.get("movie/".concat(n,"/reviews?api_key=").concat(b,"&language=en-US&page=1"),{signal:r});case 3:if(0!==(a=e.sent).length){e.next=6;break}throw new Error;case 6:return e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C={getTrending:k,getSearchMovie:y,getMovieDetails:Z,getMovieCredits:j,getMovieReviews:F}},1600:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(5861),a=n(9439),i=n(4687),o=n.n(i),c=n(2791),u=n(7689),s=n(9014),p=n(1243),l=n(9610),d=n(3028),f=n(184),m=function(e){var t=e.item,n=t.author,r=t.content;return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h3",{children:["Author: ",n]}),(0,f.jsx)("p",{children:r})]})},v=function(e){var t=e.reviews.results;if(t)return(0,f.jsx)(f.Fragment,{children:t.length>0?(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ul",{children:t&&t.map((function(e){return(0,f.jsx)(m,{item:e},e.id)}))})}):(0,f.jsx)("p",{children:"We don't have reviews for this movie "})})},g=function(){var e=(0,c.useState)({}),t=(0,a.Z)(e,2),n=t[0],i=t[1],m=(0,c.useState)(!1),g=(0,a.Z)(m,2),h=g[0],w=g[1],x=(0,c.useState)(null),_=(0,a.Z)(x,2),b=_[0],k=_[1],y=(0,u.UO)().movieId;return(0,c.useEffect)((function(){if(y){var e=new AbortController,t=function(){var t=(0,r.Z)(o().mark((function t(){var n,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(!0),k(null),t.prev=2,t.next=5,l.Z.getMovieReviews({movieId:y,signal:e.signal});case 5:n=t.sent,r=n.data,i(r),t.next=15;break;case 10:if(t.prev=10,t.t0=t.catch(2),!p.Z.isCancel(t.t0)){t.next=14;break}return t.abrupt("return");case 14:k(t.t0.message);case 15:return t.prev=15,w(!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[2,10,15,18]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){e.abort()}}}),[y]),(0,c.useEffect)((function(){b&&s.Am.error(b)}),[b]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(v,{reviews:n}),h&&(0,f.jsx)(d.Z,{}),(0,f.jsx)(s.x7,{position:"top-right"})]})}}}]);
//# sourceMappingURL=579.884d9db6.chunk.js.map