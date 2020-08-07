# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all
Route.delete_all
Activity.delete_all

demo = User.create!(username: 'demo', password: 'password', email: 'demo@email.com')
john = User.create!(username: 'john', password: 'password', email: 'john@email.com')


route1 = Route.create!(route_name: "Park run", route_description: "a nice day for a run in the park!", user_id: demo.id,
    route_data: '{"matchings":[{"confidence":0.9802630104472951,"geometry":{"coordinates":[[-122.418675,37.804911],[-122.424955,37.804093]],"type":"LineString"},"legs":[{"summary":"","weight":403,"duration":403,"steps":[],"distance":559.4}],"weight_name":"duration","weight":403,"duration":403,"distance":559.4}],"tracepoints":[{"alternatives_count":5,"waypoint_index":0,"matchings_index":0,"distance":2.13802814228339,"name":"","location":[-122.418675,37.804911]},{"alternatives_count":73,"waypoint_index":1,"matchings_index":0,"distance":2.4811607572865526,"name":"","location":[-122.424955,37.804093]}],"code":"Ok"}')

route2 = Route.create!(route_name: "Fort Mason Route", route_description: "Warmup", user_id: demo.id,
    route_data: '{"matchings":[{"confidence":0.9817908316874712,"geometry":{"coordinates":[[-122.499619,37.718547],[-122.499352,37.718038],[-122.498891,37.717522],[-122.498359,37.717138],[-122.497678,37.71682],[-122.494426,37.715853],[-122.493171,37.715355],[-122.492271,37.714663],[-122.491137,37.713274],[-122.489437,37.712134]],"type":"LineString"},"legs":[{"summary":"","weight":47.8,"duration":39.6,"steps":[],"distance":61.6},{"summary":"","weight":16.9,"duration":16.9,"steps":[],"distance":70.4},{"summary":"","weight":15.2,"duration":15.2,"steps":[],"distance":63.5},{"summary":"","weight":16.8,"duration":16.8,"steps":[],"distance":69.7},{"summary":"","weight":73.5,"duration":73.5,"steps":[],"distance":305.7},{"summary":"","weight":29.8,"duration":29.8,"steps":[],"distance":123.9},{"summary":"","weight":26.6,"duration":26.6,"steps":[],"distance":110.8},{"summary":"","weight":44.1,"duration":44.1,"steps":[],"distance":184.1},{"summary":"","weight":47,"duration":47,"steps":[],"distance":196.1}],"weight_name":"cyclability","weight":317.7,"duration":309.5,"distance":1185.8}],"tracepoints":[{"alternatives_count":0,"waypoint_index":0,"matchings_index":0,"distance":0,"name":"John Muir Drive","location":[-122.499619,37.718547]},{"alternatives_count":0,"waypoint_index":1,"matchings_index":0,"distance":0,"name":"John Muir Drive","location":[-122.499352,37.718038]},{"alternatives_count":0,"waypoint_index":2,"matchings_index":0,"distance":0,"name":"John Muir Drive","location":[-122.498891,37.717522]},{"alternatives_count":0,"waypoint_index":3,"matchings_index":0,"distance":0,"name":"John Muir Drive","location":[-122.498359,37.717138]},{"alternatives_count":0,"waypoint_index":4,"matchings_index":0,"distance":0,"name":"John Muir Drive","location":[-122.497678,37.71682]},{"alternatives_count":1,"waypoint_index":5,"matchings_index":0,"distance":0,"name":"John Muir Drive","location":[-122.494426,37.715853]},{"alternatives_count":1,"waypoint_index":6,"matchings_index":0,"distance":0,"name":"John Muir Drive","location":[-122.493171,37.715355]},{"alternatives_count":1,"waypoint_index":7,"matchings_index":0,"distance":0,"name":"John Muir Drive","location":[-122.492271,37.714663]},{"alternatives_count":1,"waypoint_index":8,"matchings_index":0,"distance":0,"name":"John Muir Drive","location":[-122.491137,37.713274]},{"alternatives_count":47,"waypoint_index":9,"matchings_index":0,"distance":0,"name":"John Muir Drive","location":[-122.489437,37.712134]}],"code":"Ok"}')


