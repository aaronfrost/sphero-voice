var q = require('q');
var bootstrapDefer = q.defer();
var robot;

bootstrapDefer.promise.then(Setup);


require('./spheroinit')('/dev/tty.Sphero-YRR-AMP-SPP').then(function(_sphero){
  robot = _sphero;
});

module.exports = function(io){
  bootstrapDefer.resolve(io);
};

var heading = 0;
function Setup(io){
  io.on('connection', function(socket){
    console.log('connection', socket.id);

    socket.on('color', function(msg){
      console.log('color message: ', msg);
      if(robot) robot.sphero.setColor(msg);
    });
    socket.on('control', function(msg){
      console.log('control message: ', msg);
      if(!robot) return;
      switch(msg){
        case "left":
        case "right":
          robot.sphero.roll(0, turn(msg));
          break;
        case 'forward':
          robot.sphero.roll(60, heading);
          setTimeout(function(){robot.sphero.roll(0, heading);},1500);
          break;
      }
    });

    socket.on('disconnect', function(){
      console.log('disconnect', socket.id);
    });
  });
}

function turn(direction){
  var headings = {
    left: -30,
    right: 30
  };
  heading += headings[direction];
  if(heading < 0) heading = 360 + heading;
  if(heading >= 360) heading = heading - 360;
  console.log(heading);
  return heading;
}