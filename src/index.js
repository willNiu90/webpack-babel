import People from '@will_niu/babel-test'

let p = new People('will', 12)
console.log(p)

let arr = [1,2,3]
console.log(arr.includes(1))

const bar = async () => {
    console.log(12)
}

bar()

class Person {
    sayname() {
      return 'name'
    }
  }
  var john = new Person()
  console.log(john)