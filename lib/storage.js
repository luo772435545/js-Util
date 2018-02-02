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
export default storageN
