//your JS code here. If required.
let forms = document.getElementById("forms");

forms.addEventListener("submit",()=>{
	let fname = document.getElementById("FirstName");
	let lname = document.getElementById("LastName");
	let ph = document.getElementById("PhoneNumber");
	let eid = document.getElementById("EmailID");
	alert(`${fname.name} ${fname.value} ${lname.name} ${lname.value} ${ph.name} ${ph.value} ${eid.name} ${eid.value}`)
})
