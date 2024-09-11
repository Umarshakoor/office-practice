import React, { useEffect } from "react";

function ReactAsyncAwait() {
  //1. Fetching Data with async/await and try/catch (Error Handling)

  /*   const fetchData = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []); */

  // 2. Fetching Data with async/await Without try/catch

  /*   const fetchData = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
    // return res.json();
    const data = res.json();
    console.log(data);
  };

  useEffect(() => {
    fetchData()
      .then((data) => console.log(data))
      .then((e) => console.log(e));
  }); */
  //3. Fetching Data with Promises (.then() and .catch())

  /*   const fetchData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
      .then((res) => res.json)
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchData();
  }, []); */

  //4. Fetching Data Without async/await or Promises

  /*   const fetchData = () => {
    const promise = fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    promise
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchData();
  }, []); */

  //promise .then .catch method

  /*   fetch(URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error("Error fetching data:", error)); */

  // async await method

  /*   async function fetchData() {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  } */

  /*   fetch("https://api.example.com/data")
    .then((response) => response.json()) // Return the parsed JSON response
    .then((data) => {
      console.log(data); // Use the resolved data directly
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    }); */

  /*   fetch("https://api.example.com/data")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      response.json(); // Notice no `return` here
    })
    .then((data) => {
      console.log(data); // `data` will be `undefined` here, because nothing was returned
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    }); */

  return <div>ReactAsyncAwait</div>;
}

export default ReactAsyncAwait;
