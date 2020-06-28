# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all
Route.delete_all

demo = User.create!(username: 'demo', password: 'password', email: 'demo@email.com')
john = User.create!(username: 'john', password: 'password', email: 'john@email.com')
route1 = Route.create!(route_name: "Park run", route_description: "a nice day for a run in the park!", user_id: demo.id, route_data: '{"matchings":[{"confidence":0.9802630104472951,"geometry":{"coordinates":[[-122.418675,37.804911],[-122.424955,37.804093]],"type":"LineString"},"legs":[{"summary":"","weight":403,"duration":403,"steps":[],"distance":559.4}],"weight_name":"duration","weight":403,"duration":403,"distance":559.4}],"tracepoints":[{"alternatives_count":5,"waypoint_index":0,"matchings_index":0,"distance":2.13802814228339,"name":"","location":[-122.418675,37.804911]},{"alternatives_count":73,"waypoint_index":1,"matchings_index":0,"distance":2.4811607572865526,"name":"","location":[-122.424955,37.804093]}],"code":"Ok"}')