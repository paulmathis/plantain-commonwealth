const mongoose = require('mongoose');

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

mongoose.set('debug', process.env.DEVELOPMENT || false);
mongoose.connect(`mongodb://${dbUser}:${dbPass}@ds237979.mlab.com:37979/plantain-commonwealth`);
