const button = document.querySelector("#button");
const display = document.querySelector(".display");
const option = document.getElementById("Quote");

async function apicall(key,api_key) {
    let response  = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${key}`,{headers: { 'X-API-Key':'O4cd2WzJFR6iTHDd5zVDmZHvONNNeiMNNiZml25m'}});
    const data = await response.json();
    display.innerHTML = data[0].quote; 
    console.log(response);
};
button.addEventListener('click',()=> {
    api_key = "qjnvQWkCtkbwB1YtAWf+Hw==jUPJ9QiFSgzKdgui";
    let api_url = option[option.selectedIndex].innerText;
    apicall(api_url,api_key);
})