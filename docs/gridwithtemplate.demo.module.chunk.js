webpackJsonp(["gridwithtemplate.demo.module"],{ccOd:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=t("LMZF"),u=function(){},a=t("tfJK"),d=t("drlO"),i=t("KhCp"),_=t("kL+h"),o=t("Un6q"),r=t("TMwh"),p=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,t=this;this.http.get("assets/data/code/data/templategrid/templategrid.html").subscribe(function(n){l=n.text()},function(l){},function(){t.htmlCode=l}),this.http.get("assets/data/code/data/templategrid/templategrid.text").subscribe(function(l){n=l.text()},function(l){},function(){t.typeScriptCode=n}),this.http.get("assets/data/componentdata/gridtemplate.json").subscribe(function(l){n=l.text()},function(l){},function(){t.dataSource=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l.prototype.getRowData=function(l){this.clickedRowData=l},l}(),m=e._1({encapsulation:2,styles:[],data:{}});function c(l){return e._27(0,[(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(1,0,null,null,4,"span",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                          "])),(l()(),e._3(3,0,null,null,1,"amexio-image",[],null,null,null,a._97,a._9)),e._2(4,114688,null,0,d._36,[],{path:[0,"path"]},null),(l()(),e._25(5,null,["\xa0"," ( "," )\n                        "])),(l()(),e._25(-1,null,["\n                        "]))],function(l,n){l(n,4,0,"http://amexio.org/showcaseapp/v3/assets/images/flags/flags/"+n.context.row.flag_32)},function(l,n){l(n,5,0,n.context.row.name,n.context.row.name_official)})}function h(l){return e._27(0,[(l()(),e._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._3(3,0,null,null,1,"prism-block",[],null,null,null,i.b,i.a)),e._2(4,4243456,null,0,_.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                  "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function s(l){return e._27(0,[(l()(),e._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._3(2,0,null,null,1,"prism-block",[],null,null,null,i.b,i.a)),e._2(3,4243456,null,0,_.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                  "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function x(l){return e._27(0,[(l()(),e._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._3(2,0,null,null,1,"prism-block",[],null,null,null,i.b,i.a)),e._2(3,4243456,null,0,_.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                  "]))],function(l,n){l(n,3,0,n.component.dataSource,"json")},null)}function f(l){return e._27(0,[(l()(),e._25(-1,null,["\n    "])),(l()(),e._3(1,0,null,null,180,"amexio-card",[["header","true"]],null,null,null,a._41,a.f)),e._2(2,114688,null,0,d.g,[],{header:[0,"header"]},null),(l()(),e._25(-1,null,["\n      "])),(l()(),e._3(4,0,null,0,2,"amexio-header",[],null,null,null,a._46,a.k)),e._2(5,114688,null,0,d.q,[],null,null),(l()(),e._25(-1,0,["\n         Data Grid Template \n      "])),(l()(),e._25(-1,null,["\n      "])),(l()(),e._3(8,0,null,1,172,"amexio-body",[],null,null,null,a._38,a.c)),e._2(9,114688,null,0,d.d,[],null,null),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(11,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e._25(-1,null,["To define the detail template, nest an ng-template tag inside the AmexioColumn component. The template context is set to the current row."])),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(14,0,null,0,165,"amexio-tab-view",[],null,null,null,a._55,a.t)),e._2(15,5357568,null,1,d.D,[e.B],null,null),e._23(603979776,1,{queryTabs:1}),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(18,0,null,0,51,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,a._56,a.u)),e._2(19,114688,[[1,4]],0,d.E,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(21,0,null,0,47,"amexio-row",[],null,null,null,a._52,a.q)),e._2(22,1163264,null,0,d.A,[],null,null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(24,0,null,0,43,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,a._43,a.h)),e._2(25,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(27,0,null,0,39,"amexio-card",[],null,null,null,a._41,a.f)),e._2(28,114688,null,0,d.g,[],{header:[0,"header"]},null),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(30,0,null,0,2,"amexio-header",[],null,null,null,a._46,a.k)),e._2(31,114688,null,0,d.q,[],null,null),(l()(),e._25(-1,0,["\n                     Data Grid Template \n                  "])),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(34,0,null,1,31,"amexio-body",[],null,null,null,a._38,a.c)),e._2(35,114688,null,0,d.d,[],null,null),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._3(37,0,null,0,21,"amexio-datagrid",[["title","Country Grid"]],null,[[null,"rowSelect"]],function(l,n,t){var e=!0;return"rowSelect"===n&&(e=!1!==l.component.getRowData(t)&&e),e},a._103,a._15)),e._2(38,1425408,null,1,d._44,[d.Y,e.h],{title:[0,"title"],pagesize:[1,"pagesize"],httpurl:[2,"httpurl"],httpmethod:[3,"httpmethod"],datareader:[4,"datareader"],enabledatafilter:[5,"enabledatafilter"]},{rowSelect:"rowSelect"}),e._23(603979776,2,{columnRef:1}),(l()(),e._25(-1,null,["\n                      "])),(l()(),e._3(41,0,null,null,6,"amexio-data-table-column",[],null,null,null,a._104,a._16)),e._2(42,49152,[[2,4]],2,d._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,3,{headerTemplate:0}),e._23(335544320,4,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n                        "])),(l()(),e.Y(0,[[4,2],["amexioBodyTmpl",2]],null,0,null,c)),(l()(),e._25(-1,null,["\n                      "])),(l()(),e._25(-1,null,["\n                      "])),(l()(),e._3(49,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._104,a._16)),e._2(50,49152,[[2,4]],2,d._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,5,{headerTemplate:0}),e._23(335544320,6,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n                      "])),(l()(),e._3(54,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._104,a._16)),e._2(55,49152,[[2,4]],2,d._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,7,{headerTemplate:0}),e._23(335544320,8,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._3(60,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),e._3(61,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Clicked row data :"])),(l()(),e._25(63,null,[" ",""])),e._19(0,o.f,[]),(l()(),e._25(-1,0,["\n                  "])),(l()(),e._25(-1,null,["\n                "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(71,0,null,0,70,"amexio-tab",[["title","API Reference"]],null,null,null,a._56,a.u)),e._2(72,114688,[[1,4]],0,d.E,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(74,0,null,0,23,"amexio-datagrid",[["title","Properties"]],null,null,null,a._103,a._15)),e._2(75,1425408,null,1,d._44,[d.Y,e.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e._23(603979776,9,{columnRef:1}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(78,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._104,a._16)),e._2(79,49152,[[9,4]],2,d._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,10,{headerTemplate:0}),e._23(335544320,11,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(83,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._104,a._16)),e._2(84,49152,[[9,4]],2,d._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,12,{headerTemplate:0}),e._23(335544320,13,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(88,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._104,a._16)),e._2(89,49152,[[9,4]],2,d._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,14,{headerTemplate:0}),e._23(335544320,15,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(93,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._104,a._16)),e._2(94,49152,[[9,4]],2,d._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,16,{headerTemplate:0}),e._23(335544320,17,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n            "])),(l()(),e._3(98,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(100,0,null,0,23,"amexio-datagrid",[["title","Column Properties"]],null,null,null,a._103,a._15)),e._2(101,1425408,null,1,d._44,[d.Y,e.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e._23(603979776,18,{columnRef:1}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(104,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._104,a._16)),e._2(105,49152,[[18,4]],2,d._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,19,{headerTemplate:0}),e._23(335544320,20,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(109,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._104,a._16)),e._2(110,49152,[[18,4]],2,d._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,21,{headerTemplate:0}),e._23(335544320,22,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(114,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._104,a._16)),e._2(115,49152,[[18,4]],2,d._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,23,{headerTemplate:0}),e._23(335544320,24,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(119,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._104,a._16)),e._2(120,49152,[[18,4]],2,d._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,25,{headerTemplate:0}),e._23(335544320,26,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(125,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(127,0,null,0,13,"amexio-datagrid",[["title","Events"]],null,null,null,a._103,a._15)),e._2(128,1425408,null,1,d._44,[d.Y,e.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),e._23(603979776,27,{columnRef:1}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(131,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._104,a._16)),e._2(132,49152,[[27,4]],2,d._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,28,{headerTemplate:0}),e._23(335544320,29,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(136,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._104,a._16)),e._2(137,49152,[[27,4]],2,d._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,30,{headerTemplate:0}),e._23(335544320,31,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n\n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(143,0,null,0,31,"amexio-tab",[["title","Source"]],null,null,null,a._56,a.u)),e._2(144,114688,[[1,4]],0,d.E,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(146,0,null,0,27,"div",[["style","overflow-y: scroll;"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(148,0,null,null,24,"amexio-vertical-tab-view",[],null,null,null,a._58,a.w)),e._2(149,5357568,null,1,d.I,[e.B],null,null),e._23(603979776,32,{queryTabs:1}),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(152,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,a._56,a.u)),e._2(153,114688,[[32,4]],0,d.E,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e._25(-1,0,["\n                  "])),(l()(),e.Y(16777216,null,0,1,null,h)),e._2(156,16384,null,0,o.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(159,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,a._56,a.u)),e._2(160,114688,[[32,4]],0,d.E,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n                  "])),(l()(),e.Y(16777216,null,0,1,null,s)),e._2(163,16384,null,0,o.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(166,0,null,0,5,"amexio-tab",[["title","DataSource"]],null,null,null,a._56,a.u)),e._2(167,114688,[[32,4]],0,d.E,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n                  "])),(l()(),e.Y(16777216,null,0,1,null,x)),e._2(170,16384,null,0,o.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,null,["  \n            "])),(l()(),e._25(-1,0,["\n            \n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(176,0,null,0,2,"amexio-tab",[["title","Live"]],null,null,null,a._56,a.u)),e._2(177,114688,[[1,4]],0,d.E,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n            Work in Progress\n          "])),(l()(),e._25(-1,0,["\n        "])),(l()(),e._25(-1,0,["\n      "])),(l()(),e._25(-1,null,["\n    "])),(l()(),e._25(-1,null,["\n  "]))],function(l,n){var t=n.component;l(n,2,0,"true"),l(n,5,0),l(n,9,0),l(n,15,0),l(n,19,0,"Demo","true"),l(n,22,0),l(n,25,0,"12"),l(n,28,0,!0),l(n,31,0),l(n,35,0),l(n,38,0,"Country Grid",10,"assets/data/componentdata/gridtemplate.json","get","data",!1),l(n,42,0,"Name","name_official",!1,"string",50),l(n,50,0,"Latitude","latitude",!1,"string",20),l(n,55,0,"Longitude","longitude",!1,"number",20),l(n,72,0,"API Reference"),l(n,75,0,"Properties","assets/apireference/data/grid.json","get","properties",!1,!1),l(n,79,0,"Name","name",!1,"string",20),l(n,84,0,"Type","type",!1,"string",10),l(n,89,0,"Default","default",!1,"string",10),l(n,94,0,"Description","description",!1,"string",65),l(n,101,0,"Column Properties","assets/apireference/data/grid.json","get","columnProperties",!1,!1),l(n,105,0,"Name","name",!1,"string",15),l(n,110,0,"Type","type",!1,"string",10),l(n,115,0,"Default","default",!1,"string",10),l(n,120,0,"Description","description",!1,"string",65),l(n,128,0,"Events","assets/apireference/data/grid.json","get","events",!1),l(n,132,0,"Name","name",!1,"string",20),l(n,137,0,"Description","description",!1,"string",65),l(n,144,0,"Source"),l(n,149,0),l(n,153,0,"HTML",!0),l(n,156,0,t.htmlCode),l(n,160,0,"Type Script"),l(n,163,0,t.typeScriptCode),l(n,167,0,"DataSource"),l(n,170,0,t.dataSource),l(n,177,0,"Live")},function(l,n){var t=n.component;l(n,24,0,e._16(n,25).colclass),l(n,63,0,e._26(n,63,0,e._16(n,64).transform(t.clickedRowData)))})}var g=e.Z("grid-template-demo",p,function(l){return e._27(0,[(l()(),e._3(0,0,null,null,1,"grid-template-demo",[],null,null,null,f,m)),e._2(1,49152,null,0,p,[r.e],null,null)],null,null)},{},{},[]),y=t("0nO6"),b=t("UHIZ");t.d(n,"GridWithTemplateDemoModuleNgFactory",function(){return w});var w=e._0(u,[],function(l){return e._12([e._13(512,e.j,e.W,[[8,[g]],[3,e.j],e.v]),e._13(4608,o.n,o.m,[e.s,[2,o.u]]),e._13(4608,y.n,y.n,[]),e._13(4608,r.c,r.c,[]),e._13(4608,r.h,r.b,[]),e._13(5120,r.j,r.k,[]),e._13(4608,r.i,r.i,[r.c,r.h,r.j]),e._13(4608,r.g,r.a,[]),e._13(5120,r.e,r.l,[r.i,r.g]),e._13(4608,d.a,d.a,[]),e._13(512,o.b,o.b,[]),e._13(512,y.k,y.k,[]),e._13(512,y.d,y.d,[]),e._13(512,r.f,r.f,[]),e._13(512,_.b,_.b,[]),e._13(512,d.r,d.r,[]),e._13(512,d.p,d.p,[]),e._13(512,d._34,d._34,[]),e._13(512,d.v,d.v,[]),e._13(512,d.y,d.y,[]),e._13(512,d.l,d.l,[]),e._13(512,d.J,d.J,[]),e._13(512,b.m,b.m,[[2,b.r],[2,b.k]]),e._13(512,u,u,[]),e._13(1024,b.i,function(){return[[{path:"",component:p,pathMatch:"full"}]]},[])])})}});