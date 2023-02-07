document.addEventListener("DOMContentLoaded", function(){
    const title = document.getElementById("title");
    const desc = document.getElementById("description");
    const addBtn = document.getElementById("add");
    const alert = document.getElementById("alert");
    const table = document.getElementById("table");

    addBtn.onclick = addToDo

    function addToDo(){
        if(title.value === '' || desc.value === ''){
            alert.setAttribute("class","alert alert-danger");
            return;
        }
        alert.setAttribute("class","alert alert-danger d-none");
        console.log("Title: ", title.value);
        console.log("Description: ",desc.value);

        const row = table.insertRow();
        row.innerHTML = `
            <td>${title.value}</td>
            <td>${desc.value}</td>
            <td class="text-center">
                <input type="checkbox">
            </td>
            <td class="text-right">
            <button class="btn btn-primary mb-1">
                <i class="fa fa-pencil"></i>
            </button>
            <button class="btn btn-danger mb-1 ml-1">
                <i class="fa fa-trash"></i>
            </button>
            </td>    
        `
        
        
    }
})