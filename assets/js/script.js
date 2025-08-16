const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const verification = document.getElementById("verification");

verification.addEventListener("click", function () {
  const cantidad1 = parseInt(input1.value) || 0;
  const cantidad2 = parseInt(input2.value) || 0;
  const cantidad3 = parseInt(input3.value) || 0;
  const total = cantidad1 + cantidad2 + cantidad3;
  if (total > 10) {
    document.querySelector(".message").innerHTML = "Llevas demasiados stickers";
  } else if (total <= 10) {
    document.querySelector(".message").innerHTML =
      "Llevas " + total + " stickers <br> Valido";
  }
});
