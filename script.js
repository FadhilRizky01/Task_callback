const ajax = new XMLHttpRequest();
ajax.open("GET", "https://jsonplaceholder.typicode.com/users");
// ajax.open("GET", "api.json"); // test 404

function data(json) {
  console.log(json); // cek data
  let table = document.querySelector("table");
  table.innerHTML += `
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Username</th>
        <th scope="col">Email</th>
        <th scope="col">Adress</th>
        <th scope="col">Company</th>
      </tr>
    </thead>
  `;
  // Style dikitt
  let list = document.querySelectorAll("tr");
  list[0].id = "row";
  let row = document.getElementById("row");
  row.classList.add("table-dark");

  //  iterasi data jsonnya
  json.forEach((e) => {
    table.innerHTML += `
      <tr>
        <td>${e.id}</td>
        <td>${e.name}</td>
        <td>${e.username}</td>
        <td>${e.email}</td>
        <td>${e.address.street},${e.address.suite},${e.address.city}</td>
        <td>${e.company.name}</td>
      </tr>
    `;
  });
}

ajax.addEventListener("load", () => {
  // console.log(ajax.responseText); // ini msh string
  if (ajax.status === 200) {
    const json = JSON.parse(ajax.responseText); // jadiin ke object (array object )
    data(json);
  } else {
    let header = document.createElement("h1");
    header.textContent = `ERROR ${ajax.status}`;
    document.body.append(header);
  }
});
ajax.send();
