/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("payment", {
    id: { type: "SERIAL", primaryKey: true },
    image: { type: "VARCHAR(200)", notNull: true },
    alt: { type: "VARCHAR(200)", notNull: true },
    title: { type: "VARCHAR(100)", notNull: true },
    text: { type: "VARCHAR(200)", notNull: true },
    button: { type: "VARCHAR(100)", notNull: true },
    criado_em: { type: "TIMESTAMP", default: pgm.func("current_timestamp") },
  });
};

exports.down = (pgm) => {};
