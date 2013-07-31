function validate() {
	
	var un = $('#username').val();
	var pw = $('#pword').val();
	
	var valid = false;

	var unArray = ["Philip","George","Sarah","Michael"];// as many as you like - no comma after final entry
	var pwArray = ["p1", "p2", "p3", "p4"];// the corresponding passwords;
	
	for (var i=0; i <	unArray.length; i++) {
		if ((un == unArray[i]) && (pw == pwArray[i])) {
			valid = true;
			//alert("in");
			break;
		}
	}
	
	if (valid) {
		//alert ("Login was successful");
		window.location = "#main";
		return false;
	} else{ alert ("wrong password"); }

	var t = " tries";
	if (count == 1) {t = " try"}

	if (count >= 1) {
		alert ("Invalid username and/or password.  You have " + count + t + " left.");
		document.myform.username.value = "";
		document.myform.pword.value = "";
		setTimeout("document.myform.username.focus()", 25);
		setTimeout("document.myform.username.select()", 25);
		count --;
	} else {
		alert ("Still incorrect! You have no more tries left!");
		document.myform.username.value = "No more tries allowed!";
		document.myform.pword.value = "";
		document.myform.username.disabled = true;
		document.myform.pword.disabled = true;
		return false;
	}

}