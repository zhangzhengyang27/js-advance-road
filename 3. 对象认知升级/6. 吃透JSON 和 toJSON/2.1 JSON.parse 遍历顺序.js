var jsonStr = `{
    "name": "牙膏",
    "count": 10, 
    "orderDetail": {
        "createTime": 1632996519781,
        "orderId": 8632996519781,
        "more": {
            "desc": "描述"
        }
    }
}`
// 深度优先遍历
JSON.parse(jsonStr, function (k, v) {
    console.log("key:", k);
    return v;
})

// 最后返回一个空键
/*
key: name
key: count
key: createTime
key: orderId
key: desc
key: more
key: orderDetail
key:
*/
