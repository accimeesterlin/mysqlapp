

module.exports = function (app, path, connection) {

	connection.connect();

	app.get("/", function (req, res) {
		
		res.sendFile(path.join(__dirname , "/../views/index.html"));

	});

	app.get("/dashboard", function (req, res) {
		
		res.sendFile(path.join(__dirname , "/../views/dashboard.html"));

	});


	app.get("/api", function (req, res) {

		

		connection.query('SELECT * from users', function (error, results) {

  			if (error) throw error;

  			res.json(results);
		});
	});


	app.post("/receive", function (req, res) {

		var data = req.body;


		var query = 'INSERT INTO departments (department_name, over_head_costs, total_sales) ';
		var queryValue = "VALUES (?, ?, ?)";


		var allData = [data.department_name, data.over_head_costs, data.total_sales];


		connection.query(query + queryValue, allData, function (error, results) {

  			if (error) throw error;

  			res.json(results);
		});
		
	});

}


// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);








