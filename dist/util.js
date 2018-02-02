/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * gan
 *
 * 2018-1-16
 * */


class util{
    constructor(){}
    /**
     * 是否为对象
     * @param {any}
     * */
    isObject (obj) {
         return obj !== null && typeof obj === 'object'
    }
    /**
     * 是否全等于是否全等于undefined 或者 null
     * @param {any}
     * @return {Boolean}
     * */
    isUndef (v) {
        return v === undefined || v === null
    }
    /**
     * 是否不等于 undefined  null
     *  @param {any}
     *  @return {Boolean}
     * */
    isDef (v) {
        return v !== undefined && v !== null
    }
    isTrue (v) {
        return v === true
    }
    isFalse (v) {
        return v === false
    }
    /**
     * 转成字符串
     * @param {any}
     * @return {string}
     * */
    toString (val) {
        return val == null ? '' : typeof val === 'object' ? JSON.stringify(val, null, 2) : String(val)
    }
    /**
     * 删除数组的某个项
     * @param {Array}
     * @param {string}
     * @return {Array}
     * */

    arrRemove (arr, item) {
        if (arr.length) {
            var index = arr.indexOf(item);
            if (index > -1) {
                return arr.splice(index, 1)
            }
        }
    }
    /**
     * 检查首字母是否为$ ||  _
     * @param {string}
     * @return {boolean}
     * */
    isReserved (str) {
        var c = (str + '').charCodeAt(0);
        return c === 0x24 || c === 0x5F
    }
    /**
     * 处理0.1 +0.2===0.30000000000000004等问题
     * */
    toMoney (nub){
        return parseFloat(nub.toFixed(10));
    }




}
var ttt=new util();
//window.util=ttt;
/* harmony default export */ __webpack_exports__["a"] = (ttt);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_equipment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_eventTarget__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_number__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_regexp__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_time__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_z7z8__ = __webpack_require__(10);
/**
 * Created by gan on 2018/1/16.
 */
//
//
//
//
//
//
//
//
//
//杂七杂八

window.util={
    z7z8:__WEBPACK_IMPORTED_MODULE_9__lib_z7z8__["a" /* default */],
    dom:__WEBPACK_IMPORTED_MODULE_0__lib_dom__["a" /* default */],
    equipment:__WEBPACK_IMPORTED_MODULE_1__lib_equipment__["a" /* default */],
    eventTarget:__WEBPACK_IMPORTED_MODULE_2__lib_eventTarget__["a" /* default */],
    http:__WEBPACK_IMPORTED_MODULE_3__lib_http__["a" /* default */],
    number:__WEBPACK_IMPORTED_MODULE_4__lib_number__["a" /* default */],
    regexp:__WEBPACK_IMPORTED_MODULE_5__lib_regexp__["a" /* default */],
    storage:__WEBPACK_IMPORTED_MODULE_6__lib_storage__["a" /* default */],
    time:__WEBPACK_IMPORTED_MODULE_7__lib_time__["a" /* default */],
    ut:__WEBPACK_IMPORTED_MODULE_8__lib_util__["a" /* default */],
};
console.log(window.util);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);


class dom {
    constructor(){}
    /**
     * 检查是否有class
     * @param {object} dom对象
     * @param {string} 添加的class名
     * */
    hasClass (ele, cls) {
         return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
    }
    /**
     * 添加class
     * @param {object} dom对象
     * @param {string} 添加的class名
     * */
    addClass (ele, cls) {
         if (!this.hasClass(ele, cls)) ele.className += " " + cls;
    }
    /**
     * 移除class
     * @param {object} dom对象
     * @param {string} 添加的class名
     * */
    removeClass (ele, cls) {
        if (this.hasClass(ele, cls)) {
            var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
            ele.className = ele.className.replace(reg, " ");
        }
    }
    /**
     * 切换class
     * @param {object} dom对象
     * @param {string} 添加的class名
     * */
    toggleClass (ele, cls) {
        if(ele.length>1){
            for( var i=0 ;i<ele.length;i++){
                this.hasClass(ele[i],cls)? this.removeClass(ele[i], cls): this.addClass(ele[i], cls)
            }
        }else {
            this.hasClass(ele,cls)? this.removeClass(ele, cls): this.addClass(ele, cls)
        }
    }
    /*获取行间样式属性*/
    getByStyle (obj,name){
        if(obj.currentStyle){
            return  obj.currentStyle[name];
        }else{
            return  getComputedStyle(obj,false)[name];
        }
    }


}


