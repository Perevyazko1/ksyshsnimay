"use strict";(self.webpackChunknewksyshev=self.webpackChunknewksyshev||[]).push([[425],{425:function(e,n,r){r.r(n),r.d(n,{default:function(){return p}});var a=r(1413),t=r(5987),i=r(3433),o=r(9439),s=r(2791),c=r(2646),l=r(960),d={WrapperVideo:"VideoPage_WrapperVideo__hypyn",WrapperBlockVideo:"VideoPage_WrapperBlockVideo__8ej5K",Video:"VideoPage_Video__RAMJU",VideoNone:"VideoPage_VideoNone__1c7cp"},u=r(653),m=r(6507),v=r(8290),f=r(184),h=["className","children"],p=(0,s.memo)((function(e){var n=l.F.useGetDataQuery({param:"",source:"api-video/"}),r=n.data,p=(n.isLoading,n.error,(0,s.useState)(null)),N=(0,o.Z)(p,2),_=(N[0],N[1],(0,s.useState)(!1)),Z=(0,o.Z)(_,2),y=Z[0],j=Z[1],x=(0,s.useState)([]),k=(0,o.Z)(x,2),g=k[0],b=k[1];(0,s.useEffect)((function(){var e=function(e){b((function(n){var r=(0,i.Z)(n);return r[e]=!0,r}))};return C.current.forEach((function(n,r){n.addEventListener("loadeddata",(function(){return e(r)}))})),function(){C.current.forEach((function(n,r){n.removeEventListener("loadeddata",(function(){return e(r)}))}))}}),[]);var B=g.every((function(e){return e})),C=(0,s.useRef)([]);(0,s.useEffect)((function(){setTimeout((function(){j(!0)}),500)}),[]);var L=e.className,V=e.children,w=(0,t.Z)(e,h);return(0,f.jsx)(u.F,{children:(0,f.jsxs)("div",(0,a.Z)((0,a.Z)({className:(0,c.A)(d.VideoPage,{},[L])},w),{},{children:[y&&!r&&(0,f.jsx)(m.a,{}),(0,f.jsx)("div",{className:d.WrapperBlockVideo,children:r&&r.map((function(e,n){return(0,f.jsxs)("div",{className:d.WrapperVideo,children:[!B&&(0,f.jsx)(v.Z,{className:d.Video}),(0,f.jsx)("video",{className:d.Video,src:e.video,ref:function(e){e&&(C.current[n]=e)},onMouseEnter:function(){return function(e){if(C.current[e]){var n=C.current[e];n&&(n.muted=!0,n.play())}}(n)},onMouseLeave:function(){return function(e){if(C.current[e]){var n=C.current[e];n&&(n.muted=!1,n.currentTime=0)}}(n)}})]},n)}))}),V]}))})}))},2646:function(e,n,r){r.d(n,{A:function(){return i}});var a=r(9439),t=r(3433);function i(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return[e].concat((0,t.Z)(r.filter(Boolean)),(0,t.Z)(Object.entries(n).filter((function(e){var n=(0,a.Z)(e,2),r=(n[0],n[1]);return Boolean(r)})).map((function(e){return(0,a.Z)(e,1)[0]})))).join(" ")}},6507:function(e,n,r){r.d(n,{a:function(){return v}});var a=r(1413),t=r(5987),i=r(2791),o=r(2646),s="Loader_Loader__+T0A3",c="Loader_Wrapper__lsk5t",l="Loader_circle__6+5yj",d="Loader_shadow__CWNxj",u=r(184),m=["className","children"],v=(0,i.memo)((function(e){var n=e.className,r=(e.children,(0,t.Z)(e,m));return(0,u.jsx)("div",(0,a.Z)((0,a.Z)({className:(0,o.A)(s,{},[n])},r),{},{children:(0,u.jsxs)("div",{className:c,children:[(0,u.jsx)("div",{className:l}),(0,u.jsx)("div",{className:l}),(0,u.jsx)("div",{className:l}),(0,u.jsx)("div",{className:d}),(0,u.jsx)("div",{className:d}),(0,u.jsx)("div",{className:d})]})}))}))},653:function(e,n,r){r.d(n,{F:function(){return j}});var a=r(1413),t=r(5987),i=r(2791),o=r(2646),s=r(7022),c=r(8390),l=r(545),d=r(1087),u={"bg-body-tertiary":"NavBar_bg-body-tertiary__psQLh",Brand:"NavBar_Brand__3CYpO",Link:"NavBar_Link__S0r4I",ContainerLink:"NavBar_ContainerLink__eNOSx",Container:"NavBar_Container__np97q"},m=r(184),v=["className","children"],f=(0,i.memo)((function(e){var n=e.className,r=e.children,i=(0,t.Z)(e,v);return(0,m.jsxs)("div",(0,a.Z)((0,a.Z)({className:(0,o.A)(u.NavBarCustom,{},[n])},i),{},{children:[(0,m.jsx)(l.Z,{collapseOnSelect:!0,expand:"lg",className:"bg-body-tertiary",children:(0,m.jsxs)(s.Z,{className:u.Container,children:[(0,m.jsx)(l.Z.Brand,{className:u.Brand,href:"#home",children:"KSYSHSNIMAY"}),(0,m.jsx)(l.Z.Toggle,{"aria-controls":"responsive-navbar-nav"}),(0,m.jsx)(l.Z.Collapse,{id:"responsive-navbar-nav",children:(0,m.jsxs)(c.Z,{className:u.ContainerLink,children:[(0,m.jsx)(d.rU,{className:u.Link,to:"/ksyshsnimay",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),(0,m.jsx)(d.rU,{className:u.Link,to:"/video",children:"\u0412\u0438\u0434\u0435\u043e"}),(0,m.jsx)(d.rU,{className:u.Link,to:"/photo",children:"\u0424\u043e\u0442\u043e"}),(0,m.jsx)(d.rU,{className:u.Link,to:"/contact",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]})})]})}),r]}))})),h="BottomBlock_BottomBlock__Feykh",p="BottomBlock_BlockInfo__g2KCk",N=["className","children"],_=(0,i.memo)((function(e){var n=e.className,r=e.children,i=(0,t.Z)(e,N);return(0,m.jsxs)("div",(0,a.Z)((0,a.Z)({className:(0,o.A)(h,{},[n])},i),{},{children:[(0,m.jsx)("div",{className:p,children:(0,m.jsx)("a",{href:"https://perevyazko1.github.io",children:"Copyright \xa9 Perevyazko Andrey"})}),r]}))})),Z="PageWrapper_PageWrapper__wXBzN",y=["className","children"],j=(0,i.memo)((function(e){var n=e.className,r=e.children,i=(0,t.Z)(e,y);return(0,m.jsxs)("div",(0,a.Z)((0,a.Z)({className:(0,o.A)(Z,{},[n])},i),{},{children:[(0,m.jsx)(f,{}),r,(0,m.jsx)(_,{})]}))}))},8290:function(e,n,r){r.d(n,{Z:function(){return d}});var a=r(9439),t=r(1413),i=r(5987),o=r(2791),s=["count","wrapper","className","containerClassName","containerTestId","circle","style"],c=o.createContext({}),l=!0;function d(e){for(var n,r,d,u=e.count,m=void 0===u?1:u,v=e.wrapper,f=e.className,h=e.containerClassName,p=e.containerTestId,N=e.circle,_=void 0!==N&&N,Z=e.style,y=(0,i.Z)(e,s),j=o.useContext(c),x=(0,t.Z)({},y),k=0,g=Object.entries(y);k<g.length;k++){var b=(0,a.Z)(g[k],2),B=b[0];"undefined"===typeof b[1]&&delete x[B]}var C=(0,t.Z)((0,t.Z)((0,t.Z)({},j),x),{},{circle:_}),L=(0,t.Z)((0,t.Z)({},Z),function(e){var n=e.baseColor,r=e.highlightColor,a=e.width,t=e.height,i=e.borderRadius,o=e.circle,s=e.direction,c=e.duration,d=e.enableAnimation,u=void 0===d?l:d,m={};return"rtl"===s&&(m["--animation-direction"]="reverse"),"number"===typeof c&&(m["--animation-duration"]="".concat(c,"s")),u||(m["--pseudo-element-display"]="none"),"string"!==typeof a&&"number"!==typeof a||(m.width=a),"string"!==typeof t&&"number"!==typeof t||(m.height=t),"string"!==typeof i&&"number"!==typeof i||(m.borderRadius=i),o&&(m.borderRadius="50%"),"undefined"!==typeof n&&(m["--base-color"]=n),"undefined"!==typeof r&&(m["--highlight-color"]=r),m}(C)),V="react-loading-skeleton";f&&(V+=" ".concat(f));for(var w=null!==(n=C.inline)&&void 0!==n&&n,A=[],E=Math.ceil(m),W=0;W<E;W++){var S=L;if(E>m&&W===E-1){var P=null!==(r=S.width)&&void 0!==r?r:"100%",T=m%1,F="number"===typeof P?P*T:"calc(".concat(P," * ").concat(T,")");S=(0,t.Z)((0,t.Z)({},S),{},{width:F})}var I=o.createElement("span",{className:V,style:S,key:W},"\u200c");w?A.push(I):A.push(o.createElement(o.Fragment,{key:W},I,o.createElement("br",null)))}return o.createElement("span",{className:h,"data-testid":p,"aria-live":"polite","aria-busy":null!==(d=C.enableAnimation)&&void 0!==d?d:l},v?A.map((function(e,n){return o.createElement(v,{key:n},e)})):A)}}}]);
//# sourceMappingURL=425.02234658.chunk.js.map