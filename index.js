const express = require('express')
const app = express();
const cors = require('cors')

const PORT = 5000

const db = require('./config')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.get('/', (req,res) => {
    res.send('this is work')
})

app.use('/user', require('./routes/users'))



if(db){
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
}