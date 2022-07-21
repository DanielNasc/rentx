import express from 'express'

const PORT = process.env.PORT || 3000
const app = express()

app.get('/', (_, res) => {
  res.send('Hello Rentx!')
})

app.listen(PORT, () => console.log(`Server runnig at port ${PORT}`))
