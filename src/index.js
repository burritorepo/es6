"use strict";


/*CALLBACK HELL
function one(request = {}, cb = () => { }) {
    console.log('request', request)
    setTimeout(cb, 3000);
}

function two(request = {}, cb = () => { }) {
    console.log('request', request)
    setTimeout(cb, 3000);
}

function three(request = {}, cb = () => { }) {
    console.log('request', request)
    setTimeout(cb, 3000);
}

function four(request = {}, cb = () => { }) {
    console.log('request', request)
    setTimeout(cb, 3000);
}


one({ url: 'pepe.com' }, () => {
    console.log('response pepe.com');
    two({ url: 'pepe2.com' }, () => {
        console.log('response pepe2.com')
        three({ url: 'pepe3.com' }, () => {
            console.log('response pepe3.com');
            four({ url: 'pepe4.com' }, () => {
                console.log('response pepe4.com');
            })
        })
    })
});*/

/*PROMISES*/

// let miPrimeraPromise = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         //resolve("¡Éxito!"); // ¡Todo salió bien!
//         reject("rechazo")
//     }, 3000);
// });

// miPrimeraPromise.then((successMessage) => {
//     // succesMessage es lo que sea que pasamos en la función resolve(...) de arriba.
//     // No tiene por qué ser un string, pero si solo es un mensaje de éxito, probablemente lo sea.
//     console.log("¡Sí! " + successMessage);
// }).catch((rechazo) => {
//     console.log('buu catch ',rechazo);
// });

function one(request = {}) {
    return new Promise((resolve, reject) => setTimeout(() => { resolve("one") }, 3000));
}

function two(request = {}) {
    return new Promise((resolve, reject) => setTimeout(() => { resolve("two") }, 3000));
}

function three(request = {}) {
    return new Promise((resolve, reject) => setTimeout(() => { resolve("three") }, 3000));
}

function four(request = {}) {
    return new Promise((resolve, reject) => setTimeout(() => { resolve("four") }, 1000));
}

// one()
// .then((successMessage) => {
//     console.log('response ', successMessage)
//     return two();
// })
// .then((successMessage) => {
//     console.log('response ', successMessage)
//     return three();
// }, (err) => {
//     console.log('error ', err)
//     return three();
// })
// .then((successMessage) => {
//     console.log('response ', successMessage)
//     return four();
// })
// .then((successMessage) => {
//     console.log('response ', successMessage)
// }).catch((err) => {
//     console.log('error', err)
// })

// All
// Promise.all([one(), two(), three(), four()]).then((values) => {
//     console.log('values', values)
// }).catch((err) => {
//     console.log('error', err);
// })

// Race
// Promise.race([one(), two(), three(), four()]).then(value => {
//     console.log(value); // "four"
//     // Ambas se resuelven, pero la p2 antes.
// });

// async
// async function f() {
//     return 1;
// }

// async function f() {
//     return Promise.resolve(1);
// }

// f().then((val) => {
//     console.log('async', val)
// })

// await

async function promesas() {
  let uno = await one();
  let dos = await two();
  let tres = await three();
  let cuatro = await four();
  console.log('uno', uno)
  console.log('dos', dos)
  console.log('tres', tres)
  console.log('cuatro', cuatro)

  uno.then((val) => {
    console.log('aca')
  })

//   return {
//       uno,
//       dos,
//       tres,
//       cuatro
//   }
}

// console.log('promesas con async await')
// promesas()


// fetch 

fetch('https://reqres.in/api/users?page=2')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log('fetch', myJson);
  });