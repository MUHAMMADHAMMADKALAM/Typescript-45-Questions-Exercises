"use strict";
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct
//  message is printed.
let userNames = ['admin', 'hamza', 'sir zia', 'hammad', 'ameen'];
if (userNames.length === 0) {
    console.log('We need to find some users!');
}
else {
    userNames = [];
    console.log('All usernames have been remove ' + userNames.length);
}
