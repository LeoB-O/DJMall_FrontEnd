import Mock from 'mockjs'

const Random = Mock.Random

Mock.mock('/login', 'get', {success: true, data: {msg: 'login success'}})
