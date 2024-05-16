/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("information", {
    id: { type: "SERIAL", primaryKey: true },
    title: { type: "VARCHAR(200)" },
    text: { type: "VARCHAR(200)" },
    text1: { type: "VARCHAR(300)" },
    text2: { type: "VARCHAR(200)" },
    text3: { type: "VARCHAR(200)" },
    text4: { type: "VARCHAR(200)" },
    text5: { type: "VARCHAR(200)" },
    criado_em: { type: "TIMESTAMP", default: pgm.func("current_timestamp") },
  });
};

exports.down = (pgm) => {};
