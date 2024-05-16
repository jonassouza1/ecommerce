/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("image", {
    id: { type: "SERIAL", primaryKey: true },
    title: { type: "VARCHAR(200)", notNull: true },
    url: { type: "VARCHAR(300)", notNull: true },
    altt: { type: "VARCHAR(200)", notNull: true },
    img: { type: "VARCHAR(300)", notNull: true },
    alt: { type: "VARCHAR(200)", notNull: true },
    img1: { type: "VARCHAR(300)", notNull: true },
    alt1: { type: "VARCHAR(200)", notNull: true },
    img2: { type: "VARCHAR(300)", notNull: true },
    alt2: { type: "VARCHAR(200)", notNull: true },
    img3: { type: "VARCHAR(300)", notNull: true },
    alt3: { type: "VARCHAR(200)", notNull: true },
    criado_em: { type: "TIMESTAMP", default: pgm.func("current_timestamp") },
  });
};

exports.down = (pgm) => {};
