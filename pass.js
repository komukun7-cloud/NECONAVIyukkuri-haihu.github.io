"use strict";
var pwInput = document.getElementById("password");
document.getElementById("go").addEventListener("click", function() {
  if (pwInput.value) {
    location.href = "/secret/" + pwInput.value + "/";
  } else {
    alert("パスワードを入れてね！");
  }
});
