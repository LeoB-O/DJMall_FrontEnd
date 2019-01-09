import Mock from 'mockjs'

const Random = Mock.Random

Mock.mock('/login', 'get', {
  success: true,
  data: {
    msg: 'login success'
  }
})

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

Mock.mock(/\/signin/, 'get', {
  success: true,
  data: {
    right: true
  }
})

Mock.mock('/personalinfo', 'get', {
  success: true,
  data: {
    username: 'Zeo Yang',
    avdarurl: 'test',
    email: '123@test.com',
    password: '11111',
    date: '1998-02-24'
  }
})

Mock.mock('/order', 'get', {
  success: true,
  data: {
    content: [{
        id: "012398489",
        price: 18,
        status: "Cancel",
        time: "2016-10-03"
      },
      {
        id: "012398489",
        price: 18,
        status: "Cancel",
        time: "2016-10-03"
      },
      {
        id: "012398489",
        price: 18,
        status: "Cancel",
        time: "2016-10-03"
      },
      {
        id: "012398489",
        price: 18,
        status: "Cancel",
        time: "2016-10-03"
      }
    ]
  }
})

Mock.mock('/editinfo', 'post', function (options) {
  return options.body
})

Mock.mock('/getaddress', 'get', {
  success: true,
  data: {
    username: "Zeo",
    email: "123@test.com",
    date: "1998-02-24",
    password: "1111",
    addetail: "ddas",
    adad: "dasdada",
    pn: "17625113975"
  }
})
Mock.mock('/editaddress','post',function(options){
  return options.body
})
