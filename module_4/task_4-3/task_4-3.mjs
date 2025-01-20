"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const cmbTask1Calculate = document.getElementById("cmbTask1Calculate");
cmbTask1Calculate.addEventListener("click", cmbTask1CalculateClick);
function cmbTask1CalculateClick() {
    const txtRectHeight = document.getElementById("txtRectHeight");
    const txtRectWidth = document.getElementById("txtRectWidth");

    const height = Number(txtRectHeight.value);
    const width = Number(txtRectWidth.value);

    const perimeter = (height + width + height + width);
    const area = (height * width);

    const txtTask1Output = document.getElementById("txtTask1Output");
    txtTask1Output.innerHTML = "Circumference = " + perimeter + "&nbsp; Area = " + area;
}

//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const txtTask2Word = document.getElementById("txtTask2Word");
txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress);
let task2Words = [];
const txtTask2Output = document.getElementById("txtTask2Output");

function txtTask2WordKeyPress(aEvent) {
    const key = aEvent.key;
    switch(key) {
        case "Enter":
            const words = txtTask2Word.value.split(" ");
            txtTask2Word.value = "";
            task2Words = task2Words.concat(words);
            txtTask2Output.innerHTML = "Number of words: " + task2Words.length + "<br>" + task2Words.join(" ");
            task2Words = [];
            break;
    }
}

//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
cmbTask3CheckAnswer.addEventListener("click", cmbTask3CheckAnswerClick);
const txtTask3Output = document.getElementById("txtTask3Output");

let text = ""; 
function cmbTask3CheckAnswerClick() {
    const chkTask3 = document.getElementsByName("chkTask3");
    for(let i = 0; i < chkTask3.length; i++) {
        const checkBox = chkTask3[i];
        if(checkBox.checked){
            const value = checkBox.value;
            text += "You selected number " + value + ".<br />"
        }

    }
    txtTask3Output.innerHTML = text;
    text = ""; 
}

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const divTask4Cars = document.getElementById("divTask4Cars");
const txtTask4Output = document.getElementById("txtTask4Output");

for (let i = 0; i < CarTypes.length; i++) {
    const car = CarTypes[i];

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "carType";
    radio.value = car.value;
    radio.id = "car-" + car.value;

    radio.addEventListener("click", () => {
        txtTask4Output.innerHTML = "Selected car: " +  car.caption;
    });

    const label = document.createElement("label");
    label.htmlFor = "car-" + car.value;
    label.textContent = car.caption;
    label.style.marginRight = "10px";

    divTask4Cars.appendChild(radio);
    divTask4Cars.appendChild(label);

    divTask4Cars.appendChild(document.createElement("br"));
}

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const selectTask5Animals = document.getElementById("selectTask5Animals");
const txtTask5Output = document.getElementById("txtTask5Output");

selectTask5Animals.addEventListener("change", () => {
    const selectedOption = selectTask5Animals.options[selectTask5Animals.selectedIndex];
    const text = selectedOption.text;

    txtTask5Output.innerHTML = "Selected animal: " +  text;
});

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const selectTask6Girls = document.getElementById("selectTask6Girls");
const txtTask6Output = document.getElementById("txtTask6Output");

for (let i = 0; i < GirlsNames.length; i++) {
    const girlsName = GirlsNames[i];

    const option = document.createElement("option");
    option.text = girlsName;

    selectTask6Girls.appendChild(option);
    selectTask6Girls.appendChild(document.createElement("br"));

    selectTask6Girls.addEventListener("change", () => {
        const selectedOption = selectTask6Girls.options[selectTask6Girls.selectedIndex];
        const text = selectedOption.text;

        txtTask6Output.innerHTML = "You selected: " +  text;
    });
}

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const txtMovieTitle = document.getElementById("txtMovieTitle");
const selectMovieGenre = document.getElementById("selectMovieGenre");
const txtMovieDirector = document.getElementById("txtMovieDirector");
const txtMovieRate = document.getElementById("txtMovieRate");
const tblMovies = document.getElementById("tblMovies");

for (let i = 0; i < MovieGenre.length; i++) {
    const genre = MovieGenre[i];

    const option = document.createElement("option");
    option.text = genre;

    selectMovieGenre.appendChild(option);
    selectMovieGenre.appendChild(document.createElement("br"));

    selectMovieGenre.addEventListener("change", () => {
        const selectedOption = selectMovieGenre.options[selectMovieGenre.selectedIndex];
        selectedMovieGenre = selectedOption.text;
    });
}

let selectedMovieGenre = selectMovieGenre.options[0].value;
let numberOfMovies = 0;

const cmbAddMovie = document.getElementById("cmbAddMovie");
cmbAddMovie.addEventListener("click", () => {
   addMovie();
});

function addMovie() {
    const newMovie = {
        nr: numberOfMovies + 1,
        title: txtMovieTitle.value,
        genre: selectedMovieGenre,
        director: txtMovieDirector.value,
        rate: txtMovieRate.value
    };

    addRowToTable(newMovie);
    numberOfMovies += 1;
    clearForm();
}

function addRowToTable(movie) {
    const row = document.createElement("tr");

    for (const key in movie) {
        const cell = document.createElement("td");
        cell.textContent = movie[key];
        row.appendChild(cell);
    }

    tblMovies.appendChild(row);
}

function clearForm() {
    txtMovieTitle.value = "";
    selectMovieGenre.value = "";
    txtMovieDirector.value = "";
    txtMovieRate.value = "";
    selectedMovieGenre = "";
}

