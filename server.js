const express = require('express')
const fetch = require('node-fetch');
const app = express()
const port = 3001

app.get('/get_memes', (req, res) => {
    fetch("https://api.imgflip.com/get_memes")
        .then(r => r.json())
        .then(response => res.send({ memes: response.data.memes.filter(m => m.box_count <= 2) }))
});
app.get("/get_meme/:id", (req, res) => {
    fetch(`https://api.imgflip.com/caption_image?template_id=${req.params.id}&username=razpara&password=QAZxsw123&text0=${req.query.text0}&text1=${req.query.text1}&font=impact`,
        {
            method: "POST"
        }).then(r => r.json())
        .then(data => res.send(data));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})