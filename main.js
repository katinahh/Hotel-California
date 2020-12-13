"use strict"

for (let i = 11; i < 23; i++){
    var room = document.getElementById("room__acoommodation");
    let src = '.jpg';
       
    room.innerHTML = room.innerHTML + `
    <div class='room--block'>
    <img class="img-of-room" src='images/rooms/${i}${src}' alt='images'>
    <h1>Room ${i}</h1>
    </div>`   
    // room.innerHTML += `<img class="img-of-room" src='images/rooms/${i}${src}' alt='images'>`
};














































// for (let i = 11; i < 21; i++){
//     var room = document.getElementById("room__acoommodation");
//     let src = '.jpg';
 
//     room.innerHTML = room.innerHTML + `
//     <div class='room--block'>
//     <img class="img-of-room" src='images/rooms/${i}${src}' alt='images'>
//     <h1>Room ${i}</h1>
//     </div>`   
//     // room.innerHTML += `<img class="img-of-room" src='images/rooms/${i}${src}' alt='images'>`
// }



// room.innerHTML = "<img class='img-of-room' src='images/room-1.jpg' alt='room 1'> <h1> Hi </h1> <img class='img-of-room' src='images/room-2.jpg' alt='room 1'> <h1> Hi </h1>"
// // prompt("inner HTML this is :"+room.innerHTML);
// let done = "";
// let repit = 10;
// for(let i = 1; i<=repit; i++){
// room.innerHTML = "<img class='img-of-room' src='images/room-1.jpg' alt='room 1'> <h1> Hi </h1>"
// }

// "use strict"
// let room__acoommodation = document.getElementById('room__acoommodation')



// for (let i = 1; i < 11; i++) {
//     let src = i + '.jpg';
//     document.getElementById('room__acoommodation').innerHTML += `
// }

// for (let i = 11; i < 21; i++) {
//     let src = i + '.jpg';
//     document.getElementById('pic-img').innerHTML += `
// <div class="pic">
//     <img class="img--width" src="images/rooms/${src}" alt="product">
//     <p">Standoff 2</p>
//     <div>
//         Game forever! I vsyo pofig!
//     </div>
// </div>`;
// }
// let repit = 5;
// for(let i = 1; i<=repit; i++){

// }