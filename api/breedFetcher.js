const breedName = process.argv.slice(2);
const request = require('request');
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {
  const data = JSON.parse(body);
  //console.log(data);
  //s console.log(typeof data);
  if (error) {
    console.log("Error", error);
  } else if (data.length === 0) {
    console.log(`Error: The breed you are looking for is not found`);
  } else {
    console.log(data[0].description);
  }
  
});


