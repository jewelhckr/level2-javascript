 // FOR EVEN NUMBER

    //    for(var i = 1; i <= 100; i++){4
    //     if(i%2 == 0){
    //     console.log(i)
    //     }
    //    }

    // 99 BOTTLES ON THE WALL MTHD 1

//     for (let beerBot = 99; beerBot >= 1; beerBot--) {
//         if (beerBot > 1) {
//            console.log(`${beerBot} bottles of beer on the wall, ${beerBot} bottles of beer.`);
//         if (beerBot > 2) {
//            console.log(`Take one down, pass it around, ${beerBot - 1} bottles of beer on the wall.`);
//         } else {
//            console.log("Take one down, pass it around, 1 bottle of beer on the wall.");
//         }
//         } else if (beerBot == 1) {
//            console.log("1 bottle of beer on the wall, 1 bottle of beer. Take one down, pass it around, no more beer on the wall!");
//     }
// }

    // 99 BOTTLES ON THE WALL MTHD 2
    
    // for(var i = 99; i >= 1; i--){
    // // console.log("Hello "+i)
    //  console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.`)
    //  console.log(` Take one down and pass it around, ${i-1} bottles of beer on the wall`)
// }   
           //  disp.innerHTML += `
            //     ${i} bottles of beer on the wall, ${i} bottles of beer.
            //     Take one down and pass it around, ${i-1} bottles of beer on the wall <br>
            //     `

        // FIZZ-BUZZ
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

       // FACTORIAL
       for(var i = 1; i <= 100; i++){
        console.log(i*(i-1)*(i-2))
       }