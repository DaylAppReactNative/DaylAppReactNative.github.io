"use strict";(self.webpackChunkdayl_doc=self.webpackChunkdayl_doc||[]).push([[3153],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,k=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2868:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i=void 0,l={unversionedId:"screens/EditProfilePage",id:"screens/EditProfilePage",title:"EditProfilePage",description:"Page which allows the user to edit his profile",source:"@site/docs/screens/EditProfilePage.md",sourceDirName:"screens",slug:"/screens/EditProfilePage",permalink:"/docs/screens/EditProfilePage",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CommentsPage",permalink:"/docs/screens/CommentsPage"},next:{title:"ExplorePage",permalink:"/docs/screens/ExplorePage"}},p={},s=[],c={toc:s};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Page which allows the user to edit his profile"),(0,a.kt)("h1",{id:"mockup"},"Mockup"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"EditProfilePageMockup",src:r(6410).Z,width:"708",height:"1546"})),(0,a.kt)("h1",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../components/Utilities/FollowingButtonComponent"},"Follow")," the artist"),(0,a.kt)("li",{parentName:"ul"},"TabView",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Overview : ",(0,a.kt)("a",{parentName:"li",href:"../components/Informations"},"Biography")," + ",(0,a.kt)("a",{parentName:"li",href:"../components/ArtworkCarouselDouble/PaintingsFromSameArtist"},"PaintingsFromSameArtist")),(0,a.kt)("li",{parentName:"ul"},"Analysis : ",(0,a.kt)("a",{parentName:"li",href:"../NotLinkedYet"},"PostAnalysis")),(0,a.kt)("li",{parentName:"ul"},"Activity : Social network posts related to the artist"))),(0,a.kt)("li",{parentName:"ul"},"SeeMore : Let the user learn more about the artist with a ",(0,a.kt)("a",{parentName:"li",href:"../components/Modals/MoreInformationModal/ArtworkMoreInfo"},"modal")),(0,a.kt)("li",{parentName:"ul"},"Animation : On scroll, the header smoothly transforms into a sticky thinner ",(0,a.kt)("a",{parentName:"li",href:"../components/TopBarAnimatedHeader"},"bar")," with the name of the artist")),(0,a.kt)("h1",{id:"api-calls"},"API Calls"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"POST : update the users information")),(0,a.kt)("h1",{id:"structure"},"Structure"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"View"),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"../components/Utilities/OnClickImage"},"OnClickImage"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"../components/TopBarAnimatedHeader"},"AnimatedTopBar"),(0,a.kt)("br",{parentName:"p"}),"\n","ScrollView"),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"../components/HeaderComponent/HeaderArtistNonUserComponent"},"HeaderComponent"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"../components/Utilities/BackButton"},"BackButton"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"../components/Utilities/FollowingButtonComponent"},"FollowingButtonComponent"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"../NotLinkedYet"},"ArtistTabView"))))))}m.isMDXComponent=!0},6410:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/EditProfilePage-5e6502126c4a630471c08f41057c0f95.png"}}]);