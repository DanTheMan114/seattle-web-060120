Art.destroy_all
Artist.destroy_all
User.destroy_all

ix = User.create(username:"ix", password:"123")
hal = User.create(username:"hal", password:"123")



ix_art = [
    {
        "id":99,
        "title":"The Meeting of Abraham and Melchizedek",
        "image":"https://d32dm0rphc51dk.cloudfront.net/wJwEzZf3FPlg65SVoYnvyQ/medium.jpg",
        "slug":"peter-paul-rubens-the-meeting-of-abraham-and-melchizedek",
        "date":"ca. 1626",
        "dimensions":{
           "width":32.4375,
           "height":25.8125
        },
        "votes":26,
        "artist":{
           "id":4,
           "name":"Peter Paul Rubens",
           "hometown":"Siegen, Westphalia",
           "birthday":"1577",
           "deathday":"1640"
        },
        "museum":{
           "id":2,
           "name":"National Gallery of Art, Washington D.C."
        }
     },
     {
        "id":100,
        "title":"Christ Presented to the People: Oblong Plate",
        "image":"https://d32dm0rphc51dk.cloudfront.net/zycWkWw__u36V6VAWW_e7Q/medium.jpg",
        "slug":"rembrandt-van-rijn-christ-presented-to-the-people-oblong-plate",
        "date":"1655",
        "dimensions":{
           "width":17.8125,
           "height":13.6875
        },
        "votes":41,
        "artist":{
           "id":3,
           "name":"Rembrandt van Rijn",
           "hometown":"Leiden, Netherlands",
           "birthday":"1606",
           "deathday":"1669"
        },
        "museum":{
           "id":2,
           "name":"National Gallery of Art, Washington D.C."
        }
     }
]

hal_art = [
    {
        "id":14,
        "title":"Portrait of a Flemish Lady",
        "image":"https://d32dm0rphc51dk.cloudfront.net/84kbp21trAp1_h2P8tpoZg/medium.jpg",
        "slug":"anthony-van-dyck-portrait-of-a-flemish-lady",
        "date":"Probably 1618",
        "dimensions":{
           "width":35.4375,
           "height":48.4375
        },
        "votes":25,
        "artist":{
           "id":7,
           "name":"Anthony van Dyck",
           "hometown":"Antwerp, Belgium",
           "birthday":"1599",
           "deathday":"1641"
        },
        "museum":{
           "id":2,
           "name":"National Gallery of Art, Washington D.C."
        }
     },
]

hal_art.map do |art|
    hal = User.find_by(username:'hal')
    if Artist.find_by(name:art[:artist][:name]) == nil
        artist = Artist.create(name:art[:artist][:name])
        Art.create(title:art[:title], image:art[:image], artist:artist, user:hal)
    else 
        artist = Artist.find_by(name:art[:artist][:name])
        Art.create(title:art[:title], image:art[:image], artist:artist, user:hal)
    end
end


ix_art.map do |art|
    ix = User.find_by(username:'ix')
    if Artist.find_by(name:art[:artist][:name]) == nil
        artist = Artist.create(name:art[:artist][:name])
        Art.create(title:art[:title], image:art[:image], artist:artist, user:ix)
    else 
        artist = Artist.find_by(name:art[:artist][:name])
        Art.create(title:art[:title],image:art[:image], artist:artist, user:ix)
    end
end