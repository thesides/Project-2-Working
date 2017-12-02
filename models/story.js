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
		
		//maps the story thread to all relevant posts
		Story.hasMany(models.Post, {
			onDelete: "cascade"
		});

		//maps the story thread to the user who created it
		Story.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
		});
	};
	
	return Story;

};