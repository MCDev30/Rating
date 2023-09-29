let star = ["star1", "star2", "star3", "star4", "star5"];
rating = ["😢", "🙂", "😀", "😁", "🥳"]
for (let i = 0; i < star.length; i++) {
  document.getElementById(star[i]).addEventListener("click", (e) => {
    e.preventDefault();
    for (let j = 0; j < star.length; j++) {
        document.getElementById(star[j]).src = j < i+1 ? "https://cdn-icons-png.flaticon.com/512/929/929424.png" :"https://cdn-icons-png.flaticon.com/512/126/126482.png" 
      } 
    document.querySelector(".rating_ratio").innerHTML = rating[i];
  });
}
document.getElementById("reset").addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < star.length; i++) {
    document.getElementById(star[i]).src =
      "https://cdn-icons-png.flaticon.com/512/126/126482.png";
    document.querySelector(".rating_ratio").innerHTML = "";
  }
});
