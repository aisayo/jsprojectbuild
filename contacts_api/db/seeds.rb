# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


business = Category.create(name: 'business')
family = Category.create(name: 'family')
friend = Category.create(name: 'friend')


Contact.create([
    {name: "aysan", email: "aisayo@123.com", number: '222-222-1111', category: business},
    {name: "amanda", email: "amanda@123.com", number: '222-222-3333', category: family},
    {name: "dave", email: "dave@123.com", number: '222-222-4444', category: friend},
])