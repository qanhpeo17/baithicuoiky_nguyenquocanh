function numberOneTriangle(num) {
  let tree = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      tree += "* ";
    }
    tree += "<br>";
  }
  return tree;
}
document.querySelector(".btn").addEventListener("click", (e) => {
  const a = parseInt(document.querySelector("#inputNum").value);
  const c = document.querySelector(".triangleOutput");
  if (isNaN(a) || a <= 0) {
    c.innerHTML = "Vui lòng nhập lại!";
  } else {
    c.innerHTML = numberOneTriangle(a);
  }
});
