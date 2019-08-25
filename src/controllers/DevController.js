const axios = require('axios')

module.exports = {
  async store(req, res) {

    const { username } = req.body
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`)
    } catch (error) {
      console.error(error)
    }




    return res.json(response.data)
  }
}
