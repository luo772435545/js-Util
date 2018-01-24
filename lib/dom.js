import util from './util';

class dom {
    constructor(){}
    /**
     * 检查是否有class
     * @param {object} dom对象
     * @param {string} 添加的class名
     * */
    hasClass (ele, cls) {
         return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
    }
    /**
     * 添加class
     * @param {object} dom对象
     * @param {string} 添加的class名
     * */
    addClass (ele, cls) {
         if (!this.hasClass(ele, cls)) ele.className += " " + cls;
    }
    /**
     * 移除class
     * @param {object} dom对象
     * @param {string} 添加的class名
     * */
    removeClass (ele, cls) {
        if (this.hasClass(ele, cls)) {
            var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
            ele.className = ele.className.replace(reg, " ");
        }
    }
    /**
     * 切换class
     * @param {object} dom对象
     * @param {string} 添加的class名
     * */
    toggleClass (ele, cls) {
        if(ele.length>1){
            for( var i=0 ;i<ele.length;i++){
                this.hasClass(ele[i],cls)? this.removeClass(ele[i], cls): this.addClass(ele[i], cls)
            }
        }else {
            this.hasClass(ele,cls)? this.removeClass(ele, cls): this.addClass(ele, cls)
        }
    }
    /**
     * addevenListen兼容写法
     * @param {object} dom对象
     * @param {string} 事件
     * @param {function} 函数
     * */


}


var utilDom=new dom();
window.util=utilDom;
export default utilDom;