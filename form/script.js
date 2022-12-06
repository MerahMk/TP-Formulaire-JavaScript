function envoi() {

	var newWindow = window.open('fiche/index.html', '_blank');

	newWindow.onload = function () {
		newWindow.faculteAff.innerHTML = "&nbsp Genie electrique";
		newWindow.nomAff.innerHTML ="&nbsp" + nomDem.value;
		newWindow.prenomAff.innerHTML ="&nbsp" + prenomDem.value;
		newWindow.motPasseAff.innerHTML ="&nbsp" + motPasseDem.value;
		newWindow.emailAff.innerHTML ="&nbsp" + emailDem.value;
		newWindow.optionAff.innerHTML ="&nbsp" + optionChoisie.value;
		newWindow.intituleAff.innerHTML ="&nbsp" + intitule.value;
		newWindow.auteurAff.innerHTML ="&nbsp" + auteur.value;
		newWindow.maisonEditionAff.innerHTML ="&nbsp" + maisonEdition.value;
		newWindow.anneeEditionAff.innerHTML ="&nbsp" + anneeEdition.value;
		newWindow.niveauAff.innerHTML ="&nbsp" + document.querySelector('input[name="niv"]:checked').value;
		newWindow.specialiteAff.innerHTML ="&nbsp" + document.querySelector('input[name="spec"]:checked').value;
		
		newWindow.dateEmpruntAff.innerHTML ="&nbsp" + dateEmprunt.value;
		newWindow.dateRetourAff.innerHTML ="&nbsp" + dateRetour.value;
	};
};


function supp() {
	var ele = document.querySelectorAll('input');
	var rad = document.querySelectorAll('input[type=radio]:checked');
	for(i=0;i<ele.length;i++){
		ele[i].value = null;
	}
	for(i=0;i<rad.length;i++){
		rad[i].checked = false;
	}
	
}

function annuler(){
	window.open('../','_self');
}

function imprimer(){
	window.print();
}