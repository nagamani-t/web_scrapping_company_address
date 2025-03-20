const { collectionService } = require('./settings/collection-service')

module.exports = function (plop) {
  plop.setGenerator('collectionService', collectionService)
}
