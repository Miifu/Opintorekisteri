const db = require('../database');

const opintojakso = {
  getById: function(id, callback) {
    return db.query('select * from opintojakso where id_opintojakso=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from opintojakso', callback);
  },
  add: function(opintojakso, callback) {
    return db.query(
      'insert into opintojakso (k_nimi, k_koodi, k_laajuus) values(?,?,?)',
      [opintojakso.k_nimi, opintojakso.k_koodi, opintojakso.k_laajuus],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opintojakso where id_opintojakso=?', [id], callback);
  },
  update: function(id, opintojakso, callback) {
    return db.query(
      'update opintojakso set k_nimi=?, k_koodi=?, k_laajuus=? where id_opintojakso=?',
      [opintojakso.k_nimi, opintojakso.k_koodi, opintojakso.k_laajuus, id],
      callback
    );
  }
};
module.exports = opintojakso;