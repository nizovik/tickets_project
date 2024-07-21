const { Client } = require('pg');

const client = new Client({
    user: 'ticketN1',
    host: 'localhost',
    database: 'ticketing_system',
    password: '3700vitok',
    port: 5432,
});

client.connect()
    .then(() => {
        console.log('Connected to the database successfully!');
        client.end();
    })
    .catch(err => {
        console.error('Error connecting to the database:', err);
        client.end();
    });
