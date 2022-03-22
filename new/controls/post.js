const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports._customers_list = async (req, res) => {
  try {
    console.log('rssse', req.body);
  } catch (err) {
    console.log('err............', err);
    res.json({ Error: err });
  }
};
