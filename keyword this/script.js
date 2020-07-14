function rand() {
    return Math.floor(Math.random() * 256);
}

window.onload = function () {
    var block = document.getElementsByTagName('div');
    for(var i=0; i<block.length; i++){
        block[i].onmouseover = function () {
            this.style.backgroundColor ="rgb(" + rand() + "," + rand() + "," + rand() + ")";
            this.innerHTML = this.style.backgroundColor ;
        }
    }
};

window.onbeforeunload = function() {
    return "Закрыть вкладку?";
};

