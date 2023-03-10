let result = document.querySelector(".result");

function getCat(data) {
  console.log(data);

  data.forEach((e) => {
    let img = document.createElement("img");
    img.src = e.file;
    result.appendChild(img);
  });
}
export default getCat();
