module.exports = function (sequelize, DataTypes) {
	
	//This contains the text of the post
	var Post = sequelize.define("Post", {
		body: {
			type: DataTypes.TEXT,
			allowNull: false
		}
		
	});

	
	Post.associate = function (models) {

		//This creates a column linking the post to the author
		Post.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
		});


		//This creates a column linking the post to the relevant story ID
		Post.belongsTo(models.Story, {
			foreignKey: {
				allowNull: false
			}
		});
	}

	return Post;
};