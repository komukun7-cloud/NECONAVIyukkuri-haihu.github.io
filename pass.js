"use strict";
var pwInput = document.getElementById("pw").value;
document.getElementById("go").addEventListener("click", function() {
  if (pwInput) {
    if (["ikura"].includes(pwInput)) {
      window.location.href = "/secret/" + pwInput + "/";
    } else { alert("パスワードが違う！"); }
  } else { alert("パスワードを入れてね！"); }
});
