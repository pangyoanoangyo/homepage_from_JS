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

        if (name == "contact") {
          let maps = document.getElementById("contract_map");
          maps.innerHTML = `
          <div class="col-lg-0">
          <!-- 1. 지도 노드 -->
          <div id="daumRoughmapContainer1673409224612" class="root_daum_roughmap root_daum_roughmap_landing"></div>     
          <!--
              2. 설치 스크립트
              * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다.
          -->
          <script charset="UTF-8" class="daum_roughmap_loader_script" src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script>
        
          <!-- 3. 실행 스크립트 -->
          <script charset="UTF-8">
              new daum.roughmap.Lander({
                  "timestamp" : "1673409224612",
                  "key" : "2ddwv",
                  "mapWidth" : "500",
                  "mapHeight" : "360"
              }).render();
          </script>
        </div>
          `;
        }

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


// function meuns(){
//     var menu_names = document.getElementById("menus");
//     // var navs = document.getElementById("uls");
//     while (navs.firstChild) {
//       navs.removeChild(navs.firstChild);
//     }
//     // var menu = document.createElement("div");
//     // menu.setAttribute("id", "menu");
//     // menu.setAttribute("class", "accordion");
//     // menu.innerHTML = `
//     //     <li class="nav-item">
//     //     <a class="nav-link active" aria-current="page" onclick="creat_id('main')">Home</a>
//     //     </li>
//     //     <li class="nav-item">
//     //     <a class="nav-link active" aria-current="page" onclick="creat_id('about')">About</a>
//     //     </li>
//     //     <li class="nav-item">
//     //     <a class="nav-link active" aria-current="page" onclick="creat_id('tech')">Tech</a>
//     //     </li>
//     //     <li class="nav-item">
//     //     <a class="nav-link active" aria-current="page" onclick="creat_id('contact')">Contact</a>
//     //     </li>
//     // `;
//     navs.appendChild(menu);

//     if (navs.style.display == "flex") {
//       navs.style.display = "none";
//       menu_names.style.color= "rgb(11, 162, 155)";
//     }else{
//       navs.style.display = "flex";
//       menu_names.style.color = "red";
//       menu_names.style.backgroundColor = "white";

//     }
//   }


  //메뉴 버튼

  function showme(){
    var x = document.getElementById("navbarsExample08");
    var tgo = document.getElementById('tg_on');
    var tgf = document.getElementById('tg_off');

    if (tgo.style.display == "flex") {
        x.style.display = "flex";
        tgo.style.display = "none";
        tgf.style.display = "flex";
    } else if(tgo.style.display == "none"){
        x.style.display = "none";
        tgo.style.display = "flex";
        tgf.style.display = "none";
    }
}

  