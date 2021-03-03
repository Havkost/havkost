let boxOpened = false;

function toggleBoxLid() {
    let lid = document.getElementById("nim-lid");
    //let box = document.getElementById("nim-box");

    // Reset animation state
    lid.style.animation = "none";
    lid.offsetHeight;
    lid.style.animation = null;

    if(boxOpened){
        lid.style.animation = "liftLid 500ms ease-in 0ms 1 reverse";
    } else {
        lid.style.animation = "liftLid 500ms ease-out 0ms 1 forwards";
    }
    boxOpened = !boxOpened;
}