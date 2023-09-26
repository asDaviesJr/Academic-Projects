function epochConv(){
    var div = Array.from(document.getElementsByClassName("date")); 
    for (var i = 0; i < div.length; i++){
        var epoch = div[i].innerHTML; 
        date = new Date(epoch * 1000);
        div[i].innerHTML = date.toLocaleDateString('en-US'); 
        

    }
    
}

function showDetails(header, content, pn) {
    var header = document.getElementById(header);
    var content = document.getElementById(content);
    var pn = document.getElementById(pn);

    if (header.hidden == true) {
        header.hidden = false;
        content.hidden = false;
        pn.hidden = false;
    } else {
        header.hidden = true;
        content.hidden = true;
        pn.hidden = true;

    }


}

