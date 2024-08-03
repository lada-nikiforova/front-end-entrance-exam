import "../css/normalize.css";
import "../css/style.css";

function loadData() {
  const divContent = localStorage.getItem("resumeDiv");
  if (divContent) {
    document.getElementById("resumeDiv").innerHTML = divContent;
  }
}

function saveData() {
  const divContent = document.getElementById("resumeDiv").innerHTML;
  localStorage.setItem("resumeDiv", divContent);
  alert("Данные сохранены!");
}

document.getElementById("saveButton").addEventListener("click", saveData);

document.getElementById("resetButton").addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    const content = document.getElementById("resumeDiv");

    const opt = {
      margin: 0.3,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 4 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().from(content).set(opt).save();
  });

window.onload = loadData;
