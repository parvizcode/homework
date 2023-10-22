//declare a variable called "username" and add to it your name (with let) then overwrite it with "parviz"

let username ="parviz"
username = "Ulfet"

//declare variable called "isAdmin" (with const)

const isAdmin = true; 

//create object called "user" add to it (firstName,lastName,age, then add nested object called "info" with contains city, street)

const user = {
    firstName: "parviz",
    lastName: "garayev",
    age: 27,
    info: {
      city: "Baku",
      street: "nizami 23"
    }
  };
  
  //1.console age (with dot(.)

  console.log(user.age);



  //2.console firstName (with[])

  console.log(user["firstName"]);



  //console city

  console.log(user.info.city);

  //console street

  console.log(user.info.street);

  
  let b = "Baku";
  let c = true;
  let d = null;
  let f = undefined;
  
  console.log("a:", a);
  console.log("b:", b);
  console.log("c:", c);
  console.log("d:", d);
  console.log("f:", f);