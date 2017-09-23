// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// This data source holds an array of information on the potential matches.
// ===============================================================================

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

	module.exports = function(app) {
	// API GET Requests
	// Below code handles when users "visit" a page.
	// In each of the below cases when a user visits a link
	// (ex: localhost:PORT/api/friends... they are shown a JSON of the data in the table)
	// ---------------------------------------------------------------------------

	app.get("/api/friends", function(req, res) {
		res.json(friendsData);
	});

	// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In each of the below cases, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate JavaScript array
	// (ex. User fills out a match request... this data is then sent to the server...
	// Then the server saves the data to the friendsData array)
	// ---------------------------------------------------------------------------

	app.post("/api/friends", function(req, res) {
		// Note the code here. Our "server" will respond to requests and let users know the closest match.
		// It will do this by calculating the closest match and sending back that person's information
		console.log(req.body);
		var scoreArray = [];		// This will hold the total score for each person in the friendsData array
		var userScore = 0;			// This will hold the current submitter's total score
		var diffArray = [];			// This will hold the difference in scores between each friendsData entry and the current submitter
		for (var i = 0; i < friendsData.length; i++) {		// For each person inn the friendsData array...
			var totalScore = 0;								// Start with them having a score of 0...
			for (var j = 0; j < friendsData[i].scores.length; j++) {		// Then for each score in that person's entry...
				totalScore += parseInt(friendsData[i].scores[j])			// Add it to their totalScore...
			}
			scoreArray.push(totalScore);									// And push it to the scoreArray.
		}
		for (var i = 0; i < req.body.scores.length; i++) {		// For each score in the current submitter's entry...
			userScore += parseInt(req.body.scores[i]);			// Add it to the userScore.
		}
		for (var i = 0; i < scoreArray.length; i++) {				// For each total score in the scoreArray...
			diffArray.push(Math.abs(userScore - scoreArray[i]));	// Get the absolute difference between it and the userScore and push it to the diffArray.
		}

		var min = diffArray[0];								// Assume the first person in the diffArray is the closest match.
		var minIndex = 0;									// Thus the closest match index is the first entry in the array.
	
		for (var i = 1; i < diffArray.length; i++) {		// For each entry in the diffArray...
			if (diffArray[i] < min) {						// See if it's smaller than the current closest match...
				minIndex = i;								// If so, change the index to that one...
				min = diffArray[i];							// And set the new minium.
			}
		}
		res.json(friendsData[minIndex]);					// Return the person with the closest match
		friendsData.push(req.body);							// And push that new person into the friendsData array.
	});
};
