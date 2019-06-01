const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect Database
connectDB();

// Init Middleware
app.use(express.json({
    extended: false
}));

app.get('/', (req, res) => res.send('API Running'));

//Define Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))
app.use('/api/scrape', require('./routes/api/scrape'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))























// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const passport = require('passport');

// const users = require('./routes/api/users');
// const profile = require('./routes/api/profile');
// const posts = require('./routes/api/posts');

// const app = express();

// // Body parser middleware
// app.use(bodyParser.urlencoded({
//     extended: false
// }));
// app.use(bodyParser.json());

// // DB configuration
// const db = require('./config/keys').mongoURI

// // Connect to MongoDB
// mongoose
//     .connect(db, {
//         useNewUrlParser: true
//     })
//     .then(() => console.log('DB Connected'))
//     .catch(err => console.log(err))



// // Passport middleware
// app.use(passport.initialize());
// // Passport Config
// require('./config/passport')(passport);

// // Use Routes

// app.use('/api/users', users);
// app.use('/api/profile', profile);
// app.use('/api/posts', posts);

// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server is running on port ${port}`));