//async/wait.js 

async function loadUsers(){
    try{
        let res = await fetch('https://fakestoreapi.com/products/1');
        let data = await res.json();
        console.log(data)
    }catch (error){
        console.log("Error fetching users: " + error);
    }
}