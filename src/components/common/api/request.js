import axios from 'axios'

export default {
    common:{
        method:'Get',
        data:{},
        params:{}
    },

    $axios(options={}){
        options.method = options.method || this.common.method
        options.data = options.data || this.common.data
        options.params = options.params || this.common.params

        // 加载动画，请求前
        return axios(options).then(v => {
            let data = v.data.data
            return new Promise((res,rej)=>{
                if(!v) return rej()
                // 请求结束，关闭加载动画
                res(data)
            })
        })
    }

}