const express = require('express');
const dotenv = require('dotenv').config()
const cors = require('cors');
const { chats } = require('./data/data')
const connectDB = require('./db/connect')
const userRouter = require('./routes/userRoutes')
const app = express();
const PORT = process.env.PORT || 5000
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('API running ....')
})
app.use('/api/user', userRouter)
// app.get('/chat', (req, res) => {
//     res.send(chats);
// })
// app.get('/chat/:id', (req, res) => {
//     res.send(chats.find(c => c._id === req.params.id))
// })
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, (req, res) => { console.log(`Server running on port ${PORT} ...`) })
    } catch (error) {
        console.log('Error', error)
    }

}
start();