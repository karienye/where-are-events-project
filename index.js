//document.addEventListener("DOMcontentloaded", () => {
 // const eventsUrl ="https://rapidapi.com/stefan.skliarov/api/LondonTheatreDirect/"

  
//let myHeaders = new Headers();
//myHeaders.append("Cookie", "i18n_redirected=en-US");

function getEvents(){ 
let requestOptions = {
  method: 'GET',
 // headers: myHeaders,
  redirect: 'follow'
};

fetch(eventsUrl, requestOptions)
  .then((response) => {
    console.log(response())
  //.then(result => console.log(result))
  //.catch(error => console.log('error', error));
  })
 getEvents()
};


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
   // document.getElementById("defaultOpen").click();

    function formSubmit(response){
      getElementById(form).addEventListener( "display",response)


    }
    function openForm() {
      document.getElementById("myForm").style.display = "block";
    }
    
    function closeForm() {
      document.getElementById("myForm").style.display = "block";
    }
