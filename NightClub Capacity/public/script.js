
function add_occupancy(){
    var club = document.querySelector('input[name="club"]:checked').id
    add_person(club)

}

function subtract_occupancy(){
    var club = document.querySelector('input[name="club"]:checked').id
    subtract_person(club)
}

function add_person(club){
    var occId
    var maxCap
    var thres
    var colorId
    var msgId
    if (club == "arcane"){
        occId = "arcaneOcc"
        maxCap = 100
        thres = 70
        colorId = "arcaneColor"
        msgId = "arcaneMsg"
    } else if (club == "underground"){
        occId = "undergroundOcc"
        maxCap = 50
        thres = 30
        colorId = "undergroundColor"
        msgId = "undergroundMsg"
    } else if (club == "soda"){
        occId = "sodaOcc"
        maxCap = 20
        thres = 12
        colorId = "sodaColor"
        msgId = "sodaMsg"
    } else if (club == "studio"){
        occId = "studioOcc"
        maxCap = 52
        thres = 32
        colorId = "studioColor"
        msgId = "studioMsg"
    } else {
        alert("ERROR")
    }
    
    var num_text = document.getElementById(occId)
    
    var message = document.getElementById(msgId)
    var color = document.getElementById(colorId)
    var current_occupancy = parseInt(num_text.innerText,10)
    var new_occupancy = current_occupancy + 1
    
    if(new_occupancy >= thres && new_occupancy < maxCap){
        color.style.backgroundColor = "yellow"
        message.innerHTML = "Warn the bouncers..."
    } else if (new_occupancy>= maxCap){
        color.style.backgroundColor = "red"
        message.innerHTML = "No one allowed in!"
    } else {
        color.style.backgroundColor = "greenyellow"
        message.innerHTML = "Welcome!"
    }

    num_text.innerHTML = new_occupancy.toString()
    
}

function subtract_person(club){
    var occId
    var maxCap
    var thres
    var colorId
    var msgId
    if (club == "arcane"){
        occId = "arcaneOcc"
        maxCap = 100
        thres = 70
        colorId = "arcaneColor"
        msgId = "arcaneMsg"
    } else if (club == "underground"){
        occId = "undergroundOcc"
        maxCap = 50
        thres = 30
        colorId = "undergroundColor"
        msgId = "undergroundMsg"
    } else if (club == "soda"){
        occId = "sodaOcc"
        maxCap = 20
        thres = 12
        colorId = "sodaColor"
        msgId = "sodaMsg"
    } else if (club == "studio"){
        occId = "studioOcc"
        maxCap = 52
        thres = 32
        colorId = "studioColor"
        msgId = "studioMsg"
    } else {
        alert("Error")
    }
    
    
    var num_text = document.getElementById(occId)
    
    var message = document.getElementById(msgId)
    var color = document.getElementById(colorId)
    var current_occupancy = parseInt(num_text.innerText,10)
    var new_occupancy = current_occupancy - 1

    if (new_occupancy < 0){
        new_occupancy = 0
    } 
    
    if(new_occupancy >= thres && new_occupancy < maxCap){
        color.style.backgroundColor = "yellow"
        message.innerHTML = "Warn the bouncers..."
    } else if (new_occupancy>= maxCap){
        color.style.backgroundColor = "red"
        message.innerHTML = "No one allowed in!"
    } else {
        color.style.backgroundColor = "greenyellow"
        message.innerHTML = "Welcome!"
    }

    num_text.innerHTML = new_occupancy.toString()
    
}

