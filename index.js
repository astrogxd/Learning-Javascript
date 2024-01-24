/* ternirary operators
const isPremium = false;
 let color = isPremium ? "white" : "grey";
document.body.style.background = color;

const age = 12;
let greet = age < 8 ? "heyyy kiddo" : "sup";
console.log(greet);
*/

/* if else statement 
 const name = "";
 const password = 15103;

 if (!name || !password) {
   alert("please enter username or password");
 } else if (name && password) {
   alert("welcome bitch");
 } */

/*
const isMember = true;
const isVIP = false;
const purchaseAmount = 100;

// Your code here
if (isMember && !isVIP) {
  const discountAmount = purchaseAmount - 10;
  console.log(discountAmount);
} else if (isVIP && !isMember) {
  const discountAmount = purchaseAmount - 20;
  console.log(discountAmount);
} else if (isVIP && isMember) {
  const discountAmount = purchaseAmount - 30;
  console.log(discountAmount);
} else {
  console.log(
    "If the customer is neither a member nor a VIP, they receive no discount"
  );
}
*/

/*Iconst uberRide = 200;
const driverCommission = 70 / 100;
const nameOfDriver = "Akhil";
const uberDriverEarning = uberRide * driverCommission;
const uberEarning = uberRide - uberDriverEarning;

const output = `From a ride costing R${uberRide},
${nameOfDriver} earns R${uberDriverEarning} with a 70% commission,
while Uber earns R${uberEarning} with a 30% commission`;

console.log(output);
*/

/*const fullName = "Akhil Boddu";
const jobTitle = "co-founder at Zaio";
const uni = "University of Cape Town";
const age = 23;

console.log(`My name is ${fullName}
and I am the ${jobTitle}, 
I graduated from the ${uni}, 
and I am ${age} years of age`);
 
*/

/*FUNCTIONS
 const amo = "Amo";
const sam = "Sam";


function sendMessage(user, message) {
  const timestamp = getTimestamp();
  console.log(`${user}: ${message} 
  ${timestamp}`);
}

function getTimestamp() {
  const d = new Date();
  const timestamp = d.getHours() + ":" + d.getMinutes();
  return timestamp;
}

sendMessage(amo, "Wassup bitch");
sendMessage(sam, "Ayo fuckface alls good");
sendMessage(amo, "Well I heard you got played bro");

//functions challenge
/* function calcBill(totalbill, people) {
  const split = totalbill / people;
  console.log(
    `the group will each have to pay R${Math.ceil(split)}  for the food`
  );
}
calcBill(14000, 15);
*/

/*OBJECTS
const profile = {
  username: "Starfreezy",
  posts: 4,
  followers: 845,
  following: 560,
  ppicture: "gdhfjchdbc",
  fullName: "Amogelang Matlala",
  bio: "fuck the system",
  link: "zaio.io",
};
//adding ,modifying and getting data:
// modifying data --
profile.posts = profile.posts + 3;
//adding new data --
profile.email = "amatala@gamil.com";
profile.phoneNumber = "0659701446";
//get data --
console.log(profile.fullName);
// delete data --
delete profile.phoneNumber;
console.log(profile);


 CRUD:
//CREATE
//READ
//UPDATE
//DELETE


const post = {
  username: "starfreezy",
  picture: "yuaghgsdjhxbh",
  likes: 34,
  timestamps: "12:45",
  comments: 12,
};

const { username, picture, likes, timestamps, comments } = post;
console.log(
  `${username} posted a photo with ${likes} likes and ${comments} comments`
);
*/

/*functions inside of objects
const profile = {
  username: "Starfreezy",
  posts: 4,
  followers: 845,
  following: 560,
  ppicture: "gdhfjchdbc",
  fullName: "Amogelang Matlala",
  bio: "fuck the system",
  link: "zaio.io",
  info() {
    const { username, posts, followers, following, bio, link } = this;
    return `
    info for: ${username}
    posts: ${posts}
    followers: ${followers}
    following: ${following}
    bio: ${bio} 
    `;
  },
  posted() {
    this.posts = this.posts + 1;
    return ` ${this.username} just added a new post and its now ${this.posts} `;
  },
};

console.log(profile.info());
console.log(profile.posted());
*/
/*const name = "Amo";
const obj = {};
const obj2 = obj;
obj2.name = name;

console.log("obj1", obj);
console.log("obj2", obj2);

*/

