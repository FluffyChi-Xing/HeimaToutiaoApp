import axios from "axios";

enum requestEnums {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

export function $request(url: string, method: requestEnums, params?: any, data?: any): any {
    // 处理请求参数
    const requestConfig: any = {
        method,
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
            'Connection': 'keep-alive'
        }
    }
    // 处理请求参数
    if (params) {
        requestConfig.params = params
    }
    // 处理请求数据
    if (data) {
        // 如果是post请求，使用json格式传递数据
        if (method === requestEnums.POST) {
            requestConfig.data = JSON.stringify(data)
        }
        requestConfig.data = data
    }
    // 调用请求方法
    return getRequest(url, requestConfig).then((res: any) => {
        // console.log(res)
        return res;
    }).catch((err: any) => {
        console.log(err)
    })
}

function getRequest(url: string, requestConfig: any): any {
    return new Promise((resolve, reject) => {
        // 判断请求方式
        if (requestConfig.method === requestEnums.GET || !requestConfig.method) {
            // 如果是GET请求或者没有传请求方式，都使用GET请求
            axios.get(url, requestConfig).then((res: any) => {
                resolve(res.data)
            }).catch((err: any) => {
                reject(err)
            })
        } else if (requestConfig.method === requestEnums.POST) {
            axios.post(url, requestConfig).then((res: any) => {
                resolve(res.data)
            }).catch((err: any) => {
                reject(err)
            })
        } else if (requestConfig.method === requestEnums.PUT) {
            axios.put(url, requestConfig).then((res: any) => {
                resolve(res.data)
            }).catch((err: any) => {
                reject(err)
            })
        } else if (requestConfig.method === requestEnums.DELETE) {
            axios.delete(url, requestConfig).then((res: any) => {
                resolve(res.data)
            }).catch((err: any) => {
                reject(err)
            })
        }
    })
}
