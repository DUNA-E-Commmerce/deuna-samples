db = {
  orders: [
    {
      orderId: "some_id",
      token: "some_token",
    },
  ],
  fraudIds: [
    {
      orderId: "1",
      fraudId: {
        session_Id: "some_session_id",
        device_Id: "some_device_id",
      },
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
  list,
};
