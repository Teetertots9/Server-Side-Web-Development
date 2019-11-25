const headers = new Headers();

const init = {method: 'GET', headers: headers, mode: 'cors', cache: 'default' };

const url = `http://localhost:8080/product`;

async function getDataAsync() {
    try{
        const response = await fetch(url, init);

        const json = await response.json();

        console.log(json);

        displayData(json);
        displayCategories(json);

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
            <td>&euro;${product.ProductPrice}</td>
            </tr>`;
    });

    document.getElementById('productRows').innerHTML = rows.join(' ');
}

function displayCategories(categories) {
    const rows = categories.map(category => {
return `
        <<a href="https://localhost:8080/products" class="list-group-item list-group-item-action">Show All</a>
        <a href="https://localhost:8080/products/1" class="list-group-item list-group-item-action">${category.CategoryName}</a>
        <a href="https://localhost:8080/products/2" class="list-group-item list-group-item-action">${category.CategoryName}</a>
        <a href="https://localhost:8080/products/3" class="list-group-item list-group-item-action">${category.CategoryName}</a>
        <a href="https://localhost:8080/products/4" class="list-group-item list-group-item-action">${category.CategoryName}</a>
        <a href="https://localhost:8080/products/5" class="list-group-item list-group-item-action">${category.CategoryName}</a>
        <a href="https://localhost:8080/products/6" class="list-group-item list-group-item-action">${category.CategoryName}</a>
        <a href="https://localhost:8080/products/7" class="list-group-item list-group-item-action">${category.CategoryName}</a>`;
    });

    document.getElementById('list-group').innerHTML = rows.join('');
}

getDataAsync();