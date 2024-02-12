const { Server } = require("socket.io");

const connectSocekt = () => {

  const io = new Server({
    cors : {
        origin : '*',
        methods : ['POST','GET'],
        credentials : true
    }
  }
    
  );

  io.on("connection", socket => {
    console.log(socket.id);
  });

  io.listen(3000);
};

module.exports = {
    connectSocekt
}