const axios = require('axios')

axios.get('https://api.github.com/users/thg021')
  .then(function(response){
    console.log(response.data); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
  });
