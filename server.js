const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/utodocs'));

// app.get('/*', (req, res) =>
//     res.sendFile('index.html', {root: 'dist/utodocs/'}, obj),
// );

app.get('/*', (req, res) =>
    res.sendFile(path.join(__dirname, 'dist/utodocs/index.html') )
);

// Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});