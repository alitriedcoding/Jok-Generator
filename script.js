const apikey = "Zg5u+xTuGcAFNe/W1gSOPQ==d4cDEtNlmzpAPHnI";
const buttonEl = document.getElementById("btn");
const contentEl = document.getElementById("paragragh-joke");
const apiURl = "https://api.api-ninjas.com/v1/jokes?limit=";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apikey,
  },
};

buttonEl.addEventListener("click", CreatJok);

async function CreatJok() {
  try {
    contentEl.innerText = "updading";
    buttonEl.disabled = true;
    buttonEl.innerText = "Loading";
    const respons = await fetch(apiURl, options);
    const data = await respons.json();
    buttonEl.disabled = false;
    buttonEl.innerText = "TELL ME A JOKE";

    contentEl.textContent = data[0].joke;
  } catch (error) {
    contentEl.innerText = "an error happing try again later";
    buttonEl.disabled = false;
    buttonEl.innerText = "TELL ME A JOKE";
  }
}
