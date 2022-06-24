
fetch("http://localhost:3000/events")
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

        /*
        for (var i=0; i< data["item"].images.length; i++) {
var img = data["item"]images[i];
}

var alt = data["item"].name;
    mhtml += '<li><div class=""><img src="'+val.img+'" /></div>';
    mhtml += '<h1 class="title">'+alt+'</h1>';
    mhtml += '</li>';
});
var $ul = $('<ul>').append($(mhtml));.
$('#mydiv').append($ul);

});
        */





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



