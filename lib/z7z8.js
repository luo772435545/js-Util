/**
 * Created by gan on 2018/1/31.
 */
class z7z8{
    constructor(){}
    /**
     * 父子关联 递归->菜单
     *
     * test data
     * var data=[
     {
         "id": 1,
         "parentId": 0,
         "accessName": "设备管理"
     },
     {
         "id": 2,
         "parentId": 0,
         "accessName": "商户管理"
     },
     {
         "id": 3,
         "parentId": 2,
         "accessName": "商户信息"
     },
     {
         "id": 4,
         "parentId": 2,
         "accessName": "商户资料"
     },
     {
         "id": 5,
         "parentId": 2,
         "accessName": "商户设备"
     }
     ];
     * */
    MenuDate(data) {
        return this.test(0,data)
    }
    search(data,p_id){
        var temp = [];
        for(var index in data){
            if (data[index].parentId == p_id) {
                temp.push(data[index]);
            }
        }
        //返回p_id组的值
        return temp;
    }
    test(p_id,data ){
        let _this=this;
        var arr = [];
        var searchResult = _this.search(data,p_id);
        for(var i in searchResult){
            //  改成的值
            arr.push({"accessName":searchResult[i].accessName,"children":_this.test(searchResult[i].id,data)})
        }
        return arr;
    }

    /**
     * 二维数据整理
     *  @param[[],[]]
     * [[a,b],[1,2]]=>[a1,a2,b1,b2]
     * */
    combination(data){
        let result = [];
        if(data.length<=1){
            result=data[0] || []
        }else {
            data.forEach((item)=>{
                let arr=[];
                if(result.length>0){
                    result.forEach(resItem=>{
                        item.forEach((child)=>{
                            arr.push(resItem+child);
                        })
                    });
                    result=arr;
                }else {
                    item.forEach((child)=>{
                        result.push(child);
                    })
                }

            })
        }
        return result
    }
    /**
     * 范围随机数
     * */
    RandomNumBoth(Min,Max){
        var Range = Max - Min;
        var Rand = Math.random();
        var num = Min + Math.round(Rand * Range);
        return num;
    }
    /**
     * 点击打开新窗口  window.open
     * */
    openNewWindow(url) {
        let a = document.createElement('a');
        a.href = url;
        a.id = 'openWindow';
        a.target = '_blank';
        document.body.appendChild(a);
        let doc = document.getElementById('openWindow');
        doc.click(); // 点击事件
        doc.remove()
    }
}
var util=new z7z8();

export default util