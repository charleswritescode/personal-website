import "./scss/app.scss";

const credits = document.getElementById("credits");
const creditsContent = document.createElement("strong");
creditsContent.innerHTML = `Charles-Eugene Loubao \&copy ${new Date().getFullYear()}`;

credits.appendChild(creditsContent)
