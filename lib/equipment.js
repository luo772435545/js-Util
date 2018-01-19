/**
 * Created by gan on 2018/1/18.
 */
class equipment{
    constructor(){}
    /**
     * 判断设备是ios还是android
     * @return {string} IOS  OR  Android
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
window.util=equip;