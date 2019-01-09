import Mock from 'mockjs'

const Random = Mock.Random

Mock.mock('/login', 'get', {success: true, data: {msg: 'login success'}})

Mock.mock('/cart', 'get', {
  success: true,
  data: {
    cartItems: [{
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
    }]
  }
})

Mock.mock('/signup', 'post', function (options) {
  return options.body
})

Mock.mock(/\/goods\/catagory/, 'get', function (options) {
  return {
    success: true,
    data: {
      goods: [{
        id: '123',
        name: 'Nike Air VaporMax',
        price: 33,
        imageUrl: '/static/logo.png',
        description: 'Men\'s Shoes'
      }]
    }
  }
})

Mock.mock(/\/goods\/store/, 'get', {
  success: true,
  data: {
    goods: [{
      id: '123',
      name: 'Nike Air VaporMax',
      price: 33,
      imageUrl: '/static/logo.png',
      description: 'Men\'s Shoes'
    }]
  }
})

Mock.mock(/\/store/, 'get', {
  success: true,
  data: {
    name: 'NIKE 官方旗舰店',
    menu: [{name: 'cloths', value: ['Men', 'Women']}, {name: '3C', value: ['Phone', 'Computer']}]
  }
})

Mock.mock(/\/indexImg/, 'get', {
  success: true,
  data: {
    imgUrls: ['/static/logo.png', '/static/logo.png']
  }
})
