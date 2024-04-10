
document.addEventListener("DOMContentLoaded", function() {
    const form1 = document.getElementById("form-1");
    const form2 = document.getElementById("form-2");
    const form3 = document.getElementById("form-3");

    const form1Btn = document.querySelector(".form-1-btn");
    const form2Btn = document.querySelector(".form-2-btn");
    const form3Btn = document.querySelector(".form-3-btn");

    const backBtn2 = document.querySelector(".back-btn2");
    const backBtn3 = document.querySelector(".back-btn3");

    form2.style.display = "none";
    form3.style.display = "none";

    form1Btn.addEventListener("click", function(e) {
        e.preventDefault();
        form1.style.display = "none";
        form2.style.display = "block";
    });

    form2Btn.addEventListener("click", function(e) {
        e.preventDefault();
        form2.style.display = "none";
        form3.style.display = "block";
    });

    backBtn2.addEventListener("click", function(e) {
        e.preventDefault();
        form2.style.display = "none";
        form1.style.display = "block";
    });

    backBtn3.addEventListener("click", function(e) {
        e.preventDefault();
        form3.style.display = "none";
        form2.style.display = "block";
    });
});

