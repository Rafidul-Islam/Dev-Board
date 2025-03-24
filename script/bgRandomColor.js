const bgColorBtn = document
  .getElementById("theme-color")
  .addEventListener("click", function () {
    let r = Math.random() * 100;
    let g = Math.random() * 100;
    let b = Math.random() * 100;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  });
