// this
var jsonStr = `{
    "name": "牙膏",
    "count": 10, 
    "orderDetail": {
        "createTime": 1632996519781,
        "orderId": 8632996519781
    }
}`
// this 是跟随变化的
JSON.parse(jsonStr, function (k, v) {
    console.log("key:", k, ",this:", this);
    return v;
})

/*
key: name ,this: {
  name: '牙膏',
  count: 10,
  orderDetail: { createTime: 1632996519781, orderId: 8632996519781 }
}
key: count ,this: {
  name: '牙膏',
  count: 10,
  orderDetail: { createTime: 1632996519781, orderId: 8632996519781 }
}
key: createTime ,this: { createTime: 1632996519781, orderId: 8632996519781 }
key: orderId ,this: { createTime: 1632996519781, orderId: 8632996519781 }
key: orderDetail ,this: {
  name: '牙膏',
  count: 10,
  orderDetail: { createTime: 1632996519781, orderId: 8632996519781 }
}
key:  ,this: {
  '': {
    name: '牙膏',
    count: 10,
    orderDetail: { createTime: 1632996519781, orderId: 8632996519781 }
  }
}
*/
