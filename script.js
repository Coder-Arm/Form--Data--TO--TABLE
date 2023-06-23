const form = document.querySelector("form");
const tbody = document.getElementsByTagName("tbody")[0];
let html = "";
function userTable(user){
	  html = html+`<tr>
	                     <td>${user.rollNo}</td>
	                     <td>${user.name}</td>
	                     <td>${user.college}</td>
	                     <td>${user.status}</td>
	                     </tr>`
	tbody.innerHTML = html; 
}

form.addEventListener("submit",(e) => {
	e.preventDefault();
     let user = {
		  rollNo : form["rollNo"].value,
		  name : form["firstName"].value+" "+form["lastName"].value,
		  college : form["collegeName"].value,
          status : form["status"].value
	 }
	//  console.log(user)
       userTable(user);
})