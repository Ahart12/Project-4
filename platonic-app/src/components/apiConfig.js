let apiUrl;

const apiUrls = {
  production: "https://thawing-shelf-08383.herokuapp.com/",
  development: "http://localhost:3000/api",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

export default apiUrl;