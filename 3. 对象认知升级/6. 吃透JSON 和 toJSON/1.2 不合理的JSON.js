`
{
    "name":"帅哥",
    [Symbol.for("sex")]: 1 
}`;

`
{ 
  name: "帅哥", 
  'age': 32  
} `;

//     undefined
`
{
    "name": "帅哥",
    "age": undefined 
}`;

//    16进制
`[-10, 0xDDFF]`;

//     new Date()、function
`
{ 
  "name": "牙膏",
  "created": new Date(),  
  "price": 18
  "getPrice": function() { 
      return this.price;
  }
}`;

`
{
   "name":"帅哥",
   "age": 32, 
}
`
