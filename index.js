const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

button.addEventListener("click", async function(){
    //Data Exchange
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    //Dom Operation
    users.forEach(function(user){
        const list = document.createElement("li");
        const username = user.name;
        list.insertAdjacentHTML('afterbegin','<a href="#">'+username+'</a>');
        lists.appendChild(list);
        console.log(list);
    });
})