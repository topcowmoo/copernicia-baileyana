const express = require('express');
const cors = require('cors');
const records = require('./routes/record.js');

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
