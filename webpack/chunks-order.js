module.exports = (order) => {
  return (a, b) => {
    return order.indexOf(a.names[0]) - order.indexOf(b.names[0]);
  }
};
