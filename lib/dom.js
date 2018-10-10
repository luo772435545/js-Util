import util from './util';

class dom {
    constructor(){
        xs: '480px',
            sm: '768px',
            md: '992px',
            lg: '1200px',
            xl: '1600px',
    }
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
    /*获取行间样式属性*/
    getByStyle (obj,name){
        if(obj.currentStyle){
            return  obj.currentStyle[name];
        }else{
            return  getComputedStyle(obj,false)[name];
        }
    }
    scrollTop(el, from = 0, to, duration = 500) {
        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = (
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) {
                    return window.setTimeout(callback, 1000/60);
                }
            );
        }
        const difference = Math.abs(from - to);
        const step = Math.ceil(difference / duration * 50);

        function scroll(start, end, step) {
            if (start === end) return;

            let d = (start + step > end) ? end : start + step;
            if (start > end) {
                d = (start - step < end) ? end : start - step;
            }

            if (el === window) {
                window.scrollTo(d, d);
            } else {
                el.scrollTop = d;
            }
            window.requestAnimationFrame(() => scroll(d, end, step));
        }
        scroll(from, to, step);
    }


}


var utilDom=new dom();
export default utilDom;