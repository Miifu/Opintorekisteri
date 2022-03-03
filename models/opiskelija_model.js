const db = require('../database');

const opiskelija = {
  getById: function(id, callback) {
    return db.query('select * from opiskelija where id_opiskelija=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from opiskelija', callback);
  },
  add: function(opiskelija, callback) {
    return db.query(
      'insert into opiskelija (nimi,luokka) values(?,?)',
      [opiskelija.nimi, opiskelija.luokka],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opiskelija where id_opiskelija=?', [id], callback);
  },
  update: function(id, opiskelija, callback) {
    return db.query(
      "update opiskelija set nimi=?,luokka=? where id_opiskelija=?",
      [opiskelija.nimi, opiskelija.luokka, id],
      callback
    );
  }
};
module.exports = opiskelija;