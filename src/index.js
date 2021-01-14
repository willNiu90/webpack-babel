import People from '@will_niu/babel-test'
import './index.less'

if(module && module.hot) {
    module.hot.accept()
}

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

let btn = document.createElement('a')
btn.addEventListener('click', function() {
    import('./handle.js').then(res => {
        console.log('this is handel', res)
    })
})
btn.click()

console.log('new111ww1111111')