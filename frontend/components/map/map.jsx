import React from 'react';



class MapBox extends React.Component {
    constructor(props) {
        super(props);
        this.routeData = JSON.parse(this.props.route.route_data);
        this.center = this.routeData.matchings[0].geometry.coordinates[0]
        this.state = {
            lng: this.center[0],
            lat: this.center[1],
            zoom: 14.5
        };
    }

    componentDidMount() {


        const map = new mapboxgl.Map({
            // tells mapbox to render map inside a specific dom element
            container: this.mapContainer,
            // style defines style to be used
            style: 'mapbox://styles/mapbox/streets-v11',
            //set the center coords and zoom level
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
        // when map moves set state resets the values
        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
        debugger
        var draw = new MapboxDraw({
            // Instead of showing all the draw tools, show only the line string and delete tools
            displayControlsDefault: false,
            controls: {
                line_string: true,
                trash: true
            },
            styles: [
                // Set the line style for the user-input coordinates
                {
                    "id": "gl-draw-line",
                    "type": "line",
                    "filter": ["all", ["==", "$type", "LineString"],
                        ["!=", "mode", "static"]
                    ],
                    "layout": {
                        "line-cap": "round",
                        "line-join": "round"
                    },
                    "paint": {
                        "line-color": "#438EE4",
                        "line-dasharray": [0.2, 2],
                        "line-width": 4,
                        "line-opacity": 0.7
                    }
                },
                // Style the vertex point halos
                {
                    "id": "gl-draw-polygon-and-line-vertex-halo-active",
                    "type": "circle",
                    "filter": ["all", ["==", "meta", "vertex"],
                        ["==", "$type", "Point"],
                        ["!=", "mode", "static"]
                    ],
                    "paint": {
                        "circle-radius": 12,
                        "circle-color": "#FFF"
                    }
                },
                // Style the vertex points
                {
                    "id": "gl-draw-polygon-and-line-vertex-active",
                    "type": "circle",
                    "filter": ["all", ["==", "meta", "vertex"],
                        ["==", "$type", "Point"],
                        ["!=", "mode", "static"]
                    ],
                    "paint": {
                        "circle-radius": 8,
                        "circle-color": "#438EE4",
                    }
                },
            ]
        });
        debugger
        // Add the draw tool to the map
        map.addControl(draw);
        // Use the coordinates you drew to make the Map Matching API request
        function updateRoute(routeData) {
            // Set the profile
            var profile = "cycling";
            // Get the coordinates that were drawn on the map
            var data = draw.getAll();
            // var lastFeature = data.features.length - 1;
            // var coords = data.features[lastFeature].geometry.coordinates;
            var coords = routeData
            // Format the coordinates
            debugger
            var newCoords = coords.join(';')
            // Set the radius for each coordinate pair to 25 meters
            var radius = [];
            coords.forEach(element => {
                radius.push(25);
            });
            getMatch(newCoords, radius, profile);
        }


        // Make a Map Matching request
        function getMatch(coordinates, radius, profile) {
            debugger
            // Separate the radiuses with semicolons
            var radiuses = radius.join(';')
            // Create the query
            var query = 'https://api.mapbox.com/matching/v5/mapbox/' + profile + '/' + coordinates + '?geometries=geojson&radiuses=' + radiuses + '&steps=false&access_token=' + mapboxgl.accessToken;
            console.log(query);
            $.ajax({
                method: 'GET',
                url: query
            }).done(function (data) {
                // Get the coordinates from the response
                console.log(JSON.stringify(data));
                var coords = data.matchings[0].geometry;
                // Code from the next step will go here
                addRoute(coords);
                // getInstructions(data.matchings[0]);
            });
            function addRoute(coords) {
                // If a route is already loaded, remove it
                if (map.getSource('route')) {
                    map.removeLayer('route')
                    map.removeSource('route')
                } else { // Add a new layer to the map
                    map.addLayer({
                        "id": "route",
                        "type": "line",
                        "source": {
                            "type": "geojson",
                            "data": {
                                "type": "Feature",
                                "properties": {},
                                "geometry": coords
                            }
                        },
                        "layout": {
                            "line-join": "round",
                            "line-cap": "round"
                        },
                        "paint": {
                            "line-color": "#03AA46",
                            "line-width": 8,
                            "line-opacity": 0.8
                        }
                    });
                };
            }
        }
        map.on('load', updateRoute(this.routeData.matchings[0].geometry.coordinates));
    }
    // specifies the mapContainer to be drawn on the new div
    render() {
        return (
            <div className="index-container">
                <div className="map-container">
                    <div ref={el => this.mapContainer = el} className='mapContainer' >
                    </div>
                </div>
            </div>
        )
    }
}


export default MapBox;