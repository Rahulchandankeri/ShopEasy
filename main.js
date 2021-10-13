var eventdate = new Date("Apr 20, 2023 13:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var path = eventdate - now;

  const seconds = Math.floor((path % (1000 * 60)) / 1000); // Calculation to get ms in a seconds (In 60min)
  const minutes = Math.floor((path % (1000 * 60 * 60)) / (1000 * 60)); // Calculation to get ms in a minute (In 60 Mins)
  const hours = Math.floor((path % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Calculation to get ms  in a hour
  const days = Math.floor(path / (1000 * 60 * 60 * 24)); // Calculation to get Milliseconds in a day

  document.getElementById("current").innerHTML =
    days + "d" + " " + hours + "h" + " " + minutes + "m" + " " + seconds + "s";

  if (path < 0) {
    clearInterval(x);
    document.getElementById("current").innerHTML = "Product is live";
  }
}, 1000);

// var form = document.getElementById("myform");
// var btn = document.getElementById("loginuser");

// btn.onclick = function () {
//   form.style.display = "unset";
// };
// window.onclick = function (event) {
//   if (event.target == form) {
//     form.style.display = "none";
//   }
// };

function cartcheck() {
  cartempty.style.display = "block";

  setTimeout(function () {
    cartempty.style.display = "none";
  }, 2000);
}
