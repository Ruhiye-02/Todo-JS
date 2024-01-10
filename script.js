const form = document.querySelector("#addTaskForm")
const input = document.querySelector("#txtTaskName")
const btnAddNewTask = document.querySelector("#btnAddNewTask")
const btnDeleteAll = document.querySelector("#btnDeleteAll")
const tasklist = document.querySelector("#task-list")
const items = ["todo1", "todo2", "todo3", "todo4"]


//load items
loadItems()
function loadItems() {
    items.forEach((i) => {
        createItem(i)
    })
}
//elementi yaratma funksiyasi 
function createItem(newTodo) {
    const li = document.createElement("li")
    li.className = ("list-group-item list-group-item-secondary")
    li.appendChild(document.createTextNode(newTodo))
    //li-nin icindeki a-ni yaradaq ve li-ye elave edek 
    const a = document.createElement("a")
    a.classList = "delete-item float-right"
    a.setAttribute("href", "#")
    a.innerHTML = '<i class="fas fa-times" ></i>'

    li.appendChild(a)     //li-ye yaratdigimiz a-ni elave edek 
    tasklist.appendChild(li)    //tasklist clasina da umumi li-ni 
}
//elave etmek
const elaveEtFunksiyasi = () => {

    if (input.value === "") {
        alert("add new item")
    } else {

        createItem(input.value)

        input.value = ""
    }
}


//silmek x
const silFunksiyasi = (e) => {
    if (e.target.className === "fas fa-times") {
        if (confirm("silmek istediyinize eminsiz?") === true) {
            e.target.parentElement.parentElement.remove()
        }
    }
}

//hamisini sil
const hamisinisil = () => {
    if (confirm("Hamisini silmek istediyinize eminsiz?")) {
        tasklist.innerHTML = ""
    }
}

function eventListeners() {
    //ad
    form.addEventListener("submit", elaveEtFunksiyasi)
    //delete
    tasklist.addEventListener("click", silFunksiyasi)
    //deleteAll
    btnDeleteAll.addEventListener("click", hamisinisil)
}
eventListeners();








