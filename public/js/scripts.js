item = document.querySelectorAll(".playlist__item");
like = document.querySelectorAll(".song__like");
settings = document.querySelectorAll(".account__menu");
menu = document.querySelector("#account__settings");
search = document.querySelector("#song__input");
song = document.querySelectorAll(".song__title");
artist = document.querySelectorAll(".song__artist");

bar = document.querySelector("#bar");
barLine = document.querySelector("#bar__container");

function active(event){
    for (var i = 0; i < item.length; i++){
        item[i].classList.remove("is-active");
    }
    this.classList.add("is-active");
}
function hideLike(event){
    this.parentElement.classList.add("is-hide");
}
function sett(event){
    menu.classList.toggle("is-x100");
    menu.classList.toggle("is-x0");
}
function filterSearch(event){
    var content = search.value.toLowerCase();
    for (var i = 1; i < song.length; i++) {
        var title = song[i].innerHTML.toLowerCase();
        var art = artist[i].innerHTML.toLowerCase();
        if (title.match(content) || art.match(content)) {
            song[i].parentElement.style.display = "flex";
        }
        else {
            song[i].parentElement.style.display = "none";
        }
    }
}

function showHide(event){
    var playlist = document.querySelector("#playlist");
    playlist.classList.toggle("playlist-show");
    barLine.classList.toggle("is-plus");
    barLine.classList.toggle("is-minor");
}

function main(){
    for (var i = 0; i < item.length; i++) {
        item[i].addEventListener("click", active);
    }
    for (var i = 0; i < song.length; i++) {
        like[i].addEventListener("click", hideLike);
    }
    settings[0].addEventListener("click", sett);
    search.addEventListener("keyup", filterSearch);
    bar.addEventListener('click',showHide);


}

window.addEventListener("load", main);


// document.addEventListener("DOMContentLoaded", function() {
// 	//The first argument are the elements to which the plugin shall be initialized
// 	//The second argument has to be at least a empty object or a object with your desired options
// 	OverlayScrollbars(document.querySelectorAll("body"), { });
// 	OverlayScrollbars(document.querySelector("#main"), { });
// 	OverlayScrollbars(document.querySelector("#song"), { });
// 	OverlayScrollbars(document.querySelector("#playlist"), { });
// });
