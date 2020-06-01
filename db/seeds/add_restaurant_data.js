
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurants').insert([
        { id: 1, name: 'The Roost', place_id: 'ChIJhxYRNAv5a4cRCfII8tFxpuE', created_at: new Date()},
        { id: 2, name: 'Samples', place_id: 'ChIJSZDiAaD5a4cRfN7PORIoRTQ', created_at: new Date()},
        { id: 3, name: "Mike O'shays", place_id: 'ChIJk6gJLQv5a4cRUmVF_wm9igg', created_at: new Date()},
        { id: 4, name: "Rosalee's Pizza", place_id: 'ChIJs8oMLHX5a4cRRt16f2hPbUI', created_at: new Date()},
        { id: 5, name: 'Georgia Boys', place_id: 'ChIJM8w7H6H5a4cRNpimqp3EzTI', created_at: new Date()},
        { id: 6, name: "Jefe's", place_id: 'ChIJIzrCIaD5a4cRsFXxiyHpedo', created_at: new Date()},
        { id: 7, name: "Flavor of India", place_id: 'ChIJ_y2WMgv5a4cRIXOtZIxXXrs', created_at: new Date()},
        { id: 8, name: "Jonny's of Longmont", place_id: 'ChIJk0VRHKD5a4cRwyuzpIQ4N28', created_at: new Date()},
      ]);
    });
};