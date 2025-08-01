// This is like Program.cs in MVC .NET
// Effectively we import and initialize express server here
// and then config it and run it.

const express = require('express');
const app = express();

// log every incoming request to the terminal.
app.use((req, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
}
);