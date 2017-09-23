// ===============================================================================
// DATA
// Below data will hold all of the friends information.
// Initially we just set it equal to a base set of friends.
// An expansion to this would be to use a database that is persistent.
// ===============================================================================

var friendsArray = [
	{
		name: "Brian",
		photo: "http://home.netcom.com/~rrhain/html/headshot.jpg",
		scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
