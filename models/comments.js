module.exports = function(sequelize, DataTypes) {
  var Comments = sequelize.define("Comments", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Comments.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Comments.belongsTo(models.Mood, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Comments;
};