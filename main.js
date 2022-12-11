function rating (number) {
    let current = document.getElementsByClassName("button-active");
    if (current.length > 0) {
        current[0].className = current[0].className.replace("active", "");
    }

    let newRating = document.getElementsByClassName(`rating-${number}`)[0];
    newRating.className = newRating.className + " button-active";
}

function toggleTheme () {
    current = document.getElementsByTagName("body")
    if (current[0].className == "light-theme") {
        current[0].className = "";
    } else {
        current[0].className = "light-theme";
    }
}