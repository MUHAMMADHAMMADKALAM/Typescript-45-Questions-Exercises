let Guest_List: string[] = ['Umer Sharif', 'Shahid Afridi', 'Amir Khan'];

// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i]+ 
//     ',\n\nIt is our pleasure to invite you in our party.\n\nThank you !\n\n')
// }

let absent_Guest: string = 'Umer Sharif';
let new_Guest: string = 'Sir Zia Khan';
Guest_List[0] = new_Guest;

// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i]+ 
//     ',\n\nIt is our pleasure to invite you in our party.\n\nThank you !\n\n')
// }

console.log(`Mr. ${absent_Guest} is not coming to the party.`);
console.log('Good News! We Find Big Table So we are inviting 3 more guests.');

Guest_List.unshift('Babar Azam');
Guest_List.splice(2, 0, 'Naseem Shah');
Guest_List.push('Imad Waseem');

for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] +
        ',\n\nIt is our pleasure to invite you in our party.\n\nThank you !\n\n')
}

console.log('\nSorry we can not arrange big table, only Two People will be invited. ')

while(Guest_List.length > 2){
  let remove_Guest = Guest_List.pop();
  console.log(`Sorry Mr. ${remove_Guest},you are not invited for Dinner.`);

}


for (let i = 0; i < Guest_List.length; i++) {
  console.log('Dear Mr. ' + Guest_List[i] +
      ',\n\nYou are still invited.\n\nThank you !\n\n')
}

Guest_List.splice(0 , 2);
console.log(Guest_List);