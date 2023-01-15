let count = 0;

document.getElementById("add_btn").addEventListener("click", function() {
    //html에서 id가 parent인 태그를 가져온다.
    let parent = document.getElementById("parent");

    //div 태그를 생성한다.
    let div = document.createElement("div");
    div.setAttribute("id", `contents${++count}`);
    div.innerHTML = `Hello World${+count}`;

    //input 태그를 생성한다.
    let inputs = document.createElement("input");
    inputs.setAttribute("id", `inputs${+count}`);
    inputs.setAttribute("type", `text`);

    //div 태그를 parent 태그에 추가한다.
    parent.appendChild(div);
    //input 태그를 div 태그에 추가한다.
    div.appendChild(inputs);
});

document.getElementById("remove_btn").addEventListener("click", function() {
    let parent = document.getElementById("parent");
    if (count > 0) {
        parent.removeChild(document.getElementById(`contents${count--}`));
    }
});

