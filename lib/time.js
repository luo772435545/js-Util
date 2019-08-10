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
    formatTime (date, type) { // 本地时间
        if (date === null) return null;
        let b = new Date(date).getTime();
        let d = new Date(b);
        let year = d.getFullYear();
        let month = d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1;
        let day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
        let hours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
        let minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
        let seconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
        if (type === 'fulltime') {
            return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
        }else if(type === 'yyyy-MM-dd'){
            return year + '-' + month + '-' + day
        }else {
            return year + '-' + month + '-' + day;
        }
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
    },
    getDataToLocalTime (date, type) { // 本地时间
        if (date === null) return null;
        let b = new Date(date).getTime() + localStorage.getItem('timezoom') * 60 * 60 * 1000;
        let d = new Date(b);
        let year = d.getFullYear();
        let month = d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1;
        let day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
        let hours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
        let minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
        let seconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
        if (type === 'fulltime') {
            return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
        } else {
            return year + '-' + month + '-' + day;
        }
    },

}
let v = this;
var obj ={
    timeZoomDate:v.getDataToLocalTime(new Date(v.getUniversalTime(new Date(), 'fulltime')).getTime(), 'fulltime'),
    date1Options: {
        shortcuts: [
            {
                text:'今天',
                value: function () {
                    var end = new Date(v.timeZoomDate);
                    var start = new Date(v.timeZoomDate);
                    return [start, end];
                }
            },
            {
                text: '昨天',
                value: function () {
                    var end = new Date(new Date(v.timeZoomDate).getTime() - 1);
                    var start = new Date(new Date(v.timeZoomDate).getTime());
                    start.setTime(start.getTime() - 3600 * 1000 * 24);
                    return [start, end];
                }
            },
            {
                text: '目前周',
                value: function () {
                    var end = new Date(v.timeZoomDate);
                    var day = end.getDay() || 7;
                    var start = new Date(end.getFullYear(), end.getMonth(), end.getDate() + 1 - day);
                    return [start, end];
                }
            },
            {
                text: '上周',
                value: function () {
                    var data = new Date(v.timeZoomDate);
                    var day = data.getDay() || 7;
                    // var end = new Date(new Date(new Date().toLocaleDateString()).getTime() + (24 * 60 * 60 * 1000 * (-day + 1)) - 1);
                    var end = new Date(data.getFullYear(), data.getMonth(), data.getDate() + 1 - (day + 1));
                    var start = new Date(data.getFullYear(), data.getMonth(), data.getDate() + 1 - day - 7);
                    return [start, end];
                }
            },
            {
                text: '目前月',
                value: function () {
                    var end = new Date(v.timeZoomDate);
                    var start = new Date(v.timeZoomDate);
                    start.setDate(1);
                    return [start, end];
                }
            },
            {
                text: '上个月',
                value: function () {
                    var end = new Date(new Date(new Date().toLocaleDateString()).getTime());
                    end.setDate(1);
                    end.setTime(end.getTime() - 1);
                    var today = new Date(new Date(new Date().toLocaleDateString()).getTime());
                    var lastMonthFirst = new Date(today - 24 * 60 * 60 * 1000 * new Date().getDate());
                    var start = new Date(lastMonthFirst - 24 * 60 * 60 * 1000 * (lastMonthFirst.getDate() - 1));
                    return [start, end];
                }
            },
            {
                text: '目前年',
                value: function () {
                    var end = new Date(v.timeZoomDate);
                    var start = new Date(v.timeZoomDate);
                    start.setDate(1);
                    start.setMonth(0);
                    return [start, end];
                }
            },
            {
                text: '终身',
                value: function () {
                    var end = new Date(v.timeZoomDate);
                    var start = new Date(v.timeZoomDate);
                    start.setFullYear(2018);
                    start.setDate(1);
                    start.setMonth(0);
                    return [start, end];
                }
            }
        ]
    },
}
var formatN=new format();
export default formatN;