var utilDom=new dom();
/* harmony default export */ __webpack_exports__["a"] = (utilDom);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by gan on 2018/1/18.
 */
class equipment{
    constructor(){
    }
    /**
     * 判断设备是ios还是android
     * @return {string} IOS  OR  Android
     *
     *
     * var UA=navigator.userAgent
     *  var isIE = UA && /msie|trident/.test(UA);
        var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
        var isEdge = UA && UA.indexOf('edge/') > 0;
        var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
     * */
     getSystem(){
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            return 'IOS'
        } else if (/(Android)/i.test(navigator.userAgent)) {
           return 'Android'
        }
    }
    /**
     *获取url地址参数 可获取中文
     *@param {string}
     *@return {string}
     * */
    getUrlParam(key) {
        var url = window.location.search;
        var reg = new RegExp("(^|&)" + key + "=(.*)?(&|$)");
        var result = url.substr(1).match(reg);//去除?号
        return result ? decodeURIComponent(result[2]) : null;
    }
    /**
     * 获取属性值
     * 注意  里面是' 不是"
     * '<img src='' />'
     * */
    getAttr(str,key){
        var reg=new RegExp(".*"+key+"='(.*)?'");
        return str.match(reg)[1]
    }
}
var equip=new equipment();
/* harmony default export */ __webpack_exports__["a"] = (equip);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by gan on 2018/1/24.
 */
/*
* 添加自定义事件
* */
class eventTarget{
    constructor(){
        this._listeners={}
    }
    // 添加
    addEvent(type, fn) {
        if (typeof this._listeners[type] === "undefined") {
            this._listeners[type] = [];
        }
        if (typeof fn === "function") {
            this._listeners[type].push(fn);
        }
        return this;
    }
    // 触发
    emitEvent(type) {
        var arrayEvent = this._listeners[type];
        console.log(arrayEvent)
        if (arrayEvent instanceof Array) {
            for (var i=0; i<arrayEvent.length; i++) {
                if (typeof arrayEvent[i] === "function") {
                    arrayEvent[i]({ type: type });
                }
            }
        }
        return this;
    }
    // 删除
    removeEvent(type, fn) {
        var arrayEvent = this._listeners[type];
        if (typeof type === "string" && arrayEvent instanceof Array) {
            if (typeof fn === "function") {
                // 清除当前type类型事件下对应fn方法
                for (var i=0; i<arrayEvent.length; i++){
                    if (arrayEvent[i] === fn){
                        this._listeners[type].splice(i, 1);
                        break;
                    }
                }
            } else {
                // 如果仅仅参数type, 或参数fn邪魔外道，则所有type类型事件清除
                delete this._listeners[type];
            }
        }
        return this;
    }
}
var even=new eventTarget();
/* harmony default export */ __webpack_exports__["a"] = (even);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by gan on 2018/1/30.
 */
