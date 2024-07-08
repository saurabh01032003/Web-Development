
// // --------------- process.argv

// // "process" ek object hai -> jiske andar ek property hai "argv" -> jiske andar do paths hai as array element -> pahla node js ka path & dusra element aap jis file me ho waha tk ki path dega, 
// // if you want to give input to your node js file -> file ko node js se run karo using -> node index.js 10 20 30 -> process.argv ke andar ab 5 element insert ho gaye hai pahle do jo the aur baki agle 3 -> "10", "20", "30" in form of string

// // [
// //     'C:\\Program Files\\nodejs\\node.exe',   
// //     'C:\\Users\\saura\\Desktop\\Kode Mafia\\7. BACKEND\\Node JS\\Lecture-33\\Node Basic\\index.js',
// //     '10',
// //     '20',
// //     '30',
// // ]


// let arr = process.argv;
// console.log(arr);
// // [
// //     'C:\\Program Files\\nodejs\\node.exe',   
// //     'C:\\Users\\saura\\Desktop\\Kode Mafia\\7. BACKEND\\Node JS\\Lecture-33\\Node Basic\\index.js',
// //     '10',
// //     '20',
// //     '30',
// // ]

// let uptill = arr[2];
// // --------------- OR
// // let eleArr = arr.slice(2);
// // console.log(eleArr); //since aapne ek element hi paas kiya tha after ->node index.js 10 -> only 10
// // let uptill = eleArr[0]; // ->it is automatically typecasted into number 


// for(let i = 0;i <= uptill;i++){
//     console.log(i);
// }

// ----------------------- process.cwd() -> current working directory

let x = process.cwd(); // path jaha par aap khade ho (i.e jaha se file run kar rhe ho  )
console.log(x); // C:\Users\saura\Desktop\Kode Mafia\7. BACKEND\Node JS\Lecture-33\Node Basic -> jo run kr rhi waha tk nahi gaya(i.e not till index.js)

// ------------------ __dirname
console.log(__dirname); // jis directory ko run kar rahe ho uska path