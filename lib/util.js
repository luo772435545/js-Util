/**
 * gan
 *
 * 2018-1-16
 * */


class util{
    constructor(){}
    /**
     * 判断类型
     * @param {any}
     * */
    typeOf (obj) {
        let toString = Object.prototype.toString;
        let map = {
            '[object Boolean]': 'boolean',
            '[object Number]': 'number',
            '[object String]': 'string',
            '[object Function]': 'function',
            '[object Array]': 'array',
            '[object Date]': 'date',
            '[object RegExp]': 'regExp',
            '[object Undefined]': 'undefined',
            '[object Null]': 'null',
            '[object Object]': 'object'
        };
        return map[toString.call(obj)];
    }
    /*
    * 深度拷贝
    * */
    deepCopy(data) {
        const t = this.typeOf(data);
        let _this=this;
        let o;

        if (t === 'array') {
            o = [];
        } else if ( t === 'object') {
            o = {};
        } else {
            return data;
        }

        if (t === 'array') {
            for (let i = 0; i < data.length; i++) {
                o.push(_this.deepCopy(data[i]));
            }
        } else if ( t === 'object') {
            for (let i in data) {
                o[i] = _this.deepCopy(data[i]);
            }
        }
        return o;
    }
    flattenArray(arr) {
        const flattened = [].concat(...arr);
        return flattened.some(item => Array.isArray(item)) ?
            this.flattenArray(flattened) : flattened;
    }
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
    /**
     * 深拷贝
     * */
    deepCopy (obj) {
        var ret = {}
        for (var key in obj) {
            ret[key] = typeof obj[key] ==='object' ? deepCopy(obj[key]) : obj[key]
        }
        return ret
    }
    /**
     * 函数封装
     * var arr = ['1','2'];
     var arr1 =['a','b','c','d'];
     var arr2 =['!','@','#','$'];
     var arr3 =['a','b',];
     // ... arr3   arr4  arr5 很多个
     var arr =[''];
     arr.forEach(a=>{
        arr1.forEach(b=>{
            arr2.forEach(c=>{
                arr.push(a+b+c)
            })
        })
     })
     * */
    // 1循环的方式
    attrs (...attrs){
        let arr = [''];
        for (let a of attrs) {
            let addArr = [];
            for(let b of arr){
                for(let c of a){
                    addArr.push(b+c)
                }
            }
            arr = addArr
        }
        return arr
    }

    //递归
    recursiveAttrs(...attrs){
        function a(...attrs) {
            b('',attrs)
        }
        function b(prefix,attrs) {
            const [fir,...end] = attrs;
            fir.reduce((i,k)=>{
                i = i.concat(b(k+prefix,end))
                return i
            },[])

        }
    }
    toTree (arr,Identification) {
        let newArr = [];
        let nameToObject = {};
        function handel(arr,Identification) {
            arr.forEach(i=>{
                let matchName;
                if(i.name.lastIndexOf(Identification) > -1) {
                    matchName = i.name.slice(0,i.name.lastIndexOf(Identification));
                } else {
                    matchName = i.name;
                    newArr.push(i);
                }
                if(nameToObject[matchName]) {
                    nameToObject[matchName].children.push(i);
                }
                nameToObject[i.name] = i;
                nameToObject[i.name].children = [];

            });
        }
        handel();
        return newArr;
    };
    /**
     * 数组对象 去重repeatArrayObject (){
     *
     * }
     * */
    repeatArrayObject (arr,key){
        let obj ={};
        return  arr.reduce((i,n)=>{
            if(!obj[n[key]]){
                obj[n[key]]=true;
                i.push(n);
            }
            return i
        },[])
    }
    /**
     * 金额加逗号
     * */
    amountFormat (amount) {
        if(!isNaN(Number(amount))) {
            return amount.replace(/(\d)(?=(\d{3})+(?!(\d)))/g,'$1,')
        } else {
            return 0
        }
    }
    /**
     * 复制
     *
     * */
    copy (copyText){
      let input =  document.createElement('input');
      input.value = copyText;
      input.select();
      document.execCommand('Copy');
      input.remove();
    }
    numberReplace (number) {
        let arr = ['','十','百','千','万'];
        let arr1 = ['零','一','二','三','四','五','六','七','八','九'];
        let str = number.toString().replace(/[^\d]/g,'')
        if(str && str !== '0') {
            let str1 = '';
            for (let i = 0 ;i<str.length;i++) {
                let value = '';
                value = arr1[str[i]];
                if(arr1[str[i]] !== arr1[0]) {
                    // 如果不是零
                    value += arr[str.length -i-1];
                }
                str1 += value
            }
            return str1.replace(/零+$/,'')
        } else {
            return arr1[0]
        }
    },
    myCall (obj){
        if(Object.prototype.toString.call(this) !== '[object Function]') {
            return ;
        }
        let _this = obj;
        let _arg = [...arguments].splice(1,);
        _this['fn'] = this;
        let result = _this['fn'](_arg);
        delete _this['fn']
        return result

    }


}
var ttt=new util();
export default ttt
