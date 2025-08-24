
const container=document.getElementById("container")
document.getElementById("getBtn").addEventListener('click',()=>getAllData());
document.getElementById("addBtn").addEventListener('click',()=>addUser());
document.getElementById("updateBtn").addEventListener('click',()=>updateUser());
document.getElementById("deleteBtn").addEventListener('click',()=>deleteUser());

let ids=0;
//* read
async function getAllData() {
    let response=await fetch("http://localhost:5500/users")
    if(!response.ok){
        throw new Error(`HTTP Error! status: ${response.status}`)
    }

    let users=await response.json()
    console.log(typeof users);
    console.log(users);
    
    container.innerHTML='';
    users.forEach(user => {
        container.innerHTML+=`<h3>${user.userName}</h3>`
    });
    ids=users.length;
    
}

//** create

async function addUser() {
    let obj={userName:prompt("Enter user name: ")??""};
    let response=await fetch("http://localhost:5500/users",{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(obj)
    })
   
    let user=await response.json()
    console.log(typeof user);
    console.log(user);
    
   getAllData();
    
}


//** update

async function updateUser() {
    let userId=prompt("Enter user id: ");
    let obj={userName:prompt("Enter user name: "),id:userId};
   
    let response=await fetch(`http://localhost:5500/users/${userId}`,{
        method:"PUT",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(obj)
    })
   
    let user=await response.json()
    console.log(typeof user);
    console.log(user);
    
     container.innerHTML=`<h3>${user.userName}</h3>`;
    
}

//** delete

async function deleteUser() {
    let id=prompt("Enter user id: ");
    let response=await fetch(`http://localhost:5500/users/${id}`,{
        method:"DELETE"
    })
   
    let user=await response.json()
    console.log(typeof user);
    console.log(user);
    
   container.innerHTML=`<h3>${user.userName}</h3>`;
    
}