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
export default formatN;