class http{
    constructor(){}
    /**
     * @param  {setting}
     */
    ajax(setting){
        //设置参数的初始值
        var opts={
            method: (setting.method || "GET").toUpperCase(), //请求方式
            url: setting.url || "", // 请求地址
            async: setting.async || true, // 是否异步
            dataType: setting.dataType || "json", // 解析方式
            data: setting.data || "", // 参数
            success: setting.success || function(){}, // 请求成功回调
            error: setting.error || function(){} // 请求失败回调
        }

        // 参数格式化
        function params_format (obj) {
            var str = ''
            for (var i in obj) {
                str += i + '=' + obj[i] + '&'
            }
            return str.split('').slice(0, -1).join('')
        }

        // 创建ajax对象
        var xhr=new XMLHttpRequest();

        // 连接服务器open(方法GET/POST，请求地址， 异步传输)
        if(opts.method == 'GET'){
            xhr.open(opts.method, opts.url + "?" + params_format(opts.data), opts.async);
            xhr.send();
        }else{
            xhr.open(opts.method, opts.url, opts.async);
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            xhr.send(opts.data);
        }

        /*
         ** 每当readyState改变时，就会触发onreadystatechange事件
         ** readyState属性存储有XMLHttpRequest的状态信息
         ** 0 ：请求未初始化
         ** 1 ：服务器连接已建立
         ** 2 ：请求已接受
         ** 3 : 请求处理中
         ** 4 ：请求已完成，且相应就绪
         */
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)) {
                switch(opts.dataType){
                    case "json":
                        var json = JSON.parse(xhr.responseText);
                        opts.success(json);
                        break;
                    case "xml":
                        opts.success(xhr.responseXML);
                        break;
                    default:
                        opts.success(xhr.responseText);
                        break;
                }
            }
        }

        xhr.onerror = function(err) {
            opts.error(err);
        }
    }

    /**
     * @param  {url}
     * @param  {setting}
     * @return {Promise}
     */
    fetch(url, setting) {
        //设置参数的初始值
        let opts={
            method: (setting.method || 'GET').toUpperCase(), //请求方式
            headers : setting.headers  || {}, // 请求头设置
            credentials : setting.credentials  || true, // 设置cookie是否一起发送
            body: setting.body || {},
            mode : setting.mode  || 'no-cors', // 可以设置 cors, no-cors, same-origin
            redirect : setting.redirect  || 'follow', // follow, error, manual
            cache : setting.cache  || 'default' // 设置 cache 模式 (default, reload, no-cache)
        }
        let dataType = setting.dataType || "json", // 解析方式
            data = setting.data || "" // 参数

        // 参数格式化
        function params_format (obj) {
            var str = ''
            for (var i in obj) {
                str += `${i}=${obj[i]}&`
            }
            return str.split('').slice(0, -1).join('')
        }

        if (opts.method === 'GET') {
            url = url + (data?`?${params_format(data)}`:'')
        }else{
            setting.body = data || {}
        }

        return new Promise( (resolve, reject) => {
            fetch(url, opts).then( async res => {
                let data = dataType === 'text' ? await res.text() :
                    dataType === 'blob' ? await res.blob() : await res.json()
                resolve(data)
            }).catch( e => {
                reject(e)
            })
        })

    }
}
var httpN=new http();
/* harmony default export */ __webpack_exports__["a"] = (httpN);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by gan on 2018/1/30.
 */
