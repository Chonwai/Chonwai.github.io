(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c977fc16"],{"0c03":function(t,s,e){t.exports=e.p+"img/shop.a010fdab.svg"},"0dab":function(t,s,e){t.exports=e.p+"img/like.a586b008.svg"},"1d72":function(t,s,e){t.exports=e.p+"img/dislike.d8a5fba9.svg"},"7a2c":function(t,s,e){"use strict";e.r(s);var l=function(){var t=this,s=t.$createElement,l=t._self._c||s;return l("div",{staticClass:"all-shops-page"},[l("div",{staticClass:"shop-container w-screen flex justify-center items-center flex-col"},t._l(t.allShops,function(s,a){return l("router-link",{key:a,staticClass:"w-full mb-4 cursor-pointer border-gray-300",attrs:{to:"/shop/"+a}},[l("div",{staticClass:"title-conatiner h-12 flex flex-row py-2 px-4"},[l("div",{staticClass:"shop-icon flex justify-start w-1/5"},[l("img",{staticClass:"w-auto h-full",attrs:{src:e("0c03")}})]),l("div",{staticClass:"shop-info w-4/5 flex flex-col justify-center items-start"},[l("p",{staticClass:"font-bold text-sm"},[t._v(t._s(s.name))]),l("p",{staticClass:"text-2xs"},[t._v(t._s(s.address))])])]),l("img",{staticClass:"card-img w-full h-64 object-cover bg-center",attrs:{src:s.photo_url,alt:s.name}}),l("div",{staticClass:"review-container w-full h-12 flex flex-row py-2 px-4"},[l("div",{staticClass:"like-box flex items-center"},[l("img",{staticClass:"h-6 flex w-auto",attrs:{src:e("0dab"),alt:""}}),l("p",{staticClass:"flex w-auto h-full ml-2 text-xl justify-start items-center"},[t._v(t._s(s.like))])]),l("div",{staticClass:"like-box flex items-center ml-4"},[l("img",{staticClass:"h-6 flex w-auto",attrs:{src:e("1d72"),alt:""}}),l("p",{staticClass:"flex w-auto h-full ml-2 text-xl justify-start items-center"},[t._v(t._s(s.dislike))])])])])}),1)])},a=[],i={name:"ShopIndex",data:function(){return{allShops:[]}},methods:{getAllShop:function(){this.allShops=this.$store.state.shops,console.log(this.allShops)}},created:function(){this.getAllShop()}},c=i,o=e("2877"),r=Object(o["a"])(c,l,a,!1,null,"0be5d455",null);s["default"]=r.exports}}]);
//# sourceMappingURL=chunk-c977fc16.0642803e.js.map