/*
const primaryColors = {
  red: "red - hexacode",
  blue: "blue",
};

const secondaryColors = {
  grey: "grey",
  black: "black",
};

const allColors = {
  ...primaryColors,
  ...secondaryColors,
  getColor(color) {
    return this[color];
  },
};

console.log(allColors.getColor("red"));
*/

/*loops
// for, while , do while
const text = "amogelang matlala";
let finalValue = "";
for (let i = 0; i <= text.length; i++) {
  finalValue = finalValue + text.charAt(i).toUpperCase();
}
console.log(finalValue);


//Challenges for loop
//write a for loop to give output 12345678

//let output = "";
//for (let i = 0; i < 9; i++) {
  //output = output + i;
//}
//console.log(output);


//for (let i = 0; i < 6; i++) {
  //let tri = "";
  //for (let j = 0; j < i + 1; j++) {
   // tri = tri + "* ";
   // console.log(tri);
  //}}


//let finalValue = "";
//for (let i = 22; i >= 0; i = i - 2) {
  //finalValue = finalValue + i;
//}
//console.log(finalValue);

for (let i = 0; i < 11; i++) {
  for (let j = 0; j < 11; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("------------");
}
*/

/*while loops/ do while loops
let loggedIn = false;
let username;
let password;

do{
  username = window.prompt(`enter username`);
  password = window.prompt(`enter password`);

  if (username === "myUsername" && password === "myPassword") {
    loggedIn = true;
    console.log("you are logged in mahboi");
  } else {
    console.log("you defs should enter proper try again");
  }
}while (!loggedIn) 
*/

/*const text = "Amogelang";
i = 0;
let finalValue = "";
while (i < text.length) {
  finalValue += text.charAt(i).toUpperCase();
  i++;
}
console.log(finalValue);
*/

/*ARRAYS

const fruits = ["apple", "bannana", "peach", "watermelon"];
//fruits.push("coconut"); //add at the end
//fruits.pop(); // remove at the end
//fruits.unshift("mango"); // add at the front
//fruits.shift(); // remove at the front

//let numOfFruits = fruits.length; //length of array/stuff in it
//let index = fruits.indexOf("peach"); // to get the index of item in array
//console.log(numOfFruits);// logging to see num of fruits
for (let i = fruits.length - 1; i >=0; i--){
  console.log(fruits[i]);
 } // logging the arrays in reverse

fruits
  .sort() //to sort array in alphebetical order
  .reverse(); //to sort in reverse
for (let fruit of fruits) {
  console.log(fruit);
}

access length of array you can 
console.log(fruits[fruit.length-1]);
*/

/*array of Objects
const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "orange", color: "orange", calories: 45 },
  { name: "banana", color: "yellow", calories: 105 },
  { name: "coconut", color: "white", calories: 159 },
  { name: "pineapple", color: "yellow", calories: 97 },
];

// --------forEach()-------- to loop through elements of arry
//fruits.forEach((fruit) => console.log(fruit.color));

// ---------map()-------- will run each element through a func and return a new array
//const fruitNames = fruits.map((fruit) => fruit.name);
//console.log(fruitNames);

// ---------filiter()--------- will return a new array after checking a condition
//const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");
//console.log(yellowFruits);
//const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
//console.log(lowCalFruits);

// ---------reduce()--------- will return a single value(1 of the objects)
const maxFruit = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max
);
console.log(maxFruit);

const minFruit = fruits.reduce((min, fruit) =>
  fruit.calories < min.calories ? fruit : min
);
console.log(minFruit);
*/

//const watermelonIndex = fruits.indexof("watermelon");
//fruits[watermelonIndex] = " green watermelon"
//-------.splice()---------  remove certain elemnts in array
//let colors = ["red", "blue", "white", "green", "pink"];
//colors.splice(4, 1);
//console.log(colors);

