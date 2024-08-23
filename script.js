var ulmenu = document.querySelector("#ulmenu");
var menubar = document.querySelector("#menubar");

menubar.onclick = () => {
    if (ulmenu.style.display === "none") {
        ulmenu.style.display = "block";
    }else {
        ulmenu.style.display = "none";
    }
};