
const util = require("./utils/util.js");
class MyReq {
    constructor(){
        
    }
    // 初始化xhr
    initialize(){
        let xhr = new XMLHttpRequest();
        return xhr;
    }
    // 获取res回调
    getRes(){
        return new Promise((resolve, reject) => {
            this.xhr.onreadystatechange = () => {
                if(this.xhr.readyState === 4) {
                    if(this.xhr.status === 200){
                        resolve(this.xhr.response)
                    }else{
                        reject();
                    }
                }
            }
        })
    }

    // get请求
    get(url, params = {}){
        return new Promise((resolve, reject) => {
            this.xhr = this.initialize();
            let queryString = util.getQueryString(params);
            url = queryString ? `${url}?${queryString}` : url;
            this.xhr.open("get",url,true);
            this.getRes().then((res) => {
                resolve(res);
            });
            this.xhr.send();
        })
    }

}  

let req = new MyReq();

module.exports = req;
// req.get('https://www.apiopen.top/satinGodApi?type=1&page=1').then(res => {
//     console.log(res)
// })
