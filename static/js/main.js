// GET SEARCH FORM AND PAGE LINKS
let searchForm = document.getElementById("searchForm");
let pageLinks = document.getElementsByClassName("page-link");

// ENSURE SEARCH FORMS
if (searchForm) {
  for (let i = 0; pageLinks.length; i++) {
    pageLinks[i].addEventListener("click", function (e) {
      e.preventDefault();

      // GET THE DATA ATTRIBUTE
      let page = this.dataset.page;
      console.log("page attribute", page);

      //ADD HIDDEN TO THE SEARCH INPUT
      searchForm.innerHTML += `<input value=${page} name="page" hidden />`;

      //SUBMIT FORM
      searchForm.submit();
    });
  }
}
