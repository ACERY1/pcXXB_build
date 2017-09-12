webpackJsonp([1],{

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(263)

var Component = __webpack_require__(44)(
  /* script */
  __webpack_require__(277),
  /* template */
  __webpack_require__(246),
  /* scopeId */
  "data-v-bd0a5754",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(undefined);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n/*颜色区*/\n/*横向盒子*/\n@keyframes picScale {\n0% {\n    -webkit-transform: scale(1.01);\n    -moz-transform: scale(1.01);\n    -ms-transform: scale(1.01);\n    -o-transform: scale(1.01);\n    transform: scale(1.01);\n}\n100% {\n    -webkit-transform: scale(1.15);\n    -moz-transform: scale(1.15);\n    -ms-transform: scale(1.15);\n    -o-transform: scale(1.15);\n    transform: scale(1.15);\n    opacity: .86;\n}\n}\n.bscBtn[data-v-daf7d28e] {\n  font-family: SimHei;\n  cursor: pointer;\n}\n.bscBtn-common[data-v-daf7d28e] {\n    display: flex;\n    flex-flow: nowrap column;\n    justify-content: center;\n    align-items: center;\n    -webkit-border-radius: 0;\n    -moz-border-radius: 0;\n    -ms-border-radius: 0;\n    -o-border-radius: 0;\n    border-radius: 0;\n    height: 100%;\n    width: 100%;\n    border: none;\n    box-sizing: border-box;\n}\n.bscBtn-yellow[data-v-daf7d28e] {\n    background: #ffd944;\n    color: #ffffff;\n}\n.bscBtn-disabled[data-v-daf7d28e] {\n    background: #dcdcdc;\n    color: #ffffff;\n}\n.bscBtn-normal[data-v-daf7d28e] {\n    border: 1px solid #dcdcdc;\n    /*下面这个颜色看得我贼jb难受*/\n    background: #ffffff;\n    color: #231815;\n}\n.bscBtn-orange[data-v-daf7d28e] {\n    background: #f4a100;\n    color: #ffffff;\n}\n.bscBtn-grey[data-v-daf7d28e] {\n    background: #b9b9b9;\n    color: #ffffff;\n}\n", ""]);

// exports


/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(137)

var Component = __webpack_require__(44)(
  /* script */
  __webpack_require__(138),
  /* template */
  __webpack_require__(136),
  /* scopeId */
  "data-v-daf7d28e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 136:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bscBtn",
    style: ('height:' + _vm.height + 'px;width:' + _vm.width + 'px;')
  }, [(_vm.styles === 'grey') ? _c('div', {
    staticClass: "bscBtn-common bscBtn-disabled"
  }, [_c('p', {
    style: ('font-size:' + _vm.size + 'px;color:' + _vm.fontColor + ';')
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.title) + "\n\t\t")])]) : _vm._e(), _vm._v(" "), (_vm.styles === 'grey_d') ? _c('div', {
    staticClass: "bscBtn-common bscBtn-grey"
  }, [_c('p', {
    style: ('font-size:' + _vm.size + 'px;color:' + _vm.fontColor + ';')
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.title) + "\n\t\t")])]) : _vm._e(), _vm._v(" "), (_vm.styles === 'yellow') ? _c('div', {
    staticClass: "bscBtn-common bscBtn-yellow"
  }, [_c('p', {
    style: ('font-size:' + _vm.size + 'px;color:' + _vm.fontColor + ';')
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.title) + "\n\t\t")])]) : _vm._e(), _vm._v(" "), (_vm.styles === 'white') ? _c('div', {
    staticClass: "bscBtn-common bscBtn-normal"
  }, [_c('p', {
    style: ('font-size:' + _vm.size + 'px;color:' + _vm.fontColor + ';')
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.title) + "\n\t\t")])]) : _vm._e(), _vm._v(" "), (_vm.styles === 'orange') ? _c('div', {
    staticClass: "bscBtn-common bscBtn-orange"
  }, [_c('p', {
    style: ('font-size:' + _vm.size + 'px;color:' + _vm.fontColor + ';')
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.title) + "\n\t\t")])]) : _vm._e()])
},staticRenderFns: []}

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(134);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(45)("5ce4d7ff", content, true);

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/*按钮组
 * 接口详情
 * 1. title按钮文字
 * 2. styles(white,grey,yellow,orange)
 * 3. size字体大小
 * 4. height width 按钮的长宽
 * 5. fontColor 按钮字体颜色*/
