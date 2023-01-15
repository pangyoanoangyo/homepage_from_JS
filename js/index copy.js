let nav = document.getElementById("nav");

let imgs = document.createElement("img");
imgs.setAttribute("src", `images/sw_logo_1.png`);
imgs.setAttribute("alt", `logo`);
imgs.setAttribute("id", `logo`);
imgs.setAttribute("class", `logo`);
nav.appendChild(imgs);

let ul = document.createElement("ul");
ul.setAttribute("id", `menu`);
nav.appendChild(ul);

let li1 = document.createElement("li");
li1.setAttribute("id", `menu1`);
li1.innerHTML = `<a href="index.html">Home</a>`;
ul.appendChild(li1);

let li2 = document.createElement("li");
li2.setAttribute("id", `menu2`);
li2.innerHTML = `<a href="about.html">About</a>`;
ul.appendChild(li2);

let li3 = document.createElement("li");
li3.setAttribute("id", `menu3`);
li3.innerHTML = `<a href="service.html">Contact</a>`;
ul.appendChild(li3);

let ul_menu2 = document.createElement("ul");
ul_menu2.setAttribute("id", `menu`);
nav.appendChild(ul_menu2);

let li1_1 = document.createElement("li");
li1_1.setAttribute("id", `menu1`);
li1_1.innerHTML = `<a href="index.html">SERICE</a>`;
ul_menu2.appendChild(li1_1);

let li2_2 = document.createElement("li");
li2_2.setAttribute("id", `menu2`);
li2_2.innerHTML = `<a href="about.html">CCTV</a>`;
ul_menu2.appendChild(li2_2);

let li3_3 = document.createElement("li");
li3_3.setAttribute("id", `menu3`);
li3_3.innerHTML = `<a href="service.html">출입통제</a>`;
ul_menu2.appendChild(li3_3);


let footer = document.getElementById("footer");
footer.setAttribute("id", `contents`);
footer.innerHTML = `<p>본사: 경기도 용인시 수지구 신수로 767 분당수지유타워 A동 622호</p>
<p>사업자등록번호: 129-86-65195</p>
<span class="sw_name">주식회사 솔루윈</span>
<p>Copyright © 2023 Soluwin Co., Ltd. All Rights Reserved.</p>`;

