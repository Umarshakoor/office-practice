//You use JSON.stringify() to convert an object or array into a JSON string.

//javscript obj
let jsObj = { name: "xpro", age: 30 };
//using js built-in function stringify to convert js object to json string
let jsonString = JSON.stringify(jsObj);
console.log(jsObj);
console.log(jsonString);

// js array
let jsArrayString = ["a", "b", "c", "d"];
console.log(jsArrayString);
//converting js array into json
let jsonArraySting = JSON.stringify(jsArrayString);
console.log(jsonArraySting);

// js array numeber
let jsArrayNum = [6, 9, 6];
console.log(jsArrayNum);
let jsonArrayNum = JSON.stringify(jsArrayNum);
console.log(jsonArrayNum);

//Convert JSON String to JavaScript Object/Array:
// You use JSON.parse() to convert a JSON string back into a JavaScript object or array.

// let jsonStr = { name: "foo", value: "bar" };
/* VM4533:1 Uncaught SyntaxError: "[object Object]" is not valid JSON
    at JSON.parse (<anonymous>) */
let jsonStr = '{"name": "foo", "value": "bar"}';
console.log(jsonStr);
console.log(JSON.stringify(jsonStr));
let jsStr = JSON.parse(jsonStr);
console.log(jsStr);

//difference between json string abd object
// 1 a json array is a list of values enclosed in square brackets
// 2 it can contain object , string number boolean and even other array

// json string is simply value enclosed in double quotes

//json object is a collection of key values pairs in curly brackets
// 2 the keys are sring and values can be string and number object and arrays booleans

//try catch
//await
//promise
//fetch

// error handling react
try {
  fetch;
} catch (error) {
  console.error(error);
}

const detchData = async () => {
  try {
    return await fetch(url);
  } catch (error) {
    console.error(error);
  }
};

// .then() a method on promises which accepts a callback function to run when the promise resolves

const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("follow @umarxpro");
  }, 1000);
});

myPromise.then((val) => {
  console.log(val);
});

function getUser(userId) {
  const userData = fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

getUser(1);

async function getName(nameId) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
    const data = await response.json();
    console.log("line 89", data);
  } catch (error) {
    console.log(error);
  }
}
getName(1);

async function getData() {
  const url = `https://pokeapi.co/api/v2/pokemon/ditto`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status code ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
  } catch (e) {
    console.log(e.message);
  }
}

getData();
