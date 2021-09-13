import "./styles.css";

document.getElementById("app").innerHTML = `

`;

// Exercise 3 & 4 starts
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
    newParagraph.innerHTML = document.getElementById("big-text").value;

    commentsList.appendChild(newParagraph);
  });
}
// Exercise 3 & 4 ends

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
    } else {
      document.getElementById("output").innerHTML = "You canceled.";
    }
  });
}
// Exercise 5 ends
