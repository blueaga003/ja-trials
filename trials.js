/////////////////////////////////////////////////////////
// PART 1

/////////////////////////////////////////////////////////
// Show Profile Info

// Add function to prnt profile info
function showProfile(name, catchphrase, location) {
	console.log(`PROFILE:\nName: ${name}\nCatchphrase: ${catchphrase}\nLocation: ${location}`);
}

showProfile('Amber', 'Mrr', 'Lake')
/////////////////////////////////////////////////////////
// Display Likes
const interests = [
  'being annoying',
  'seeds',
  'staring at human food'
];

// Add function to print interests

function showLikes(likes) {
	console.log(`THINGS I LIKE:\n`);
	for(let like of likes) {
		console.log(like);
	}
}

showLikes(['ho','hi'])

/////////////////////////////////////////////////////////
// Display Favorites
const favorites = {
	'food' : '50/50 mix of soil/compost',
	'tree' : 'fir',
	'quote' : 'It\'s a secret.',
	'color' : 'rose quartz'
	  // Add more favorites
};

// Add function to print favorites
function showFavorites(favorites) {
	console.log(`FAVORITES:\n`);
	for (let [key, value] of Object.entries(favorites)) {
		console.log(`${key} : ${value}`);
	}
}

showFavorites(favorites)


/////////////////////////////////////////////////////////
// PART 2

/////////////////////////////////////////////////////////
// Add Transactions

// Add function to add transaction

// Create object to hold transactions

// Add transactions to object


/////////////////////////////////////////////////////////
// Get Balance Status

// Add function to calculate balance status



/////////////////////////////////////////////////////////
// Calculate Current Balance

// Add function to calculate and return current balance


/////////////////////////////////////////////////////////
// Show Account Activity

// Add function to print account activity



/////////////////////////////////////////////////////////
// Creating a User Object

// Add user object

// Add function to print user dashboard



/////////////////////////////////////////////////////////
// PART 3

// Add object that keeps track of premium members

// Add function to return emails of premium members



/////////////////////////////////////////////////////////
// PART 4

// Add function to assign interns to workdays

// Add a function to generate customer support hours

