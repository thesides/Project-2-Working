module.exports = function (sequelize, DataTypes) {
	
	var Story = sequelize.define("Story", {
		
		//column contains the story title
		storyName: {
			type: DataTypes.STRING,
			allowNull: false
		}
		
	});

	//associating stories with all the posts in the story
	Story.associate = function (models) {
		Story.hasMany(models.Post)

		Story.belongsTo(models.User)
	};
	
	return Story;

};