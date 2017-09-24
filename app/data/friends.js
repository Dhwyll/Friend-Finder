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
	},
	{
		name: "Allison",
		photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Allison_Janney4crop.jpg/220px-Allison_Janney4crop.jpg",
		scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
	},
	{
		name: "Shia",
		photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Shia_Labeouf_2014.jpg/1200px-Shia_Labeouf_2014.jpg",
		scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
	},
	{
		name: "Martha",
		photo: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyOTQxNDMyMl5BMl5BanBnXkFtZTcwMjU4NDE3Mw@@._V1_UY317_CR5,0,214,317_AL_.jpg",
		scores: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
	},
	{
		name: "George",
		photo: "http://us.hellomagazine.com/imagenes/profiles/george-clooney/5794-george-clooney.jpg",
		scores: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
	}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
