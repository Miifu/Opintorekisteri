const db = require('../database');

const arviointi = {
  getById: function(id, callback) {
    return db.query('select * from arviointi where id_arviointi=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into arviointi (arvosana, paivamaara) values(?,?)',
      [arviointi.arvosana, arviointi.paivamaara],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where id_arviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      "update arviointi set arvosana=?, paivamaara=? where id_arviointi=?",
      [arviointi.arvosana, arviointi.paivamaara, id],
      callback
    );
  }
};
module.exports = arviointi;