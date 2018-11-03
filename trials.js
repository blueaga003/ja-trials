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

let transactions = {};

function addTransaction (date, amount, currentTransactions) {
	currentTransactions[date] = amount;
	console.log(currentTransactions)
}

addTransaction ('feb14', -25, transactions)
addTransaction ('may13', +1200, transactions)
addTransaction ('may15', -100, transactions)
addTransaction ('may21', -359, transactions)
addTransaction ('may29', +2200, transactions)


// Add function to add transaction

// Create object to hold transactions

// Add transactions to object


/////////////////////////////////////////////////////////
// Get Balance Status

// Add function to calculate balance status

function getBalanceStatus(balance) {
	if (balance < 0) {
		return(`YOU ARE OVERDRAWN`
		);
	}
	else if (balance < 20) {
		return(`Warning! Your balance is almost 0!`
		);
	}
	else {
		return(`Normal`
		);
	}
}

getBalanceStatus(20)

/////////////////////////////////////////////////////////
// Calculate Current Balance

// Add function to calculate and return current balance

// let balanceTransactions = {}
function getCurrentBalance (accountBalance, currentTransactions) {
//	console.log(`${Object.values(currentTransactions)}`);
	let newBalance = Number(accountBalance) + Number(Object.values(currentTransactions));
	if (newBalance < 0) {
		newBalance -= 25;
	}
	return newBalance;
}

getCurrentBalance(5, { sept8: -6 })

/////////////////////////////////////////////////////////
// Show Account Activity

// Add function to print account activity
function showAcctActivity(oldBalance, transactionHistory) {
	let newBalance = oldBalance;
	for (let value of Object.values(transactionHistory)){
		newBalance += value;
	}
	let status = getBalanceStatus(newBalance)
	console.log(`TRANSACTIONS:`)
	for (let [key, value] of Object.entries(transactionHistory)){
		console.log(`${key} : ${value}`);
	}
	console.log(`CURRENT BALANCE: ${newBalance}
				CURRENT STATUS: ${status}` 
				);
}


showAcctActivity(100, { sept3: -5, sept4: -20 })


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

