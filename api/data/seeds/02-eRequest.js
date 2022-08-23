exports.seed = function (knex) {
  return knex('eRequest').insert([
    {coordinates: "random", location_name: "randomname",  message: "randommessage" , alert_time: "2018-12-19 09:26:03.478039" , emergency_contact_name: "rorar"}
  ]);
};