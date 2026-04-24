// js/api.js
// З великої літери, щоб підкреслити, що це константа, яка не змінюється протягом виконання програми
const BASE_URL = "https://jsonplaceholder.typicode.com";

// function to fetch posts from the API
export async function fetchPosts() {
  try {
    const response = await fetch(`${BASE_URL}/posts?_limit=6`);

    if (!response.ok) {
      throw new Error(`Помилка сервера: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}
