
exports.up = async function(knex) {
  await knex.schema.createTable('messages', (table) => {
      table.increments('id');
      table.string('email');
      table.string('subject');
      table.string('message');
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('messages');
};
