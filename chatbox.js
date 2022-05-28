


document.querySelector(".sent").addEventListener("click" , group);

function group() {
    confirm("Hello here page are not found: want to back click on below buttons: ");
}


function sentMessage(){
    var area= document.getElementById("type").value;

    var html= '<div class = "mybox"> '+
    '<div class = "you" >'+ message + '</div>' +
    '<div class = "separate"></div>' + 
    '</div>' ;

    document.getElementById("area").innerHTML +=html;

    document.getElementById("type").value ="";
}