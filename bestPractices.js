// This is going to fetch the API
const url = https://something.api.something.com/
fetch(url)
.then((response) => response.json())
    .then((data) => {
      console.log(data);
});

// you can also put this into a function so you can plug in any url to pull from the API endpoint

const url = https://something.api.something.com/
function useThisFetch(url){
  let result = "";
  fetch(url)
.then((response) => response.json())
    .then((data) => {
      console.log(data);
});
}

// This is Axios. It might need to be imported at the top like import axios. it uses async/await

