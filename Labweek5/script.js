
// JavaScript Fetch, see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

const API_KEY = "47b6fde598534d768faf57dc7180f88b";

const NEWS_SOURCE = "https://newsapi.org/v2/top-headlines?country=ie&apiKey=47b6fde598534d768faf57dc7180f88b";

const headers = new Headers();

const init = { method: 'GET', headers: headers, mode: 'cors', cache: 'default' };

const url = 'https://newsapi.org/v2/top-headlines?sources=${NEWS_SOURCE}&apiKey=${API_KEY}';

async function getDataAsync() {
    try{
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.articles);
    } catch (err) {
        console.log(err);
    }
}

getDataAsync();

console.log('Has getDataAsync() finished yet?');

function displayDtat(data) {
    const articles = data.articles;

    document.getElementById('source').innerHTML = articles[0].source.name;

    const output = articles.map(article => {

        return '<article>
            <h4>${article.title}</h4>
            <p>${article.author}</p>
            <p>${article.publishedAt}</p>
            <img src=${article.urlToImage} alt='article image'>
            <p>${article.discription}</p>
            <p><a href='${article.url}' target='_blank'>Read More</a></p>
            </article>';
    });

    document.getElementById('articles').innerHTML = output.joint('');
}