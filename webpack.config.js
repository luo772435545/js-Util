/**
 * Created by gan on 2018/1/16.
 */
const path=require('path');

module.exports={
    entry:'./index.js',
    output:{
        filename:'util.js',
        path:path.resolve(__dirname,'dist')
    }
}