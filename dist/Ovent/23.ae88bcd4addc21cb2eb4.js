(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"6RxS":function(l,n,u){"use strict";u.r(n),u.d(n,"BlogDetailsModuleNgFactory",function(){return Q});var e=u("8Y7J");class t{}var i=u("pMnS"),o=u("+bQD"),d=u("j/Fd"),a=u("SVse"),r=u("jhVY"),c=u("EaNY"),s=u("iInd"),f=u("fyIi"),m=u("Ahbh"),p=u("s7LF"),g=u("PZeO"),v=u("LMvb"),b=u("WI+9"),h=u("gQo2"),y=u("sItN"),x=u("UloT");class k{constructor(l){this.router=l,this.blogdetails=b,this.blogpost=b,this.tags=y,this.blogcategory=h,this.authors=x,this.settings={arrows:!1,dots:!1,slidesToShow:2,slidesToScroll:1,autoplay:!0,autoplaySpeed:1500,speed:1500,responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:991,settings:{slidesToShow:2}},{breakpoint:780,settings:{slidesToShow:1}},{breakpoint:480,settings:{slidesToShow:1}}]}}getCategory(l){return h.filter(n=>l.includes(n.id))}getAuthor(l){return x.filter(n=>l.includes(n.id))}getBlogTags(l){return y.filter(n=>l.includes(n.id))}setPost(l){this.blogdetails=b.filter(n=>n.id==l)}ngAfterContentInit(){this.setPost(this.router.snapshot.params.id)}}var F=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"a",[["class","cat mr-2"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,1).onClick(u.button,u.ctrlKey,u.shiftKey,u.altKey,u.metaKey)&&t),t},null,null)),e["\u0275did"](1,671744,null,0,s.o,[s.n,s.a,a.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](2,null,["",""]))],function(l,n){l(n,1,0,e["\u0275inlineInterpolate"](1,"/blog/cat/",n.context.$implicit.id,""))},function(l,n){l(n,0,0,e["\u0275nov"](n,1).target,e["\u0275nov"](n,1).href),l(n,2,0,n.context.$implicit.title)})}function O(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"a",[["class","mr-1 mb-1"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,1).onClick(u.button,u.ctrlKey,u.shiftKey,u.altKey,u.metaKey)&&t),t},null,null)),e["\u0275did"](1,671744,null,0,s.o,[s.n,s.a,a.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](2,null,["",""]))],function(l,n){l(n,1,0,e["\u0275inlineInterpolate"](1,"/blog/tag/",n.context.$implicit.id,""))},function(l,n){l(n,0,0,e["\u0275nov"](n,1).target,e["\u0275nov"](n,1).href),l(n,2,0,n.context.$implicit.title)})}function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,11,"div",[["class","blog-item"],["ngxSlickItem",""]],null,null,null,null,null)),e["\u0275did"](1,212992,null,0,f.c,[e.ElementRef,e.PLATFORM_ID,f.a],null,null),(l()(),e["\u0275eld"](2,0,null,null,1,"div",[["class","blog-img"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,0,"img",[["class","img-fluid w-100"]],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,7,"div",[["class","blog-content"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,0,"i",[["class","far fa-calendar-alt"]],null,null,null,null,null)),(l()(),e["\u0275ted"](7,null,["",""])),(l()(),e["\u0275eld"](8,0,null,null,3,"h3",[],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,2,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,10).onClick(u.button,u.ctrlKey,u.shiftKey,u.altKey,u.metaKey)&&t),t},null,null)),e["\u0275did"](10,671744,null,0,s.o,[s.n,s.a,a.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](11,null,["",""]))],function(l,n){l(n,1,0),l(n,10,0,e["\u0275inlineInterpolate"](1,"/blog-details/",n.context.$implicit.id,""))},function(l,n){l(n,3,0,n.context.$implicit.img,n.context.$implicit.title),l(n,7,0,n.context.$implicit.postdate),l(n,9,0,e["\u0275nov"](n,10).target,e["\u0275nov"](n,10).href),l(n,11,0,n.context.$implicit.title)})}function $(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,9,"div",[["class","author-box"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"div",[["class","author-img"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,0,"img",[["class","img-fluid"]],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,6,"div",[["class","author-info"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Written by"])),(l()(),e["\u0275eld"](6,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](7,null,["",""])),(l()(),e["\u0275eld"](8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](9,null,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit.img,n.context.$implicit.name),l(n,7,0,n.context.$implicit.name),l(n,9,0,n.context.$implicit.shortdesc)})}function T(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","comment-img"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,0,"img",[["class","img-fluid"]],[[8,"src",4],[8,"alt",0]],null,null,null,null))],null,function(l,n){l(n,1,0,n.context.$implicit.img,n.context.$implicit.name)})}function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,n.context.$implicit.name)})}function L(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,12,"div",[["class","single-comment"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,T)),e["\u0275did"](2,278528,null,0,a.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](3,0,null,null,9,"div",[["class","comment-info"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,C)),e["\u0275did"](5,278528,null,0,a.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](6,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](7,null,["",""])),(l()(),e["\u0275eld"](8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](9,null,["",""])),(l()(),e["\u0275eld"](10,0,null,null,2,"a",[["class","reply-btn"],["href","#"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,0,"i",[["class","far fa-share"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["reply"]))],function(l,n){var u=n.component;l(n,2,0,u.getAuthor(n.context.$implicit.user)),l(n,5,0,u.getAuthor(n.context.$implicit.user))},function(l,n){l(n,7,0,n.context.$implicit.commentdate),l(n,9,0,n.context.$implicit.comment)})}function I(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,2).onClick(u.button,u.ctrlKey,u.shiftKey,u.altKey,u.metaKey)&&t),t},null,null)),e["\u0275did"](2,671744,null,0,s.o,[s.n,s.a,a.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275eld"](3,0,null,null,0,"i",[],[[8,"className",0]],null,null,null,null))],function(l,n){l(n,2,0,e["\u0275inlineInterpolate"](1,"",n.context.$implicit.url,""))},function(l,n){l(n,1,0,e["\u0275nov"](n,2).target,e["\u0275nov"](n,2).href),l(n,3,0,n.context.$implicit.icon)})}function N(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,9,"div",[["class","about-content text-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,0,"img",[["class","img-fluid"]],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e["\u0275ted"](3,null,["",""])),(l()(),e["\u0275eld"](4,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](5,null,["",""])),e["\u0275pid"](0,a.SlicePipe,[]),(l()(),e["\u0275eld"](7,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,I)),e["\u0275did"](9,278528,null,0,a.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,9,0,n.context.$implicit.social)},function(l,n){l(n,1,0,n.context.$implicit.img,n.context.$implicit.name),l(n,3,0,n.context.$implicit.name),l(n,5,0,e["\u0275unv"](n,5,0,e["\u0275nov"](n,6).transform(n.context.$implicit.shortdesc,0,100)))})}function S(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,120,"section",[["class","blog-details-section pt-120 pb-120"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,119,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,118,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,107,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,106,"div",[["class","blog-details-wrapper"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,16,"div",[["class","blog-content"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,w)),e["\u0275did"](7,278528,null,0,a.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](8,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](9,null,["",""])),(l()(),e["\u0275eld"](10,0,null,null,10,"ul",[["class","post-meta"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,0,"i",[["class","far fa-eye"]],null,null,null,null,null)),(l()(),e["\u0275ted"](13,null,[""," Views"])),(l()(),e["\u0275eld"](14,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,null,2,"a",[["href","#"]],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,0,"i",[["class","fal fa-calendar-alt"]],null,null,null,null,null)),(l()(),e["\u0275ted"](17,null,[""," Comments"])),(l()(),e["\u0275eld"](18,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e["\u0275eld"](19,0,null,null,0,"i",[["class","far fa-calendar-alt"]],null,null,null,null,null)),(l()(),e["\u0275ted"](20,null,["",""])),(l()(),e["\u0275eld"](21,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),e["\u0275eld"](22,0,null,null,27,"div",[["class","post-share-tag"]],null,null,null,null,null)),(l()(),e["\u0275eld"](23,0,null,null,26,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](24,0,null,null,5,"div",[["class","col-lg-6 col-md-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](25,0,null,null,4,"div",[["class","post-tag"]],null,null,null,null,null)),(l()(),e["\u0275eld"](26,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Releted Tags"])),(l()(),e["\u0275and"](16777216,null,null,1,null,O)),e["\u0275did"](29,278528,null,0,a.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](30,0,null,null,19,"div",[["class","col-lg-6 col-md-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](31,0,null,null,18,"div",[["class","post-social"]],null,null,null,null,null)),(l()(),e["\u0275eld"](32,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Social Share"])),(l()(),e["\u0275eld"](34,0,null,null,15,"ul",[],null,null,null,null,null)),(l()(),e["\u0275eld"](35,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e["\u0275eld"](36,0,null,null,1,"a",[["href","#"]],null,null,null,null,null)),(l()(),e["\u0275eld"](37,0,null,null,0,"i",[["class","fab fa-facebook-f"]],null,null,null,null,null)),(l()(),e["\u0275eld"](38,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e["\u0275eld"](39,0,null,null,1,"a",[["href","#"]],null,null,null,null,null)),(l()(),e["\u0275eld"](40,0,null,null,0,"i",[["class","fab fa-twitter"]],null,null,null,null,null)),(l()(),e["\u0275eld"](41,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e["\u0275eld"](42,0,null,null,1,"a",[["href","#"]],null,null,null,null,null)),(l()(),e["\u0275eld"](43,0,null,null,0,"i",[["class","fab fa-behance"]],null,null,null,null,null)),(l()(),e["\u0275eld"](44,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e["\u0275eld"](45,0,null,null,1,"a",[["href","#"]],null,null,null,null,null)),(l()(),e["\u0275eld"](46,0,null,null,0,"i",[["class","fab fa-linkedin"]],null,null,null,null,null)),(l()(),e["\u0275eld"](47,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e["\u0275eld"](48,0,null,null,1,"a",[["href","#"]],null,null,null,null,null)),(l()(),e["\u0275eld"](49,0,null,null,0,"i",[["class","fab fa-youtube"]],null,null,null,null,null)),(l()(),e["\u0275eld"](50,0,null,null,18,"div",[["class","post-prev-next"]],null,null,null,null,null)),(l()(),e["\u0275eld"](51,0,null,null,17,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](52,0,null,null,6,"div",[["class","col-lg-5 col-md-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](53,0,null,null,5,"div",[["class","box box-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](54,0,null,null,2,"a",[["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,55).onClick(u.button,u.ctrlKey,u.shiftKey,u.altKey,u.metaKey)&&t),t},null,null)),e["\u0275did"](55,671744,null,0,s.o,[s.n,s.a,a.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](-1,null,["Prev Post"])),(l()(),e["\u0275eld"](57,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Tips On Minimalist"])),(l()(),e["\u0275eld"](59,0,null,null,2,"div",[["class","col-lg-2 col-md-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](60,0,null,null,1,"div",[["class","box box-2 text-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](61,0,null,null,0,"img",[["alt",""],["src","assets/images/icon/icon-7.png"]],null,null,null,null,null)),(l()(),e["\u0275eld"](62,0,null,null,6,"div",[["class","col-lg-5 col-md-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](63,0,null,null,5,"div",[["class","box box-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](64,0,null,null,2,"a",[["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,65).onClick(u.button,u.ctrlKey,u.shiftKey,u.altKey,u.metaKey)&&t),t},null,null)),e["\u0275did"](65,671744,null,0,s.o,[s.n,s.a,a.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](-1,null,["Next Post"])),(l()(),e["\u0275eld"](67,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Less Is More"])),(l()(),e["\u0275eld"](69,0,null,null,7,"div",[["class","related-post"]],null,null,null,null,null)),(l()(),e["\u0275eld"](70,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Releted Post"])),(l()(),e["\u0275eld"](72,0,null,null,4,"ngx-slick-carousel",[["class","related-post-slide"]],null,null,null,m.b,m.a)),e["\u0275prd"](5120,null,p.b,function(l){return[l]},[f.a]),e["\u0275did"](74,13287424,[["slickModal",4]],0,f.a,[e.ElementRef,e.NgZone,e.PLATFORM_ID],{config:[0,"config"]},null),(l()(),e["\u0275and"](16777216,null,0,1,null,R)),e["\u0275did"](76,278528,null,0,a.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,$)),e["\u0275did"](78,278528,null,0,a.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](79,0,null,null,4,"div",[["class","comment-area"]],null,null,null,null,null)),(l()(),e["\u0275eld"](80,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["03 Comments"])),(l()(),e["\u0275and"](16777216,null,null,1,null,L)),e["\u0275did"](83,278528,null,0,a.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](84,0,null,null,26,"div",[["class","comment-form-area"]],null,null,null,null,null)),(l()(),e["\u0275eld"](85,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Post Comment"])),(l()(),e["\u0275eld"](87,0,null,null,23,"div",[["class","comment-form"]],null,null,null,null,null)),(l()(),e["\u0275eld"](88,0,null,null,22,"form",[],null,null,null,null,null)),(l()(),e["\u0275eld"](89,0,null,null,21,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](90,0,null,null,3,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](91,0,null,null,2,"div",[["class","form_group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](92,0,null,null,0,"textarea",[["class","form_control"],["name","message"],["placeholder","Type your comments...."]],null,null,null,null,null)),(l()(),e["\u0275eld"](93,0,null,null,0,"i",[["class","fal fa-pencil-alt"]],null,null,null,null,null)),(l()(),e["\u0275eld"](94,0,null,null,3,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](95,0,null,null,2,"div",[["class","form_group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](96,0,null,null,0,"input",[["class","form_control"],["name","name"],["placeholder","Type your name...."],["required",""],["type","text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](97,0,null,null,0,"i",[["class","fal fa-user"]],null,null,null,null,null)),(l()(),e["\u0275eld"](98,0,null,null,3,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](99,0,null,null,2,"div",[["class","form_group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](100,0,null,null,0,"input",[["class","form_control"],["name","email"],["placeholder","Type your email...."],["required",""],["type","email"]],null,null,null,null,null)),(l()(),e["\u0275eld"](101,0,null,null,0,"i",[["class","fal fa-envelope"]],null,null,null,null,null)),(l()(),e["\u0275eld"](102,0,null,null,3,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](103,0,null,null,2,"div",[["class","form_group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](104,0,null,null,0,"input",[["class","form_control"],["name","website"],["placeholder","Type your website...."],["required",""],["type","text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](105,0,null,null,0,"i",[["class","fal fa-globe"]],null,null,null,null,null)),(l()(),e["\u0275eld"](106,0,null,null,4,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](107,0,null,null,3,"div",[["class","form_button"]],null,null,null,null,null)),(l()(),e["\u0275eld"](108,0,null,null,2,"button",[["class","main-btn"]],null,null,null,null,null)),(l()(),e["\u0275eld"](109,0,null,null,0,"i",[["class","fal fa-comments"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Post Comment"])),(l()(),e["\u0275eld"](111,0,null,null,9,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](112,0,null,null,6,"div",[["class","ovent-sidebar blog-sidebar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](113,0,null,null,5,"div",[["class","widget-box about-box mb-40"]],null,null,null,null,null)),(l()(),e["\u0275eld"](114,0,null,null,2,"h3",[["class","widget-title"]],null,null,null,null,null)),(l()(),e["\u0275eld"](115,0,null,null,0,"span",[["class","line"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["About Me"])),(l()(),e["\u0275and"](16777216,null,null,1,null,N)),e["\u0275did"](118,278528,null,0,a.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](119,0,null,null,1,"app-blog-sidebar",[],null,null,null,g.b,g.a)),e["\u0275did"](120,114688,null,0,v.a,[],null,null)],function(l,n){var u=n.component;l(n,7,0,u.getCategory(n.context.$implicit.category)),l(n,29,0,u.getBlogTags(n.context.$implicit.tags)),l(n,55,0,"/"),l(n,65,0,"/"),l(n,74,0,u.settings),l(n,76,0,u.blogpost),l(n,78,0,u.getAuthor(n.context.$implicit.author)),l(n,83,0,n.context.$implicit.reviews),l(n,118,0,u.getAuthor(n.context.$implicit.author)),l(n,120,0)},function(l,n){l(n,9,0,n.context.$implicit.title),l(n,13,0,n.context.$implicit.views),l(n,17,0,n.context.$implicit.reviews.length),l(n,20,0,n.context.$implicit.postdate),l(n,21,0,n.context.$implicit.htmldesc),l(n,54,0,e["\u0275nov"](n,55).target,e["\u0275nov"](n,55).href),l(n,64,0,e["\u0275nov"](n,65).target,e["\u0275nov"](n,65).href)})}function K(l){return e["\u0275vid"](0,[(l()(),e["\u0275and"](16777216,null,null,1,null,S)),e["\u0275did"](1,278528,null,0,a.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,1,0,n.component.blogdetails)},null)}var M=u("R8T8"),D=u("FezY");class P{constructor(){this.classname="footer-area footer-area-v1 footer-area-v3  bg_cover",this.ftlogo="assets/images/logo-2.png",this.ftbg="assets/images/footer-3.jpg"}ngOnInit(){}}var A=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function V(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-header",[],null,[["window","scroll"]],function(l,n,u){var t=!0;return"window:scroll"===n&&(t=!1!==e["\u0275nov"](l,1).onWindowScroll(u)&&t),t},o.b,o.a)),e["\u0275did"](1,114688,null,0,d.a,[a.DOCUMENT],null,null),(l()(),e["\u0275eld"](2,0,null,null,1,"app-breadcrumb",[],null,null,null,r.b,r.a)),e["\u0275did"](3,114688,null,0,c.a,[],null,null),(l()(),e["\u0275eld"](4,0,null,null,1,"app-content",[],null,null,null,K,F)),e["\u0275did"](5,1097728,null,0,k,[s.a],null,null),(l()(),e["\u0275eld"](6,0,null,null,1,"app-footer",[],null,null,null,M.b,M.a)),e["\u0275did"](7,114688,null,0,D.a,[],{layout:[0,"layout"],logo:[1,"logo"],bg:[2,"bg"]},null)],function(l,n){var u=n.component;l(n,1,0),l(n,3,0),l(n,7,0,u.classname,u.ftlogo,u.ftbg)},null)}function _(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-blog-details",[],null,null,null,V,A)),e["\u0275did"](1,114688,null,0,P,[],null,null)],function(l,n){l(n,1,0)},null)}var E=e["\u0275ccf"]("app-blog-details",P,_,{},{},[]),j=u("9AJC"),G=u("G0yt"),J=u("iryk"),B=u("lABs"),z=u("GytN"),U=u("IheW");class W{}var Y=u("B0QU"),q=u("hGdz"),Q=e["\u0275cmf"](t,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,E,j.a,j.b,j.l,j.m,j.i,j.j,j.k]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,a.NgLocalization,a.NgLocaleLocalization,[e.LOCALE_ID]),e["\u0275mpd"](4608,p.e,p.e,[]),e["\u0275mpd"](4608,G.v,G.v,[e.ComponentFactoryResolver,e.Injector,G.pb,G.w]),e["\u0275mpd"](5120,J.a,B.b,[s.n]),e["\u0275mpd"](4608,z.NgMasonryGridService,z.NgMasonryGridService,[e.PLATFORM_ID]),e["\u0275mpd"](4608,U.h,U.n,[a.DOCUMENT,e.PLATFORM_ID,U.l]),e["\u0275mpd"](4608,U.o,U.o,[U.h,U.m]),e["\u0275mpd"](5120,U.a,function(l){return[l]},[U.o]),e["\u0275mpd"](4608,U.k,U.k,[]),e["\u0275mpd"](6144,U.i,null,[U.k]),e["\u0275mpd"](4608,U.g,U.g,[U.i]),e["\u0275mpd"](6144,U.b,null,[U.g]),e["\u0275mpd"](4608,U.f,U.j,[U.b,e.Injector]),e["\u0275mpd"](4608,U.c,U.c,[U.f]),e["\u0275mpd"](1073742336,a.CommonModule,a.CommonModule,[]),e["\u0275mpd"](1073742336,s.p,s.p,[[2,s.u],[2,s.n]]),e["\u0275mpd"](1073742336,W,W,[]),e["\u0275mpd"](1073742336,G.c,G.c,[]),e["\u0275mpd"](1073742336,G.f,G.f,[]),e["\u0275mpd"](1073742336,G.g,G.g,[]),e["\u0275mpd"](1073742336,G.k,G.k,[]),e["\u0275mpd"](1073742336,G.l,G.l,[]),e["\u0275mpd"](1073742336,p.d,p.d,[]),e["\u0275mpd"](1073742336,p.a,p.a,[]),e["\u0275mpd"](1073742336,G.r,G.r,[]),e["\u0275mpd"](1073742336,G.t,G.t,[]),e["\u0275mpd"](1073742336,G.x,G.x,[]),e["\u0275mpd"](1073742336,G.E,G.E,[]),e["\u0275mpd"](1073742336,G.J,G.J,[]),e["\u0275mpd"](1073742336,G.P,G.P,[]),e["\u0275mpd"](1073742336,G.S,G.S,[]),e["\u0275mpd"](1073742336,G.V,G.V,[]),e["\u0275mpd"](1073742336,G.ab,G.ab,[]),e["\u0275mpd"](1073742336,G.db,G.db,[]),e["\u0275mpd"](1073742336,G.eb,G.eb,[]),e["\u0275mpd"](1073742336,G.fb,G.fb,[]),e["\u0275mpd"](1073742336,G.y,G.y,[]),e["\u0275mpd"](1073742336,B.a,B.a,[]),e["\u0275mpd"](1073742336,z.NgMasonryGridModule,z.NgMasonryGridModule,[]),e["\u0275mpd"](1073742336,Y.c,Y.c,[]),e["\u0275mpd"](1073742336,q.a,q.a,[]),e["\u0275mpd"](1073742336,U.e,U.e,[]),e["\u0275mpd"](1073742336,U.d,U.d,[]),e["\u0275mpd"](1073742336,f.b,f.b,[]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](1024,s.l,function(){return[[{path:"",component:P}]]},[]),e["\u0275mpd"](256,Y.b,{},[]),e["\u0275mpd"](256,U.l,"XSRF-TOKEN",[]),e["\u0275mpd"](256,U.m,"X-XSRF-TOKEN",[])])})}}]);