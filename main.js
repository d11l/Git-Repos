let theInput = document.querySelector(".get-repos input");
let getBtn = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");


getBtn.addEventListener("click", () => getRepos());
window.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    getRepos()
  }
})

function getRepos() {
  if (theInput.value == "") { 
    reposData.innerHTML = "<span>Please Write Github Username.</span>";
  } else {

   fetch(`https://api.github.com/users/${theInput.value}/repos`)
    .then((response) => response.json())
    .then((repos) => {

      console.log(repos);

       reposData.innerHTML = "";

      repos.forEach(repo => {

        reposData.innerHTML += `
       <div class="repo-box">
        <h4>${repo.name}</h4>
        <a href="https://github.com/${theInput.value}/${repo.name}" target="_blank">Visit</a>
      </div>
        `;
      });

    });

  }

}


function addDarkmodeWidget() {
  new Darkmode().showWidget();
}
window.addEventListener('load', addDarkmodeWidget);
