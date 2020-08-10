
const collapseHeader = document.querySelector("#collapse-header")
const collapseRef = document.querySelector("#collapse");
const closeIconRef = document.querySelector("#close-icon")

collapseHeader.addEventListener("click", () => {
  if (collapseRef.classList.contains("open")) {
    collapseRef.classList.remove("open");
    closeIconRef.classList.remove("fa-chevron-down");
    closeIconRef.classList.add("fa-chevron-down")
} else {
    collapseRef.classList.add("open");
    closeIconRef.classList.remove("fa-chevron-up");
    closeIconRef.classList.add("fa-chevron-down")
  }
});