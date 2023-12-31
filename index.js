function getUpdate() {
    tit = document.getElementById("title").value;
    desc = document.getElementById("description").value;
    if (localStorage.getItem("itemJson") == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem("itemJson")
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))

    }
    update();
}


function update() {
    if (localStorage.getItem("itemJson") == null) {
        itemJsonArray = [];
    }
    else {
        itemJsonArrayStr = localStorage.getItem("itemJson")
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }

    tbody = document.getElementById("tbody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button type="button" class="btn btn-primary btn-sm" onclick = deleted(${index}) >Done</button></td>
        </tr>
        `
    });
    tbody.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click", getUpdate);
update();

function deleted(item) {
    itemJsonArrayStr = localStorage.getItem("itemJson")
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.splice("item", 1);
    localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    update();
}

function clearList(){
    if(confirm("Do you really want to clear the lists in the item?")){
    localStorage.clear();
    update();
    }
}
