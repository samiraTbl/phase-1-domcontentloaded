function changtext(){
    const txt=document.getElementById('text');
    txt.textContent="This is really cool!";
    return txt
}

document.addEventListener("DOMContentLoaded", changtext);
  