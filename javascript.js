var quotes = ['NOOOOOOOOOOOOO',
	'Nope',
	'Noup',
	'Mmmm, better not to',
	'Are you a healthcare worker? Yes',
	'Are you caring for an elder? Maybe',
	'Are you out of food and going by yourself? Maybe',
	'Ehhh, no',
	'I already told you not to',
	'Are you out of toilet paper and food? Maybe. Careful!',
	'Has your government suggested social distancing?',
	'DO YOU EVEN READ THE NEWS? NO!',
	'No, no, no',
	'But... no',
	'Do you need to walk your dog?',
	'I think you should not',
	'Dude, no!',
	'How many times should I say you should not?',
	'Are you a doctor or a nurse? Then maybe',
	'Still a no',
	'No, but one day this will say yes. Be patient.',
	'Maybe but do not interact with people',
	'Are you craving fresh air? Open a window!',
	'How can you be sure this is a good idea?',
	'Mmmm, I would not risk it',
	'Please do not',
	'Can you order stuff online? If you can, you should do that',
	'No',
	'Ehemmmm... NO',
	'NO BUT ALL CAPS',
	'No-no',
	'Oh, no',
	'No, my friend',
	'No & no',
	'nopppp'


]


function newQuote () {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
		document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

}