const mongoose = require('mongoose');
const User = require('./models/User')
const Song = require('./models/Song')
const songRoutes = require('./routes/song_routes')


const {
  MONGO_URL
} = process.env;

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
};

mongoose.connect(MONGO_URL, options)
  .then(() => {
    console.log('MongoDB is connected');

  })
  .catch(err => {
    console.log(err);
  });




 testCreate = async () => { 
//Find the user 
  try { 
  let authenticatedUser = await User.findOne({
  username: "Cheyo"
})
  if(authenticatedUser){ 
    //If User is found create a new song object to send as an input 
    let songInput = new Song({ 
    title: 'Halo',
    duration: '3:30',
    album: 'Beyonce',
    artist: authenticatedUser.id
    })
    //Newly created song object will be console logged. 
    await songRoutes.create(songInput, {authenticatedUser})

 
   }
 
 }
  catch(error){
    console.error(error)
    }
  }


testRead = async () => { 
//Find the User
try{ 
  let authenticatedUser = await User.findOne({
    username: "Cheyo"
})
if(authenticatedUser){ 
  //Find a song to pass an Id to the back end 
let songRead = await Song.findOne({ 
  title: "Halo"
})
//song will either be found and returned or console logged 
songRead? songRoutes.read(songRead.id, {authenticatedUser}): console.log("Song couldnt be found.")
}
  }

  catch(error){ 
   console.error(error)
 }


}

testUpdate = async () => { 
  try{ 
    let authenticatedUser = await User.findOne({
      username: "Cheyo"
  })
  if(authenticatedUser){ 
    let songToUpdate = await Song.findOne({ 
      title: "Halo"
    })
   let updateObject = { 
     id : songToUpdate.id, 
     newTitle : "1234", 
     newAlbum : "ABCD"
   }
//an updated object will be sent to the route  as well as the song ID to be updated
   songToUpdate? songRoutes.update(updateObject, authenticatedUser): console.log("song couldnt be found")
  }
}
catch(error){ 
  console.error(error)
}
}

testDelete = async() => { 
  try{ 
    let authenticatedUser = await User.findOne({
      username: "Cheyo"
  })
  if(authenticatedUser){ 
    let songToDelete = await Song.findOne({ 
      title: "Halo"
    })
    songToDelete? songRoutes.delete(songToDelete.id, {authenticatedUser}) : console.log("song doesnt exist")
  }
}

catch(error){ 
  console.error(error)
}
}

    //testCreate()
    // testRead()
    //testUpdate()
    //testDelete()
    