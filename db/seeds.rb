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
    route_data: '{"matchings":[{"confidence":0.9851871774358166,"geometry":{"coordinates":[[-122.425202,37.804142],[-122.431471,37.803352],[-122.431576,37.803388],[-122.431726,37.803502],[-122.432044,37.805071]],"type":"LineString"},"legs":[{"summary":"","weight":407.8,"duration":407.8,"steps":[],"distance":557.9},{"summary":"","weight":147.9,"duration":147.9,"steps":[],"distance":205.2}],"weight_name":"duration","weight":555.7,"duration":555.7,"distance":763.0999999999999}],"tracepoints":[{"alternatives_count":4,"waypoint_index":0,"matchings_index":0,"distance":11.254771778959945,"name":"Bay Street","location":[-122.425202,37.804142]},{"alternatives_count":6,"waypoint_index":1,"matchings_index":0,"distance":10.635464653270958,"name":"Laguna Street","location":[-122.431471,37.803352]},{"alternatives_count":91,"waypoint_index":2,"matchings_index":0,"distance":0.9748118497725545,"name":"Laguna Street","location":[-122.432044,37.805071]}],"code":"Ok"}')

route3 = Route.create!(route_name: "Beach Route", route_description: "beach run", user_id: demo.id,
    route_data: '{"matchings":[{"confidence":0.9729077982089133,"geometry":{"coordinates":[[-122.470458,37.808013],[-122.470338,37.807644],[-122.47009,37.807348],[-122.468282,37.805941],[-122.466728,37.804937],[-122.465183,37.804638],[-122.464479,37.804591],[-122.461509,37.804698],[-122.460971,37.804652],[-122.453613,37.805613],[-122.452463,37.805931]],"type":"LineString"},"legs":[{"summary":"","weight":492.4,"duration":492.4,"steps":[],"distance":684},{"summary":"","weight":772,"duration":772,"steps":[],"distance":1072.5}],"weight_name":"duration","weight":1264.4,"duration":1264.4,"distance":1756.5}],"tracepoints":[{"alternatives_count":1,"waypoint_index":0,"matchings_index":0,"distance":14.296936666127197,"name":"","location":[-122.470458,37.808013]},{"alternatives_count":1,"waypoint_index":1,"matchings_index":0,"distance":55.35941244570629,"name":"Golden Gate Promenade","location":[-122.464479,37.804591]},{"alternatives_count":69,"waypoint_index":2,"matchings_index":0,"distance":16.57439572810366,"name":"","location":[-122.452463,37.805931]}],"code":"Ok"}')

route4 = Route.create!(route_name: "sf bikeride", route_description: "cycling time!", user_id: demo.id,
    route_data: '{"matchings":[{"confidence":0.5928045879755698,"geometry":{"coordinates":[[-122.455565,37.77465],[-122.456307,37.774556],[-122.456496,37.775495],[-122.458461,37.775246],[-122.458488,37.775617],[-122.502556,37.773611],[-122.502423,37.771757]],"type":"LineString"},"legs":[{"summary":"","weight":1157.1,"duration":1148.7,"steps":[],"distance":4475.4}],"weight_name":"cyclability","weight":1157.1,"duration":1148.7,"distance":4475.4}],"tracepoints":[{"alternatives_count":0,"waypoint_index":0,"matchings_index":0,"distance":38.003899413259965,"name":"Fulton Street","location":[-122.455565,37.77465]},{"alternatives_count":29,"waypoint_index":1,"matchings_index":0,"distance":40.235941205940044,"name":"42nd Avenue","location":[-122.502423,37.771757]}],"code":"Ok"}')


route5 = Route.create!(route_name: "nyc biking", route_description: "a nice ride during the day", user_id: demo.id,
    route_data: '{"matchings":[{"confidence":0.9802614080903042,"geometry":{"coordinates":[[-122.417863,37.805096],[-122.424926,37.804177]],"type":"LineString"},"legs":[{"summary":"","weight":310.1,"duration":159,"steps":[],"distance":629.1}],"weight_name":"cyclability","weight":310.1,"duration":159,"distance":629.1}],"tracepoints":[{"alternatives_count":5,"waypoint_index":0,"matchings_index":0,"distance":15.061536273714449,"name":"Bay Street","location":[-122.417863,37.805096]},{"alternatives_count":71,"waypoint_index":1,"matchings_index":0,"distance":18.666056605124762,"name":"Bay Street","location":[-122.424926,37.804177]}],"code":"Ok"}');

route7 = Route.create!(route_name: "hiking to 7-11", route_description: "i hiked to get a slurpy", user_id: demo.id,
    route_data: '{"matchings":[{"confidence":0.5426496328511495,"geometry":{"coordinates":[[-122.466758,37.772729],[-122.466752,37.772566],[-122.467998,37.772526],[-122.469021,37.772326],[-122.471084,37.771043],[-122.472009,37.770711],[-122.472738,37.770833],[-122.475062,37.771657],[-122.47569,37.771708],[-122.477639,37.771356],[-122.479924,37.770497],[-122.480495,37.771134],[-122.481027,37.771438],[-122.48258,37.771797],[-122.483719,37.771814],[-122.484431,37.772252],[-122.487612,37.772026],[-122.489822,37.772098],[-122.491983,37.771771],[-122.492746,37.772006],[-122.495061,37.771876],[-122.495638,37.77168]],"type":"LineString"},"legs":[{"summary":"","weight":889.3,"duration":1173.8,"steps":[],"distance":2766.2}],"weight_name":"cyclability","weight":889.3,"duration":1173.8,"distance":2766.2}],"tracepoints":[{"alternatives_count":2,"waypoint_index":0,"matchings_index":0,"distance":74.42686815360544,"name":"","location":[-122.466758,37.772729]},{"alternatives_count":39,"waypoint_index":1,"matchings_index":0,"distance":64.04066940014499,"name":"","location":[-122.495638,37.77168]}],"code":"Ok"}')

route6 = Route.create!(route_name: "walk to school", route_description: "i routed my walk to school", user_id: demo.id,
    route_data: '{"matchings":[{"confidence":0.000009946279264316793,"geometry":{"coordinates":[[-122.502907,37.711699],[-122.502543,37.711874],[-122.502203,37.711842],[-122.502029,37.711633],[-122.502258,37.711387],[-122.502143,37.711063],[-122.501737,37.710816],[-122.502015,37.710421],[-122.501342,37.709419],[-122.501421,37.709267],[-122.501073,37.708467],[-122.501666,37.707868],[-122.501682,37.707511],[-122.50066,37.706013],[-122.500518,37.705487],[-122.500623,37.705177],[-122.500201,37.704532],[-122.500287,37.703677],[-122.499869,37.702208],[-122.499721,37.701988],[-122.499319,37.70196],[-122.499075,37.701652],[-122.498616,37.701521],[-122.498461,37.701336],[-122.498076,37.698311],[-122.497594,37.696791],[-122.498114,37.696644],[-122.498224,37.696906],[-122.498548,37.696362],[-122.498691,37.696348]],"type":"LineString"},"legs":[{"summary":"","weight":669.4,"duration":669.4,"steps":[],"distance":2187.7}],"weight_name":"cyclability","weight":669.4,"duration":669.4,"distance":2187.7}],"tracepoints":[{"alternatives_count":0,"waypoint_index":0,"matchings_index":0,"distance":36.395555244454876,"name":"","location":[-122.502907,37.711699]},{"alternatives_count":1,"waypoint_index":1,"matchings_index":0,"distance":66.91572354879693,"name":"","location":[-122.498691,37.696348]}],"code":"Ok"}');


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