route3 = Route.create!(route_name: "Beach Route", route_description: "beach run", user_id: demo.id,
    route_data: '{"matchings":[{"confidence":0.9729077982089133,"geometry":{"coordinates":[[-122.470458,37.808013],[-122.470338,37.807644],[-122.47009,37.807348],[-122.468282,37.805941],[-122.466728,37.804937],[-122.465183,37.804638],[-122.464479,37.804591],[-122.461509,37.804698],[-122.460971,37.804652],[-122.453613,37.805613],[-122.452463,37.805931]],"type":"LineString"},"legs":[{"summary":"","weight":492.4,"duration":492.4,"steps":[],"distance":684},{"summary":"","weight":772,"duration":772,"steps":[],"distance":1072.5}],"weight_name":"duration","weight":1264.4,"duration":1264.4,"distance":1756.5}],"tracepoints":[{"alternatives_count":1,"waypoint_index":0,"matchings_index":0,"distance":14.296936666127197,"name":"","location":[-122.470458,37.808013]},{"alternatives_count":1,"waypoint_index":1,"matchings_index":0,"distance":55.35941244570629,"name":"Golden Gate Promenade","location":[-122.464479,37.804591]},{"alternatives_count":69,"waypoint_index":2,"matchings_index":0,"distance":16.57439572810366,"name":"","location":[-122.452463,37.805931]}],"code":"Ok"}')

route4 = Route.create!(route_name: "sf bikeride", route_description: "cycling time!", user_id: demo.id,
    route_data: '{"matchings":[{"confidence":0.5928045879755698,"geometry":{"coordinates":[[-122.455565,37.77465],[-122.456307,37.774556],[-122.456496,37.775495],[-122.458461,37.775246],[-122.458488,37.775617],[-122.502556,37.773611],[-122.502423,37.771757]],"type":"LineString"},"legs":[{"summary":"","weight":1157.1,"duration":1148.7,"steps":[],"distance":4475.4}],"weight_name":"cyclability","weight":1157.1,"duration":1148.7,"distance":4475.4}],"tracepoints":[{"alternatives_count":0,"waypoint_index":0,"matchings_index":0,"distance":38.003899413259965,"name":"Fulton Street","location":[-122.455565,37.77465]},{"alternatives_count":29,"waypoint_index":1,"matchings_index":0,"distance":40.235941205940044,"name":"42nd Avenue","location":[-122.502423,37.771757]}],"code":"Ok"}')


route5 = Route.create!(route_name: "nyc biking", route_description: "a nice ride during the day", user_id: demo.id,
    route_data: '{"matchings":[{"confidence":0.9802614080903042,"geometry":{"coordinates":[[-122.417863,37.805096],[-122.424926,37.804177]],"type":"LineString"},"legs":[{"summary":"","weight":310.1,"duration":159,"steps":[],"distance":629.1}],"weight_name":"cyclability","weight":310.1,"duration":159,"distance":629.1}],"tracepoints":[{"alternatives_count":5,"waypoint_index":0,"matchings_index":0,"distance":15.061536273714449,"name":"Bay Street","location":[-122.417863,37.805096]},{"alternatives_count":71,"waypoint_index":1,"matchings_index":0,"distance":18.666056605124762,"name":"Bay Street","location":[-122.424926,37.804177]}],"code":"Ok"}');

route7 = Route.create!(route_name: "hiking to 7-11", route_description: "i hiked to get a slurpy", user_id: demo.id,
    route_data: '{"matchings":[{"confidence":0.5426496328511495,"geometry":{"coordinates":[[-122.466758,37.772729],[-122.466752,37.772566],[-122.467998,37.772526],[-122.469021,37.772326],[-122.471084,37.771043],[-122.472009,37.770711],[-122.472738,37.770833],[-122.475062,37.771657],[-122.47569,37.771708],[-122.477639,37.771356],[-122.479924,37.770497],[-122.480495,37.771134],[-122.481027,37.771438],[-122.48258,37.771797],[-122.483719,37.771814],[-122.484431,37.772252],[-122.487612,37.772026],[-122.489822,37.772098],[-122.491983,37.771771],[-122.492746,37.772006],[-122.495061,37.771876],[-122.495638,37.77168]],"type":"LineString"},"legs":[{"summary":"","weight":889.3,"duration":1173.8,"steps":[],"distance":2766.2}],"weight_name":"cyclability","weight":889.3,"duration":1173.8,"distance":2766.2}],"tracepoints":[{"alternatives_count":2,"waypoint_index":0,"matchings_index":0,"distance":74.42686815360544,"name":"","location":[-122.466758,37.772729]},{"alternatives_count":39,"waypoint_index":1,"matchings_index":0,"distance":64.04066940014499,"name":"","location":[-122.495638,37.77168]}],"code":"Ok"}')

