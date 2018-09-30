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
    /**
     * 获取UTC时间
     *@param {date} 需要转换的时间
     *@param {date} yyyy/MM/dd hh:mm:ss:SS or fulltime
     * */
    getUniversalTime (date, type) {
        if (date === null) return;
        let d = new Date(date);
        let year = d.getUTCFullYear();
        let month = d.getUTCMonth() + 1 < 10 ? '0' + (d.getUTCMonth() + 1) : d.getUTCMonth() + 1;
        let day = d.getUTCDate() < 10 ? '0' + d.getUTCDate() : d.getUTCDate();
        let hours = d.getUTCHours() < 10 ? '0' + d.getUTCHours() : d.getUTCHours();
        let minutes = d.getUTCMinutes() < 10 ? '0' + d.getUTCMinutes() : d.getUTCMinutes();
        let seconds = d.getUTCSeconds() < 10 ? '0' + d.getUTCSeconds() : d.getUTCSeconds();
        if (type === 'fulltime') {
            return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
        } else {
            return year + '-' + month + '-' + day;
        }
    }

}
var formatN=new format();
export default formatN;