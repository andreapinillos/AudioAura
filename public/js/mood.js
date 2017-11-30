$(document).ready(function() {
  // Getting references to the name inout and author container, as well as the table body
  var moodContainer = $("#colors");
  var moodList = $(".container-fluid")
  var red = $("#redRect.bars");
  var pink = $("#pinkRect.bars");
  var orange = $("#orangeRect.bars");
  var yellow = $("#yellowRect.bars");
  var green = $("#greenRect.bars");
  var blue = $("#blueRect.bars");
  var purple = $("#purpleRect.bars");
  var brown = $("#brownRect.bars");
  var white = $("#whiteRect.bars");
  var grey = $("#greyRect.bars");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  $(document).on("click", "#redRect.bars", handleMoodFormSubmit);
  $(document).on("click", "#pinkRect.bars", handleMoodFormSubmit);
  $(document).on("click", "#orangeRect.bars", handleMoodFormSubmit);
  $(document).on("click", "#yellowRect.bars", handleMoodFormSubmit);
  $(document).on("click", "#greenRect.bars", handleMoodFormSubmit);
  $(document).on("click", "#blueRect.bars", handleMoodFormSubmit);
  $(document).on("click", "#purpleRect.bars", handleMoodFormSubmit);
  $(document).on("click", "#brownRect.bars", handleMoodFormSubmit);
  $(document).on("click", "#whiteRect.bars", handleMoodFormSubmit);
  $(document).on("click", "#greyRect.bars", handleMoodFormSubmit);
  // Getting the intiial list of Moods
  getMood();

  // A function to handle what happens when the form is submitted to create a new Author
  function handleMoodFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!red || !pink || !orange || !yellow || !green || !blue || !purple || !brown || !white || !grey) {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
    upsertMood({
      name: red;
      name: pink;
      name: orange;
      name: yellow;
      name: green;
      name: blue;
      name: purple;
      name: brown;
      name: white;
      name: grey
    });
  }

  // A function for creating an author. Calls getAuthors upon completion
  function upsertMood(moodData) {
    $.post("/api/mood", MoodData)
      .then(getMood);
  }

  // Function for creating a new list row for authors
  function createMoodRow(moodData) {
    var newTr = $("<tr>");
    newTr.data("mood", moodData);
    newTr.append("<td>" + moodData.name + "</td>");
    newTr.append("<td> " + moodData.Comments.length + "</td>");
    newTr.append("<td><a href='/data?user_id=" + moodData.id + "'>Word Cloud</a></td>");
    // newTr.append("<td><a href='/cms?author_id=" + moodData.id + "'>Create a Post</a></td>");
    // newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");
    return newTr;
  }

  // Function for retrieving authors and getting them ready to be rendered to the page
  function getMood() {
    $.get("/api/mood", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createAuthorRow(data[i]));
      }
      renderAuthorList(rowsToAdd);
      red.val("Passionate");
      pink.val("Cheerful");
      orange.val("Energetic");
      yellow.val("Happy");
      green.val("Calm");
      blue.val("Determined");
      purple.val("Romantic");
      brown.val("Concerned");
      white.val("Serene");
      grey.val("Sad");
    });
  }

  // A function for rendering the list of authors to the page
  function renderMoodList(rows) {
    moodList.children().not(":last").remove();
    moodContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      moodList.prepend(rows);
    }
    else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no authors
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.html("You must create a Mood before you can create a Comment.");
    moodContainer.append(alertDiv);
  }
