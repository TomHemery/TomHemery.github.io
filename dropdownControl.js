let displaydropdown = false;

function dropdown(){
    displaydropdown = !displaydropdown;
    element =  document.getElementById("innerdiv");
    if(!displaydropdown){
        element.classList.remove("visibleBlock");
        element.classList.add("hidden");
    }
    else{
        element.classList.add("visibleBlock");
        element.classList.remove("hidden");
    }
}