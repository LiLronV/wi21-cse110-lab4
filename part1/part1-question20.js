function oneSec(){
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}

setInterval(oneSec,1000);