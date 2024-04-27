const apikey = "c15a51f1a3e94c5eb9362ce324118d5f"
const blogContainer = document.getElementById("blog-container")
const searchField = document.getElementById("search-input")
const searchButton = document.getElementById("search-button")

async function fetchRandomNews() {
  try {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=${apikey}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)
    return data.articles
  } catch (error) {
    console.error("Error Fatching Rendom News")
    return []
  }
}

searchButton.addEventListener("click", async () => {
  const query = searchField.value.trim()
  if (query !== "") {
    try {
      const articles = await fetchNewsQuery(query)
      displayblogs(articles)
    } catch (error) {
      console.log("Error fatching by query", error)
    }
  }
})
async function fetchNewsQuery(query) {
  try {
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=10&apikey=${apikey}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)
    return data.articles
  } catch (error) {
    console.error("Error Fatching Rendom News")
    return []
  }
}

function displayblogs(articles) {
  blogContainer.innerHTML = ""
  articles.map((articles) => {
    const blogCard = document.createElement("div")
    blogCard.classList.add("blog-cart")
    const img = document.createElement("img")
    img.src = articles.urlToImage
    img.alt = articles.title
    const title = document.createElement("h2")
    const truncatedTitle =
      articles.title.length > 30
        ? articles.title.slice(0, 30) + "...."
        : articles.title
    title.textContent = truncatedTitle

    const description = document.createElement("p")
    const truncatedDes =
      articles.description.length > 120
        ? articles.description.slice(0, 120) + "...."
        : articles.description
    description.textContent = truncatedDes

    // description.textContent = articles.description

    blogCard.appendChild(img)
    blogCard.appendChild(title)
    blogCard.appendChild(description)
    blogCard.addEventListener("click", () => {
      window.open(articles.url, "_blank")
    })
    blogContainer.appendChild(blogCard)
  })
}

;(async () => {
  try {
    const articles = await fetchRandomNews()
    displayblogs(articles)
  } catch (error) {
    console.log("Error Fetching random news")
  }
})()
