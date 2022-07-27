function verification() {
	
	//Ian was here
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;
	var select = document.getElementById('select').value;
	var info = document.getElementById('info').value;
	var chk = document.getElementsByName('DAYS');
	var isChecked = false;	


	if (name == "") {
		alert("Please add your name");
		return false;
	} 

	else if (email == "" && phone == "") {
		alert("Please enter in your email OR phone number");
		return false;
	} 

	else if (select == "OTHER" && info == "") {
		alert("Please tell us about your inquiry.");
		return false;
	}

	for (var i = 0; i < chk.length; i++) {
		if (chk[i].checked) {
			isChecked = true;
			break;
			}
		}
		if (isChecked == false) {
			alert("Please select the best day or days to contact you.");
			return false;
			}
		return true;		
}