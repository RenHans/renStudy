//检测数据是不是除了symbol 外的原始数据
function isStatic(value) {
  return (typeof value === 'string' ||
          typeof value === 'number' ||
          typeof value === 'boolean' ||
          typeof value === 'undefined' ||
          value === 'null')
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

//数组从小到大排序
function sortAB(arr) {
  arr.sort(function (a,b) {return a-b})
}

//是不是正则对象
function isRegExp (value) {
  return Object.prototype.toString.call(value) === '[Object RegExg]'
}

//是不是时间对象
function isDate(value) {
  return Object.prototype.toString.call(value) === '[object Date]'
}

//是不是浏览器内置函数
//内置函数toString后的主体代码块为 [native code] ，而非内置函数则为相关代码，所以非内置函数可以进行拷贝(toString后掐头去尾再由Function转)
function isNative(value) {
  return typeof value === 'function' && /native code/.test(value.toString())
}

//检查是不是函数
function isFunction(value) {
  return Object.prototype.toString.call(value) === '[object Function]'
}

// 检查 value 是不是有效的类数组长度
function isLength(value) {
  return typeof value === 'number' && value > -1 && value % 1 == 0 && value <= Number.MAX_SAFE_INTEGER
}

//检查是否是类数组
function isArrayLike (valuje) {
  return value != null && isLength(value.length) && !isFunction(value)
}

//检查数组是否为空、
//如果是null，直接返回true；如果是类数组，判断数据长度；如果是Object对象，判断是否具有属性；如果是其他数据，直接返回false(也可改为返回true)
function isEmpty(value) {
  if(value == null) {
    return true
  }
  if(isArrayLike(value)) {
    return !value.length
  } else if (isPlainObject.call(value, key)) {
    for (let key in value) {
      if (hasOwnProperty.call(value,key)){
        return false
      }
    }
    return true
  }
  return false
}

//记忆函数：缓存函数的运算结果
function cached (fn) {
  let cache = Object.create(null)
  return function cachedFn(str) {
    let hit = cache[str]
    return hit || (cache[str] = fn(str))
  }
}
//需要详细分析一下怎么使用
