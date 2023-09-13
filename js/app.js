
var date=new Date().getHours();

if (date<12) {
    date=date+12;
    
}


if (date>12 && date<=15 ) {
    alert("gunortadir");
    document.body.style.backgroundColor='yellow';
}else if(date>15 && date<=19){
    alert("axsamdir");
    document.body.style.backgroundColor='red';
}else if(date>19 && date<=23){
    alert("gecedir");
    document.body.style.backgroundColor='green';
}