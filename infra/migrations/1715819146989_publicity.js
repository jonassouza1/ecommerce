/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("publicity", {
    id: { type: "SERIAL", primaryKey: true },
    text: { type: "VARCHAR(300)", notNull: true },
    image: { type: "VARCHAR(300)", notNull: true },
    criado_em: { type: "TIMESTAMP", default: pgm.func("current_timestamp") },
  });
};

exports.down = (pgm) => {};
