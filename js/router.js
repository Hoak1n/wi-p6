import { pages } from "./pages.js";
import { setState } from "./state.js";
import { initFormLogic } from "./formHandler.js";
import { fetchPosts } from "./api.js";

// function to create a router
export function createRouter() {
  const render = (path) => {
    const root = document.getElementById("app");
    const repoName = "/wi-p6";

    let cleanPath = path.replace(repoName, "");

    // designate the page content based on the path
    let pageKey;
    if (cleanPath === "" || cleanPath === "/" || cleanPath === "/index.html") {
      pageKey = "home";
    } else {
      pageKey = cleanPath.replace("/", "");
    }

    // render the page content if it exists, otherwise show 404
    if (pages[pageKey]) {
      root.innerHTML = pages[pageKey]();

      // If the blog page is rendered, load the blog data
      if (pageKey === "blog") {
        loadBlogData();
      }

      // If the contacts page is rendered, initialize the form logic
      if (pageKey === "contacts") {
        initFormLogic();
      }
    } else {
      root.innerHTML = `
    <div class="error-page">
      <h1>404 - Сторінка не знайдена</h1>
      <p>Спробуйте повернутися на головну</p>
    </div>
  `;
    }
  };

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setState("currentPage", path);
    render(path);
  };

  window.addEventListener("click", (e) => {
    const link = e.target.closest("[data-link]");
    if (link) {
      e.preventDefault();
      const path = link.getAttribute("href");
      navigate(path);
    }
  });

  window.addEventListener("popstate", () => {
    render(window.location.pathname);
  });

  render(window.location.pathname);
}

// function to load blog data and render it
async function loadBlogData() {
  const container = document.getElementById("blog-container");

  try {
    const posts = await fetchPosts();

    container.innerHTML = pages.renderPostCards(posts);
  } catch (error) {
    container.innerHTML = `
    <div class="error-container">
      <p> Вибачте, сталася помилка при завантаженні блогу.</p>
      <span class="error-details">${error.message}</span>
    </div>
    `;
  }
}
