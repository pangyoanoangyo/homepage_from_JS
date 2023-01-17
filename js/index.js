// Description: This file contains the code for the index page
//하기의 함수는 index.html의 header와 footer를 불러오는 함수이다.

function layouts(name) {
    fetch(`layout/${name}.html`)
    .then(response => {
    return response.text()
    })
    .then(data => {
    document.querySelector(name).innerHTML = data;
    });
    }

    layouts("header");
    layouts("footer");

function layout_id(name) {
  fetch(`layout/${name}.html`)
  .then(response => {
  return response.text()
  })
  .then(data => {
  document.getElementById(name).innerHTML = data;
  });
  }
  layout_id("main");


function creat_id(name) {  
  mains = document.querySelector("main");
  while (mains.firstChild) {
    mains.removeChild(mains.firstChild);
  }
  contents = document.createElement("div");
  contents.setAttribute("id", name);
  mains.appendChild(contents);
    
    function layout_id(name) {
        fetch(`layout/${name}.html`)
        .then(response => {
        return response.text()
        })
        .then(data => {
        document.getElementById(name).innerHTML = data;
        });
        }
        layout_id(name);   
}



// function change(id){    
//     var id_names = "main";
//     var mains = document.getElementById(id_names);
//     mains.attributes.removeNamedItem("id");
//     mains.setAttribute("id", id);
    
//     let homes = document.getElementById("home_click");
//     homes.addEventListener("click", function(){
//       one = document.querySelector("main")
//       one.attributes.removeNamedItem("id");
//       one.setAttribute("id", "main");        
//     });

// }


function meuns(){
    var menu_names = document.getElementById("menus");
    var navs = document.getElementById("uls");
    while (navs.firstChild) {
      navs.removeChild(navs.firstChild);
    }
    var menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    menu.setAttribute("class", "accordion");
    menu.innerHTML = `
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" onclick="creat_id('main')">Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" onclick="creat_id('about')">About</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" onclick="creat_id('tech')">Tech</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" onclick="creat_id('contact')">Contact</a>
        </li>
    `;
    navs.appendChild(menu);

    if (navs.style.display == "flex") {
      navs.style.display = "none";
      menu_names.style.color= "rgb(11, 162, 155)";
    }else{
      navs.style.display = "flex";
      menu_names.style.color = "red";
    }
  }
