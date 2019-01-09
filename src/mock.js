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

Mock.mock(/\/good/, 'get', {
  success: true,
  data: {
    name: 'Nike Air VaporMax',
    imgUrls: ['/static/logo.png', '/static/logo.png'],
    value1: 0,
    description: 'Nike Air VaporMax 2019 男子运动鞋采用弹性梭织材料，妥善包覆双足，塑就出众结构感和强力支撑的迈步体验。<br />足底搭载 Air Max 缓震配置，轻盈感和柔韧性出众，塑就弹力十足的出众脚感，宛如云端畅跑。',
    options: [{name: 'size', values: [37, 38, 39.40, 41, 42, 43, 44]}, {
      name: 'color',
      values: ['white', 'yellow', 'blue']
    }]
  }
})

Mock.mock(/\/catagories/, 'get', {
  success: true,
  data: {
    menu: [{name: 'cloths', value: ['Men', 'Women']}, {name: '3C', value: ['Phone', 'Computer']}]
  }
})

Mock.mock(/\/user/, 'get', {
  success: Random.boolean(),
  data: {
    'id': Random.word(3, 6)
  }
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
      id: '012398489',
      price: 18,
      status: 'Cancel',
      time: '2016-10-03'
    },
    {
      id: '012398489',
      price: 18,
      status: 'Cancel',
      time: '2016-10-03'
    },
    {
      id: '012398489',
      price: 18,
      status: 'Cancel',
      time: '2016-10-03'
    },
    {
      id: '012398489',
      price: 18,
      status: 'Cancel',
      time: '2016-10-03'
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
    username: 'Zeo',
    email: '123@test.com',
    date: '1998-02-24',
    password: '1111',
    addetail: 'ddas',
    adad: 'dasdada',
    pn: '17625113975'
  }
})
Mock.mock('/editaddress', 'post', function (options) {
  return options.body
})
