/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("product", {
    id: { type: "SERIAL", primaryKey: true },
    image: { type: "VARCHAR(200)", notNull: true },
    alt: { type: "VARCHAR(100)", notNull: true },
    text: { type: "VARCHAR(300)", notNull: true },
    value1: { type: "VARCHAR(100)", notNull: true },
    value2: { type: "VARCHAR(100)", notNull: true },
    parcelation: { type: "VARCHAR(100)", notNull: true },
    button: { type: "VARCHAR(100)", notNull: true },
    criado_em: { type: "TIMESTAMP", default: pgm.func("current_timestamp") },
  });
};

exports.down = (pgm) => {};
