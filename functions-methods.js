// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

const getEmailDomain = (email) => {
	let indexOfAt = 0;
	let domain = '';
	for (let i = 0; i < email.length; i++) {
		if (email[i] === '@') {
			indexOfAt = i;
		}
	}
	for (let i = 0; i < email.length; i++) {
		if (i > indexOfAt) {
			domain = domain + email[i];
		}
	}
	return domain
}

console.log(getEmailDomain('William@hotmail.com'))


const getEmailDomainSplit = (email) => {
	let splittedEmail = email.split('@');
	return splittedEmail[1]
}

console.log(getEmailDomainSplit('William@split.com'))


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"


const typeOfEmail = (email) => {
	let indexOfAt = 0;
	let domain = '';
	for (let i = 0; i < email.length; i++) {
		if (email[i] === '@') {
			indexOfAt = i;
		}
	}
	for (let i = 0; i < email.length; i++) {
		// het @ wordt meegenomen in de domain variabele
		if (i >= indexOfAt) {
			domain = domain + email[i];
		}
	}
	// doordat de @ wordt meegenomen onstaat er later geen verwarring door een valse uitkomst.
	if (domain === '@novi-education.nl') {
		return 'student'
	}
	else if (domain === '@novi.nl') {
		return 'medewerker'
	}
	else {
		return 'extern'
	}
}
 
/* doordat de @ wordt meegenomen in de if statement en de domain variabele in de typeOfEmail functie, ontstaat er geen vals antwoord bij een emailadres als novi.nl@novi-education.nl */
console.log(typeOfEmail('novi.nl@novi-education.nl')) 


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

const checkEmailValidity = (email) => {
		if (email.charAt(email.length - 1) !== '.' && email.includes('@') && email.includes(',') === false && email.includes('.')) {
			return true 
			}
			else {
				return false 
				}
				}
				
			console.log(checkEmailValidity('n.eeken@novi.nl'));
