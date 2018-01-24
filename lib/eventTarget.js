/**
 * Created by gan on 2018/1/24.
 */
class eventTarget{
    constructor(){
        this._listeners={}
    }
    // 添加
    addEvent(type, fn) {
        if (typeof this._listeners[type] === "undefined") {
            this._listeners[type] = [];
        }
        if (typeof fn === "function") {
            this._listeners[type].push(fn);
        }
        return this;
    }
    // 触发
    emitEvent(type) {
        var arrayEvent = this._listeners[type];
        console.log(arrayEvent)
        if (arrayEvent instanceof Array) {
            for (var i=0; i<arrayEvent.length; i++) {
                if (typeof arrayEvent[i] === "function") {
                    arrayEvent[i]({ type: type });
                }
            }
        }
        return this;
    }
    // 删除
    removeEvent(type, fn) {
        var arrayEvent = this._listeners[type];
        if (typeof type === "string" && arrayEvent instanceof Array) {
            if (typeof fn === "function") {
                // 清除当前type类型事件下对应fn方法
                for (var i=0; i<arrayEvent.length; i++){
                    if (arrayEvent[i] === fn){
                        this._listeners[type].splice(i, 1);
                        break;
                    }
                }
            } else {
                // 如果仅仅参数type, 或参数fn邪魔外道，则所有type类型事件清除
                delete this._listeners[type];
            }
        }
        return this;
    }
}