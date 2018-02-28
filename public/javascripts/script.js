

$('#main-form').on('submit', function(event) {
  event.preventDefault()
  var data = $('#main-form').serializeArray()
  var newPerson = {
    name: data[0].value,
    age:  data[1].value
  }
  console.log(newPerson)

  var url = 'http://localhost:3000/api/person'
  var options = {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify( newPerson )
  }

  fetch(url,options)
    .then(function(result) {
      return result.json()
    })
    .then(function(data) {
      console.log(data)
    })
 
})