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
    var menu = document.getElementById("menus");
    var menu_contain = document.getElementById("containers");
    if(menu.className == "menu-trigger"){
      menu.className = "menu-trigger active";
      menu_contain.style.display = "flex";
      menu_contain.innerHTML=`
      <li ><a href="index.php?id=index">Home</a></li>                  
      <li><a href="main.php?id=회사소개">회사소개</a></li>
      <li><a href="main.php?id=연락처">연락처</a></li>
      <li><a href="main.php?id=cctv">CCTV</a></li>
      <li><a href="main.php?id=출입통제">출입통제</a></li>
      <li><a href="main.php?id=보안설계">보안설계</a></li>
      `
    }else{
      menu.className = "menu-trigger";
      menu_contain.style.display = "none";
    }
  }
