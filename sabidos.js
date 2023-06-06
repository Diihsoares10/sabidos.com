function changeTheme(backgroundColor) {
  document.body.style.backgroundColor = backgroundColor;
}

var bt1 = document.getElementById("bt1");
var bt2 = document.getElementById("bt2");
var bt3 = document.getElementById("bt3");

bt1.addEventListener("click", function() {
  changeTheme("green");
});

bt2.addEventListener("click", function() {
  changeTheme("pink");
});

bt3.addEventListener("click", function() {
  changeTheme("black");
});