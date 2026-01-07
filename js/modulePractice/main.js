import { createProgressController } from "./progress.js";

const progressBar = document.getElementById("progress-bar");
const startBtn = document.getElementById("start-btn");

const controller = createProgressController(progressBar, startBtn);

startBtn.addEventListener("click", controller.start);
