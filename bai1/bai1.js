function isSNT(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function tinhSNT() {
  const a = parseInt(document.querySelector(".inputA").value);
  const b = parseInt(document.querySelector(".inputB").value);
  let sum = 0;
  const result = document.querySelector("#result");
  result.textContent = "";
  if (isNaN(a) || isNaN(b) || a < 0 || b < 0) {
    result.textContent = "Vui lòng nhập lại!";
    return;
  }
  result.textContent = "Các số nguyên tố từ " + a + " đến " + b + ": ";
  for (let i = a; i <= b; i++) {
    if (isSNT(i)) {
      result.textContent += i + "  ";
      sum += i;
    }
  }
  result.innerHTML += "<br> Tổng: " + sum;
}
