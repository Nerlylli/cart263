window.onload = goApp;

async function goApp() {
  console.log("hello fetch II");

  try {

    let urlA = `https://cataas.com/cat?filter=custom&brightness=1.5&saturation=50&json=true`
    let urlB = `https://cataas.com/cat?json=true`


    let response = await fetch(urlB); //response
    let cat = await response.json();
    // console.log(posts);
    displayOnSite(cat.url)

  } catch (err) {
    console.log(err);
  }

  function displayOnSite(path) {
    console.log(path)
    document.querySelector("#output_rev").innerHTML += `<img src="${path}"/>`
  }
}



