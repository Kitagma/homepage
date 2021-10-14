const active = document.getElementById('nav_active');
let on_off = false;

function hamburger() {
    if(on_off == true){
    document.getElementById('nav_active').classList.add("active");
    document.getElementById('nav_slide').classList.add("active");
    }
    else{
    document.getElementById('nav_active').classList.remove("active");
    document.getElementById('nav_slide').classList.remove("active");
    }
}

  active.addEventListener('click' , function () {
    if (on_off == true){
    on_off = false;
    }
    else {on_off = true;}
    hamburger();
  } );
