import "./styles.css";

document.getElementById("app").innerHTML = `

`;

// Exercise 3 starts
if (document.readyState !== "loading") {
  console.log("Document is ready");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document ready after waiting");
    initializeCode();
  });
}

function initializeCode() {
  const addCommentButton = document.getElementById("add-comment");

  addCommentButton.addEventListener("click", function () {
    const commentsList = document.getElementById("comments-list");
    console.log("working!");

    let newParagraph = document.createElement("li");
    newParagraph.innerHTML = newParagraph.innerHTML + "new list item";

    commentsList.appendChild(newParagraph);
  });
}
// Exercise 3 ends

// Exercise 4 starts
if (document.readyState !== "loading") {
  console.log("Document is ready");
  addToComments();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document ready after waiting");
    addToComments();
  });
}

function addToComments() {
  const addTextButton = document.getElementById("add-text");

  addTextButton.addEventListener("click", function () {
    const commentsList2 = document.getElementById("comments");
    console.log("working!");

    var newParagraph2 = document.createElement("li");
    newParagraph2.innerHTML = document.getElementById("big-text").value;
    commentsList2.appendChild(newParagraph2);
  });
}
// Exercise 4 ends

// Exercise 5 starts
if (document.readyState !== "loading") {
  console.log("Document is ready");
  removeComments();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document ready after waiting");
    removeComments();
  });
}

function removeComments() {
  const removeCommentsButton = document.getElementById("remove-comments");

  removeCommentsButton.addEventListener("click", function () {
    var response = confirm(
      "Are you sure that you want to delete all list items?"
    );
    if (response == true) {
      document.getElementById("comments-list").innerHTML = "";
      document.getElementById("comments").innerHTML = "";
    } else {
      document.getElementById("output").innerHTML = "You canceled.";
    }
  });
}
// Exercise 5 ends
