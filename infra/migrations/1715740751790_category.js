/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("category", {
    id: { type: "SERIAL", primaryKey: true },
    image: { type: "VARCHAR(100)", notNull: true },
    title: { type: "VARCHAR(100)", notNull: true, unique: true },
    image1: { type: "VARCHAR(100)", notNull: true },
    title1: { type: "VARCHAR(100)", notNull: true },
    image2: { type: "VARCHAR(100)", notNull: true },
    title2: { type: "VARCHAR(100)", notNull: true },
    criado_em: { type: "TIMESTAMP", default: pgm.func("current_timestamp") },
  });
};

exports.down = (pgm) => {};
