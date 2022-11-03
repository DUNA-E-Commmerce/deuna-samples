db = {
  orders: [
    {
      orderId: "1",
      token: "token_test",
    },
  ],
};

async function list(table) {
  return db[table] || [];
}

async function get(table, orderId) {
  let col = await list(table);
  return col.filter((item) => item.orderId === orderId)[0] || null;
}
async function push(table, data) {
  if (!db[table]) {
    db[table] = [];
  }
  db[table].push(data);
  return true;
}

module.exports = {
  get,
  push,
};
