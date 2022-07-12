const createValues = (creator, length = 10) => Array.from({length}, creator)

function createUser(v, index) {
    return {
        name: `user-${index}`,
        age: Math.random() * 100 >> 0
    }
}

const users = createValues(createUser, 10);
const ages = users.map(u => u.age);

const max = Math.max.apply(Math, ages);
const min = Math.min.apply(Math, ages);
/*
[
  35, 69, 59, 48, 66,
  35, 41, 70, 17, 28
]
*/
console.log(ages);
// max: 70,min:17
console.log("max:", max + ",min:" + min)
