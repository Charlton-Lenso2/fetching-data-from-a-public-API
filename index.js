const viewUsers = document.querySelector("#viewUsers");
const userList = document.querySelector(".userList");

viewUsers.addEventListener("click", getUsers);

function getUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then( users => {
      userList.innerHTML = "";
      users.forEach((user) => {
        userList.innerHTML += `
            <h3>${user.name}</h3>
            <p>${user.email}</p>
            <p>${user.phone}</p>
            `;
      });
    });
}
