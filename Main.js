const button = document.querySelector("button");
const container = document.getElementById("container");
const input = document.querySelector("input");
const form = document.querySelector("form");

//container.style.border = "3px solid red";
container.addEventListener("click", (eo) => {
  if (eo.target.className == "icon-bin icon") {
    eo.target.parentElement.parentElement.remove();
  } else if (eo.target.className == "icon-angry2 icon") {
    eo.target.classList.add("dn");
    const heart = `<span class="icon-heart">   </span>`;

    eo.target.parentElement.parentElement
      .getElementsByClassName("task-text")[0]
      .classList.add("fineto");

    eo.target.parentElement.innerHTML += heart;
  } else if (eo.target.className == "icon-heart") {
    eo.target.parentElement.parentElement
      .getElementsByClassName("task-text")[0]
      .classList.remove("fineto");

    eo.target.classList.add("dn");
    const angry = `<span class="icon-angry2 icon"> </span>`;
    eo.target.parentElement.innerHTML += angry;
  } else if (eo.target.className == "icon-star-full icon") {
    eo.target.classList.add("color-star");
    container.prepend(eo.target.parentElement);
  } else if (eo.target.className == "icon-star-full icon color-star") {
    eo.target.classList.remove("color-star");
  }
});

form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const task = `<div class="task">
  <span class="icon-star-full icon"></span>
  <p class="task-text">    ${input.value}    </p>
  <div>
    <span class="icon-bin icon"> </span>
    <span class="icon-angry2 icon"> </span>
    <!--<span class="icon-heart"> </span>-->
  </div>
</div>`;

  container.innerHTML += task;
  input.value = "";
});
