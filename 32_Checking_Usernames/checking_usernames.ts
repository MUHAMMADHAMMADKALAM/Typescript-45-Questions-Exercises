


// • Make a list of five or more usernames called current_users.

let current_users :string[] =['HammAd','tayab','DaniYal','HamZa','Jhon'];

// • Make another list of five usernames called new_users. Make sure one or
//  two of the new usernames are also in the current_users list.

let new_users :string[] =['Fahad','HammAd','usama','DaniYal','Ali'];

//• Loop through the new_users list to see if each new username has already
// been used. If it has, print a message that the person will need to enter
// a new username. If a username has not been used, print a message saying
// that the username is available.

new_users.forEach(username =>{
  let lowercase =username.toLowerCase();
  if(current_users.map(c_users => c_users.toLowerCase()).includes(lowercase)){
    console.log(`The username ${username} is not available. Plaese write a diffrent username`);
  }
  else{
    console.log(`The username ${username} is available.`);
    
  }
})


// • Make sure your comparison is case insensitive. If 'John' has been used, 
// 'JOHN' should not be accepted.

