let result = document.querySelector(".result");
let btn = document.querySelector(".btn");

async function getData() {
  try {
    let { data } = await axios.get("http://aws.random.cat/meow");
    getCat(data);
  } catch (error) {
    console.log(error);
  }
}

function getCat(data) {
  result.innerHTML = "";
  let img = document.createElement("img");
  img.src = data.file;
  img.style.width = "25%";
  btn.onclick = () => {
    getData();
  };
  result.appendChild(img);
}
getData();
