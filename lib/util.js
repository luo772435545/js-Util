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




}
var ttt=new util();
//window.util=ttt;
export default util