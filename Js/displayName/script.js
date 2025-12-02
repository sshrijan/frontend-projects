const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const age = document.getElementById("age");
const display = document.getElementById("display");

let userArray = [];
let userListArray = [];

// show the data
function showList() {
    display.innerHTML = userListArray.join("");
}

// add user
function addValue() {
    userArray.push({
        name: fullName.value,
        email: email.value,
        age: age.value
    });

    fullName.value = "";
    email.value = "";
    age.value = "";

    buildList();
    showList();
}

// rebuild list every time (important!)
function buildList() {
    userListArray = [];

    for (let i = 0; i < userArray.length; i++) {
        userListArray.push(`
        <div class="border mt-3">
            <ul class="list-group">
                <li class="list-group-item">Name: ${userArray[i].name}</li>
                <li class="list-group-item">Email: ${userArray[i].email}</li>
                <li class="list-group-item">Age: ${userArray[i].age}</li>
                <li class="list-group-item">
                    <button onClick="deleteuserArray(${i})" class="btn btn-danger btn-sm">Delete</button>
                </li>
            </ul>
        </div>
        `);
    }
}

// delete item
function deleteuserArray(index) {
    const ok = confirm("Are you sure you want to delete this user?");
    if (!ok) return;
    
    userArray.splice(index, 1);   // remove from main array
    buildList();                  // rebuild UI list
    showList();                   // update display

}

