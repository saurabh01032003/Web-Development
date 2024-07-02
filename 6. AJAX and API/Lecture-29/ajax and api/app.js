let jsonData = `[
  {
    "id": 1,
    "name": "John",
    "occupation": "Software Developer",
    "address":[]
  },
  {
    "id":2,
    "name": "Ajay",
    "occupation": "Devops Engineer",
    "address" : [
      {
        "addressid" : 1,
        "city": "delhi",
        "country": "india"
      }
    ] 
  }
]`

// this(jsonData) is a string and we can't use dot operator(.) to access key or value here.
// We can't work on string here, because jsonData is not a object
// So' we need to convert json string to usable javascript Object

let obj = JSON.parse(jsonData); // JSON.parse() //takes json string as argument and converts json string into js object
console.log(obj);
console.log(obj[0].occupation);

console.log(JSON.stringify(obj[0].occupation));