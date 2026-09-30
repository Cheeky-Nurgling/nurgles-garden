const allLinks = document.querySelectorAll(".navigation-link");

for (const link of allLinks) {
  link.addEventListener("click", function () {
    for (const otherLink of allLinks) {
      otherLink.classList.remove("active");
    }
    link.classList.add("active");
  });
}