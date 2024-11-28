"use strict";
// ------------Refrence Section--------------------
let ref_section = document.getElementById("ref");
let ref_button = document.getElementById("ref_button");
ref_button?.addEventListener("click", () => {
    // ref_section! .style.display = "none"
    ref_section.classList.toggle("hide");
});
// ------------experince Section--------------------
let experience = document.getElementById("Experience");
let experience_button = document.getElementById("experience_button");
experience_button.addEventListener("click", () => {
    experience.classList.toggle("hide");
});
// print Button
let print_Button = document.getElementById("print_button");
print_Button.addEventListener("click", () => {
    window.print();
});