route6 = Route.create!(route_name: "walk to school", route_description: "i routed my walk to school", user_id: demo.id,
    route_data: '{"matchings":[{"confidence":0.984196739204709,"geometry":{"coordinates":[[-122.478303,37.799947],[-122.478209,37.800254],[-122.477673,37.800955],[-122.477345,37.801647],[-122.476716,37.802259],[-122.475869,37.803555],[-122.475707,37.803909],[-122.475663,37.804326],[-122.475629,37.804925],[-122.4755,37.805303],[-122.475233,37.805371],[-122.474853,37.805805]],"type":"LineString"},"legs":[{"summary":"","weight":13,"duration":8.4,"steps":[],"distance":35.3},{"summary":"","weight":23.2,"duration":21.8,"steps":[],"distance":91.2},{"summary":"","weight":19.8,"duration":19.8,"steps":[],"distance":82.3},{"summary":"","weight":21.2,"duration":21.2,"steps":[],"distance":88.1},{"summary":"","weight":39,"duration":39,"steps":[],"distance":162.3},{"summary":"","weight":10.1,"duration":10.1,"steps":[],"distance":42},{"summary":"","weight":11.3,"duration":11.3,"steps":[],"distance":46.6},{"summary":"","weight":16,"duration":16,"steps":[],"distance":66.7},{"summary":"","weight":10.4,"duration":10.4,"steps":[],"distance":43.6},{"summary":"","weight":53.7,"duration":23.7,"steps":[],"distance":24.7},{"summary":"","weight":54.2,"duration":54.2,"steps":[],"distance":60.4}],"weight_name":"cyclability","weight":271.9,"duration":235.89999999999998,"distance":743.2}],"tracepoints":[{"alternatives_count":0,"waypoint_index":0,"matchings_index":0,"distance":0,"name":"Lincoln Boulevard","location":[-122.478303,37.799947]},{"alternatives_count":0,"waypoint_index":1,"matchings_index":0,"distance":0,"name":"Lincoln Boulevard","location":[-122.478209,37.800254]},{"alternatives_count":0,"waypoint_index":2,"matchings_index":0,"distance":0,"name":"Lincoln Boulevard","location":[-122.477673,37.800955]},{"alternatives_count":0,"waypoint_index":3,"matchings_index":0,"distance":0,"name":"Lincoln Boulevard","location":[-122.477345,37.801647]},{"alternatives_count":0,"waypoint_index":4,"matchings_index":0,"distance":0,"name":"Lincoln Boulevard","location":[-122.476716,37.802259]},{"alternatives_count":0,"waypoint_index":5,"matchings_index":0,"distance":0,"name":"Lincoln Boulevard","location":[-122.475869,37.803555]},{"alternatives_count":0,"waypoint_index":6,"matchings_index":0,"distance":0,"name":"Lincoln Boulevard","location":[-122.475707,37.803909]},{"alternatives_count":1,"waypoint_index":7,"matchings_index":0,"distance":0,"name":"Lincoln Boulevard","location":[-122.475663,37.804326]},{"alternatives_count":1,"waypoint_index":8,"matchings_index":0,"distance":0,"name":"Lincoln Boulevard","location":[-122.475629,37.804925]},{"alternatives_count":1,"waypoint_index":9,"matchings_index":0,"distance":0,"name":"Lincoln Boulevard","location":[-122.4755,37.805303]},{"alternatives_count":2,"waypoint_index":10,"matchings_index":0,"distance":0,"name":"","location":[-122.475233,37.805371]},{"alternatives_count":5,"waypoint_index":11,"matchings_index":0,"distance":0,"name":"","location":[-122.474853,37.805805]}],"code":"Ok"}')
    
    

activity1 = Activity.create!(
    title: "Morning Run", sport: "Run",
    duration: "25", distance: 3.2,
    elevation: 45, description: "Going on a morning Run",
    user_id: demo.id, route_id: route1.id
)

activity2 = Activity.create!(
    title: "Afternoon Run", sport: "Run",
    duration: "40", distance: 1.2,
    elevation: 92, description: "Going on a morning Run",
    user_id: demo.id, route_id: route2.id
)
activity3 = Activity.create!(
    title: "Short Bikeride", sport: "Ride",
    duration: "25", distance: 5.3,
    elevation: 19, description: "Going on a morning Run",
    user_id: demo.id, route_id: route3.id
)
activity4 = Activity.create!(
    title: "Quick cycling warmup", sport: "Ride",
    duration: "10", distance: 0.5,
    elevation: 320, description: "Warmup bike ride",
    user_id: demo.id, route_id: route4.id
)
activity5 = Activity.create!(
    title: "Marathon training", sport: "Ride",
    duration: "30", distance: 3.5,
    elevation: 300, description: "Training for the upcoming marathon",
    user_id: demo.id, route_id: route1.id
)
activity6 = Activity.create!(
    title: "Preworkout run", sport: "Run",
    duration: "52", distance: 2.1,
    elevation: 60, description: "Going on a Run before the gym",
    user_id: demo.id, route_id: route5.id
)
activity7 = Activity.create!(
    title: "Afternoon Ride", sport: "Ride",
    duration: "25", distance: 1.62,
    elevation: 102, description: "Going on an Afternoon Ride",
    user_id: demo.id, route_id: route6.id
)
activity8 = Activity.create!(
    title: "Latenight run", sport: "Run",
    duration: "40", distance: 2.3,
    elevation: 41, description: "Going on a Latenight Run",
    user_id: demo.id, route_id: route7.id
)