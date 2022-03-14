const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("h2");


const superEventHandler = {
    mouseEnter: function() {
        document.body.style.color = "#1abc9c";
        title.innerText = "The mouse is here!";
    },
    mouseLeave: function() {
        document.body.style.color = "#3498db";
        title.innerText = "The mouse is gone!";
    },
    resize: function() {
        document.body.style.color = "#9b59b6";
        title.innerText = "You just resized!";
    },
    contextMenu: function() {
        document.body.style.color = "#e74c3c";
        title.innerText = "That was a right click!";
    }
};

title.addEventListener("mouseenter",superEventHandler.mouseEnter);
title.addEventListener("mouseleave",superEventHandler.mouseLeave);
window.addEventListener("resize",superEventHandler.resize);
window.addEventListener("contextmenu",superEventHandler.contextMenu);
