const btns = document.querySelectorAll(".complete-btn");

for (const btn of btns) {
  btn.addEventListener("click", function (event) {
    const taskNumberInnerText =
      document.getElementById("task-number").innerText;
    const convertedTaskNumber = parseInt(taskNumberInnerText);
    const updatedTaskNumber = convertedTaskNumber - 1;
    document.getElementById("task-number").innerText = updatedTaskNumber;
    // Date and Time
    const date = new Date();
    const time = new Date().toLocaleTimeString();

    const dateInput = document.getElementById("date");
    dateInput.innerText = date.toDateString();
    // Now for the total done section
    const totalTaskNumber =
      document.getElementById("total-task-number").innerText;
    const convertedTotalTaskNumber = parseInt(totalTaskNumber);
    const updatedTotalTaskNumber = convertedTotalTaskNumber + 1;
    document.getElementById("total-task-number").innerText =
      updatedTotalTaskNumber;

    const history = document.getElementById("history");

    const historyLog = document.createElement("p");
    historyLog.innerText =
      "You have completed the task " +
      event.target.parentNode.parentNode.parentNode.querySelector("h2")
        .innerText +
      ` at ${time}`;
    historyLog.classList.add(
      "px-3",
      "bg-[#f4f7ff]",
      "rounded-2xl",
      "py-2",
      "my-2",
      "text-sm"
    );

    history.appendChild(historyLog);

    // btn Color Transform

    btn.setAttribute("disabled", true);
    alert("Board Updated Successfully");
  });
}

// Last Alert
const Btns = document.getElementsByClassName("complete-btn");
Btns[Btns.length - 1].addEventListener("click", function () {
  alert("Congratulations, You have completed your task in time");
});

// Redirect to QNA
document.getElementById("QNA").addEventListener("click", function () {
  window.location.href = "qna.html";
});
