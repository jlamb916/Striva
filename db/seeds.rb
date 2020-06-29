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
route1 = Route.create!(route_name: "Park run", route_description: "a nice day for a run in the park!", user_id: demo.id,
    route_data: '{"matchings":[{"confidence":0.9802630104472951,"geometry":{"coordinates":[[-122.418675,37.804911],[-122.424955,37.804093]],"type":"LineString"},"legs":[{"summary":"","weight":403,"duration":403,"steps":[],"distance":559.4}],"weight_name":"duration","weight":403,"duration":403,"distance":559.4}],"tracepoints":[{"alternatives_count":5,"waypoint_index":0,"matchings_index":0,"distance":2.13802814228339,"name":"","location":[-122.418675,37.804911]},{"alternatives_count":73,"waypoint_index":1,"matchings_index":0,"distance":2.4811607572865526,"name":"","location":[-122.424955,37.804093]}],"code":"Ok"}')

route2 = Route.create!(route_name: "Fort Mason Route", route_description: "Warmup", user_id: demo.id,
    route_data: '{"matchings":[{"confidence":0.9851871774358166,"geometry":{"coordinates":[[-122.425202,37.804142],[-122.431471,37.803352],[-122.431576,37.803388],[-122.431726,37.803502],[-122.432044,37.805071]],"type":"LineString"},"legs":[{"summary":"","weight":407.8,"duration":407.8,"steps":[],"distance":557.9},{"summary":"","weight":147.9,"duration":147.9,"steps":[],"distance":205.2}],"weight_name":"duration","weight":555.7,"duration":555.7,"distance":763.0999999999999}],"tracepoints":[{"alternatives_count":4,"waypoint_index":0,"matchings_index":0,"distance":11.254771778959945,"name":"Bay Street","location":[-122.425202,37.804142]},{"alternatives_count":6,"waypoint_index":1,"matchings_index":0,"distance":10.635464653270958,"name":"Laguna Street","location":[-122.431471,37.803352]},{"alternatives_count":91,"waypoint_index":2,"matchings_index":0,"distance":0.9748118497725545,"name":"Laguna Street","location":[-122.432044,37.805071]}],"code":"Ok"}')

route3 = Route.create!(route_name: "Beach Route", route_description: "beach run", user_id: demo.id,
    route_data: '{"matchings":[{"confidence":0.9729077982089133,"geometry":{"coordinates":[[-122.470458,37.808013],[-122.470338,37.807644],[-122.47009,37.807348],[-122.468282,37.805941],[-122.466728,37.804937],[-122.465183,37.804638],[-122.464479,37.804591],[-122.461509,37.804698],[-122.460971,37.804652],[-122.453613,37.805613],[-122.452463,37.805931]],"type":"LineString"},"legs":[{"summary":"","weight":492.4,"duration":492.4,"steps":[],"distance":684},{"summary":"","weight":772,"duration":772,"steps":[],"distance":1072.5}],"weight_name":"duration","weight":1264.4,"duration":1264.4,"distance":1756.5}],"tracepoints":[{"alternatives_count":1,"waypoint_index":0,"matchings_index":0,"distance":14.296936666127197,"name":"","location":[-122.470458,37.808013]},{"alternatives_count":1,"waypoint_index":1,"matchings_index":0,"distance":55.35941244570629,"name":"Golden Gate Promenade","location":[-122.464479,37.804591]},{"alternatives_count":69,"waypoint_index":2,"matchings_index":0,"distance":16.57439572810366,"name":"","location":[-122.452463,37.805931]}],"code":"Ok"}')

route4 = Route.create!(route_name: "sf bikeride", route_description: "cycling time!", user_id: demo.id,
    route_data: '{"matchings":[{"confidence":0.5928045879755698,"geometry":{"coordinates":[[-122.455565,37.77465],[-122.456307,37.774556],[-122.456496,37.775495],[-122.458461,37.775246],[-122.458488,37.775617],[-122.502556,37.773611],[-122.502423,37.771757]],"type":"LineString"},"legs":[{"summary":"","weight":1157.1,"duration":1148.7,"steps":[],"distance":4475.4}],"weight_name":"cyclability","weight":1157.1,"duration":1148.7,"distance":4475.4}],"tracepoints":[{"alternatives_count":0,"waypoint_index":0,"matchings_index":0,"distance":38.003899413259965,"name":"Fulton Street","location":[-122.455565,37.77465]},{"alternatives_count":29,"waypoint_index":1,"matchings_index":0,"distance":40.235941205940044,"name":"42nd Avenue","location":[-122.502423,37.771757]}],"code":"Ok"}')