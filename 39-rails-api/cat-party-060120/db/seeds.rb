# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cats = [
    {
        name:"Party Cat",
        imgUrl:"https://i.kym-cdn.com/entries/icons/facebook/000/005/517/party-cat-party-time.jpg",
        catchphrase:"Party on Party Cat",
        role_title: "Host"
    },
    {
        name:"Mittens",
        imgUrl:"https://i.pinimg.com/originals/89/9e/71/899e7132fd5125067051104e5e3e3073.jpg",
        catchphrase:"Party cat likes to party",
        role_title: "Guest"
    },
    {
        name:"Tod",
        imgUrl:"https://i.ytimg.com/vi/h6ExCwtgGe8/maxresdefault.jpg",
        catchphrase:"Yeah... I'm a dj.",
        role_title: "DJ"

    }
]

cats.each do |cat|
    role = Role.find_or_create_by(name:cat[:role_title])
    Cat.create(
        name:cat[:name],
        role: role,
        catchphrase: cat[:catchphrase],
        imgUrl: cat[:imgUrl]
    )
end 