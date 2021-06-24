const { Router } = require("express");
const  router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "Yisus",
        "website": "Yisus.com"
    }
    res.json(data);
});

router.get('/', (req, res) =>{ 

    console.log('Hola desde el main de la pagina principal');
    res.send('<h1>Hola desde la pgina principal /</h1>');
})

router.get('/api', (req , res) => {
    res.send('<h1>API Docs<h1>')
})



module.exports = router;