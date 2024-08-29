 // FOR EVEN NUMBER

    //    for(var i = 1; i <= 100; i++){4
    //     if(i%2 == 0){
    //     console.log(i)
    //     }
    //    }

    // 99 BOTTLES ON THE WALL MTHD 1

//     for (let beerBot = 99; beerBot >= 1; beerBot--) {
//         if (beerBot > 1) {
//            console.log(`${beerBot} bottles of Rum on the wall, ${beerBot} bottles of Rum.`);
//         if (beerBot > 2) {
//            console.log(`Take one down, pass it around, ${beerBot - 1} bottles of Rum on the wall.`);
//         } else {
//            console.log("Take one down, pass it around, 1 bottle of Rum on the wall.");
//         }
//         } else if (beerBot == 1) {
//            console.log("1 bottle of Rum on the wall, 1 bottle of Rum. Take one down, pass it around, no more Rum on the wall!");
//     }
// }

    // 99 BOTTLES ON THE WALL MTHD 2

//         function dispLyrics() {
//         for(var i = 99; i >= 1; i--){
//         // dispLyrics.innerHTML +=`Hello ${i}`)
//             disp.innerHTML +=`<h1> ${i} bottles of beer on the wall, ${i} bottles of beer.`
//             disp.innerHTML +=` Take one down and pass it around, ${i-1} bottles of beer on the wall </h1>`
//         if (i == 1){
//             dispLyrics.innerHTML +=` 1 bottle of Rum on the wall, 1 bottle of Rum. Take one down, pass it around, no more bottles of Rum on the wall!
//             `
//         }
//     }   
// }
           //  disp.innerHTML += `
            //     ${i} bottles of beer on the wall, ${i} bottles of beer.
            //     Take one down and pass it around, ${i-1} bottles of beer on the wall <br>
            //     `

//         FIZZ-BUZZ
//         for(var i = 1; i <= 100; i++){
//         if(i%3 == 0 && i%5 !== 0){
//             console.log(`${i}-Fizz`)
//         } 
//         else if(i%5 == 0 && i%3 !== 0){
//             console.log(`${i}-Buzz`)
//         } 
//         else if(i%3 == 0 && i%5 == 0){
//             console.log(`${i}-Fizz-Buzz`)
//     }
// }

    //    FACTORIAL
       for(let i = 1; i <= 10; i++){
        console.log(i*(i-1)*(i-2));
       }

    // MULTIPLICATION TABLE
    // function createTable(){
    //     var userNumber = userInput.value
    //     myTable.innerHTML = ""
    // for(var i = 1; i <= 12; i++){
    //     // var userInput = i * 2
    //     disp.innerHTML += `
    //     <table border="1">
    //         <tr>
    //             <td>
    //                 ${userNumber} * ${i} = ${userInput.value*i}<br>
    //             <td>
    //         <tr>
    //     </table>
    //     `
    //     }
    //     userInput.value = ""
    // }
    // }
    // for(var i = 1; i <= 12; i++){
    //     console.log(`2 x ${i} = ${2*i}`)
    // }

    // 2D LOOPS
    // function Change(){
    //     alert("Yo yeah!")
    // }
    //   function createEval(){
    //     // alert("Works")
    //     for(i = 1; i <= 12; i++){
    //         for(j = 1; j <= 12; j++){
    //             console.log(i + "x" + j + "=" + i*j)
    //         }
    //     }
    //   }