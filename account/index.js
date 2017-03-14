const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/twitter-poc-accounts');

const Account = mongoose.model('Account', {
    email: { type: String, required: true, unique: true},
    passwords: [{ type: String, required: true }],
    permissions: [{ type: String }]
});

app.use(bodyParser.json())

app.post('/account/auth', (req, res) => {
    Account.findOne({
        email: req.body.email,
    }).then(d => {
        if (d.passwords[d.passwords.length - 1] == req.body.password) {
            return res.json(d)
        }

        return res.status(403).json({
            message: "Senha incorreta"
        })
    }).catch(d => {
        return res.status(403).json({
            message: "Email inexistente"
        })
    })
});

app.post('/account/', (req, res) => {
    const account = new Account(req.body);

    account.save().then(d => {
        return res.json(d)
    }).catch(d => {
        return res.json(d)
    })
});

app.get("*", (req, res) => res.send("AUTH SERVICE"))


app.listen(3000, () => console.log("Server up on 3000"))
