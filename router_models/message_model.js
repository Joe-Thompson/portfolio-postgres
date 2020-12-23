const db = require('../db/config');

async function add_message(message) {
    try {
        const [id] = await db('messages').insert(message);
        return find_by_id(id);
    } catch (e) {
        return e
    }
}

async function find_by_id(id) {
    try {
        return db('messages').where('id', id).select('*');
        // adding in comments here to help understand code
    } catch (e) {
        return e
    }
}

async function get_messages() {
    try {
        return db('messages');
    } catch (e) {
        return e
    }
}

module.exports = {
    add_message,
    find_by_id,
    get_messages
}