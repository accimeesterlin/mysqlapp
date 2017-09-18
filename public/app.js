

console.log("Hello World!!!");

$.ajax({
			url:"/api",
			method:"GET"
		})
		.done(function (data) {
			console.log(data);
		})
		.fail(function (err) {
			console.log(err);
		});