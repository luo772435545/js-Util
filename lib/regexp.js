/**
 * Created by gan on 2018/1/17.
 */

/*([\s\S]*)
同时，也可以用 “([\d\D]*)”、“([\w\W]*)” 来表示。


在文本文件里, 这个表达式可以匹配所有的英文
/[ -~]/
这个表达式可以匹配所有的非英文(比如中文)
/[^ -~]/*/
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
    isChine:/^([u4E00-u9FA5]|[uFE30-uFFA0])*$/,
    /**
     * 可以包含英文字母 不区分大小写 数字 以及-
     * -不能连续出现 单独出现 不能出现在开头和结尾
     * */
    shopRegValid : (rule, value, callback) =>{

        var reg=/^((?=[A-Za-z0-9])[-A-Za-z0-9]*[A-Za-z0-9]){1,38}$/;
        var reg1=/(-)\1/;
        if(value==''){
            callback(new Error('Please fill in the user fullName'));
        }else if(!reg.test(value) || reg1.test(value)){
            console.log(reg.test(value))
            callback(new Error('FullName  is improperly formatted'));
        }else {
            callback()
        }
    }
}
export default reg
