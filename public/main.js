const add = document.getElementById("add");

add.addEventListener("click", () => {
  var x = document.getElementById("form-mess");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});

