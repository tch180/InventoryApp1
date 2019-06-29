# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Item.create({
   name: "Hammer",
   sku: 123789,
   price: 10.99,
   available: 30,
   description:"The best of the best when it comes to hammers",
   photo:"https://image.shutterstock.com/image-photo/single-metal-hammer-red-black-600w-1390938917.jpg" 
})
Item.create({
    name: "Boyobi Drill",
    sku: 234987,
    price: 99.99,
    available: 35,
    description: "You cant get any better then this when it comes to drills ",
    photo:"https://image.shutterstock.com/image-photo/cordless-drill-screwdriver-bit-on-600w-1048446001.jpg"
 })
 Item.create({
    name: "4x4 Lumber",
    sku: 312768,
    price: 2.99,
    available: 350,
    description: "pretreated lumber",
    photo:"https://image.shutterstock.com/image-photo/edge-six-cedar-two-by-600w-196600577.jpg"
 })