function ajax (options) {
  let url = options.url
  const method = options.method.toLocaleLowerCase() || 'get'
  const async = options.async != false // default is true
  const data = options.data
  const xhr = new XMLHttpRequest()

  if (options.timeout && options.timeout > 0) {
    xhr.timeout = options.timeout
  }

  return new Promise ( (resolve, reject) => {
    xhr.ontimeout = () => reject && reject('请求超时')
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
          resolve && resolve(xhr.responseText)
        } else {
          reject && reject()
        }
      }
    }
    xhr.onerror = err => reject && reject(err)

    let paramArr = []
    let encodeData
    if (data instanceof Object) {
      for (let key in data) {
        // 参数拼接需要通过 encodeURIComponent 进行编码
        paramArr.push( encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) )
      }
      encodeData = paramArr.join('&')
    }

    if (method === 'get') {
      // 检测 url 中是否已存在 ? 及其位置
      const index = url.indexOf('?')
      if (index === -1) url += '?'
      else if (index !== url.length -1) url += '&'
      // 拼接 url
      url += encodeData
    }

    xhr.open(method, url, async)
    if (method === 'get') xhr.send(null)
    else {
      // post 方式需要设置请求头
      xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=UTF-8')
      xhr.send(encodeData)
    }
  } )
}
