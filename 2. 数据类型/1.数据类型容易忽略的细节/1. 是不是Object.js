// 类型标记位
// 000： object
// 001： integer
// 010： double
// 100： string
// 110： boolean

function isObject(obj){
    if(typeof obj=='object'){
        return true
    }
    return false
}


// 存在问题 为什么 typeof null 也是object
