const router = require('express').Router();



let validator = require('validator');


const { sql, dbConnPoolPromise } = require('../database/db.js');

// Define SQL statements here for use in function below
// These are parameterised queries note @named parameters.
// Input parameters are parsed and set before queries are executed
// for json path - Tell MS SQL to return results as JSON
const SQL_SELECT_ALL = 'SELECT * FROM dbo.Product for json path;';

// without_array_wrapper - use for single result
const SQL_SELECT_BY_ID = 'SELECT * FROM dbo.Product WHERE ProductId = @id for json path, without_array_wrapper;';

// Second statement (Select...) returns inserted record identified by ProductId = SCOPE_IDENTITY()
const SQL_INSERT = 'INSERT INTO dbo.Product (CategoryId, ProductName, ProductDescription, ProductStock, ProductPrice) VALUES (@categoryId, @productName, @productDescription, @ProductStock, @ProductPrice); SELECT * from dbo.Product WHERE ProductId = SCOPE_IDENTITY();';
const SQL_UPDATE = 'UPDATE dbo.Product SET CategoryId = @categoryId, ProductName = @productName, ProductDescription = @productDescription, ProductStock = @ProductStock, ProductPrice = @ProductPrice WHERE ProductId = @id; SELECT * FROM dbo.Product WHERE ProductId = @id;';
const SQL_DELETE = 'DELETE FROM dbo.Product WHERE ProductId = @id;';

router.get('/', async (req, res) => {
    try{
        const pool = await dbConnPoolPromise
        const result = await pool.request()
            .query(SQL_SELECT_ALL);

            res.json(result.recordset[0]);


    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
})

// export
module.exports = router;