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