/** @format */

/** @format */
const tryPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = false;
    if (success) resolve("success");
    else reject("error");
  }, 2000);
});

//request dr fe ke be => promise () => start loading dan request data ke be
// => then = () => mendapatkan data
// => catch = () => tampilkan message data tidak ditemukan
// => finally => loading selesai

const TanpaAsyncAwait = () => {
  console.log("satu");
  tryPromise
    .then((res) => console.log(res))
    .catch((error) => console.log(error))
    .finally(() => console.log("finally done"));
  console.log("dua");
};

// TanpaAsyncAwait();

const asyncAwait = async () => {
  console.log("satu");
  await tryPromise
    .then((res) => console.log(res))
    .catch((error) => console.log(error))
    .finally(() => console.log("finally done"));
  console.log("dua");
};

asyncAwait();

//real case implementaion

const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json()) // promise
    .then((users) => {
      console.log(users);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("always running!");
    });
};

// fetchData();

import * as interfaces from "./interfaces";
// import { IUser } from "./interfaces";

const fetchData2 = async (str: string) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = (await response.json()) as interfaces.IUser[];
    const filteredUsers = users.filter((user) => user.email.startsWith(str));
    if (filteredUsers.length == 0) throw new Error("data kosong");
    else console.log(filteredUsers);
  } catch (error: unknown) {
    if (error instanceof Error) console.log(error.message);
  } finally {
    console.log("always running");
  }
};

fetchData2("B");
//CRUD
// create
// read
// update
// delete

const fetchData3 = async (str: string) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = (await response.json()) as interfaces.IUser[];
  const filteredUsers = users.filter((user) => user.email.startsWith(str));
  if (filteredUsers.length == 0) throw new Error("data kosong");
  else console.log(filteredUsers);
};

// fetchData3("z");

import { users } from "./data.json";

console.log(users);

const getById = (id: number) => users.find((user) => user.id == id);

console.log(getById(1));

const obj = {
  title: "boss",
  name: "ronald",
};

// json == string
// string != json

console.log(String(obj), "convert ke string"); //[object Object] convert ke string

const stringJSON = JSON.stringify(obj);
console.log(JSON.parse(stringJSON), "convert ke json string");
