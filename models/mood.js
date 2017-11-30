module.exports = function(sequelize, DataTypes) {
  var Mood = sequelize.define("Mood", {
    // Giving the Author model a name of type STRING
    mood: DataTypes.STRING
  });
    Mood.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Mood.hasMany(models.Comments, {
      onDelete: "cascade"
    });
  };
  return Mood;
}