document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector(".hero h2");
    const date = new Date();
    const hours = date.getHours();

    let greeting = "Welcome";
    if (hours < 12) greeting = "Good Morning!";
    else if (hours < 18) greeting = "Good Afternoon!";
    else greeting = "Good Evening!";

    heroText.textContent = greeting + " to Our Company";
});



