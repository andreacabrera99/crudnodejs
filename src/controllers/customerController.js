function index(req, res) {
    res.render('tasks/index');
}

function create(req, res) {
    res.render('tasks/create');
}

function store(req,res ) {
    const data = (req.body);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO tasks SET ?', [data], (err, rows) =>{
        })
    })
}
module.exports = {
    index: index,
    create: create,
    store: store
}