const post = {
  id: "1",
  likes: 10,
  username: "somerando",
  timestamp: "16:12",
  comments: [],
};

const posts = [
  {
    id: "0",
    likes: 20,
    username: "akhilboddu",
    timestamp: "15:45",
    comments: [
      {
        username: "luhfreezy",
        Comment: "Love the snap!!",
        id: "hxbabsg234dnh",
      },
    ],
  },
];

posts.push(
  post,
  {
    id: "2",
    likes: 5,
    username: "tshego",
    timestamp: "16:22",
    comments: [],
  },
  {
    id: "3",
    likes: 66,
    username: "zaio",
    timestamp: "16:28",
    comments: [],
  },
  {
    id: "4",
    likes: 95,
    username: "Lebo",
    timestamp: "16:32",
    comments: [],
  },
  {
    id: "5",
    likes: 8,
    username: "Mondaymotivation",
    timestamp: "16:32",
    comments: [],
  }
);

posts.pop();

// Map(always gonna use the map function) add a new property
//
// const postsWithShares = posts.map((item, index) => {
//   return { ...item, shares: 0 };
// });
// console.log(postsWithShares);

// forEach
// posts.forEach((item, index) => {
//   console.log(`
//   ${item.username} |     ${item.timestamp}
//     IMAGE
//   ${item.likes} likes  |      ${item.comments.length} comments`);
// });

// chaining the .map() with forEach()

// posts
//   .map((item, index) => {
//     return { ...item, shares: 0 };
//   })
//   .forEach((item, index) => {
//     console.log(`
//      ${item.username} |     ${item.timestamp}
//        IMAGE
//      ${item.likes} likes  |      ${item.comments.length} comments | ${item.shares} shares`);
//   });

//filter()    ------(shows the items )
// console.log(posts.filter((item, index) => item.likes > 50));

//find() -----(shows the specefic item you want)
//console.log(posts.find((item) => item.id == 0));

// reduce ---- checks through every item and returns 1 value
//console.log(posts.reduce((acc, item) => (acc += item.likes), 0));

//challenge
// console.log(
//   posts.map((item, index) => {
//     return { ...item, shares: [], duration: 0 };
//   })
// );
//console.log(posts.filter((item, index) => item.comments.length === 0));
//find function --finds the first element searched
//console.log(posts.find((item) => item.username === "akhilboddu"));
//console.log(posts);
//console.log(posts.reduce((acc, item) => (acc += item.comments.length), 0));

// creating a duplicate arrays
// const fruits = ["apple", "peach", "watermelon"];
// const fruits2 = [...fruits];
// fruits2.push("kiwi");
// console.log(fruits, fruits2);

//array destructuring ---
//const totalPosts = [...postsInKenya, ...postsInSouthAfrica] to combine arrays

//iterating  through objects with for loops

const expenses = {
  rent: 10000,
  food: 2000,
  movies: 1500,
};

// for (const key in expenses) {
//   console.log(expenses[key]); //will print the values
// }

// let total = 0;
// for (const key in expenses) {
//   total += expenses[key];// basically adding off them together
// }
// console.log(total);

// making objects into arrays
// console.log(Object.keys(expenses), Object.values(expenses));
// getting total of everything
// const total = Object.values(expenses).reduce(
//   (acc, expense) => (acc += expense),
//   0
// );
// console.log(total);

// const keys = Object.keys(expenses);
// const values = Object.values(expenses);
// for (let i = 0; i < keys.length; i++) {
//   console.log(keys[i], values[i]);
// }

/*revision
functions
// function iseven(number) {
//   return number % 2 === 0 ? true : false;
// }

// function isValidEmail(email) {
//   return email.includes("@") ? true : false;
// }

// console.log(isValidEmail("amatlala.com"));
*/

const myObject = {
  firstName: "Amogelang",
  LastName: "Matlala",
  id: 310155,
  username: "lufreezy",
  password: "weakPassword",
};
let dataArray = [];

for (key in myObject) {
  let entry = [];
  entry.push(key);
  entry.push(myObject[key]);
  dataArray.push(entry);
}

console.log(dataArray);
