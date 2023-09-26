export function changeOccupancy(occ, operation){
    let new_occ = 0
    if (operation === 'add'){
      new_occ = occ + 1
    } else if (operation === 'subtract'){
      new_occ = occ - 1
    }
    return new_occ; 
  }

export function validateMessage(occupancy, max, thres){
    var message = ''; 
    if (occupancy >= thres && occupancy < max){
        message = "Warn the bouncers...";
    } else if (occupancy === max){
        message = "No one allowed in!";
    } else {
        message = "Welcome!";
    }

    return message
}

export function validateColor(occupancy, max, thres){
    var color = ''; 
    if (occupancy >= thres && occupancy < max){
        color = 'yellow';
    } else if (occupancy === max){
        color = 'red';
    } else {
        color = 'greenyellow';
    }

    return color

}

export function validateOccupancy(occupancy, max){
    let occ = 0; 
    if (occupancy < 0){
        occ = 0
    } else if(occupancy > max){
        occ = max
    } else {
        occ = occupancy
    }
     return occ

}