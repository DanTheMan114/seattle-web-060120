# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
 Painting.create!({
       painting_id: "59bd5a519c18db5297a32479",
       title: "Portrait of a Carthusian",
       image:
         "https://d32dm0rphc51dk.cloudfront.net/pVc7CubFzVlPhbErTAqyYg/medium.jpg",
         name: "Petrus Christus"
     })
     Painting.create({
       painting_id: "59bd5a4c275b247913821d2a",
       title: "Study of a Young Woman",
       image:
         "https://d32dm0rphc51dk.cloudfront.net/pLcp7hFbgtfYnmq-b_LXvg/medium.jpg",
         name: "Johannes Vermeer"
     })
     Painting.create({
       painting_id: "59bd5a2acb4c274d74388a33",
       title: "Portrait of Gerard de Lairesse",
       image:
         "https://d32dm0rphc51dk.cloudfront.net/6b4QduWxeA1kSnrifgm2Zw/medium.jpg",
         name: "Rembrandt van Rijn",
     })
     Painting.create({
       painting_id: "59bd59ee9c18db5297a32338",
  
       title: "Bust of Pseudo-Seneca",
       image:
         "https://d32dm0rphc51dk.cloudfront.net/RcoWk2PHQq6yqX7dpSyt-g/medium.jpg",
         name: "Peter Paul Rubens",
     })
     Painting.create({
       painting_id: "59bd59eba09a672fdae25803",
       title: "A Goldsmith in his Shop",
       image:
         "https://d32dm0rphc51dk.cloudfront.net/0-QXL43Ox2QgwqkYoCjAjg/medium.jpg",
        name: "Petrus Christus",
   })