class nub{
    constructor(){}
    /**
     * 将数字转成数字大写
     * @param {number}
     * @return {string}
     * */
    numberToChinese (num) {
        var AA = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十");
        var BB = new Array("", "十", "百", "仟", "萬", "億", "点", "");
        var a = ("" + num).replace(/(^0*)/g, "").split("."),
            k = 0,
            re = "";
        for(var i = a[0].length - 1; i >= 0; i--) {
            switch(k) {
                case 0:
                    re = BB[7] + re;
                    break;
                case 4:
                    if(!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$")
                            .test(a[0]))
                        re = BB[4] + re;
                    break;
                case 8:
                    re = BB[5] + re;
                    BB[7] = BB[5];
                    k = 0;
                    break;
            }
            if(k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0)
                re = AA[0] + re;
            if(a[0].charAt(i) != 0)
                re = AA[a[0].charAt(i)] + BB[k % 4] + re;
            k++;
        }

        if(a.length > 1) // 加上小数部分(如果有小数部分)
        {
            re += BB[6];
            for(var i = 0; i < a[1].length; i++)
                re += AA[a[1].charAt(i)];
        }
        if(re == '一十')
            re = "十";
        if(re.match(/^一/) && re.length == 3)
            re = re.replace("一", "");
        return re;
    }
    /**
     * 将数字转化成金钱大写
     * @param {number}
     * @return {string}
     * */
    changeToChinese (Num) {
        //判断如果传递进来的不是字符的话转换为字符
        if(typeof Num == "number") {
            Num = new String(Num);
        };
        Num = Num.replace(/,/g, "") //替换tomoney()中的“,”
        Num = Num.replace(/ /g, "") //替换tomoney()中的空格
        Num = Num.replace(/￥/g, "") //替换掉可能出现的￥字符
        if(isNaN(Num)) { //验证输入的字符是否为数字
            //alert("请检查小写金额是否正确");
            return "";
        };
        //字符处理完毕后开始转换，采用前后两部分分别转换
        var part = String(Num).split(".");
        var newchar = "";
        //小数点前进行转化
        for(var i = part[0].length - 1; i >= 0; i--) {
            if(part[0].length > 10) {
                return "";
                //若数量超过拾亿单位，提示
            }
            var tmpnewchar = ""
            var perchar = part[0].charAt(i);
            switch(perchar) {
                case "0":
                    tmpnewchar = "零" + tmpnewchar;
                    break;
                case "1":
                    tmpnewchar = "壹" + tmpnewchar;
                    break;
                case "2":
                    tmpnewchar = "贰" + tmpnewchar;
                    break;
                case "3":
                    tmpnewchar = "叁" + tmpnewchar;
                    break;
                case "4":
                    tmpnewchar = "肆" + tmpnewchar;
                    break;
                case "5":
                    tmpnewchar = "伍" + tmpnewchar;
                    break;
                case "6":
                    tmpnewchar = "陆" + tmpnewchar;
                    break;
                case "7":
                    tmpnewchar = "柒" + tmpnewchar;
                    break;
                case "8":
                    tmpnewchar = "捌" + tmpnewchar;
                    break;
                case "9":
                    tmpnewchar = "玖" + tmpnewchar;
                    break;
            }
            switch(part[0].length - i - 1) {
                case 0:
                    tmpnewchar = tmpnewchar + "元";
                    break;
                case 1:
                    if(perchar != 0) tmpnewchar = tmpnewchar + "拾";
                    break;
                case 2:
                    if(perchar != 0) tmpnewchar = tmpnewchar + "佰";
                    break;
                case 3:
                    if(perchar != 0) tmpnewchar = tmpnewchar + "仟";
                    break;
                case 4:
                    tmpnewchar = tmpnewchar + "万";
                    break;
                case 5:
                    if(perchar != 0) tmpnewchar = tmpnewchar + "拾";
                    break;
                case 6:
                    if(perchar != 0) tmpnewchar = tmpnewchar + "佰";
                    break;
                case 7:
                    if(perchar != 0) tmpnewchar = tmpnewchar + "仟";
                    break;
                case 8:
                    tmpnewchar = tmpnewchar + "亿";
                    break;
                case 9:
                    tmpnewchar = tmpnewchar + "拾";
                    break;
            }
            var newchar = tmpnewchar + newchar;
        }
        //小数点之后进行转化
        if(Num.indexOf(".") != -1) {
            if(part[1].length > 2) {
                // alert("小数点之后只能保留两位,系统将自动截断");
                part[1] = part[1].substr(0, 2)
            }
            for(i = 0; i < part[1].length; i++) {
                tmpnewchar = ""
                perchar = part[1].charAt(i)
                switch(perchar) {
                    case "0":
                        tmpnewchar = "零" + tmpnewchar;
                        break;
                    case "1":
                        tmpnewchar = "壹" + tmpnewchar;
                        break;
                    case "2":
                        tmpnewchar = "贰" + tmpnewchar;
                        break;
                    case "3":
                        tmpnewchar = "叁" + tmpnewchar;
                        break;
                    case "4":
                        tmpnewchar = "肆" + tmpnewchar;
                        break;
                    case "5":
                        tmpnewchar = "伍" + tmpnewchar;
                        break;
                    case "6":
                        tmpnewchar = "陆" + tmpnewchar;
                        break;
                    case "7":
                        tmpnewchar = "柒" + tmpnewchar;
                        break;
                    case "8":
                        tmpnewchar = "捌" + tmpnewchar;
                        break;
                    case "9":
                        tmpnewchar = "玖" + tmpnewchar;
                        break;
                }
                if(i == 0) tmpnewchar = tmpnewchar + "角";
                if(i == 1) tmpnewchar = tmpnewchar + "分";
                newchar = newchar + tmpnewchar;
            }
        }
        //替换所有无用汉字
        while(newchar.search("零零") != -1)
            newchar = newchar.replace("零零", "零");
        newchar = newchar.replace("零亿", "亿");
        newchar = newchar.replace("亿万", "亿");
        newchar = newchar.replace("零万", "万");
        newchar = newchar.replace("零元", "元");
        newchar = newchar.replace("零角", "");
        newchar = newchar.replace("零分", "");
        if(newchar.charAt(newchar.length - 1) == "元") {
            newchar = newchar + "整"
        }
        return newchar;
    }
}
var utilNub=new nub();
/* harmony default export */ __webpack_exports__["a"] = (utilNub);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by gan on 2018/1/17.
 */

