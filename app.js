/* https://api.genderize.io?name=peter */
const nameInput = document.querySelector(".input-name");
const btnGuess = document.querySelector(".btn-guess");
const prediction = document.querySelector(".prediction");

const getAPI = (name) => {
  fetch(`https://api.nationalize.io/?name=${name}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        console.log(data.country[0].probability)
            prediction.style.display = "block";
            nameInput.value = "";
            prediction.innerHTML = `
                <p>  you are probably % ${(data.country[0].probability *100).toFixed(0)} <span> ${data.country[0].country_id}</span> !!!' </p>
         `;
    });     
};
const getGender = () => {
  getAPI(nameInput.value);
};

btnGuess.addEventListener("click", getGender);
/*   <p>Olasılıkla yüzde % 90 <span>Erkek</span>'siniz !!!' </p> */
