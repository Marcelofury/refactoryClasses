fetch('https://fakestoreapi.com/products', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
})  
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log("Error posting data: " + error));                                                                                                        