function notification(){
    if(validate(document.getElementById('a').value)){
        alert("Email " +document.getElementById('a').value+" send");
    }else{
        alert("Bad email format!");
    }
}
function validate(email){
    const reg ="^.*\@.*\..*$";
    return String(email).toLowerCase().match(reg);

}