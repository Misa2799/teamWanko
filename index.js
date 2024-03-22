const btn = document.querySelector("button"); // Get the button from the page
if (btn) {
  // Detect clicks on the button
  btn.onclick = function () {
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
  };
}
// ----- GLITCH STARTER PROJECT HELPER CODE -----
// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } },
    "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => {
    goto(f.dataset.file, f.dataset.line);
  };
});
var pics_src = new Array(
  "https://cdn.glitch.global/8370897b-1217-48f0-88d8-b34796e1ae1d/はむ通常?v=1711001660560",
  "https://cdn.glitch.global/8370897b-1217-48f0-88d8-b34796e1ae1d/はむ笑う?v=1711001652730"
);
var num = 0;
function slideshow() {
  if (num == 1) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("mypic").src = pics_src[num];
}