var reg={
    /**
     * 验证手机
     * */
    phone:/^1[(3)|4|5|7|8]\d{9}$/g,
    /**
     * 判断是否有连续字符
     * */
    lianxu:/(.)\1/g,
    /**
     * 匹配前后的空格
     * */
    trim:/^\s*|\s*$/g,
    /**
     * 匹配中文
     * */
    isChine:/^([u4E00-u9FA5]|[uFE30-uFFA0])*$/
}
/* harmony default export */ __webpack_exports__["a"] = (reg);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by gan on 2018/1/17.
 */
class storage {
    constructor(){}
    /**
     * 设置cookie值
     * @param {string} name
     * @param {string} value
     * @param {number} hours 保存时间，小时
     * @param {string} domain 所在域名：例:zeego.cn
     * */
    setCookie(name,value,hours,domaim){
        var d = new Date();
        var offset = 8;
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        var nd = utc + (3600000 * offset);
        var exp = new Date(nd);
        exp.setTime(exp.getTime() + hours * 60 * 60 * 1000);
        document.cookie = name + '=' + escape(value) + ';path=/;expires=' + exp.toGMTString() + ';domain=' + domain + ';'
    }
    /**
     * 获取cookie值
     * @param {string}
     * @return {string}
     */
    getCookie(name) {
        var arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'));
        if (arr != null) {
            return unescape(arr[2]);
        }
        return null;
    }
    /**
     * 删除cookie值
     * @param {string} cookie
     * */
    delCookie(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = getCookie(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
    /**
     * 设置本地缓存
     * @param {string} key
     * @param {object,string} value
     * */
    setLocalStorage(key,value){
        if(typeof value=="object"){
            localStorage.setItem(key,JSON.stringify(value))
        }else {
            localStorage.setItem(key,value)
        }
    }
    /**
     * 获取本地缓存
     * @param {string} key
     * @param {Boolean} 取值是否为对象
     * */
    getLocalStorage(key,isObj){
        var val=localStorage.getItem(key);
        return isObj?JSON.parse(val):val;
    }










}
var storageN=new storage();
/* harmony default export */ __webpack_exports__["a"] = (storageN);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by gan on 2018/1/17.
 */

class format {
    constructor() {
    }
    /**
     * 时间格式化
     *@param {string} 'yyyy/MM/dd hh:mm:ss:SS 星期w 第q季度'
     *@param {date} 需要转换的时间
     * */
    format(format, date) {
        if (!date) {
            date = new Date();
        }
        var Week = ['日', '一', '二', '三', '四', '五', '六'];
        var o = {
            'y+': date.getYear(), // year
            'M+': date.getMonth() + 1, // month
            'd+': date.getDate(), // day
            'h+': date.getHours(), // hour
            'H+': date.getHours(), // hour
            'm+': date.getMinutes(), // minute
            's+': date.getSeconds(), // second
            'q+': Math.floor((date.getMonth() + 3) / 3), // quarter
            'S': date.getMilliseconds(), // millisecond
            'w': Week[date.getDay()]
        }
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in o) {

            if (new RegExp('(' + k + ')').test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
            }

        }
        return format;
    }

}
var formatN=new format();
/* harmony default export */ __webpack_exports__["a"] = (formatN);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by gan on 2018/1/31.
 */
class z7z8{
    constructor(){}
    /**
     * 父子关联 递归->菜单
     *
     * test data
     * var data=[
     {
         "id": 1,
         "parentId": 0,
         "accessName": "设备管理"
     },
     {
         "id": 2,
         "parentId": 0,
         "accessName": "商户管理"
     },
     {
         "id": 3,
         "parentId": 2,
         "accessName": "商户信息"
     },
     {
         "id": 4,
         "parentId": 2,
         "accessName": "商户资料"
     },
     {
         "id": 5,
         "parentId": 2,
         "accessName": "商户设备"
     }
     ];
     * */
    MenuDate(data) {
        return this.test(0,data)
    }
    search(data,p_id){
        var temp = [];
        for(var index in data){
            if (data[index].parentId == p_id) {
                temp.push(data[index]);
            }
        }
        //返回p_id组的值
        return temp;
    }
    test(p_id,data ){
        let _this=this;
        var arr = [];
        var searchResult = _this.search(data,p_id);
        for(var i in searchResult){
            //  改成的值
            arr.push({"accessName":searchResult[i].accessName,"children":_this.test(searchResult[i].id,data)})
        }
        return arr;
    }
}
var util=new z7z8();

/* harmony default export */ __webpack_exports__["a"] = (util);

/***/ })
/******/ ]);