function changebrightness(value) {
    document.getElementById("noisy-image").setAttribute("style","-webkit-filter:brightness(" + value + "%)")
	document.getElementById("gt-image").setAttribute("style","-webkit-filter:brightness(" + value + "%)")
}