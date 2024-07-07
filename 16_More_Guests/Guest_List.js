"use strict";
let Guest_List = ['Umer Sharif', 'Shahid Afridi', 'Amir Khan'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i]+ 
//     ',\n\nIt is our pleasure to invite you in our party.\n\nThank you !\n\n')
// }
let absent_Guest = 'Umer Sharif';
let new_Guest = 'Sir Zia Khan';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] +
        ',\n\nIt is our pleasure to invite you in our party.\n\nThank you !\n\n');
}
console.log(`Mr. ${absent_Guest} is not coming to the party.`);
console.log('Good News! We Find Big Table So we are inviting 3 more guests.');
Guest_List.unshift('Babar Azam');
Guest_List.splice(2, 0, 'Naseem Shah');
Guest_List.push('Imad Waseem');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] +
        ',\n\nIt is our pleasure to invite you in our party.\n\nThank you !\n\n');
}
