document.getElementsByClassName(grid).addEventListener(onclick)

//document.getElementsByTagName(img) = src =""

function openEvent(eventName, element, color) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(eventName).style.display = "block";
    element.style.backgroundColor = color;
}
    document.getElementById("defaultOpen").click();
