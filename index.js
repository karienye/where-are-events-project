
document.addEventListener("DOMcontentloaded", () => {
  const projectUrl = "./db.json"
  const eventsUrl ="https://canada-holidays.p.rapidapi.com/api/v1/holidays/2/?rapidapi-key=59db1ebdd8msh4851772c7df0242p11eba8jsn1072ca5a255b"

  //"https://rapidapi.com/eventfinda/api/eventfinda-nz/"


let projectContainer = document.querySelector('#projectContainer')
//myHeaders.append("Cookie", "i18n_redirected=en-US");

 function getEvents(){ 
 let reqOptions = {
  method: 'GET' ,
};
/*fetch("https://rapidapi.com/pcraig3/api/canada-holidays/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}*/

     fetch(eventstUrl, reqOptions)
     .then((response) =>response.json()) 
     .then(results => {
      
       results.forEach(proItem=>{
         console.log (typeof proitem)
       })
      results.forEach(proItem=>{
         displayProject(proItem)
       })
      })
    
    };
function events(itemPro){
  const proCard= `
  <!-- <div class="col-4">
                  <div class="proCont">
                    <p>"${itemPro.date}" </p>
                    <h3>${item.title}</h3>
                    <p>"${itemPro.observerDate}"</a>
                    <p>"${itemPro.nameEn}"</a>
                    <p>${itemPro.nameFr}</p>            
                    </div>
                  </div>
                </div> -->
  `
  projectContainer.innerHTML += proCard
}


getEvents()
})

function events(itemPro){
  const proCard= `
  <div class = "row">
    <div class="column">
      <div event-item>
        <img src = "${hDays.url}" alt="this event"> 
        <h4> HOT RED AWAKES : ${hDays.name}</h4>
        <p> HOT RED AWAKES : ${hDays.description}</p>
      </div>
    </div>
  </div>
  `
  projectContainer.innerHTML += card
}





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
      document.getElementById("myForm").style.display = "none";
    }

    // liker
    const EMPTY_HEART = '♡'
    const FULL_HEART = '♥'

    const likeGlyphs = document.querySelectorAll('span.like-glyph')
    likeGlyphs.forEach(likeGlyph => {
      likeGlyph.addEventListener('click', e => {
        mimicServerCall()
          .then(() => {
            if (likeGlyph.textContent !== FULL_HEART) {
              likeGlyph.textContent = FULL_HEART
              likeGlyph.classList.add('activated-heart')
            } else {
              likeGlyph.classList.remove('activated-heart')
              likeGlyph.textContent = EMPTY_HEART
            }
          })
          .catch((errorMessage) => {
            document.querySelector('div#modal').className = ''
            document.querySelector('div#modal p').textContent = errorMessage
            setTimeout(() => {
              document.querySelector('div#modal').className = "hidden"
            }, 4000);
          })
      })
    })
  

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
