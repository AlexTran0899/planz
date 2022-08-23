exports.up = async(knex) => {
    await knex.schema
    .createTable('eRequest', (eRequest) => {
        eRequest.increments('eRequest_id')
        eRequest.string('coordinates')
        eRequest.string('location_name')
        eRequest.string('message')
        eRequest.dateTime('alert_time')
        eRequest.string('emergency_contact_name')
    })
};

exports.down = async(knex) => {
  await knex.schema.dropTableIfExists('eRequest')
};
