//检测数据是不是除了symbol 外的原始数据
function isStatic(value) {
  return (typeof value === 'string' ||
          typeof value === 'number' ||
          typeof value === 'boolean' ||
          typeof value === 'undefined' ||
          typeof value === 'null')
}

//检测数据是不是原始数据
function isPrimitive() {
  return isStatic(value) || typeof value === 'symbol'
}

//检测数据是不是引用类型的数据（例如：arrays、functions，objects，regexes，new Number(0).以及new String('')）
function isObject (value) {
    let type = typeof value;
    return value != null && (type == 'object' || type == 'function')
}

//检查value是否类对象。如果是一个类值，那么它不应该是null 而且typeof 后面的结果是 object
function isObjectLike (value) {
  return value != null && typeof value == 'object' 
}

//获取数据类型 ，返回结果为 Number 、String ,Object,Array,Date
function getRawType(value) {
    return Object.prototype.toString.call(value).slice(8,-1)
}
// 判断数据是不是Object类型的数据
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

// 判断数据是不是数组类型的数据
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]'
}

//将isArray挂载到Array 上
Array.isArray = Array.isArray || isArray;