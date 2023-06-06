const bcrypt = require('bcryptjs');
const user = require('../../../pkg/user');
const jwt = require('jsonwebtoken');
const config = require('../../../pkg/config');

exports.signup = async (req, res) => {    
    try {

        let {email, password} = req.body;
        let u = await user.findOne({email});
        if(u) {
            return res.status(409).send('This email is already used');
        } 

        if(
            password.length === 0 ||  
            password !== u.password 
        ) {
            return res.status(400).send('Did you forget your password?');
        }
        
        password = bcrypt.hashSync({password});

        let newUser = user.create(req.body);
        return res.status(201).send(newUser);
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal server error');
    }
};

const login = async (req, res) => {
    try {
        let {email, password} = req.body;
        let u = await user.findOne({email});
        if (!u) {
            return res.status(400).send('Wrong email or password');
        }
    
        if(!bcrypt.compareSync(password, u.password)) {
            return res.status(400).send('Wrong email or password');
        }

        let payload = {
            uid: u._id,
            email: u.email,
            full_name: u.full_name
        };
        let token = jwt.sign(payload, config.get('security').jwt_secret);
        return res.status(200).send({token});
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal server error');
    }
};