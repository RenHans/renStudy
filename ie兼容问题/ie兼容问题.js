if ( !Array.prototype.forEach ) {
  Array.prototype.forEach = function forEach( callback, thisArg ) {
    var T, k;
    if ( this == null ) {
      throw new TypeError( "this is null or not defined" );
    }
    var O = Object(this);
    var len = O.length >>> 0;
    if ( typeof callback !== "function" ) {
      throw new TypeError( callback + " is not a function" );
    }
    if ( arguments.length > 1 ) {
      T = thisArg;
    }
    k = 0;
    while( k < len ) {
      var kValue;
      if ( k in O ) {
        kValue = O[ k ];
        callback.call( T, kValue, k, O );
      }
      k++;
    }
  };
}// ie8兼容 foreach

if (typeof Object.assign != 'function') {
  Object.assign = function(target) {
    'use strict';
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };
}// ie 兼容assign

var DONT_ENUM =  "propertyIsEnumerable,isPrototypeOf,hasOwnProperty,toLocaleString,toString,valueOf,constructor".split(","),
  hasOwn = ({}).hasOwnProperty;
for (var i in {
  toString: 1
}){
  DONT_ENUM = false;
}


Object.keys = Object.keys || function(obj){//ecma262v5 15.2.3.14
  var result = [];
  for(var key in obj ) if(hasOwn.call(obj,key)){
    result.push(key) ;
  }
  if(DONT_ENUM && obj){
    for(var i = 0 ;key = DONT_ENUM[i++]; ){
      if(hasOwn.call(obj,key)){
        result.push(key);
      }
    }
  }
  return result;
};// ie8 兼容 keys
