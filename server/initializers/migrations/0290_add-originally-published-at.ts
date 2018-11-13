import * as Sequelize from 'sequelize'
async function up (utils: {
  transaction: Sequelize.Transaction,
  queryInterface: Sequelize.QueryInterface,
  sequelize: Sequelize.Sequelize
}): Promise<void> { //should this be Promise<any> ?
  {
    const data = {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    }
    await utils.queryInterface.addColumn('video', 'originalPublishedAt', data)
  }
}
function down (options) {
  throw new Error('Not implemented.')
}
export {
  up,
  down
}
