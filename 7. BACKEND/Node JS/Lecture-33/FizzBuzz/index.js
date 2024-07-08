
// Q . FizzBuzz (Interview question)

// You are given a number 'n' your task is to iterate from i(1 -> n) &&  print "FizzBuzz" if i is divisible by 3 and 5 both, else if i is only divisible by 3 print "Fizz", else if i is divisible by only 5 print "Buzz" else print "i"

// // Approach: 1
// let number = 20;

// // let number = process.argv; // user se input lene ke liye
// // let till = number[2];

// for(let i = 1;i <= till;i++){
//     if(i%5 === 0 && i%3 === 0){
//         console.log("FizzBuzz");
//     }else if(i%3 === 0){
//         console.log("Fizz");
//     }else if(i%5 === 0){
//         console.log("Buzz");
//     }else{
//         console.log(i);
//     }
// }
// // modular operator ki complexity jada hoti hai
// // above approach is using 4 modular operator -> which increases complexity -> less chances of getting selected in interview

// // ----------------Approach : 2

// function fizzBuzz2(number){
//     for(let i = 1;i <= number;i++){
//         let str = "";
//         if(i%3 == 0){
//             str += "Fizz";
//         }

//         if(i%5 == 0){
//             str += "Buzz";
//         }

//         if(str == ""){
//             str += i;
//         }
//         console.log(str);
//     }
// }

// fizzBuzz2(20);

// // Optimised than approach 1 -> as only using 2 modular operator

// -------------------Approach : 3

function fizzBuzz3(n){
    let cnt3 = 1,cnt5 = 1;
    // let cnt5 = 1;

    for(let i = 1;i <= n;i++){
        let str = "";

        if(cnt3 == 3){
            str += "Fizz";
            cnt3 = 0; // niche cnt3++ hoke 1 ho jayega
        }

        if(cnt5 == 5){
            str += "Buzz";
            cnt5 = 0;
        }

        if(str == ""){
            str += i;
        }
        console.log(str);
        cnt3++;
        cnt5++;
    }
}

console.log('Optimised Approach');
fizzBuzz3(20);