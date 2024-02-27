import axios from "axios";

function jokeGenerator() {
    const config = {
        headers: {
            Accept: "application/json",
        },
    };

    return axios
        .get("https://icanhazdadjoke.com", config)
        .then((res) => (document.getElementById("joke").innerHTML = res.data.joke));
}

export default jokeGenerator;
