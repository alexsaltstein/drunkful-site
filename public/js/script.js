window.onload = () => {
    let elems = document.getElementsByClassName("image-text");
    for (var e of elems){
        e.style.setProperty('transform', 'rotate('+ ((Math.random(1) * 10)- 5) + 'deg)');
    }
}