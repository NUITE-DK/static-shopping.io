(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0da724"],{"6c45":function(n,e,o){"use strict";o.r(e);var t=function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",[o("h2",[n._v("BABA有存款: "+n._s(n.money))]),o("button",{on:{click:n.borrowFromXM}},[n._v("找小明借钱100")]),o("br"),o("button",{on:{click:n.borrowFromXH}},[n._v("找小红借钱150")]),o("br"),o("button",{on:{click:n.borrowFromAll}},[n._v("找所有孩子借钱200")]),o("br"),o("br"),o("Son",{ref:"son"}),o("br"),o("Daughter",{ref:"dau"})],1)},r=[],c=(o("159b"),function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",{staticStyle:{background:"#ccc",height:"50px"}},[o("h3",[n._v("儿子小明: 有存款: "+n._s(n.money))]),o("button",{on:{click:n.giveMoney}},[n._v("给BABA钱: 50")])])}),i=[],u={name:"Son",data:function(){return{money:3e4}},methods:{giveMoney:function(){this.money-=50,this.$parent.money+=50}}},l=u,s=o("2877"),a=Object(s["a"])(l,c,i,!1,null,null,null),m=a.exports,h=function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",{staticStyle:{background:"#ccc",height:"50px"}},[o("h3",[n._v("女儿小红: 有存款: "+n._s(n.money))]),o("button",{on:{click:n.giveMoney}},[n._v("给BABA钱: 100")])])},b=[],f={name:"Daughter",data:function(){return{money:2e4}},methods:{giveMoney:function(){this.money-=100,this.$parent.money+=100}}},y=f,d=Object(s["a"])(y,h,b,!1,null,null,null),v=d.exports,_={name:"ChildrenParentTest",data:function(){return{money:1e3}},methods:{borrowFromXM:function(){this.money+=100,this.$refs.son.money-=100},borrowFromXH:function(){this.money+=150,this.$refs.dau.money-=150},borrowFromAll:function(){this.money+=400,this.$children.forEach((function(n){n.money-=200}))}},components:{Son:m,Daughter:v}},p=_,w=Object(s["a"])(p,t,r,!1,null,null,null);e["default"]=w.exports}}]);