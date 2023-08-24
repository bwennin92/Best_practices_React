// This is going to fetch the API
const url = "https://jsonplaceholder.typicode.com/users"
fetch(url)
.then((response) => response.json())
    .then((data) => {
      console.log(data);
});

// you can also put this into a function so you can plug in any url to pull from the API endpoint

const url = "https://jsonplaceholder.typicode.com/users"
function useThisFetch(url){
  fetch(url)
.then((response) => response.json())
    .then((data) => {
      console.log(data);
});
}

// This is Axios. It might need to be imported at the top like import axios. it uses async/await

