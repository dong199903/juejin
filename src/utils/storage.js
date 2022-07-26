const nameSpace = 'juejin'
/**
 * 获取:key对应的结果
 */
export function get(key) {
    if(!localStorage.getItem(nameSpace)) return null
    let obj = JSON.parse(localStorage.getItem(nameSpace)) 
    return obj[key]
}

/**
 * 添加;key-val
 * @param {string} key 
 * @param {返回结果} val 
 */
export function set(key,val) {
  if(!localStorage.getItem(nameSpace)) localStorage.setItem(nameSpace,JSON.stringify({}))
  let obj = JSON.parse(localStorage.getItem(nameSpace)) 
  obj[key] = val
  localStorage.setItem(nameSpace,JSON.stringify(obj))
}

/**
 * 删除某一项
 * del：key
 */
export function del(key) {
  if(!localStorage.getItem(nameSpace)) return 
  let obj = JSON.parse(localStorage.getItem(nameSpace)) 
  delete obj[key]
  localStorage.setItem(nameSpace,JSON.stringify(obj))
}

/**
 * 清空localstorage
 */
export function clear() {
  if(localStorage.getItem(nameSpace)) {
    localStorage.removeItem(nameSpace)
  }
}