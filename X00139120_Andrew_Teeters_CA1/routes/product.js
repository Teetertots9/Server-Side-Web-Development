// Import router package
const router = require('express').Router();

let validator = require('validator');

const { sql, dbConnPoolPromise } = require('../database/db.js');

const SQL_SELECT_ALL = 'SELECT * FROM dbo.Product for json path;';

// without_array_wrapper - use for single result

const SQL_SELECT_BY_ID = 'SELECT * FROM dbo.Product WHERE ProductId = @id for json path, without_array_wrapper;';
const SQL_SELECT_BY_CATID = 'SELECT * FROM dbo.Product WHERE CategoryId = @id for json path, without_array_wrapper;';
// Second statement (Select...) returns inserted record identified by ProductId = SCOPE_IDENTITY()



router.get('/', async (req, res) => {

    try {
        const pool = await dbConnPoolPromise
        const result = await pool.request()
            .query(SQL_SELECT_ALL);

        res.json(result.recordset[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }

});

router.get('/:id', async (req, res) => {

    const categoryId = req.params.id;

    if(!validator.isNumeric(categoryId, { no_symbols: true })) {
        res.json({ "error": "invalid id parameter"});
        return false;
    }

    try{
        const pool = await dbConnPoolPromise
        const result = await pool.request()

            .input('id', sql.Int, categoryId)
            .query(SQL_SELECT_BY_CATID);

            res.json(result.recordset)
    }catch (err) {
        res.status(500)
        res.send(err.message)
    }
}); 

// export
module.exports = router;