"use strict"

let room = document.getElementById("room__acoommodation");

let renderRoomList = (itemsCount) =>{
    let result = "";
    for (let i = 1; i <= itemsCount; i++){
        // let src = '.jpg';
           
        result = result + `
        <div class='room--block'>
        <img class="img-of-room" src='images/rooms/${i+10}.jpg' alt='images'>
        <h1>Room ${i}</h1>
        </div>`   
        // room.innerHTML += `<img class="img-of-room" src='images/rooms/${i}${src}' alt='images'>`
    }; 
    room.innerHTML = result;
};

renderRoomList(10);
// renderRoomList(20);










// for (let i = 11; i < 23; i++){
//     let src = '.jpg';
       
//     room.innerHTML = room.innerHTML + `
//     <div class='room--block'>
//     <img class="img-of-room" src='images/rooms/${i}.jpg' alt='images'>
//     <h1>Room ${i}</h1>
//     </div>`   
//     // room.innerHTML += `<img class="img-of-room" src='images/rooms/${i}${src}' alt='images'>`
// };


// let object__room = {
//     image: 11,
//     name: "Appartment",
//     number: 1,
//     price: 19.99
// }

// room.innerHTML = room.innerHTML + `
//     <div class='room--block'>
//     <img class="img-of-room" src='images/rooms/${object__room.image}.jpg' alt='images'>
//     <h1>${object__room.name} ${object__room.number} <p>Price: ${object__room.price} $ </p>  </h1>
//     </div>`   

// let objectRoom2 = {
//     image: 12,
//     name: "Appartment",
//     number: 2,
//     price: 19.99
// }
// room.innerHTML = room.innerHTML + `
//     <div class='room--block'>
//     <img class="img-of-room" src='images/rooms/${objectRoom2.image}.jpg' alt='images'>
//     <h1>${objectRoom2.name} ${objectRoom2.number} <p>Price: ${objectRoom2.price} $ </p>  </h1>
//     </div>`   

// let rooms = []




































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