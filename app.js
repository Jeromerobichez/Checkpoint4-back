const connection = require('./db-config');

connection.connect((err) => {
    if (err) {
        console.error('sorry problem in the connection' + err.stack);
    }
    else {
        console.log('yeah bro ! connected to db with threadId : ' = connection.threadId);
    }
});

connection.query('SELECT * FROM type', (err, res) => {
    console.log(err, res)
});
