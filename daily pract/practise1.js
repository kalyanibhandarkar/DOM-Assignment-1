let usersArr = [
    

    {
        id : 1,
        name : "Riddhi",
        age : 18,
        status : "Active",
        city:"nagpur"
    },
    {
        id : 2,
        name : "Radha",
        age : 19,
        status : "Active",
        city:"nagpur"
    },
    {
        id : 3,
        name : "kalyani",
        age : 12,
        status : "Inactive",
        city:"nagpur"
    },
    {
        id : 4,
        name : "omkar",
        age : 16,
        status : "Active",
        city:"nagpur"
    },
    {
        id : 5,
        name : "Ayush",
        age : 22,
        status : "Inactive",
        city:"nagpur"
    },
    {
        id : 6,
        name : "vaishali",
        age : 23,
        status : "Active",
        city:"nagpur"
    },
]




usersArr.forEach(user => {
    if (user.name.toLowerCase().startsWith("r")) {
        user.city = "Mumbai";
    }
});



let user = usersArr.find(user =>
    {
        if (user.status.toLowerCase() == "inactive"){
             user.domain ="FWD";
        }
    } 
  
)


for (obj of usersArr){
   
    if (obj.id === 5){

       if (obj.status.toLowerCase() === "inactive"){
        obj.status = "Active"
       }
       else{
        obj.status = "Inactive"
       }
    }
}
console.table( usersArr ); 


for ( obj of usersArr){

    if(obj.age < 18 ){
        usersArr.splice (obj,1);
    }
}
console.table( usersArr ); 