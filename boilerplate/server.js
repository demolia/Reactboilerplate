const express = require('express')

// create app
//testing github 
let app = express()

app.use(express.static("public"))


app.listen(3000, function () {
	console.log("App is running on 3000")
})


// ABC