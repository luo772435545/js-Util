import util from './util';

class dom {
    constructor(){

    }
    /**
     * 移动 V1.1.0
     * */
    move(e){
        let odiv = e.target;        //获取目标元素

        //算出鼠标相对元素的位置
        let disX = e.clientX - odiv.offsetLeft;
        let disY = e.clientY - odiv.offsetTop;
        document.onmousemove = (e)=>{       //鼠标按下并移动的事件
            //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
            let left = e.clientX - disX;
            let top = e.clientY - disY;

            //绑定元素位置到positionX和positionY上面
            //移动当前元素
            odiv.style.left = left + 'px';
            odiv.style.top = top + 'px';
        };
        document.onmouseup = (e) => {
            document.onmousemove = null;
            document.onmouseup = null;
        };
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
    /**
     * 监听滚动到底部
     * @param {number} number 距离底部多少像素触发(像素)
     * @param {Function} callback 到达底部回调函数
     * @param {boolean} once 是否为一次性（防止重复用）
     */
    scrollToBottom(number = 0, callback, once = false) {
        const doc = document;
        /** 滚动事件 */
        function onScroll() {
            /** 滚动的高度 */
            let scrollTop = doc.documentElement.scrollTop === 0 ? doc.body.scrollTop : doc.documentElement.scrollTop;
            /** 滚动条高度 */
            let scrollHeight = doc.documentElement.scrollTop === 0 ? doc.body.scrollHeight : doc.documentElement.scrollHeight;
            if (scrollHeight - scrollTop - number <= window.innerHeight) {
                if (typeof callback === 'function') callback();
                if (once) window.removeEventListener('scroll', onScroll);
            }
        }
        window.addEventListener('scroll', onScroll);
        onScroll(); // 先执行一次
    }
// 这里我做的不是用 window 的滚动事件，而是用最外层的绑定触摸下拉事件去实现
// 好处是我用在Vue这类单页应用的时候，组件销毁时不用去解绑 window 的 scroll 事件
// 但是滑动到底部事件就必须要用 window 的 scroll 事件，这点需要注意

    /**
     * 下拉刷新组件
     * @param {object} option 配置
     * @param {HTMLElement} option.el 下拉元素（必选）
     * @param {number} option.distance 下拉距离[px]（可选）
     * @param {number} option.deviation 顶部往下偏移量[px]（可选）
     * @param {string} option.loadIcon 下拉中的 icon html（可选）
     */
    dropDownRefresh(option) {
        const doc = document;
        /** 整体节点 */
        const page = option.el;
        /** 下拉距离 */
        const distance = option.distance || 88;
        /** 顶部往下偏移量 */
        const deviation = option.deviation || 0;
        /** 顶层节点 */
        const topNode = doc.createElement('div');
        /** 下拉时遮罩 */
        const maskNode = doc.createElement('div');

        topNode.innerHTML = `<div refresh-icon style="transition: .2s all;"><svg style="transform: rotate(90deg); display: block;" t="1570593064555" viewBox="0 0 1575 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26089" width="48" height="48"><path d="M1013.76 0v339.968H484.115692V679.778462h529.644308v339.968l529.644308-485.612308v-48.600616L1013.76 0zM243.396923 679.857231h144.462769V339.968H243.396923V679.778462z m-240.797538 0h144.462769V339.968H2.599385V679.778462z" fill="#000000" fill-opacity=".203" p-id="26090"></path></svg></div><div refresh-loading style="display: none; animation: refresh-loading 1s linear infinite;">${option.loadIcon || '<p style="font-size: 15px; color: #666;">loading...</p>'}</div>`;
        topNode.style.cssText = `width: 100%; height: ${distance}px; position: fixed; top: ${-distance + deviation}px; left: 0; z-index: 10; display: flex; flex-wrap: wrap; align-items: center; justify-content: center; box-sizing: border-box; margin: 0; padding: 0;`;
        maskNode.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100vh; box-sizing: border-box; margin: 0; padding: 0; background-color: rgba(0,0,0,0); z-index: 999;';
        page.parentNode.insertBefore(topNode, page);

        /**
         * 设置动画时间
         * @param {number} n 秒数
         */
        function setAnimation(n) {
            page.style.transition = topNode.style.transition = n + 's all';
        }

        /**
         * 设置滑动距离
         * @param {number} n 滑动的距离（像素）
         */
        function setSlide(n) {
            page.style.transform = topNode.style.transform = `translate3d(0px, ${n}px, 0px)`;
        }

        /** 下拉提示 icon */
        const icon = topNode.querySelector('[refresh-icon]');
        /** 下拉 loading 动画 */
        const loading = topNode.querySelector('[refresh-loading]');

        return {
            /**
             * 监听开始刷新
             * @param {Function} callback 下拉结束回调
             * @param {(n: number) => void} rangeCallback 下拉状态回调
             */
            onRefresh(callback, rangeCallback = null) {
                /** 顶部距离 */
                let scrollTop = 0;
                /** 开始距离 */
                let startDistance = 0;
                /** 结束距离 */
                let endDistance = 0;
                /** 最后移动的距离 */
                let range = 0;

                // 触摸开始
                page.addEventListener('touchstart', function (e) {
                    startDistance = e.touches[0].pageY;
                    scrollTop = 1;
                    setAnimation(0);
                });

                // 触摸移动
                page.addEventListener('touchmove', function (e) {
                    scrollTop = doc.documentElement.scrollTop === 0 ? doc.body.scrollTop : doc.documentElement.scrollTop;
                    // 没到达顶部就停止
                    if (scrollTop != 0) return;
                    endDistance = e.touches[0].pageY;
                    range = Math.floor(endDistance - startDistance);
                    // 判断如果是下滑才执行
                    if (range > 0) {
                        // 阻止浏览自带的下拉效果
                        e.preventDefault();
                        // 物理回弹公式计算距离
                        range = range - (range * 0.5);
                        // 下拉时icon旋转
                        if (range > distance) {
                            icon.style.transform = 'rotate(180deg)';
                        } else {
                            icon.style.transform = 'rotate(0deg)';
                        }
                        setSlide(range);
                        // 回调距离函数 如果有需要
                        if (typeof rangeCallback === 'function') rangeCallback(range);
                    }
                });

                // 触摸结束
                page.addEventListener('touchend', function () {
                    setAnimation(0.3);
                    // console.log(`移动的距离：${range}, 最大距离：${distance}`);
                    if (range > distance && range > 1 && scrollTop === 0) {
                        setSlide(distance);
                        doc.body.appendChild(maskNode);
                        // 阻止往上滑动
                        maskNode.ontouchmove = e => e.preventDefault();
                        // 回调成功下拉到最大距离并松开函数
                        if (typeof callback === 'function') callback();
                        icon.style.display = 'none';
                        loading.style.display = 'block';
                    } else {
                        setSlide(0);
                    }
                });

            },
            /** 结束下拉 */
            end() {
                maskNode.parentNode.removeChild(maskNode);
                setAnimation(0.3);
                setSlide(0);
                icon.style.display = 'block';
                loading.style.display = 'none';
            }
        }
    }


}


var utilDom=new dom();
export default utilDom;
