document.getElementById("darkmode").addEventListener("click", () => {
    const cards = document.getElementById("templatesection");
    const sortBy = document.getElementById("sortby");

    
    sortBy.style.color = "white";
    sortBy.style.backgroundColor = "black";
    cards.style.backgroundColor = "black";
    cards.style.color = "white";
});

document.getElementById("lightmode").addEventListener("click", () => {
    const cards = document.getElementById("templatesection");
    const sortBy = document.getElementById("sortby");

    
    sortBy.style.color = "black";
    sortBy.style.backgroundColor = "white";
    cards.style.backgroundColor = "white";
    cards.style.color = "black";
});