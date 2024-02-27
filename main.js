const API_KEY = "b6514b7a92d34fa18407c14d9fd7ad2c";
let searchedMovies = [];
let url = new URL("https://newsapi.org/v2/top-headlines");

const getMovies = async () => {
  const response = await fetch(url);

  const data = await response.json();

  searchedMovies = data.info;

  render();
};

const render = () => {
  console.log("mmm", searchedMovies);
};

const getMoviesByCategory = async (event) => {
  const category = event.target.textContent.toLowerCase();
  console.log("category", category);
  url = new URL(
    `https://newsapi.org/v2/top-headlines?country=kr&category=${category}`
  );
  getNews();
};

const getMoviesByKeyword = async () => {
  const keyword = document.getElementById("search-input").value;
  console.log("keyword", keyword);
  url = new URL(
    `https://newsapi.org/v2/top-headlines?country=kr&category=${category}`
  );
  getNews();
};
