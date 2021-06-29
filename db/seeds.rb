# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
     User.create!(name: 'Sam Smith',
        email: 'sam@example.com',
        password: 'welcome',
        password_confirmation: 'welcome')

User.create!(name: 'Sam Smith',email: 'sam@example.com',password:'welcome'password_confirmation: 'welcome')
    