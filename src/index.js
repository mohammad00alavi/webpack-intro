import jokeGenerator from "./jokeGenerator";
import "./styles/main.scss";
import laugh from "./assets/laugh.svg";

const laughImg = document.getElementById("laughImg");
laughImg.src = laugh;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", jokeGenerator);

jokeGenerator();
