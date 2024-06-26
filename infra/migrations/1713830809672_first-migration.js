/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("acessdates", {
    id: { type: "SERIAL", primaryKey: true },
    title: { type: "VARCHAR(100)", notNull: true },
    image: { type: "VARCHAR(100)", notNull: true, unique: true },
    text: { type: "VARCHAR(255)", notNull: true },
    button: { type: "VARCHAR(100)", notNull: true },
    criado_em: { type: "TIMESTAMP", default: pgm.func("current_timestamp") },
  });
};

exports.down = (pgm) => {};
