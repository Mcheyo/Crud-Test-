const User = require('../models/User')
const Song = require('../models/Song')



module.exports.create = async (input={}, { authenticatedUser }) => {
  const {title, duration, album, artist} = input 
  let song =  new Song({ 
     title: title,
     duration: duration,
     album: album,
     artist: authenticatedUser.id

     })
     await song.save()
     console.log(`Created Song => ${song}`)
  
    
  }

  module.exports.read = async (input , { authenticatedUser }) => {
     
    if(authenticatedUser.id){ 
      
      let song =  await Song.findById({ 
        _id: input
      })
      
      console.log(`Found Song => ${song}`)
  }


  }

  module.exports.update = async (input={}, { authenticatedUser }) => {
    const {id, newTitle, newAlbum} = input
    if({authenticatedUser}){ 
      let song = await Song.findById({ 
        _id: id 
      })

      song.title = newTitle
      song.album = newAlbum
      song.save()
      console.log(`UPDATED SONG => ${song}`)

    }
  }

  module.exports.delete = async (input, { authenticatedUser }) => {
    if(authenticatedUser){ 
      let song = await Song.findById({ 
        _id: input
      })
      song.delete()
      console.log("Song has been deleted")
    }
  
  }