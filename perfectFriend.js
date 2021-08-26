function perfectFriend(friendName){
    let largest = friendName[0];
    for(let i = 0; i < friendName.length; i++){
    // error throw
    if(typeof friendName[i] != "string") {
    return "Please enter valid name!";
    }
    // main task
    else if(friendName[i].length == 5) {
    largest = friendName[i];
    return largest;
    }
    }
    // error throw
    return "All name are the same length";
    }
    console.log(perfectFriend(["abir", "mahi", "sulayman", "zahid", "tamim", "hasan", "rony"]));