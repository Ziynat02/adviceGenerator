let adviseNumber = document.querySelector("#adviceNumber");
let advice = document.querySelector("#advice");
let image = document.querySelector(".image");
let loading = document.querySelector("#loading");
let dice = document.querySelector(".dice");

let base_url = "https://api.adviceslip.com/advice";
function get_data(url) {
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    loading.classList.add("hide");
    advice.classList.remove("hide");
    adviseNumber.textContent = data.slip.id;
    advice.textContent = data.slip.advice;
  });
}
get_data(`It is easy to sit up and take notice, what's difficult is getting upand taking action.`);

get_data(base_url);
let i = 0;
image.addEventListener("click", () => {
  i++;
  dice.style.transform = `rotate(${i*360}deg)`;
  loading.classList.remove("hide");
  advice.classList.add("hide");
  get_data(base_url);
});
