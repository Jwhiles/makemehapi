module.exports = function(context) {
  let name = String(context.data.root.query.name);
  let suffix = String(context.data.root.query.suffix);
  return name + suffix;
};
