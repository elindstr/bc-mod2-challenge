//dynamically populate my son's age---listed in my bio.
var currentDate = new Date();
var age = currentDate.getFullYear() - 2016;
if (currentDate.getMonth() <= 8 && currentDate.getDate() < 2) {age--};
document.getElementById("ageSpan").innerHTML = age;

//Event listeners so that each project's icon loads a modal window with content when clicked. There was a bug I believe when the listeners were sometimes not activating because I believe the DOM element wasn't actually loaded. So the click listeners are delayed until the DOM is loaded.
document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("iago").addEventListener("click", (e) => {
        document.getElementById("iagoModal").style.display = "block"
    })
    document.getElementById("iagoModal").addEventListener("click", (e) => {
        document.getElementById("iagoModal").style.display = "none";
    });

    document.getElementById("tetris").addEventListener("click", (e) => {
        document.getElementById("tetrisModal").style.display = "block"
    })
    document.getElementById("tetrisModal").addEventListener("click", (e) => {
        document.getElementById("tetrisModal").style.display = "none";
    });

    document.getElementById("birding").addEventListener("click", (e) => {
        document.getElementById("birdingModal").style.display = "block"
    })
    document.getElementById("birdingModal").addEventListener("click", (e) => {
        document.getElementById("birdingModal").style.display = "none";
    });

    document.getElementById("ensafari").addEventListener("click", (e) => {
        document.getElementById("ensafariModal").style.display = "block"
    })
    document.getElementById("ensafariModal").addEventListener("click", (e) => {
        document.getElementById("ensafariModal").style.display = "none";
    });

    document.getElementById("oah").addEventListener("click", (e) => {
        document.getElementById("oahModal").style.display = "block"
    })
    document.getElementById("oahModal").addEventListener("click", (e) => {
        document.getElementById("oahModal").style.display = "none";
    });

    document.getElementById("deadlines").addEventListener("click", (e) => {
        document.getElementById("deadlinesModal").style.display = "block"
    })
    document.getElementById("deadlinesModal").addEventListener("click", (e) => {
        document.getElementById("deadlinesModal").style.display = "none";
    });

    document.getElementById("counties").addEventListener("click", (e) => {
        document.getElementById("countiesModal").style.display = "block"
    })
    document.getElementById("countiesModal").addEventListener("click", (e) => {
        document.getElementById("countiesModal").style.display = "none";
    });

    document.getElementById("shapes").addEventListener("click", (e) => {
        document.getElementById("shapesModal").style.display = "block"
    })
    document.getElementById("shapesModal").addEventListener("click", (e) => {
        document.getElementById("shapesModal").style.display = "none";
    });

})