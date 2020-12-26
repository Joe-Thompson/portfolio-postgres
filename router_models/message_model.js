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

async function delete_message(id) {
    try {
        return await db('messages').del().where('id', id);
    } catch (e) {
        return e
    }
}

module.exports = {
    add_message,
    find_by_id,
    get_messages,
    delete_message
}