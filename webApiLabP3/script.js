const headers = new Headers();

const init = { method: 'GET', headers: headers, mode: 'cors', cache: 'default' };

const url = 'http://localhost:8080/product';

async function getDataAsync() {
    try {
        const response = await fetch(url, init);

        const json = await response.json();

        console.log(json);

        displayData(json);
    } catch (err) {
        console.log(err);
    }
}

function displayData(products) {


    const rows = products.map(product => {
        return `<tr>
                 <td>${product.ProductId}</td>
                 <td>${product.CategoryId}</td>
                 <td>${product.ProductName}</td>
                 <td>${product.ProductDescription}</td>
                 <td>${product.ProductStock}</td>
                 <td>${product.ProductPrice}</td>
                 </tr>`;
    });

    document.getElementById('productRows').innerHTML = rows.join('');
}

app.use((req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

getDataAsync();