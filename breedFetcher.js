const request = require('request')  
const url = 'https://api.thecatapi.com/v1/breeds/search' 

const fetchBreedDescription = (breed, callback) => {
  const search = `${url}?q=${breed}`
  request(search,(error, response, body) => { 
    if (error) {
      console.log(`Request failed: ${error}`)
    }
    const obj = JSON.parse(body) 
    const data = obj[0]
    if (data) {
      callback(null, data.description)
    } else {
      callback(`Couldn't find information on: ${breed}`, null)
    } 
  }) 
} 
module.exports = {
  fetchBreedDescription
}