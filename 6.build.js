webpackJsonp([6],{131:function(t,n,e){e(265);var o=e(44)(e(289),e(247),"data-v-7710d44e",null);t.exports=o.exports},135:function(t,n,e){n=t.exports=e(17)(void 0),n.push([t.i,'\n@charset "UTF-8";\n/*颜色区*/\n/*横向盒子*/\n.bscBtn[data-v-daf7d28e] {\n  font-family: SimHei;\n  cursor: pointer;\n}\n.bscBtn-common[data-v-daf7d28e] {\n    display: flex;\n    flex-flow: nowrap column;\n    justify-content: center;\n    align-items: center;\n    -webkit-border-radius: 0;\n    -moz-border-radius: 0;\n    -ms-border-radius: 0;\n    -o-border-radius: 0;\n    border-radius: 0;\n    height: 100%;\n    width: 100%;\n    border: none;\n    box-sizing: border-box;\n}\n.bscBtn-yellow[data-v-daf7d28e] {\n    background: #ffd944;\n    color: #ffffff;\n}\n.bscBtn-disabled[data-v-daf7d28e] {\n    background: #dcdcdc;\n    color: #ffffff;\n}\n.bscBtn-normal[data-v-daf7d28e] {\n    border: 1px solid #dcdcdc;\n    /*下面这个颜色看得我贼jb难受*/\n    background: #ffffff;\n    color: #231815;\n}\n.bscBtn-orange[data-v-daf7d28e] {\n    background: #f4a100;\n    color: #ffffff;\n}\n.bscBtn-grey[data-v-daf7d28e] {\n    background: #b9b9b9;\n    color: #ffffff;\n}\n',""])},136:function(t,n,e){e(138);var o=e(44)(e(139),e(137),"data-v-daf7d28e",null);t.exports=o.exports},137:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"bscBtn",style:"height:"+t.height+"px;width:"+t.width+"px;"},["grey"===t.styles?e("div",{staticClass:"bscBtn-common bscBtn-disabled"},[e("p",{style:"font-size:"+t.size+"px;color:"+t.fontColor+";"},[t._v("\n\t\t\t"+t._s(t.title)+"\n\t\t")])]):t._e(),t._v(" "),"grey_d"===t.styles?e("div",{staticClass:"bscBtn-common bscBtn-grey"},[e("p",{style:"font-size:"+t.size+"px;color:"+t.fontColor+";"},[t._v("\n\t\t\t"+t._s(t.title)+"\n\t\t")])]):t._e(),t._v(" "),"yellow"===t.styles?e("div",{staticClass:"bscBtn-common bscBtn-yellow"},[e("p",{style:"font-size:"+t.size+"px;color:"+t.fontColor+";"},[t._v("\n\t\t\t"+t._s(t.title)+"\n\t\t")])]):t._e(),t._v(" "),"white"===t.styles?e("div",{staticClass:"bscBtn-common bscBtn-normal"},[e("p",{style:"font-size:"+t.size+"px;color:"+t.fontColor+";"},[t._v("\n\t\t\t"+t._s(t.title)+"\n\t\t")])]):t._e(),t._v(" "),"orange"===t.styles?e("div",{staticClass:"bscBtn-common bscBtn-orange"},[e("p",{style:"font-size:"+t.size+"px;color:"+t.fontColor+";"},[t._v("\n\t\t\t"+t._s(t.title)+"\n\t\t")])]):t._e()])},staticRenderFns:[]}},138:function(t,n,e){var o=e(135);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(45)("5ce4d7ff",o,!0)},139:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"",components:{},data:function(){return{}},props:{title:{type:String,default:"进入教室"},styles:{type:String,default:"white"},size:{type:Number,default:18},height:{type:Number,default:50},width:{type:Number,default:200},fontColor:{default:null}},computed:{},created:function(){},mounted:function(){},methods:{}}},143:function(t,n,e){t.exports=e.p+"close_wht.png"},206:function(t,n,e){t.exports=e.p+"update.png"},219:function(t,n,e){n=t.exports=e(17)(void 0),n.push([t.i,'\n@charset "UTF-8";\n/*颜色区*/\n/*横向盒子*/\n.box[data-v-7710d44e] {\n  margin-top: 30px;\n  flex-flow: column;\n  display: flex;\n  align-items: center;\n}\n.box-cont[data-v-7710d44e] {\n    font-size: 14px;\n    color: #231815;\n    margin-top: 18px;\n}\n.box-cont[data-v-7710d44e]:first-child {\n    margin: 0;\n}\n.update[data-v-7710d44e] {\n  position: relative;\n  box-sizing: border-box;\n  height: 100%;\n  /*width: 800px;*/\n  background: #f5f5f5;\n  box-shadow: rgba(0, 0, 0, 0.15) 0 3px 7px;\n}\n.update-cls[data-v-7710d44e] {\n    cursor: pointer;\n    position: absolute;\n    top: 20px;\n    right: 20px;\n}\n.update-btn[data-v-7710d44e] {\n    margin-top: 30px;\n}\n.bgPic[data-v-7710d44e] {\n  width: 100%;\n}\n',""])},247:function(t,n,e){t.exports={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"update"},[o("img",{staticClass:"bgPic",attrs:{src:e(206),alt:""}}),t._v(" "),o("img",{staticClass:"update-cls",attrs:{src:e(143),alt:""},on:{click:t.cls}}),t._v(" "),o("div",{staticClass:"box"},[o("div",[o("p",{staticClass:"box-title"},[t._v("更新内容")]),t._v(" "),t._l(t.updateFeatures,function(n,e){return o("p",{key:n,staticClass:"box-cont"},[t._v(" "+t._s(e+1)+". "+t._s(n))])})],2),t._v(" "),o("myBtn",{staticClass:"update-btn",attrs:{title:"立即更新",styles:"yellow"}})],1)])},staticRenderFns:[]}},265:function(t,n,e){var o=e(219);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(45)("510e25d2",o,!0)},289:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(136),s=function(t){return t&&t.__esModule?t:{default:t}}(o);n.default={name:"",components:{myBtn:s.default},data:function(){return{updateFeatures:["重新设计教师PC客户端","界面操作更友好，客户端更稳定","新增设备检测功能","新增自动检测新版本功能"]}},props:{},computed:{},created:function(){},mounted:function(){},methods:{cls:function(){console.log("ff")}}}}});