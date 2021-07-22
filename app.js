// // GLOBALS - NO WINDOW!!!

// // __dirname - path to current directory
// // __filename - file name
// // require - function to use modules (CommonJS)
// // module - info about current module (file)
// // process - info about env where the program is being executed

// console.log(__dirname);




// //Modules
// const secret = 'SUPER SECRET';
// const john = 'john';
// const peter = 'peter';
// const sayHi = (name) => {
//     console.log(`Hello there ${name}`);
// };

// sayHi('B0B');
// sayHi(john);
// sayHi(peter);




// const secret = 'SUPER SECRET';
// const john = 'john';
// const peter = 'peter';

// // Operating System Module (OS)
// const os = require('os');
// // info about current user
// const user = os.userInfo()
// console.log(user);

// // returns system uptime in seconds
// console.log('System uptime is ' + os.uptime + 'seconds');

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }

// console.log(currentOS);




// // PATH

// const path = require('path');

// console.log(path.sep);

// const filePath = path.join('/content/', 'subfolder', 'test.txt');
// console.log(filePath);

// const base = path.basename(filePath);
// console.log(base);

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
// console.log(absolute);




// // File System Module (FS)

// // const { readFileSync, writeFileSync } = require('fs');
// // const first = readFileSync('./01-node-tutorial/content/first.txt', 'utf8');
// // const second = readFileSync('./01-node-tutorial/content/second.txt', 'utf8');

// // writeFileSync('./01-node-tutorial/content/bobtext.txt', `This is a new file I made with the name bob`);
// // const bob = readFileSync('./01-node-tutorial/content/bobtext.txt', `utf8`);

// // console.log(first);
// // console.log(second);
// // console.log(bob);

// const { readFile, writeFile } = require('fs');

// readFile('./01-node-tutorial/content/bobtext.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     const bobtext = result;
//     readFile('./01-node-tutorial/content/first.txt', 'utf8', (err,result) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         const firstText = result;
//         writeFile('./01-node-tutorial/content/poop.txt',
//             `Here is the combination or results: ${bobtext}, ${firstText}`, (err, result) => {
//                 if(err) {
//                     console.log(err);
//                     return;
//                 }
//                 console.log(result);
//             }
//         );
//     });
// });



// // Hyper Text Transfer Protocol (HTTP)

// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end('Hello hooman pooman');
//     }
//     if (req.url === '/about') {

//         res.end('Here is my history');
//     }
//     res.end(`
//         <h1>OOps!</h1>
//         <p>We can't find the page you're looking for???</p>
//         <a href="/">Home</a>
        
//     `
//     );
// });

// server.listen(5000);




const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);