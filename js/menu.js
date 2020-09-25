function menu(){
    menuOptions = JSON.parse(menuData.response);
    console.log(menuOptions[0]['label']);
    let list = document.createElement('ul');
    for(let i=0;i<menuOptions.length;i++){
        let listItem = document.createElement('li');
        let listItemAnchor = document.createElement('a');
        listItemAnchor.href = menuOptions[i]['path'];
        listItemAnchor.innerHTML = menuOptions[i]['label'];
        listItem.appendChild(listItemAnchor);
        list.appendChild(listItem);
    }
    let nav = document.getElementById('nav');
    nav.appendChild(list);
}

let menuData = new XMLHttpRequest();
menuData.open("GET", "./../api/menu.json");
menuData.send();
menuData.addEventListener("load", menu);

/* <div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var element = document.getElementById("div1");
element.appendChild(para);
</script>

<!-- <ul>
                        <li><a href="http://">Home</a></li>
                        <li><a href="http://">About</a></li>
                        <li><a href="http://">Service</a></li>
                        <li><a href="http://">Contact</a></li>
                    </ul> -->

                    let listItemText = document.createTextNode(menuOptions[i]['label']); */