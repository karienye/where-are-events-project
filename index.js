
document.addEventListener("DOMContentLoaded", () => {
  const projectUrl = "http://localhost:3000/events"
  const eventsUrl = "https://eventfinda-eventfinda-nz.p.rapidapi.com/events.json/?rapidapi-key=59db1ebdd8msh4851772c7df0242p11eba8jsn1072ca5a255b"
  
fetch(projectUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var mainContainer = document.getElementById("myData");
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = '<b>NAME OF EVENT:</b> ' + data[i].name+'<br>' +'<b>EVENT:</b> ' + '"<img src="'+data[i].name+'" />'+'<br>'+'<b>DESCRIPTION:</b> ' + data[i].description + '<br> <br> <br>';
                mainContainer.appendChild(div);
               
                
            }
        }
      })
       
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