exports.default = {
	name: "",
	components: {},
	data: function data() {
		return {};
	},

	props: {
		/*显示文字*/
		title: {
			type: String,
			default: '进入教室'
		},

		/*样式种类*/
		styles: {
			type: String,
			/*
    white,grey,yellow,orange
    */
			default: 'white'
		},
		size: {
			type: Number,
			default: 18
		},
		height: {
			type: Number,
			default: 50
		},
		width: {
			type: Number,
			default: 200
		},
		fontColor: {
			default: null
		}
	},
	computed: {},
	created: function created() {},
	mounted: function mounted() {},

	methods: {}
};

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "closeBtn.png";

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "add_circle.png";

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "s1.png";

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "s2.png";

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "s3.png";

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "s4.png";

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "s5.png";

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "s6.png";

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "addNew.png";

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "black.png";

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "black_picked.png";

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "blue.png";

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "blue_picked.png";

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "clear.png";

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "color.png";

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "delete.png";

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "left.png";

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "left_l.png";

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lg.png";

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lg_picked.png";

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "line.png";

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mid.png";

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mid_picked.png";

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "offClass.png";

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "red.png";

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "red_picked.png";

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "right.png";

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "right_l.png";

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "xs.png";

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "xs_picked.png";

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(undefined);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n/*颜色区*/\n/*横向盒子*/\n@keyframes picScale {\n0% {\n    -webkit-transform: scale(1.01);\n    -moz-transform: scale(1.01);\n    -ms-transform: scale(1.01);\n    -o-transform: scale(1.01);\n    transform: scale(1.01);\n}\n100% {\n    -webkit-transform: scale(1.15);\n    -moz-transform: scale(1.15);\n    -ms-transform: scale(1.15);\n    -o-transform: scale(1.15);\n    transform: scale(1.15);\n    opacity: .86;\n}\n}\n.toolsBar[data-v-3f5fff42] {\n  position: relative;\n  display: flex;\n  flex-flow: row nowrap;\n  width: 100%;\n  height: 30px;\n  background: #32373d;\n}\n.toolsBar-time[data-v-3f5fff42] {\n    padding-top: 2px;\n    margin-left: 10px;\n    margin-right: 20px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    font-size: 12px;\n    color: #f5f5f5;\n}\n.toolsBar-offClass[data-v-3f5fff42] {\n    cursor: pointer;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n}\n.toolsBar-toolBtn[data-v-3f5fff42] {\n    right: 42%;\n    position: absolute;\n    display: flex;\n    flex-flow: row nowrap;\n}\n.toolsBar-toolBtn-item[data-v-3f5fff42] {\n      position: relative;\n      display: flex;\n      flex-flow: nowrap column;\n      justify-content: center;\n      align-items: center;\n      width: 40px;\n      height: 30px;\n}\n.toolsBar-toolBtn-item img[data-v-3f5fff42] {\n        width: 22px;\n        height: 22px;\n        cursor: pointer;\n}\n.toolsBar-toolBtn-item[data-v-3f5fff42]:not(:nth-child(3)):hover {\n      cursor: pointer;\n      transition: all ease-in-out .3s;\n      background: #23262b;\n}\n.toolsBar-pager[data-v-3f5fff42] {\n    position: absolute;\n    top: 8px;\n    right: 100px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n}\n.toolsBar-pager p[data-v-3f5fff42] {\n      text-align: center;\n      font-size: 12px;\n      color: #f5f5f5;\n      width: 40px;\n}\n.toolsBar-pager img[data-v-3f5fff42] {\n      cursor: pointer;\n}\n.toolsBar-addPaper[data-v-3f5fff42] {\n    top: 4px;\n    right: 20px;\n    position: absolute;\n}\n.toolsBar-addPaper img[data-v-3f5fff42] {\n      cursor: pointer;\n}\n.toBox[data-v-3f5fff42] {\n  position: absolute;\n  z-index: 10;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  height: 140px;\n  width: 35px;\n  background: #f5f5f5;\n  bottom: 30px;\n}\n.toBox img[data-v-3f5fff42] {\n    cursor: pointer;\n    margin-top: 15px;\n    width: 27px;\n    height: 27px;\n}\n.isUseEraser[data-v-3f5fff42] {\n  background: #b3b3b3;\n}\n", ""]);

// exports


/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(undefined);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n/*颜色区*/\n/*横向盒子*/\n@keyframes picScale {\n0% {\n    -webkit-transform: scale(1.01);\n    -moz-transform: scale(1.01);\n    -ms-transform: scale(1.01);\n    -o-transform: scale(1.01);\n    transform: scale(1.01);\n}\n100% {\n    -webkit-transform: scale(1.15);\n    -moz-transform: scale(1.15);\n    -ms-transform: scale(1.15);\n    -o-transform: scale(1.15);\n    transform: scale(1.15);\n    opacity: .86;\n}\n}\n.onClass[data-v-bd0a5754] {\n  /*position: relative;*/\n  width: 100%;\n}\n.onClass-infoBar[data-v-bd0a5754] {\n    width: 100%;\n    z-index: 1000;\n    position: fixed;\n    height: 20px;\n    background: #fff198;\n}\n.onClass-infoBar p[data-v-bd0a5754] {\n      text-align: center;\n      font-size: 14px;\n      color: #d0aa17;\n}\n.onClass-infoBar img[data-v-bd0a5754] {\n      cursor: pointer;\n      width: 14px;\n      height: 14px;\n      top: 3px;\n      position: absolute;\n      right: 10px;\n}\n.onClass-main[data-v-bd0a5754] {\n    display: flex;\n    flex-flow: row nowrap;\n    height: 90vh;\n    /*For xs Screen*/\n}\n.onClass-main-box[data-v-bd0a5754] {\n      position: relative;\n      height: 100%;\n      z-index: 0;\n      /*background-color: #b3b3b3;*/\n      background: #ffffff;\n      width: 80%;\n}\n.onClass-main-video[data-v-bd0a5754] {\n      box-sizing: border-box;\n      padding: 20px 15px 0 15px;\n      width: 20%;\n      height: 90%;\n      background: #f5f5f5;\n      display: flex;\n      flex-flow: column;\n      align-items: center;\n      /*for minScreen*/\n      /*For fullScreen*/\n}\n.onClass-main-video-item[data-v-bd0a5754] {\n        position: relative;\n        background: rgba(0, 0, 0, 0.8);\n        margin-bottom: 40px;\n        overflow: hidden;\n}\n.onClass-main-video-item .videoBox[data-v-bd0a5754] {\n          width: 100%;\n          height: 100%;\n}\n.onClass-main-video-item .videoBox-word[data-v-bd0a5754] {\n            margin-top: -140px;\n            text-align: center;\n            font-size: 12px;\n            color: #969696;\n}\n.onClass-main-video-item .signalBar[data-v-bd0a5754] {\n          padding-top: 3px;\n          padding-left: 10px;\n          background: rgba(0, 0, 0, 0.5);\n          position: absolute;\n          bottom: 0;\n          font-size: 12px;\n          color: #f5f5f5;\n}\n.onClass-main-video-item .signalBar img[data-v-bd0a5754] {\n            margin-top: 2px;\n            margin-left: 4px;\n            height: 14px;\n}\n@media screen and (max-width: 1140px) {\n.onClass-main-video-item[data-v-bd0a5754] {\n          width: 148px;\n          height: 200px;\n}\n.onClass-main-video .signalBar[data-v-bd0a5754] {\n          width: 148px;\n          height: 24px;\n}\n}\n@media screen and (min-width: 1140px) {\n.onClass-main-video-item[data-v-bd0a5754] {\n          width: 238px;\n          height: 250px;\n}\n.onClass-main-video .signalBar[data-v-bd0a5754] {\n          width: 100%;\n          height: 24px;\n}\n}\n@media screen and (max-width: 800px) {\n.onClass-main-box[data-v-bd0a5754] {\n        width: 100%;\n}\n.onClass-main-video[data-v-bd0a5754] {\n        display: none;\n}\n}\n.video_clsBtn[data-v-bd0a5754] {\n  cursor: pointer;\n  right: 6px;\n  top: 6px;\n  position: absolute;\n  width: 16px;\n  height: 16px;\n}\n.toolBar[data-v-bd0a5754] {\n  bottom: 0;\n  position: fixed !important;\n}\n#localCanvas[data-v-bd0a5754] {\n  z-index: 1;\n  top: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n#remoteCanvas[data-v-bd0a5754] {\n  top: 0;\n  z-index: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n#imgBox[data-v-bd0a5754] {\n  top: 0;\n  z-index: -1;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n#imgBox img[data-v-bd0a5754] {\n    width: 100%;\n    height: 100%;\n}\n#mask[data-v-bd0a5754] {\n  top: 0;\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-flow: nowrap column;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.4);\n}\n#mask .btn[data-v-bd0a5754] {\n    position: absolute;\n    z-index: 2;\n}\n.videoMask[data-v-bd0a5754] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #36393d;\n  display: flex;\n  flex-flow: nowrap column;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  color: #969696;\n}\n", ""]);

// exports


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(253)

var Component = __webpack_require__(44)(
  /* script */
  __webpack_require__(269),
  /* template */
  __webpack_require__(236),
  /* scopeId */
  "data-v-3f5fff42",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "toolsBar"
  }, [_c('div', {
    staticClass: "toolsBar-time"
  }, [(!_vm.isCounting) ? _c('p', [_vm._v("00:00/55:00")]) : _vm._e(), _vm._v(" "), (_vm.isCounting) ? _c('p', [_vm._v(_vm._s(_vm.countMin <= 9 ? '0' + _vm.countMin : _vm.countMin) + ":" + _vm._s(_vm.countSec <= 9 ? '0' + _vm.countSec : _vm.countSec) + "/55:00")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "toolsBar-offClass"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(190),
      "alt": ""
    },
    on: {
      "click": _vm.offClass
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "toolsBar-toolBtn"
  }, [_c('div', {
    staticClass: "toolsBar-toolBtn-item"
  }, [(_vm.isShowColor) ? _c('div', {
    staticClass: "toBox"
  }, [(!_vm.pickBool[0]) ? _c('img', {
    attrs: {
      "src": __webpack_require__(191),
      "alt": ""
    },
    on: {
      "click": function($event) {
        _vm.pickColor(0)
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.pickBool[0]) ? _c('img', {
    attrs: {
      "src": __webpack_require__(192),
      "alt": ""
    },
    on: {
      "click": function($event) {
        _vm.pickColor(0)
      }
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.pickBool[2]) ? _c('img', {
    attrs: {
      "src": __webpack_require__(178),
      "alt": ""
    },
    on: {
      "click": function($event) {
        _vm.pickColor(2)
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.pickBool[2]) ? _c('img', {
    attrs: {
      "src": __webpack_require__(179),
      "alt": ""
    },
    on: {
      "click": function($event) {
        _vm.pickColor(2)
      }
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.pickBool[1]) ? _c('img', {
    attrs: {
      "src": __webpack_require__(176),
      "alt": ""
    },
    on: {
      "click": function($event) {
        _vm.pickColor(1)
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.pickBool[1]) ? _c('img', {
    attrs: {
      "src": __webpack_require__(177),
      "alt": ""
    },
    on: {
      "click": function($event) {
        _vm.pickColor(1)
      }
    }
  }) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('img', {
    attrs: {
      "src": __webpack_require__(181),
      "alt": ""
    },
    on: {
      "click": _vm.showColor
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "toolsBar-toolBtn-item"
  }, [(_vm.isShowLine) ? _c('div', {
    staticClass: "toBox"
  }, [(!_vm.pickBool2[0]) ? _c('img', {
    attrs: {
      "src": __webpack_require__(185),
      "alt": ""
    },
    on: {
      "click": function($event) {
        _vm.pickLine(0)
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.pickBool2[0]) ? _c('img', {
    attrs: {
      "src": __webpack_require__(186),
      "alt": ""
    },
    on: {
      "click": function($event) {
        _vm.pickLine(0)
      }
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.pickBool2[1]) ? _c('img', {
    attrs: {
      "src": __webpack_require__(188),
      "alt": ""
    },
    on: {
      "click": function($event) {
        _vm.pickLine(1)
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.pickBool2[1]) ? _c('img', {
    attrs: {
      "src": __webpack_require__(189),
      "alt": ""
    },
    on: {
      "click": function($event) {
        _vm.pickLine(1)
      }
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.pickBool2[2]) ? _c('img', {
    attrs: {
      "src": __webpack_require__(195),
      "alt": ""
    },
    on: {
      "click": function($event) {
        _vm.pickLine(2)
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.pickBool2[2]) ? _c('img', {
    attrs: {
      "src": __webpack_require__(196),
      "alt": ""
    },
    on: {
      "click": function($event) {
        _vm.pickLine(2)
      }
    }
  }) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('img', {
    attrs: {
      "src": __webpack_require__(187),
      "alt": ""
    },
    on: {
      "click": _vm.showLine
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "toolsBar-toolBtn-item",
    class: {
      isUseEraser: _vm.isUseEraser
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(180),
      "alt": ""
    },
    on: {
      "click": _vm.useEraser
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "toolsBar-toolBtn-item"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(182),
      "alt": ""
    },
    on: {
      "click": _vm.clearCanvas
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "toolsBar-pager"
  }, [(_vm.nowPage === 1) ? _c('img', {
    attrs: {
      "src": __webpack_require__(183),
      "alt": ""
    }
  }) : _vm._e(), _vm._v(" "), (_vm.nowPage != 1) ? _c('img', {
    attrs: {
      "src": __webpack_require__(184),
      "alt": ""
    },
    on: {
      "click": _vm.back
    }
  }) : _vm._e(), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.nowPage) + "/" + _vm._s(_vm.allPage))]), _vm._v(" "), (_vm.nowPage === _vm.allPage) ? _c('img', {
    attrs: {
      "src": __webpack_require__(193),
      "alt": ""
    }
  }) : _vm._e(), _vm._v(" "), (_vm.nowPage != _vm.allPage) ? _c('img', {
    attrs: {
      "src": __webpack_require__(194),
      "alt": ""
    },
    on: {
      "click": _vm.forward
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "toolsBar-addPaper",
    on: {
      "click": _vm.addNewPage
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(175),
      "alt": ""
    }
  })]), _vm._v(" "), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (false),
      expression: "false"
    }]
  }, [_vm._v(_vm._s(_vm.counting))])])
},staticRenderFns: []}

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "onClass"
  }, [(_vm.isShowMtBar) ? _c('div', {
    staticClass: "onClass-infoBar"
  }, [_c('p', [_vm._v("距离开课还有" + _vm._s(_vm.gapTime2) + "分钟")]), _vm._v(" "), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (false),
      expression: "false"
    }]
  }, [_vm._v(_vm._s(_vm.gapTime))]), _vm._v(" "), _c('img', {
    attrs: {
      "src": __webpack_require__(144),
      "alt": ""
    },
    on: {
      "click": _vm._showMtBar
    }
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "onClass-main"
  }, [_c('div', {
    staticClass: "onClass-main-box"
  }, [_c('canvas', {
    attrs: {
      "id": "localCanvas"
    }
  }), _vm._v(" "), _c('canvas', {
    attrs: {
      "id": "remoteCanvas"
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "id": "imgBox"
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.images[_vm.pageCount],
      "alt": ""
    }
  })]), _vm._v(" "), (!_vm.isOnClass) ? _c('div', {
    attrs: {
      "id": "mask"
    }
  }, [_c('div', {
    staticClass: "btn"
  }, [_c('basic-btn', {
    attrs: {
      "title": '上课',
      "styles": 'orange'
    },
    nativeOn: {
      "click": function($event) {
        _vm.onClass($event)
      }
    }
  })], 1)]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "onClass-main-video"
  }, [_c('div', {
    staticClass: "onClass-main-video-item"
  }, [_c('div', {
    staticClass: "videoBox"
  }, [(!_vm.isShowStudentVideo) ? _c('div', {
    staticClass: "videoMask"
  }, [_c('p', [_vm._v("已关闭，点击右上角打开")])]) : _vm._e(), _vm._v(" "), _c('video', {
    attrs: {
      "autoplay": "autoplay",
      "src": _vm.remoteVideoURL,
      "width": "238",
      "height": "250",
      "id": "remoteVideoURL"
    }
  }), _vm._v(" "), (_vm.isShowStudentVideo) ? _c('img', {
    staticClass: "video_clsBtn",
    attrs: {
      "src": __webpack_require__(144),
      "alt": ""
    },
    on: {
      "click": function($event) {
        _vm.closeVideo(0)
      }
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.isShowStudentVideo) ? _c('img', {
    staticClass: "video_clsBtn",
    attrs: {
      "src": __webpack_require__(154),
      "alt": ""
    },
    on: {
      "click": function($event) {
        _vm.closeVideo(-1)
      }
    }
  }) : _vm._e(), _vm._v(" "), _c('p', {
    staticClass: "videoBox-word"
  }, [_vm._v("无信号")])]), _vm._v(" "), _c('div', {
    staticClass: "signalBar"
  }, [_c('span', [_vm._v(_vm._s(_vm.studentName))]), _vm._v(" "), (_vm.signal1 === 1 || _vm.signal1 === 0) ? _c('img', {
    attrs: {
      "src": __webpack_require__(156),
      "alt": ""
    }
  }) : _vm._e(), _vm._v(" "), (_vm.signal1 === 2) ? _c('img', {
    attrs: {
      "src": __webpack_require__(157),
      "alt": ""
    }
  }) : _vm._e(), _vm._v(" "), (_vm.signal1 === 3) ? _c('img', {
    attrs: {
      "src": __webpack_require__(158),
      "alt": ""
    }
  }) : _vm._e(), _vm._v(" "), (_vm.signal1 === 4) ? _c('img', {
    attrs: {
      "src": __webpack_require__(159),
      "alt": ""
    }
  }) : _vm._e(), _vm._v(" "), (_vm.signal1 === 5) ? _c('img', {
    attrs: {
      "src": __webpack_require__(160),
      "alt": ""
    }
  }) : _vm._e(), _vm._v(" "), (_vm.signal1 >= 6) ? _c('img', {
    attrs: {
      "src": __webpack_require__(161),
      "alt": ""
    }
  }) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "onClass-main-video-item"
  }, [_c('div', {
    staticClass: "videoBox"
  }, [(!_vm.isShowTeacherVideo) ? _c('div', {
    staticClass: "videoMask"
  }, [_c('p', [_vm._v("已关闭，点击右上角打开")])]) : _vm._e(), _vm._v(" "), _c('video', {
    attrs: {
      "autoplay": "autoplay",
      "muted": "",
      "src": _vm.localVideoURL,
      "width": "238",
      "height": "250",
      "id": "localVideo"
    }
  }), _vm._v(" "), (_vm.isShowTeacherVideo) ? _c('img', {
    staticClass: "video_clsBtn",
    attrs: {
      "src": __webpack_require__(144),
      "alt": ""
    },
    on: {
      "click": function($event) {
        _vm.closeVideo(1)
      }
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.isShowTeacherVideo) ? _c('img', {
    staticClass: "video_clsBtn",
    attrs: {
      "src": __webpack_require__(154),
      "alt": ""
    },
    on: {
      "click": function($event) {
        _vm.closeVideo(2)
      }
    }
  }) : _vm._e(), _vm._v(" "), _c('p', {
    staticClass: "videoBox-word"
  }, [_vm._v("无信号")])]), _vm._v(" "), _c('div', {
    staticClass: "signalBar"
  }, [_c('span', {
    on: {
      "click": _vm.test
    }
  }, [_vm._v(_vm._s(_vm.teacherName))]), _vm._v(" "), (_vm.signal2 === 1 || _vm.signal2 === 0) ? _c('img', {
    attrs: {
      "src": __webpack_require__(156),
      "alt": ""
    }
  }) : _vm._e(), _vm._v(" "), (_vm.signal2 === 2) ? _c('img', {
    attrs: {
      "src": __webpack_require__(157),
      "alt": ""
    }
  }) : _vm._e(), _vm._v(" "), (_vm.signal2 === 3) ? _c('img', {
    attrs: {
      "src": __webpack_require__(158),
      "alt": ""
    }
  }) : _vm._e(), _vm._v(" "), (_vm.signal2 === 4) ? _c('img', {
    attrs: {
      "src": __webpack_require__(159),
      "alt": ""
    }
  }) : _vm._e(), _vm._v(" "), (_vm.signal2 === 5) ? _c('img', {
    attrs: {
      "src": __webpack_require__(160),
      "alt": ""
    }
  }) : _vm._e(), _vm._v(" "), (_vm.signal2 >= 6) ? _c('img', {
    attrs: {
      "src": __webpack_require__(161),
      "alt": ""
    }
  }) : _vm._e()])])])]), _vm._v(" "), _c('tool-bar', {
    staticClass: "toolBar",
    attrs: {
      "nowPage": _vm.nowPage,
      "allPage": _vm.pageNum
    },
    on: {
      "changeSize": _vm.changeSize,
      "changeColor": _vm.changeColor,
      "useEraser": _vm.useEraser,
      "cancelEraser": _vm.cancelEraser,
      "clearCanvas": _vm.clearCanvas,
      "addNewPage": _vm.addNewPage,
      "offClass": _vm.offClass,
      "backPage": _vm.backPage,
      "forwardPage": _vm.forwardPage,
      "timeUp": _vm.timeCountDone
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(212);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(45)("6ca55e61", content, true);

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(222);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(45)("673a4fb4", content, true);

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var WebRTC = function WebRTC(role) {
    var PeerConnection = window.PeerConnection || window.webkitPeerConnection00 || window.webkitRTCPeerConnection || window.mozRTCPeerConnection,
        URL = window.URL || window.webkitURL || window.msURL || window.oURL,
        getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.mediaDevices.getUserMedia,
        nativeRTCIceCandidate = window.mozRTCIceCandidate || window.RTCIceCandidate,
        nativeRTCSessionDescription = window.mozRTCSessionDescription || window.RTCSessionDescription,
        // order is very important: "RTCSessionDescription" defined in Nighly but useless

    moz = !!navigator.mozGetUserMedia,


    // websocketServer = "ws://" + window.sessionStorage.getItem('temp_host') + "/media/websocket/ws",
    // websocketServer = "ws://localhost:2048/media/websocket/ws",
    // websocketServer = "ws://124.251.0.199:10002/media/websocket/ws", // 测试环境
    websocketServer = "ws://124.251.0.199:10001/media/websocket/ws",
        // 正式环境

    packetSize = 100,
        iceServer = {
        "iceServers": [{
            urls: "turn:58.83.148.247",
            username: "coturn",
            credential: "ppnn13fish",
            credentialType: "password"
        }, {
            urls: "stun:58.83.148.247:3478"
        }, {
            urls: "stun:stun.58.83.148.247:3478",
            username: "coturn",
            credential: "ppnn13fish",
            credentialType: "password"
        }], mandatory: {
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: true
        }, optional: {
            DtlsSrtpKeyAgreement: true
        }
    };

    function EventEmitter() {
        this.events = {};
        this.onceEvents = {};
    } // define Class

    EventEmitter.prototype.on = function (eventName, callback) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(callback);
    }; // define Methods
    EventEmitter.prototype.once = function (eventName, callback) {
        this.on(eventName, callback);
        this.onceEvents[eventName] = true;
    }; // define Methods
    EventEmitter.prototype.emit = function (eventName, _) {
        var events = this.events[eventName],
            args = Array.prototype.slice.call(arguments, 1),
            i,
            m;

        if (!events) {
            return;
        }
        for (i = 0, m = events.length; i < m; i++) {
            events[i].apply(null, args);
        }
        if (this.onceEvents[eventName]) {
            delete this.events[eventName];
            delete this.onceEvents[eventName];
        }
    }; // define Methods
    function webrtc(role) {
        this.uid = null;
        this.key = null;
        this.me = null;
        this.role = role;
        this.localMediaStream = null;
        this.room = null;
        this.websocket = null;
        //connectionId和PeerConnection之间的关系
        this.peerConnections = {};
        //connectionId，存放同频道的所有连接的数组
        this.connections = [];
    } // define Class

    webrtc.prototype = new EventEmitter(); // 继承事件发射器

    webrtc.prototype.connect = function (room, uid, key) {
        var that = this,
            websocket;
        this.room = this.room || room;
        this.uid = this.uid || uid;
        this.key = this.key || key;
        var url = websocketServer + "?room=" + this.room + "&uid=" + this.uid + "&key=" + this.key;
        this.websocket && this.websocket.close();
        console.log('新建webcoket');
        websocket = this.websocket = new WebSocket(url); // 建立ws连接
        websocket.onopen = function () {
            join(); // 给后台发送数据
            that.emit("socket_opened", websocket); // 发送连接开启信号
        };

        websocket.onmessage = function (message) {
            var json = JSON.parse(message.data); // 拿到通信的数据
            if (json.cmd) {
                that.emit(json.cmd, json.data); //如果是命令 则发射相关执行信号和数据
            } else {
                that.emit("socket_receive_message", websocket, json); // 如果是message 则发射
            }
        };

        websocket.onerror = function (error) {
            this.close(); // 连接错误则关闭
            that.websocket = null;
            that.emit("socket_err", error);
            that.emit("socket_error", error, websocket);
        };

        websocket.onclose = function (data) {
            console.log("Websocket connection is closed", data);

            that.emit('socket_closed', websocket); // 发射关闭信号
        };
        function join() {
            websocket.send(JSON.stringify({
                "cmd": "__join",
                "data": {
                    "room": that.room
                }
            }));
            that.closeSource();
        }
    };

    webrtc.prototype.initEvents = function () {
        var that = this;
        this.on("_ice_candidate", function (data) {
            mediaReady(function () {
                var pc = that.peerConnections[data.socketId];
                pc.addIceCandidate(new nativeRTCIceCandidate(data));
            });
        });

        this.on('_peers', function (data) {
            that.connections = data.connections;
            that.me = data.you;
            that.emit("peers", that.connections);
        });
        this.on('_new_peer', function (data) {
            var socketId = data.socketId;
            that.createPeerConnection(data.socketId);
            that.sendOffer(socketId);
            that.connections.push(socketId);
            that.emit("new_peer", socketId);
        });
        this.on('_remove_peer', function (data) {
            that.closePeerConnection(data.socketId);
            that.emit("remove_peer", data.socketId);
        });

        this.on('_offer', function (data) {
            var socketId = data.socketId;
            mediaReady(function () {
                that.createPeerConnection(socketId);
                that.sendAnswer(socketId, data.sdp);
            });
            that.emit("offer", data);
        });

        this.on('_answer', function (data) {
            var pc = that.peerConnections[data.socketId];
            console.log('接受到answer');
            pc.setRemoteDescription(new nativeRTCSessionDescription(data.sdp));
            that.emit('answer', data);
        });

        function mediaReady(fn) {
            if (typeof fn !== 'function') {
                return;
            }
            if (that.localMediaStream) {
                fn();
                return;
            }
            that.once('ready', function (data) {
                fn();
            });
        }
        return this;
    }; // 初始化事件监听

    webrtc.prototype.sendOffer = function (socketId) {
        var that = this,
            pc = that.peerConnections[socketId];
        pc.createOffer(function (session_desc) {
            console.log("createOffer", session_desc);
            pc.setLocalDescription(session_desc, function () {
                // 本地保存描述
                console.log('offer设置本地desc描述成功');
            }, function (err) {
                console.log('offer设置本地desc描述失败', err);
            });
            that.websocket.send(JSON.stringify({
                "cmd": "__offer",
                "data": {
                    "sdp": session_desc,
                    "socketId": socketId
                }
            }));
        }, function (error) {
            console.log(error);
        });
    }; // 发送offer

    webrtc.prototype.sendAnswer = function (socketId, sdp) {
        var pc = this.peerConnections[socketId],
            that = this;
        console.log('将要发送answer');
        pc.setRemoteDescription(new nativeRTCSessionDescription(sdp), function () {
            console.log('offer设置远程desc描述成功'); // sdp来自远程
        }, function (err) {
            console.log('offer设置远程desc描述失败', err);
        });
        pc.createAnswer(function (session_desc) {
            pc.setLocalDescription(session_desc, function () {}, function () {
                console.log('sendAnswer setLocalDescription error');
            });
            that.websocket.send(JSON.stringify({
                "cmd": "__answer",
                "data": {
                    "socketId": socketId,
                    "sdp": session_desc // 让服务器发送回答信令
                }
            }));
        }, function (error) {
            console.log(error);
        });
    };

    webrtc.prototype.createLocalStream = function (options) {
        var that = this;
        if (getUserMedia) {
            getUserMedia.call(navigator, options, function (stream) {
                that.localMediaStream = stream;
                that.emit("stream_created", {
                    stream: that.localMediaStream
                });
                that.emit('ready');
            }, function (err) {
                console.log("create Stream fail", err);
                that.emit("stream_create_error", err);
            });
        } else {
            console.log("fail");
            that.emit("stream_create_error", new Error("WebRTC is not supported in this browser."));
        }
    };

    webrtc.prototype.attachStream = function (stream, domId) {
        var element = document.getElementById(domId);
        if (navigator.mozGetUserMedia) {
            element.mozSrcObject = stream;
            element.play();
        } else {
            element.src = URL.createObjectURL(stream);
        }
    };

    webrtc.prototype.removeStream = function (domId) {
        var element = document.getElementById(domId);
        if (navigator.mozGetUserMedia) {
            element.mozSrcObject = null;
        } else {
            URL.revokeObjectURL(element.src);
        }
    };

    webrtc.prototype.createPeerConnection = function (socketId) {
        var that = this,
            pc;
        this.peerConnections[socketId] = pc = new PeerConnection(iceServer);
        pc.onicecandidate = function (evt) {
            if (evt.candidate) {
                that.websocket.send(JSON.stringify({
                    "cmd": "__ice_candidate",
                    "data": {
                        "label": evt.candidate.sdpMLineIndex,
                        "candidate": evt.candidate.candidate,
                        "socketId": socketId
                    }
                }));
            }
        };
        pc.onopen = function (evt) {
            that.emit("pc_opened", evt);
        };
        pc.onaddstream = function (evt) {
            that.emit('peer_stream', evt);
        };
        pc.onnegotiationneeded = function (evt) {
            console.log('stream_needed');
            that.emit('stream_needed', evt);
        };
        pc.onremovestream = function (evt) {
            console.log('remove_stream');
            that.emit('remove_stream', evt);
        };
        pc.ondatachannel = function (evt) {
            console.log('pc_add_data_channel');
            that.emit('pc_add_data_channel', evt);
        };
        pc.onsignalingstatechange = function (evt) {
            console.log('pc_signaling_change');
            that.emit('pc_signaling_change', {
                target: evt,
                stream: pc.signalingState
            });
        };
        pc.oniceconnectionstatechange = function (evt) {
            console.log('pc_ice_connections_change');
            that.emit('pc_ice_connections_change', {
                target: evt,
                stream: pc.connectionState
            });
        };
        pc.onicegatheringstatechange = function (evt) {
            console.log('pc_ice_gathering_change');
            that.emit('pc_ice_gathering_change', {
                target: evt,
                stream: pc.iceGatheringState
            });
        };
        pc.addStream(this.localMediaStream);
        pc.createDataChannel('');
        return pc;
    };

    webrtc.prototype.closePeerConnection = function (socketId) {
        var pc;
        if (pc = this.peerConnections[socketId]) {
            pc.close();
            delete this.peerConnections[socketId];
            this.connections.splice(this.connections.indexOf(socketId), 1);
        }
    };

    webrtc.prototype.closePeerConnections = function () {
        var that = this;
        this.connections.forEach(function (socketId) {
            that.closePeerConnection(socketId);
        });
    };

    webrtc.prototype.closeSource = function () {
        this.localMediaStream && (this.localMediaStream = null);
        this.closePeerConnections();
    };

    webrtc.prototype.removeVideoTrack = function (stream) {
        var that = this;
        try {
            removeStream();
        } catch (e) {
            console.error(e);
        }
        function removeStream() {
            var videoStream = stream.getVideoTracks()[0];
            stream.removeTrack(videoStream);
            for (var id in that.peerConnections) {
                var pc = that.peerConnections[id];
                pc.removeStream(stream);
                pc.addStream(stream);
            }
        }
    };

    webrtc.prototype.addVideoTrack = function (stream, videoStream) {
        var that = this;
        try {
            addStream();
        } catch (e) {
            console.error(e);
        }
        function addStream() {
            stream.addTrack(videoStream);
            for (var id in that.peerConnections) {
                var pc = that.peerConnections[id];
                pc.removeStream(stream);
                pc.addStream(stream);
            }
        }
    };

    return new webrtc(role).initEvents();
};

exports.default = WebRTC;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(18);

// 0红 1黑 2蓝 0粗 1中 2细
exports.default = {
	name: "",
	components: {},
	data: function data() {
		return {
			//				nowPage: 1,
			//				allPage: 1,
			isUseEraser: false,
			isShowColor: false,
			isShowLine: false,
			pickBool: [0, 0, 0],
			pickBool2: [0, 0, 0],
			isPickLine: false,
			isCounting: false,
			countMin: 0,
			countSec: 0
		};
	},

	props: {
		nowPage: {
			type: Number,
			default: function _default() {
				return 1;
			}
		},
		allPage: {
			type: Number,
			default: function _default() {
				return 1;
			}
		}
	},
	computed: {
		counting: {
			get: function get() {
				if (this.$store.state.isCountingTime) {
					this.countTime();
				}
				return this.$store.state.isCountingTime;
			}
		}
	},
	created: function created() {},
	mounted: function mounted() {},

	methods: {
		_clearStatus: function _clearStatus() {
			this.isShowLine = false;
			this.isShowColor = false;
		},
		back: function back() {
			if (this.nowPage != 1) {
				this.$emit('backPage');
			}
		},
		forward: function forward() {
			if (this.nowPage != this.allPage) {
				this.$emit('forwardPage');
			}
		},
		addNewPage: function addNewPage() {
			//				this.allPage++
			this.$emit('addNewPage');
		},
		showColor: function showColor() {
			this.isShowLine = false;
			this.isShowColor = !this.isShowColor;
		},
		showLine: function showLine() {
			this.isShowColor = false;
			this.isShowLine = !this.isShowLine;
		},
		pickColor: function pickColor(code) {
			for (var i in this.pickBool) {
				this.pickBool.splice(i, 1, 0);
			}
			this.pickBool.splice(code, 1, 1);
			this.isShowColor = !this.isShowColor;
			this.$emit('changeColor', code);
		},
		pickLine: function pickLine(code) {
			for (var i in this.pickBool) {
				this.pickBool2.splice(i, 1, 0);
			}
			this.pickBool2.splice(code, 1, 1);
			this.isShowLine = !this.isShowLine;
			this.$emit('changeSize', code);
		},
		useEraser: function useEraser() {
			this._clearStatus();
			if (this.isUseEraser) {
				this.$emit('cancelEraser');
				this.isUseEraser = false;
			} else {
				this.$emit('useEraser');
				this.isUseEraser = true;
			}
		},
		clearCanvas: function clearCanvas() {
			this._clearStatus();
			this.$emit('clearCanvas');
		},
		offClass: function offClass() {
			this.$emit('offClass');
		},
		countTime: function countTime() {
			var _this = this;

			this.isCounting = true;
			(0, _util.countFn)(55 * 60, 1000, function () {
				if (_this.countSec == 59) {
					_this.countMin++;
					_this.countSec = 0;
				} else {
					_this.countSec++;
				}
			}, function () {
				_this.$emit('timeUp');
			});
		}
	}
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toolsBar = __webpack_require__(227);

var _toolsBar2 = _interopRequireDefault(_toolsBar);

var _XmediaStream = __webpack_require__(286);

var _XaudioBox = __webpack_require__(285);

var _XBoard = __webpack_require__(284);

var _util = __webpack_require__(18);

var _basicButtons = __webpack_require__(135);

var _basicButtons2 = _interopRequireDefault(_basicButtons);

var _webrtc = __webpack_require__(266);

var _webrtc2 = _interopRequireDefault(_webrtc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/*功能
 * 1.获取本地视频流并显示出来，记得清除多余的mediaStream
 * 2.通过webrtc建立p2p视频通话（ws连接，发送自己的流，接受对面的流） 流包括 音频流 视频流 坐标流(x,y)
 * 3. 本地canvas绘图 改变颜色 粗细 并返回实时的坐标(x,y)
 * 4. 两张canvas重叠，一张接受对面的坐标，一张绘自己的坐标
 * 5. 新增白纸功能,在图片最后一页加入白纸，翻页会翻到图片的下一页，清空当前的绘图数据
 * 6.
 * 2.*/
exports.default = {
	name: "",
	components: {
		toolBar: _toolsBar2.default,
		basicBtn: _basicButtons2.default
	},
	data: function data() {
		return {
			beginTime: null,
			courseId: null,
			gapTime2: null,
			intervalId: null,
			coursewareId: null,
			lessonToken: null,
			isShowMtBar: true,
			signal1: 6,
			signal2: 6,
			localVideoURL: '',
			remoteVideoURL: '',
			localStreamObj: null,
			remoteStreamObj: null,
			localAudio: {},
			remoteAudio: {},
			localCanvas: null,
			remoteCanvas: null,
			localBox: null,
			remoteBox: null,
			images: [],
			imagesObj: [],
			pageCount: 0, // 图片页数
			isOnClass: false,
			studentIn: false, // 判断学生是否进来
			teacherName: (0, _util.getStore)('name'),
			studentName: '',
			isShowStudentVideo: true,
			isShowTeacherVideo: true,
			classDone: false,
			pageIds: []
		};
	},

	props: {},
	computed: {
		pageNum: function pageNum() {
			return this.images.length;
		},
		nowPage: function nowPage() {
			return this.pageCount + 1;
		},

		gapTime: {
			get: function get() {
				var _this = this;

				if (this.beginTime != null) {
					var _time = Math.ceil((this.beginTime - +new Date()) / 60000);
					if (_time <= 0) {
						this.isShowMtBar = false;
					}
					(0, _util.countFn)(_time, 60000, function () {
						_this.gapTime2 = --_time;
					}, function () {
						_this.isShowMtBar = false;
					});
					this.gapTime2 = _time;
				} else {
					this.gapTime2 = 5;
				}
			},
			set: function set(data) {
				//						console.log(data)
				this.gapTime2 = data;
			}
		}
	},
	created: function created() {},
	mounted: function mounted() {
		var _this2 = this;

		// clear the interval
		clearInterval((0, _util.getSession)('interval_id'));
		(0, _util.removeSession)('interval_id');
		// init courseId
		this.courseId = (0, _util.getSession)('courseId_forClass');
		// bind reDraw event
		this.$ipc.on('redraw', function () {
			_this2._reDraw();
		});
		// onClass
		this._onClass();
		// 实例化本地白板
		this.localCanvas = new _XBoard.XBoard('localCanvas', $('#localCanvas'));
		this.remoteCanvas = new _XBoard.XBoard('remoteCanvas', $('#remoteCanvas'));

		// 白板绑定事件
		this.localCanvas.bindCallBack(this._writeCanvas, this._clearCanvas, this._eraserCanvas);
		// 当前课程
		this.$api.getCurrentCourse(this.courseId).then(function (res) {
			var _data = res.data;
			_this2.beginTime = _data.beginTime;
			_this2.studentName = _data.studentName;
		});

		var getData = async function getData() {
			try {
				await _this2.$api.videoPlatform(_this2.courseId, 'webrtc');
				var _coursewareId = await _this2.$api.searchCourseware(_this2.courseId);

				//	获取课件id
				_this2.coursewareId = _coursewareId.data.coursewareId;

				var _coursePics = await _this2.$api.previewCourseWare(_this2.coursewareId);

				// 获取图片和课件详细信息
				_this2.imagesObj = _coursePics.data.pageList;
				// this.imagesObj.id
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = _this2.imagesObj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var item = _step.value;

						_this2.images.push(item.imageUrl);
						_this2.pageIds.push(item.id);
					}

					// 获取上课token
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				var _courseToken = await _this2.$api.getLessonToken(_this2.courseId);

				_this2.lessonToken = _courseToken.data.result.lessonToken;

				// 轮询
				//						this._polling(25000)
				_this2._polling();

				// 断点上课
				var historyData = await _this2.$api.searchHistory(_this2.lessonToken);
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = _this2.pageIds[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var _item = _step2.value;

						if (historyData.data.result.pageId == _item) {
							return;
						}
						if (historyData.data.result.student.length != 0) {
							_this2._reDrawByPage(historyData.data.result.student);
						} else if (historyData.data.result.teacher.length != 0) {
							_this2._reDrawByPage(historyData.data.result.teacher);
						} else {
							_this2._reDrawByPage(historyData.data.result.student, historyData.data.result.teacher);
						}
						if (_this2.pageCount < _this2.images.length) {
							_this2.pageCount++;
						}
					}

					//						console.log(this.coursewareId, this.images, this.lessonToken)
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}
			} catch (err) {
				console.error(err);
			}
		};

		getData();

		this.mediaConnection();
	},
	beforeDestroy: function beforeDestroy() {
		//
		this._offClass();
		this.clearStreams();
		clearInterval((0, _util.getSession)('interval_id'));
		(0, _util.removeSession)('interval_id');
	},

	methods: {
		_showMtBar: function _showMtBar() {
			this.isShowMtBar = false;
		},
		_updateSignal1: function _updateSignal1(val) {
			this.signal1 = val;
		},
		_updateSignal2: function _updateSignal2(val) {
			this.signal2 = val;
		},

		//	顶部提示距离上课时间
		//				_remindTime(){
		//					let _nowTime = +new Date()
		//					let _gapTime = this.beginTime - (+new Date())
		//
		////					countFn()
		//				},
		// 重绘和重计算高度
		_reDraw: function _reDraw() {
			this.remoteCanvas.recompute($('#remoteCanvas'));
			this.localCanvas.recompute($('#localCanvas'));
			this.localCanvas.plotPoints();
		},

		// 发送上课命令
		_onClass: function _onClass() {
			console.log('上课');
			this.$ipc.send("onClass", true);
		},

		// 发送上课请求
		onClass: function onClass() {
			var _this3 = this;

			//				  console.log(Math.round((this.beginTime - (+new Date())) / 60000))

			// TODO:别注释业务判断
			if (Math.round((this.beginTime - +new Date()) / 60000) > 0) {
				this.$message({ message: '还未到上课时间', duration: 1500 });
				return false;
			}
			if (!this.studentIn) {
				this.$message({ message: '学生还没进入教室', duration: 1500 });
				return false;
			}

			console.log('发送上课请求');
			this.$api.startLesson(this.lessonToken).then(function (res) {
				var _data = res.data;
				if (!_data.status) {
					// 上课成功
					_this3.isOnClass = true;
					_this3.$store.commit('START_COUNT_TIME'); // 提交上课状态
				} else {
					_this3.$message({ message: _data.msg, duration: 1500 });
				}
			}).catch(function (err) {
				console.error(err);
			});
		},

		// 发送下课命令
		_offClass: function _offClass() {
			this.$ipc.send('onClass', false);
			console.log('下课');
		},

		// 轮询
		_polling: function _polling() {
			var _this4 = this;

			//					let that = this
			//					if (gapTime < 5000 || !this.lessonToken) {
			//						return;
			//					}
			//					let intervalId = setInterval(() => {
			//						that.$api.syncLessonMessage(this.lessonToken)
			//					}, gapTime)
			//					setSession('interval_id', intervalId)
			if (!(0, _util.getSession)('courseId_forClass')) {
				// 停止轮询的标志
				console.log('你已离开教室');
				return false;
			}

			this.$api.syncLessonMessage(this.lessonToken).then(function (res) {
				if (!res.data.status) {
					if (!res.data.result.msgs) {} else {
						if (res.data.result.msgs[0].cmd == 'draw') {
							// 学生画画
							//									this._reDrawByPage(res.data.result.msgs[0].data)
						}
						if (res.data.result.msgs[0].data == 'studentOut') {
							_this4.$message({ message: '学生已离开教室', duration: 1500 });
							_this4.studentIn = false;
							return false;
						} else {
							// 真小学生一样的接口
							if (JSON.parse(res.data.result.msgs[0].data).studentIn) {
								_this4.studentIn = true;
								_this4.$message({ message: '学生已进入教室，可以开始上课了', duration: 1500 });
							}
						}
					}
					_this4._polling();
				} else {
					console.error(res.data.msg);
					if (res.data.status == '-102') {
						_this4.$message({ message: res.data.msg, duration: 1500 });
						return false;
					}
				}
			}).catch(function (err) {
				console.log(err);
			});
		},

		// 上课视频连接
		mediaConnection: function mediaConnection() {
			var webrtc = (0, _webrtc2.default)('teacher');
			var courseId = window.sessionStorage.getItem('courseId_forClass') || 0;
			var onlineStatus = true;
			var localStreamObj = {};
			var remoteStreamObj = {};
			var that = this;
			var streamConfig = {
				"video": true,
				"audio": {
					optional: [{
						googAutoGainControl: true
					}, {
						googEchoCancellation: true
					}, {
						googNoiseSuppression: true
					}]
				} // 视频流配置

			};webrtc.on("socket_opened", function () {

				// 1.建一个对象，传入配置，发射出来，然后返回对象便以后操作
				webrtc.createLocalStream(streamConfig);
			});

			webrtc.on("stream_created", function (e) {
				localStreamObj = new _XmediaStream.XMediaStream();
				localStreamObj.recordStream(e.stream);
				// 记录音频
				that.localBox = new _XaudioBox.XAudioBox();
				that.localBox.initBox();
				that.localBox.loadStream(e.stream);
				that.localBox.createDataArray(32);
				that.localBox.outputData(function () {
					that.signal2 = (0, _util.computeVolume)(that.localBox.dataArray, 300);
				});
				that.localStreamObj = localStreamObj;
				console.log(localStreamObj.mediaStream);
				document.getElementById('localVideo').srcObject = localStreamObj.mediaStream;
				that.isShowTeacherVideo = true;
			});

			webrtc.on("peer_stream", function (e) {
				// 来自对方
				remoteStreamObj = new _XmediaStream.XMediaStream();
				remoteStreamObj.recordStream(e.stream);
				that.remoteBox = new _XaudioBox.XAudioBox();
				that.remoteBox.initBox();
				that.remoteBox.loadStream(e.stream);
				that.remoteBox.createDataArray(32);
				that.remoteBox.outputData(function () {
					that.signal1 = (0, _util.computeVolume)(that.remoteBox.dataArray, 300);
				});
				that.remoStreamObj = remoteStreamObj;
				document.getElementById('remoteVideoURL').srcObject = remoteStreamObj.mediaStream;
				that.isShowStudentVideo = true;
				that.studentIn = true;
			});

			webrtc.on("remove_peer", function () {
				console.log("remove_peer");
			});
			webrtc.on("remove_stream", function () {
				console.log("远程流删除");
			});

			that.$api.teacherConfigure(courseId).then(function (res) {
				var _data = res.data.result.video;
				webrtc.connect(_data.channelName, _data.uid, _data.key);
			}).catch(function (err) {
				console.log(err);
			});
		},

		// 测试封装的媒体流对象
		test: function test() {
			var t = new _XmediaStream.XMediaStream();
			try {
				(async function () {
					await t.createMedia('audio');
					var ad = new _XaudioBox.XAudioBox();
					ad.initBox();
					//							ad.loadSrc('../../../static/audios/demo.mov')
					ad.loadStream(t.mediaStream);
					ad.createDataArray(32);
					//							ad.playSrc(1)

					ad.outputData(function () {
						console.log(ad.dataArray);
					});

					setTimeout(function () {
						t.stopAll();
						//								ad.stop()
					}, 2000);

					//							this.localVideoURL = window.URL.createObjectURL(t.mediaStream)
				})();
			} catch (err) {
				console.log(err);
			}
		},
		changeColor: function changeColor(code) {
			var color = null;
			switch (code) {
				case 0:
					color = 'red';
					break;
				case 1:
					color = 'black';
					break;
				case 2:
					color = 'blue';
					break;
			}
			this.localCanvas.changeColor(color);
		},
		changeSize: function changeSize(code) {
			var size = null;
			switch (code) {
				case 0:
					size = 'L';
					break;
				case 1:
					size = 'M';
					break;
				case 2:
					size = 'S';
					break;
			}
			this.localCanvas.changeSize(size);
		},
		useEraser: function useEraser() {
			this.localCanvas.useEraser();
		},
		cancelEraser: function cancelEraser() {
			this.localCanvas.cancelEraser();
		},
		clearCanvas: function clearCanvas() {
			var _this5 = this;

			this._clearCanvas().then(function () {
				_this5.localCanvas.clearAllCanvas();
			});
		},
		addNewPage: function addNewPage() {
			this.$message({ message: "暂时未开放的功能", duration: 1500 });
			console.log('添加新页');
		},
		offClass: function offClass() {
			var _this6 = this;

			//					console.log('下课')
			if (this.isOnClass) {
				this._showMessageBox('未到下课时间，是否下课？', function () {
					_this6.$api.teacherFinishCourse(_this6.courseId);
					_this6.$store.commit("UPDATE_COURSE_ID", _this6.courseId);
					(0, _util.removeSession)('courseId_forClass');
					_this6.$router.push('/static/classInfo');
				});
			} else {
				(0, _util.removeSession)('courseId_forClass');
				this.$store.commit("UPDATE_COURSE_ID", this.courseId);
				this.$router.push('/static/classInfo');
			}

			//					if (!this.classDone) {
			//						this.$message({message: '未到下课时间', duration: 1500})
			//						return false
			//					}
		},

		// 上一页
		backPage: function backPage() {
			var _this7 = this;

			var _temp = {
				page: this.pageIds[this.pageCount - 1].toString(),
				imageUrl: this.images[this.pageCount - 1]

			};
			this._sendMessage('page', JSON.stringify(_temp)).then(function (res) {
				//						console.log(res.data)
				if (_this7.pageCount == 0) {
					return;
				}
				//						console.log(res.data.result.pageHistory.teacher)
				//						console.log(res.data.result.pageHistory.student)
				_this7._reDrawByPage(res.data.result.pageHistory.student, res.data.result.pageHistory.teacher);
				_this7.pageCount--;
			});
		},

		// 下一页
		forwardPage: function forwardPage() {
			var _this8 = this;

			var _temp = {
				page: this.pageIds[this.pageCount + 1].toString(),
				imageUrl: this.images[this.pageCount + 1]

			};
			this._sendMessage('page', JSON.stringify(_temp)).then(function (res) {
				if (!res.data.status) {
					if (_this8.pageCount >= _this8.images.length) {
						return;
					}
					_this8._reDrawByPage(res.data.result.pageHistory.student, res.data.result.pageHistory.teacher);
					//							this._reDrawByPage(res.data.result.pageHistory.teacher,res.data.result.pageHistory.student, )
					_this8.pageCount++;
				} else {
					console.error(res.data.msg);
				}
			});
		},

		// 底部栏计时结束
		timeCountDone: function timeCountDone() {
			console.log('计时结束！！');
			if (!this.studentIn) {
				this.$message({ message: '学生旷课', duration: 1500 });
				this.$store.commit("UPDATE_COURSE_ID", this.courseId);
				(0, _util.removeSession)('courseId_forClass');
				this.$router.push('/static/classInfo');
				return false;
			}
			this.$message({ message: '可以下课了', duration: 1500 });
			this.classDone = true;
		},

		// 清除媒体流
		clearStreams: function clearStreams() {
			if (this.localStreamObj) {
				this.localStreamObj.stopAll();
			}
			if (this.remoteStreamObj) {
				this.remoteStreamObj.stopAll();
			}
			if (this.localBox) {
				this.localBox.stop();
			}
			if (this.remoteBox) {
				this.remoteBox.stop();
			}
		},

		// 上课一系列的命令
		_sendMessage: function _sendMessage(cmd, data) {
			// cmd clear page
			return this.$api.sendMessage(this.lessonToken, cmd, data);
		},
		_writeCanvas: function _writeCanvas(data) {
			this._sendMessage('draw', JSON.stringify(data.data));
		},
		_clearCanvas: function _clearCanvas() {
			var _data = {
				role: 'teacher',
				line: []
			};
			return this._sendMessage('clear', _data.toString());
		},
		_eraserCanvas: function _eraserCanvas() {
			console.log('暂时没用');
		},

		// 关闭视频信号
		closeVideo: function closeVideo(code) {
			switch (code) {
				case -1:
					//							if (!this.remoteStreamObj) {
					//								return;
					//							}
					this.isShowStudentVideo = true;
					break;
				case 0:
					this.isShowStudentVideo = false;
					break;
				case 1:
					this.isShowTeacherVideo = false;
					break;
				case 2:
					//							if (!this.localStreamObj) {
					//								return;
					//							}
					this.isShowTeacherVideo = true;
					break;
			}
		},
		_showMessageBox: function _showMessageBox(word, yesFn) {
			var noFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

			this.$confirm(word, '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(function () {
				yesFn();
			}).catch(function () {
				noFn();
			});
		},

		// 翻页导致的重绘
		_reDrawByPage: function _reDrawByPage() {
			var student = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
			var teacher = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

			//					console.log(student, teacher)
			this.remoteCanvas.recompute($('#remoteCanvas'));
			this.localCanvas.recompute($('#localCanvas'));
			this.localCanvas.clearAllCanvas();
			this.remoteCanvas.clearAllCanvas();
			if (student.length != 0) {
				this.remoteCanvas.plotByOutPoints(student);
			}
			if (teacher.length != 0) {
				this.localCanvas.plotByOutPoints(teacher);
			}
		}
	}
};
//		import mediaConnection from '../../../js/media-connection'
//		import mediaConnection from '../../common/scripts/mediaConnection'
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * Created by Acery on 2017/8/22.
 */

// 橡皮擦 1. clearRect 2. 设置画笔隐形
// 在使用橡皮擦的时候进行隐形划线 划线坐标与储存的points做交集，拿到交集部分再进行clearRect


// record: 1.搞清楚class里什么时候该用成状态 什么时候该用成一个暂存数据 什么时候该清除数据

//获取页面上的canvas元素
// 前台功能 绘画，改变颜色，橡皮，删除
// 后台实时发送坐标数据 以及各种命令，以回调Promise的形式抛出去
// 各种resize需要设计reload函数
// creator:You_Chao_Yang


// **** important: need JQuery register first ****
function XBoard(DomId, canvasDom) {
	var _this = this;

	this.ctx = null; // canvas obj
	this.isPainting = false; // judge painting
	this.isUsingEraser = false; // judge Eraser
	this.height = undefined; // to recompute the canvas height
	this.width = undefined; // to recompute the canvas width
	this.top = undefined; // store the position of canvasDom
	this.left = undefined; // store the position of canvasDom
	this.canvasDom = null; // store the dom
	this.domId = null; // store dom attr:id
	this.color = 'black'; // now : blue red black
	this.penSize = 4; // the size of pen(S:2,M:4,L:8)
	this.eraserSize = 40; // the size of eraser
	this.scaleX = 1; // store newCanvasWidth/canvasWidth
	this.scaleY = 1; // store newCanvasHeight/canvasHeight
	// this.points = [] // store all  position data  (func: resize to recovery)
	// this.clearPoints = []
	this.tempPoint = []; //temporary storage （after send out remember clear!)
	this.tempClearPoint = []; // judge valid line
	this.tolerantRadious = 10; // blur clear
	this.pointsData = [];

	// define callBack fn
	this.writeFn = function () {
		console.log('write');
	};
	this.eraserFn = function () {
		console.log('eraser');
	};
	this.clearFn = function () {
		console.log('clear');
	};

	// bind events
	var _bindEvents = function _bindEvents() {
		var self = _this;
		document.getElementById(self.domId).setAttribute('height', self.height);
		document.getElementById(self.domId).setAttribute('width', self.width);

		self.canvasDom.on('mousedown', function (e) {
			self.tempPoint = []; // refresh
			self.tempClearPoint = []; // refresh
			self.isPainting = true;
			self.ctx.beginPath();
			self.ctx.moveTo(e.clientX - self.left, e.clientY - self.top);
		});

		self.canvasDom.on('mouseup', function () {
			self.isPainting = false;
			// 判断是否为无效橡皮擦轨迹
			// if (self.isUsingEraser) {
			// 	console.log(self.judgeIntersection(self.tempClearPoint))
			// }

			// 存下当前的pointData
			var _temp = {
				cmd: '', // clear/draw
				data: {
					color: null,
					size: null,
					point: [{
						x: 0,
						y: 0
					}]
				}
			};
			if (self.isUsingEraser) {
				// 说明是clearLine
				_temp.cmd = 'clear';

				_temp.data.point = self.tempClearPoint;
			} else {
				// 说明是drawLine
				_temp.cmd = 'draw';
				_temp.data.color = self.color;
				_temp.data.size = self.penSize;
				_temp.data.point = self.tempPoint;
			}

			self.pointsData.push(_temp);
			//	触发回调函数
			if (self.isUsingEraser) {
				self.eraserFn(_temp);
			} else {
				self.writeFn(_temp);
			}

			// console.log(self.pointsData)
			self.ctx.closePath();
		});

		self.canvasDom.on('mousemove', function (e) {
			if (self.isPainting) {
				// 使用橡皮擦
				if (self.isUsingEraser) {
					self.ctx.strokeStyle = 'transparent'; // static
					self.ctx.lineWidth = self.eraserSize; // variable
					self.ctx.clearRect(e.clientX - self.left, e.clientY - self.top, self.eraserSize, self.eraserSize);
				} else {
					self.ctx.strokeStyle = self.color;
					self.ctx.lineWidth = self.penSize;
				}
				self.ctx.lineTo(e.clientX - self.left, e.clientY - self.top);
				// self.storeData(e.clientX - self.left, e.clientY - self.top, self.eraserSize, self.eraserSize)
				self.storeTempData(e.clientX - self.left, e.clientY - self.top, self.eraserSize, self.eraserSize);
				self.ctx.stroke();
			}
		});

		self.canvasDom.on('mouseleave', function () {
			self.isPainting = false;
		});

		self.canvasDom.on("click", function (e) {
			// 暂时没功能
		});
	};
	if (DomId && canvasDom) {
		if (document.getElementById(DomId).getContext("2d")) {
			this.ctx = document.getElementById(DomId).getContext("2d");
			this.domId = DomId;
			this.canvasDom = canvasDom;
			this.top = canvasDom.offset().top;
			this.left = canvasDom.offset().left;
			this.height = canvasDom.height();
			this.width = canvasDom.width();
			_bindEvents();
		} else {
			//  canvas-unsupported code here
			alert("this browser can not support canvas");
		}
	} else {
		console.error("XB init ERR: params undefined");
	}
}

/**
 * 换画笔颜色
 * @param color
 */
XBoard.prototype.changeColor = function (color) {
	switch (color) {
		case 'black':
			this.color = '#231815';
			break;
		case 'blue':
			this.color = '#4a96ff';
			break;
		case 'red':
			this.color = '#ff3333';
			break;
		default:
			{
				console.error('XB changeColorWARN: unknown colors');
				this.color = color;
			}
	}
};

/**
 * 换画笔粗细
 * @param size
 */
XBoard.prototype.changeSize = function (size) {
	switch (size) {
		case 'S':
			this.penSize = 2;
			break;
		case 'M':
			this.penSize = 4;
			break;
		case 'L':
			this.penSize = 8;
			break;
		default:
			{
				console.error('XB changeSizeWARN: unknown size');
				this.penSize = size;
			}
	}
};

/**
 * 清屏
 */
XBoard.prototype.clearAllCanvas = function () {
	this.ctx.stroke();
	this.ctx.closePath();
	this.ctx.clearRect(0, 0, this.width, this.height);
	this.clearData();
	//TODO:以后加上
	// this.clearFn()
};

/**
 * 通过点坐标用于清除画布
 * @param points
 */
// XBoard.prototype.clearCanvasByPoints = function (points) {
// 	if (!points) {
// 		console.error('XB:clearCanvasByPoints ERR ---params undefined')
// 	} else {
// 		for (let i = 0; i < points.length; ++i) {
// 			// this.ctx.clearRect(item.x, item.y, this.eraserSize, this.eraserSize)
// 			this.ctx.clearRect(points[i].x * this.scaleX, points[i].y * this.scaleY, this.eraserSize, this.eraserSize)
//
// 			// 更新clearPoints
// 			points[i].x = points[i].x * this.scaleX
// 			points[i].y = points[i].y * this.scaleY
// 		}
// 	}
// }


/**
 * 使用橡皮 TODO：橡皮的回调函数没写呢
 */
XBoard.prototype.useEraser = function () {
	this.isUsingEraser = true;
};

/**
 * 退出使用橡皮擦 涉及到筛选调 clearPoints 和 points的交点为圆心画圆 在圆内的所有点全部清除掉
 */
XBoard.prototype.cancelEraser = function () {
	this.isUsingEraser = false;

	// ******** 半径算法 被 通过clearPoints模拟橡皮轨迹 所替代 *********
	// for (let i = 0; i < this.clearPoints.length; i++) {
	// 	for (let point of this.points) {
	// 		// Math.pow(Math.pow(x1-x2,2)+Math.pow(y1-y2,2),1/2)
	// 		if (Math.pow(
	// 				(
	// 					Math.pow(this.clearPoints[i].x - point.x, 2)
	// 					+
	// 					Math.pow(this.clearPoints[i].y - point.y, 2)
	// 					//         this.tolerantRadious
	// 				), 1 / 2) <= this.eraserSize) {
	//
	// 			this.points.splice(i, 1)
	// 		}
	// 	}
	// }
};

// XBoard.prototype.judgeIntersection = function (points) {
// 	// 离散分布情况计数
// 	let count = 0
//
// 	for (let i = 0; i < points.length; i++) {
// 		for (let point of this.points) {
// 			// Math.pow(Math.pow(x1-x2,2)+Math.pow(y1-y2,2),1/2)
//
//
// 			// console.log(points[i].x, point.x)
// 			// console.log(Math.pow(
// 			// 	(
// 			// 		Math.pow(points[i].x - point.x, 2)
// 			// 		+
// 			// 		Math.pow(points[i].y - point.y, 2)
// 			// 	), 1 / 2))
// 			if (Math.pow(
// 					(
// 						Math.pow(this.clearPoints[i].x - point.x, 2)
// 						+
// 						Math.pow(this.clearPoints[i].y - point.y, 2)
// 					), 1 / 2) <= this.tolerantRadious) {
// 				count++
// 				// console.log(count)
// 			}
// 		}
// 	}
//
// 	return count > 1;
// }


/**
 * 重新计算canvas尺寸 核心计算：比例不变原则
 */
XBoard.prototype.recompute = function (canvasDom) {
	// 重置数据
	this.scaleX = canvasDom.width() / this.width; // new/old
	this.scaleY = canvasDom.height() / this.height; // new/old
	this.height = canvasDom.height();
	this.width = canvasDom.width();
	this.top = canvasDom.offset().top;
	this.left = canvasDom.offset().left;
	document.getElementById(this.domId).setAttribute('height', this.height);
	document.getElementById(this.domId).setAttribute('width', this.width);
};

/**
 * 储存坐标数据
 */
// XBoard.prototype.storeData = function (pointX, pointY) {
// 	if (this.isUsingEraser) {
// 		this.clearPoints.push({
// 				x: pointX,
// 				y: pointY
// 			}
// 		)
// 	} else {
// 		this.points.push({
// 			x: pointX,
// 			y: pointY
// 		})
// 	}
//
// }

/**
 * 储存临时坐标数据（用于发送和判断的坐标数据）
 */
XBoard.prototype.storeTempData = function (pointX, pointY) {
	if (this.isUsingEraser) {
		this.tempClearPoint.push({
			x: pointX,
			y: pointY
		});
	} else {
		this.tempPoint.push({
			x: pointX,
			y: pointY
		});
	}
};

/**
 * 清除储存的坐标数据
 */
XBoard.prototype.clearData = function () {
	// this.points = []
	// this.clearPoints = []
	this.pointsData = [];
};

/**
 * 通过储存的坐标绘制画图 作用：用于resize之后的重绘
 */
// XBoard.prototype.drawData = function () {
// 	let self = this
// 	self.ctx.strokeStyle = self.color
// 	self.ctx.lineWidth = self.penSize
// 	self.ctx.beginPath()
// 	// if(!this.points)
// 	if (this.points.length == 0) {
// 		console.error("XB:drawData ERR --- points.length ERR")
// 		return false
// 	}
// 	self.ctx.moveTo(this.points[0].x * self.scaleX, this.points[0].y * self.scaleY)
// 	for (let i = 0; i < this.points.length; i++) {
// 		self.ctx.lineTo(this.points[i].x * self.scaleX, this.points[i].y * self.scaleY) // 按比例来缩放
//
// 		// 更新点坐标
// 		self.ctx.stroke();
// 		self.points[i].x = this.points[i].x * self.scaleX
// 		self.points[i].y = this.points[i].y * self.scaleY
// 	}
// 	self.ctx.closePath()
// 	// self.clearData()
// }


/**
 * 通过点坐标绘制图形
 * @param color
 * @param size
 * @param points
 * @returns {boolean} status
 */
// XBoard.prototype.drawCanvasByPoints = function (color, size, points) {
// 	this.recompute(this.canvasDom)
// 	if (!points || !color || !size) {
// 		console.error('XB: drawCanvasByPoints --- params undefined')
// 		return false
// 	} else {
// 		this.ctx.strokeStyle = color
// 		this.ctx.lineWidth = size
// 		this.ctx.beginPath()
// 		if (points.length == 0) {
// 			console.error("XB:drawCanvasByPoints ERR --- points.length ERR")
// 			return false
// 		}
// 		this.ctx.moveTo(points[0].x * this.scaleX, points[0].y * this.scaleY)
// 		for (let i = 0; i < points.length; ++i) {
// 			this.ctx.lineTo(points[i].x * this.scaleX, points[i].y * this.scaleY)
// 			this.ctx.stroke()
// 		}
// 		this.ctx.closePath()
// 	}
// }


/**
 * new: 从 pointsData 里读取命令和坐标数据进行绘画和擦除
 */
XBoard.prototype.plotPoints = function () {
	// console.log(this.pointsData)
	if (!this.pointsData.length) {
		console.error('XB: plotPoint ERR ---- there is no data in pointsData');
		return false;
	} else {
		for (var i = 0; i < this.pointsData.length; ++i) {

			if (this.pointsData[i].cmd == 'clear') {
				// 清除
				this.clearLine(this.pointsData[i].data.point);
			}
			if (this.pointsData[i].cmd == 'draw') {
				// 绘画
				this.drawLine(this.pointsData[i].data.color, this.pointsData[i].data.size, this.pointsData[i].data.point);
			}
		}
	}
};

/**
 * 绘画命令所执行函数
 * @param color
 * @param size
 * @param data
 * @returns {boolean}
 */
XBoard.prototype.drawLine = function (color, size, data) {
	if (!data || !color || !size) {
		console.error('XB: drawLine --- params undefined');
		return false;
	} else {
		this.ctx.strokeStyle = color;
		this.ctx.lineWidth = size;
		this.ctx.beginPath();
		if (data.length == 0) {
			console.error("XB: drawLine ERR --- points.length ERR");
			return false;
		}
		this.ctx.moveTo(data[0].x * this.scaleX, data[0].y * this.scaleY);
		for (var i = 0; i < data.length; ++i) {
			this.ctx.lineTo(data[i].x * this.scaleX, data[i].y * this.scaleY);

			// update data
			data[i].x = data[i].x * this.scaleX;
			data[i].y = data[i].y * this.scaleY;
			this.ctx.stroke();
		}
		this.ctx.closePath();
	}
};

/**
 * 清除命令所执行函数
 * @param points
 * @returns {boolean}
 */
XBoard.prototype.clearLine = function (points) {
	if (!points || points.length == 0) {
		console.error('XB: clearLine ERR --- params wrong');
		return false;
	} else {
		for (var i = 0; i < points.length; ++i) {
			this.ctx.clearRect(points[i].x * this.scaleX, points[i].y * this.scaleY, this.eraserSize, this.eraserSize);

			// update Data
			points[i].x = points[i].x * this.scaleX;
			points[i].y = points[i].y * this.scaleY;
		}
	}
};

/**
 * 绑定触发回调函数
 */
XBoard.prototype.bindCallBack = function (writeFn, clearFn) {
	var eraserFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

	if (!writeFn || !clearFn) {
		console.error('XB:bindCallBack ERR ---- wrong params');
		return false;
	}

	this.writeFn = writeFn;
	this.clearFn = clearFn;
	this.eraserFn = eraserFn;
};

/**
 * 通过外部传入的坐标数据进行绘制 data:[{cmd:'',data:{ size:'',point:'',color:''}}]
 */

XBoard.prototype.plotByOutPoints = function (dataArray) {
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {

		for (var _iterator = dataArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var item = _step.value;

			if (item.cmd == 'draw') {
				var _data = JSON.parse(item.data);
				this.drawLine(_data.color, _data.size, _data.point);
			}
			if (item.cmd == 'clear') {
				// TODO: 下个版本加上
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
};

exports.XBoard = XBoard;


var tempData = [{
	cmd: '', // clear/draw
	data: {
		color: '',
		size: '',
		point: [{
			x: 0,
			y: 0
		}]
	}
}];

var dataTemplate = {
	'lessonToken': '课程的token',
	'cmd': 'draw', //
	'data': {
		color: '笔画颜色', // 16进制
		size: '画笔大小', // 2 num
		point: [{ x: '横坐标', y: '纵坐标' }]
	}
};

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * Created by Acery on 2017/8/21.
 */

// 接入stream输出数组
// 后期实现解码音频 输出数组 需要建立动画帧
// 建立实例化计数
function XAudioBox() {
	this.audioCtx = null; // for audioContext
	this.streamSource = null; // store mediaStream in audioCtx
	this.analyser = null; // analyser
	this.isInit = false; // judge init
	this.dataArray = null; // store ouputArray
	this.audioObj = null; // for Audio object
	this.animationId = null; // store annimatino id to clear
}

XAudioBox.boxCount = 0; // static
XAudioBox.maxCount = 6; // static

XAudioBox.prototype.initBox = function () {
	if (XAudioBox.boxCount >= XAudioBox.maxCount) {
		console.error('Reach max XAB count');
	}
	XAudioBox.boxCount++;
	this.isInit = true;
	this.audioCtx = new AudioContext();
};

// 加载音频流
XAudioBox.prototype.loadStream = function (stream) {
	if (this.isInit) {
		this.streamSource = this.audioCtx.createMediaStreamSource(stream);
	} else {
		console.error('audioCtx not init');
	}
};

// 创建取样数组
XAudioBox.prototype.createDataArray = function (arrLength) {
	if (this.isInit) {
		if (!this.analyser) {
			this.analyser = this.audioCtx.createAnalyser();
			this.streamSource.connect(this.analyser);
			this.analyser.fftSize = arrLength;
			this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
		} else {
			console.error("audioCtx has been defined, please create new audioCtx");
		}
	} else {
		console.error('audioCtx not init');
	}
};

// 实时捕获并输出数据
XAudioBox.prototype.outputData = function (fn) {
	var _this = this;

	if (!this.animationId) {
		var _ani = function _ani() {
			_this.analyser.getByteFrequencyData(_this.dataArray);
			fn();
			requestAnimationFrame(_ani);
		};
		this.animationId = requestAnimationFrame(_ani);
	} else {
		console.error("animation has been defined, please stop it");
	}
};

// 从文件加载
XAudioBox.prototype.loadSrc = function (audioSrc) {
	if (this.isInit) {
		this.audioObj = new Audio();
		this.audioObj.src = audioSrc;
		if (!this.streamSource) {
			// this.analyser = this.audioCtx.createAnalyser();
			this.streamSource = this.audioCtx.createMediaElementSource(this.audioObj);
			// this.streamSource.connect(this.analyser)
			// this.analyser.connect(this.audioCtx.destination)
		} else {
			console.error("audioCtx has been defined, please create new audioCtx");
		}
	} else {
		console.error('audioCtx not init');
	}
};

// 播放音频
XAudioBox.prototype.playSrc = function (volume) {
	this.analyser.connect(this.audioCtx.destination);
	this.audioObj.volume = volume;
	this.audioObj.play();
};

// 关闭动画和audioCtx
XAudioBox.prototype.stop = function () {
	// this.audioObj.pause()
	this.audioCtx.close();
	window.cancelAnimationFrame(this.animationId);
};

exports.XAudioBox = XAudioBox;

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * Created by Acery on 2017/8/21.
 */

/*
 * 媒体流，提供接口
 * 1.创建视频流
 * 2.创建音频流*/
// 创建流，删除流，

function XMediaStream() {
	this.mediaTracks = []; // store the tracks
	this.mediaTracksRecycle = []; // to recovery the tracks you have removed
	this.mediaStream = null; // store mediaStream object
	this.streamId = undefined; // store the mediaStream.id
}

XMediaStream.mediaCount = 0;
XMediaStream.maxCount = 6; // 限制最大流

/**
 *  创建流
 * @param name 类型
 * @param constraint 约束条件
 * @returns {Promise} 注：上层可用await 接收
 */
XMediaStream.prototype.createMedia = function (name) {
	var _this = this;

	var constraint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	var _constraint = {};

	if (XMediaStream.mediaCount >= XMediaStream.maxCount) {
		console.error("XMS: Reach max MediaCount");
		return;
	}
	switch (name) {
		case 'audio':
			{
				// _constraint['audio'] = true
				// _constraint['video'] = false
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = Object.keys(constraint)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var key = _step.value;

						_constraint[key] = constraint[key];
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				return new Promise(function (resolve, reject) {
					navigator.mediaDevices.getUserMedia(_constraint).then(function (stream) {
						_this.mediaStream = stream;
						_this.streamId = stream.id;
						_this.mediaTracks = stream.getTracks();
						XMediaStream.mediaCount++;
						resolve('done!');
					}).catch(function (err) {
						reject(err);
					});
				});
			}
			break;
		case 'video':
			{
				// _constraint['audio'] = true
				// _constraint['video'] = {}
				// for (let key of Object.keys(constraint)) {
				// 	_constraint.video[key] = constraint[key]
				// }
				return new Promise(function (resolve, reject) {
					navigator.mediaDevices.getUserMedia(constraint).then(function (stream) {
						_this.mediaStream = stream;
						_this.streamId = stream.id;
						_this.mediaTracks = stream.getTracks();
						XMediaStream.mediaCount++;
						resolve('done!');
					}).catch(function (err) {
						reject(err);
					});
				});
			}
			break;
		default:
			return Promise.rejected('unexpected params');
			break;
	}
};

/**
 * 清除所有轨道 注意：仍然未释放设备
 */
XMediaStream.prototype.removeAllTracks = function () {
	for (var i = 0; i < this.mediaTracks.length; ++i) {
		this.mediaTracksRecycle.push(this.mediaTracks[i]);
		this.mediaStream.removeTrack(this.mediaTracks[i]);
	}
	this.mediaTracks.splice(0, this.mediaTracks.length);
};

/**
 * 清除指定轨道 注意：仍然未释放设备
 */
XMediaStream.prototype.removeTracks = function () {
	console.error('未实现');
};

/**
 * 恢复轨道
 */
XMediaStream.prototype.recoveryTracks = function () {
	console.error('未实现');
};

/**
 * 停止并释放设备
 */
XMediaStream.prototype.stopAll = function () {
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = this.mediaTracks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var item = _step2.value;

			item.stop();
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}
};

/**
 * 获取设备名称
 * @returns {audio,video}
 */
XMediaStream.prototype.getLabel = function () {
	var _labels = {};
	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
		for (var _iterator3 = this.mediaTracks[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			var item = _step3.value;

			_labels[item.kind] = item.label;
		}
	} catch (err) {
		_didIteratorError3 = true;
		_iteratorError3 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion3 && _iterator3.return) {
				_iterator3.return();
			}
		} finally {
			if (_didIteratorError3) {
				throw _iteratorError3;
			}
		}
	}

	return _labels;
};

/**
 * 记录传入的音频流 适用于并非经过内部构造的
 * @param stream
 */
XMediaStream.prototype.recordStream = function (stream) {
	this.mediaStream = stream;
	this.streamId = stream.id;
	this.mediaTracks = stream.getTracks();
	XMediaStream.mediaCount++;
	// console.log(this.mediaStream)
	// console.log(this.streamId)
	// console.log(this.mediaTracks)
};

exports.XMediaStream = XMediaStream;

/***/ })

});
//# sourceMappingURL=1.build.js.map