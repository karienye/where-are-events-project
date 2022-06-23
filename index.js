
document.addEventListener("DOMContentLoaded", () => {
  const projectUrl = "http://localhost:3000/events"
  //const eventsUrl = "https://eventfinda-eventfinda-nz.p.rapidapi.com/events.json/?rapidapi-key=59db1ebdd8msh4851772c7df0242p11eba8jsn1072ca5a255b"
  
 // "https://canada-holidays.p.rapidapi.com/api/v1/holidays/2/?rapidapi-key=59db1ebdd8msh4851772c7df0242p11eba8jsn1072ca5a255b"

  //

  let projectContainer = document.querySelector('#projectContainer')

  function getEvents(){
    let reqOptions = {
      method: 'GET',
    };

    fetch(projectUrl, reqOptions)
      .then((response) => response.json())
      .then(results => {

        results.forEach(proItem => {
          console.log(proItem)
        })
        results.forEach(proItem => {
          events(proItem)
        })
      })

  };
  function events(itemPro) {
    const proCard = `
  <!-- <div class="col-4">
                  <div class="proCont">
                    <img src="${itemPro.url}"> </img>
                    <h3>${itemPro.name}</h3>
                    <p>"${itemPro.description}"</a>
                    <p>"${itemPro.url_slug}"</a>
                              
                    </div>
                  </div>
                </div> -->
  `
    projectContainer.innerHTML += proCard
  }
  getEvents()
})



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

function formSubmit(response) {
  getElementById('form').addEventListener("display", response)

}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

document.getElementById("myBtn").addEventListener("click", displayText);
function displayText() {
  alert ('YOU ARE SUBSCRIBED!!');
}

// liker



