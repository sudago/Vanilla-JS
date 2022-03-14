const body = document.querySelector("body");

// .contains.add.remove 말고 .toggle을 쓰고 싶었으나, 
// resize시, resize-color의 유지가 안되고 원래의 body의 background-color로와
// 수시로 번갈아가며 반짝반짝하면서 바뀜...

function handleBodyResize() {
    const windowWidth = window.innerWidth;
    const bodyClassList = body.classList;
     if (windowWidth <= 600) {
        bodyClassList.contains("blue");
        bodyClassList.add("blue");
    } else if (windowWidth > 600 && windowWidth < 900) {
        bodyClassList.contains("blue");
        bodyClassList.remove("blue");
        bodyClassList.contains("yellow");
        bodyClassList.remove("yellow");
    } else if (windowWidth >= 900) {
         bodyClassList.contains("purple");
         bodyClassList.remove("purple");
         bodyClassList.contains("yellow");
         bodyClassList.add("yellow");
       }
};

window.addEventListener("resize", handleBodyResize);
