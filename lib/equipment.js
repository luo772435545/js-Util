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
export default equip