const express = require('express');
const helpers = require('./message_model');

const router = express.Router();


router.get('/', async (req, res, next) => {
   try {
       const messages = await helpers.get_messages();
       res.status(200).json(messages)
   } catch (e) {
       return e
   }
});

router.post('/', async (req, res, next) => {
   try {
       let {
           email,
           subject,
           message
       } = req.body;

       const data = {
           email,
           subject,
           message
       };

       const new_message = await helpers.add_message(data);

       res.status(200).json(new_message)
   } catch (e) {
       return e
   }
});

module.exports = router;