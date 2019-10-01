// make this into a repo URL,
// return open pull requests in it, # of commits in PR, comments in PR,
// and the user that opened PR
const userInputValue = document.querySelector("#user");
const repoInputValue = document.querySelector("#repo");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");

const client_id = "Iv1.de60148e0859c0ba";
const client_secret = "0bda8d722351c069ed89dfc3ec874ea0f4e1770e";

// change this to fetch repo
const fetchUsers = async (user, repo) => {
  const user_api_call = await fetch(`https://api.github.com/repos/${user}/${repo}/commits?client_id=${client_id}&
    client_secret=${client_secret}`);

  const data = await user_api_call.json();
  return { data };
};

const showData = () => {
  fetchUsers(userInputValue.value, repoInputValue.value).then(res => {
    console.log(res, "<-- user data");
    nameContainer.innerHTML = `Open pull requests: <span class="main__profile-value">${res.data.name}</span>`;
    unContainer.innerHTML = `# of commits: <span class="main__profile-value">${res.data.login}</span>`;
    reposContainer.innerHTML = `Comments: <span class="main__profile-value">${res.data.public_repos}</span>`;
    urlContainer.innerHTML = `Pull request Opened by: <span class="main__profile-value">${res.data.html_url}</span>`;
  });
};

searchButton.addEventListener("click", () => {
  showData();
});
