const email = document.querySelector('#email');
const password = document.querySelector('#password');
const div = document.querySelector('div');

const arr = [];


function print(e) {
    e.preventDefault();

    const obj = {
        email: email.value,
        password: password.value
    };
    arr.push(obj);

    div.innerHTML = '';

    for (let i = 0; i < arr.length; i++) {

        div.innerHTML += `<div class="div">Edit: ${arr[i].email}  <br> Password: ${arr[i].password} <br>
        <button onclick="editTask(${i})">edit</button>
        <button onclick="deleteTask(${i})">delete</button></div>`;
    }

    email.value = '';
    password.value = '';
}

function editTask(i) {
    // console.log(i);
    div.innerHTML = '';

    const editedEmail = prompt('Enter edited email');
    const editedPassword = prompt('Enter edited password');
    if (editedEmail !== null && editedPassword !== null) {
        arr[i].email = editedEmail;
        arr[i].password = editedPassword;
    }

    // arr.splice(i, 1, editedEmail, editedPassword)
    for (let i = 0; i < arr.length; i++) {

        div.innerHTML += `<div class="div">Email: ${arr[i].email}  <br> Password: ${arr[i].password} <br>
        <button onclick="editTask(${i})">edit</button>
        <button onclick="deleteTask(${i})">delete</button></div>`;
    }





}
function deleteTask(i) {
    div.innerHTML = '';
    arr.splice(i, 1)
    // console.log(i);
    for (let i = 0; i < arr.length; i++) {

        div.innerHTML += `<div class="div">Email: ${arr[i].email}  <br> Password: ${arr[i].password} <br>
        <button onclick="editTask(${i})">edit</button>
        <button onclick="deleteTask(${i})">delete</button></div>`;
    }


}








// const email = document.querySelector('#email');
// const password = document.querySelector('#password');
// const div = document.querySelector('div');
// const arr = []

// function print(e) {
//     e.preventDefault();
//     div.innerHTML = ''
//     const obj = {
//         email: email.value,
//         password: password.value
//     }
//     arr.push(obj);
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i]);
//         div.innerHTML += `<div class="div">
//         Email: ${arr[i].email} <br>
//         Password:${arr[i].password} <br>
//         <button onclick="editTask(${i})">Edit</button>
//         <button onclick="deleteTask(${i})">Delete</button>
//          </div>`
//         email.value = ''
//         password.value = ''

//     }
// }
// function editTask(i) {
//     div.innerHTML = ''
//     const editedEmail = prompt('Enter a edited value')
//     const editedPassword = prompt('Enter a edited value')

//     arr.splice(i, 1 , editedEmail,editedPassword);
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i]);
//         div.innerHTML += `<div class="div">
//         Email: ${arr[i].email} <br>
//         Password:${arr[i].password} <br>
//         <button onclick="editTask(${i})">Edit</button>
//         <button onclick="deleteTask(${i})">Delete</button>
//          </div>`
//         }



// }
// function deleteTask(i) {
//     div.innerHTML = ''
//     arr.splice(i, 1);
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i]);
//         div.innerHTML += `<div class="div">
//         Email: ${arr[i].email} <br>
//         Password:${arr[i].password} <br>
//         <button onclick="editTask(${i})">Edit</button>
//         <button onclick="deleteTask(${i})">Delete</button>
//          </div>`
//         }
//         // console.log(i);

// }
































