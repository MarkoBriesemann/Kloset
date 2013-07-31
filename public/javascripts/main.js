//Initialize function
var init = function() {
	// TODO:: Do your initialization job
	console.log("init() called");
};
$(document).ready(init);

var topArray = [];
var bottomArray = [];
var shoesArray = [];

topArray[1] = 'M_Chemise_Decontracte.png';
topArray[2] = 'M_Chemise_Habille.png';
topArray[3] = 'M_Gilet_Decontracte.png';
topArray[4] = 'M_Pull_Habille.png';
topArray[5] = 'M_Pull_Sport.png';
topArray[6] = 'M_T_Habille.png';
topArray[7] = 'M_Tee_Decontracte.png';
topArray[8] = 'M_Tee_Sport.png';

bottomArray[1] = 'M_Jean_Decontracte.png';
bottomArray[2] = 'M_Short_Decontracte.png';
bottomArray[3] = 'M_Short_Habille.png';
bottomArray[4] = 'M_Short_Sport.png';

shoesArray[1] = 'M_Chemise_Decontracte.png';

var carrousselArray = [];
carrousselArray[0] = 'M_Tee_Decontracte.png';
carrousselArray[1] = 'M_Chemise_Decontracte.png';
carrousselArray[2] = 'M_Chemise_Habille.png';
carrousselArray[3] = 'M_Gilet_Decontracte.png';
carrousselArray[4] = 'M_Pull_Habille.png';
carrousselArray[5] = 'M_Pull_Sport.png';
carrousselArray[6] = 'M_T_Habille.png';
carrousselArray[7] = 'M_Tee_Decontracte.png';
carrousselArray[8] = 'M_Tee_Sport.png';
carrousselArray[9] = 'M_Jean_Decontracte.png';
carrousselArray[10] = 'M_Short_Decontracte.png';
carrousselArray[11] = 'M_Short_Habille.png';
carrousselArray[12] = 'M_Short_Sport.png';

		
var count = 0;
function carroussel(polarite) {
	console.log(polarite);
	if (polarite === 'plus') {
		if (carrousselArray[count + 1]) {
			document.getElementById('carroussel').innerHTML = '<img src="img/' + carrousselArray[count + 1] + '">';
			
			count++;
		}
	} else if (polarite === 'moins') {
		if (carrousselArray[count - 1]) {
			document.getElementById('carroussel').innerHTML = '<img src="img/' + carrousselArray[count - 1] + '">';
			count--;
		}
	}
}

function random() {
	var top = Number(Math.round(Math.random() * 8));
	var bottom = Number(Math.round(Math.random() * 4));
	var shoes = 1;
	console.log(top + topArray[top]);
	console.log(bottom + bottomArray[bottom]);
	console.log(shoes + shoesArray[shoes]);
	document.getElementById('random').innerHTML = '<div class="img"><img src="img/'
			+ topArray[top]
			+ '"></div><div class="img"><img src="img/'
			+ bottomArray[bottom]
			+ '"></div><div class="img"><img src="img/'
			+ shoesArray[shoes] + '"></div>';
}

function filter() {

	document.getElementById('filter').innerHTML = '<div class="img"><img src="img/kloset-ecran-filter.png"></div>';
}

function validate() {
	
	var un = $('#identifiant').val();
	var pw = $('#pword').val();
	//alert("validate()");
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
		window.location = "#home";
		return false;
	}else{alert ("wrong password"); }


}