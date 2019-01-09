import axios from 'axios'

axios.defaults.baseURL = ''
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default {
  get: function (url) {
    return new Promise((resolve, reject) => {
      axios.get(url).then(response => resolve(response.data)).catch((error) => reject(error))
    })
  },

  post: function (url, data) {
    return new Promise((resolve, reject) => {
      axios.post(url, data).then((response) => resolve(response.data)).catch((error) => reject(error))
    })
  }
}
