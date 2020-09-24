const request = require('request')  
const breed = process.argv.slice(2)
const url = 'https://api.thecatapi.com/v1/breeds/search' 
const search = `${url}?q=${breed}`
request(search,(error, response, body) => { 
  if (error) {
    console.log(`Request failed: ${error}`)
  }
  const obj = JSON.parse(body) 
  const data = obj[0]
  if (data) {
    console.log(data.description)
  } else {
    console.log(`Couldn't find data on: ${breed}`)
  }
})