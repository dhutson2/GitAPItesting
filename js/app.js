// make this into a repo URL,
// return open pull requests in it, # of commits in PR, comments in PR,
// and the user that opened PR
const userInputValue = document.querySelector("#user");
const repoInputValue = document.querySelector("#repo");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const commitsContainer = document.querySelector(".main__profile-commits");
const reposContainer = document.querySelector(".main__profile-comments");
const unContainer = document.querySelector(".main__profile-un");

const client_id = "Iv1.de60148e0859c0ba";
const client_secret = "0bda8d722351c069ed89dfc3ec874ea0f4e1770e";
const pullNumbers = [];

// change this to fetch repo
const fetchPullRequests = async (user, repo) => {
  const api_call = await fetch(`https://api.github.com/repos/${user}/${repo}/pulls?client_id=${client_id}&
    client_secret=${client_secret}`);

  const data = await api_call.json();
  return { data };
};

// will return PR number which you can use to find commits/comments
const showData = () => {
  fetchPullRequests(userInputValue.value, repoInputValue.value).then(res => {
    const getRequestNumbers = async () => {
      await res.data.forEach(function(pull) {
        pullNumbers.push(pull.number);
        console.log(pullNumbers, "<-- foreach statement");
      });
    };
    const fetchEachPull = async () => {
      const api_call = await fetch(
        `https://api.github.com/repos/${user}/${repo}/pulls/${
          pullNumbers[4]
        }?client_id=${client_id}&client_secret=${client_secret}`
      );
    };
    console.log(res.data, "<-- user data");
    console.log(getRequestNumbers());
    console.log(fetchEachPull(), "<-- each pull");
    // console.log(getComments(), "<--get comments as numbers");
    nameContainer.innerHTML = `Open pull requests: <span class="main__profile-value">${res.data[0].title}</span>`;
    commitsContainer.innerHTML = `# of commits: <span class="main__profile-value">${res.data[0].commits}</span>`;
    reposContainer.innerHTML = `# of comments: <span class="main__profile-value">${res.data.public_repos}</span>`;
    unContainer.innerHTML = `Pull request Opened by: <span class="main__profile-value">${res.data[3].user.login}</span>`;
  });
};

searchButton.addEventListener("click", () => {
  showData();
});
