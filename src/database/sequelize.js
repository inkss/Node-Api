const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('weixin', 'root', '1q2w3e4r', {
  host: 'localhost',
  dialect: 'mariadb'
});

sequelize.authenticate()
  .then(() => {
    console.log('success')
  }).catch((e => {
  console.log('error', e)
}))

