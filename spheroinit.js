var q = require('q');
var Cylon = require('cylon');

module.exports = function(port){
  return Setup(port);
};

function Setup(port){
  var d = q.defer();
  Cylon.robot({
    connections: {
      sphero: { adaptor: 'sphero', port: port }
    },

    devices: {
      sphero: { driver: 'sphero' }
    },

    work: function(my) {
      d.resolve(my);
    }
  }).start();

  return d.promise;
}

