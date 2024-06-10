// import { log } from "../src/routes/tasks/ss";

// Fetch tasks from the API and display them
fetch("http://localhost:3300/api/tasks")
  .then((response) => response.json())
  .then((tasks) => {
    const tasksList = document.getElementById("tasks-list");
    tasks.forEach((task) => {
      const listItem = document.createElement("li");
      listItem.textContent = task.title;
      tasksList.appendChild(listItem);
    });
  })
  .catch((error) => console.error("Error fetching tasks:", error));

// function insert_Btn() {
//   // const getElement_TitleText = document.getElementById("title_input").value;
//   // const getElement_descriptionText =
//   //   document.getElementById("description_input").value;
//   // const getElement_checkbox =
//   //   document.getElementById("isCompleted_input").checked;
//   // insertData(
//   //   getElement_TitleText,
//   //   getElement_descriptionText,
//   //   getElement_checkbox
//   // );

//   log();
// }
