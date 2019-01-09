import Mock from 'mockjs'

const Random = Mock.Random

Mock.mock('/login', 'get', {success: true, data: {msg: 'login success'}})

Mock.mock('/cart', 'get', {success: true,
  data: {cartItems: [{
    name: 'test1',
    price: 12,
    amount: 2,
    imgUrl: '/static/logo.png',
    typeArgs: ['size:12', 'color:white']
  }, {
    name: 'test2',
    price: 1000,
    amount: 2,
    imgUrl: '/static/logo.png',
    typeArgs: ['size:12', 'color:white']
  }]}})

Mock.mock('/signup', 'post', function (options) {
  return options.body
})
