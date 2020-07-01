import React from 'react';

class NewRouteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: -122.4213644,
            lat: 37.80176523,
            zoom: 10
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
        // Add the draw tool to the map
        map.addControl(draw);
        // Use the coordinates you drew to make the Map Matching API request
        function updateRoute() {
            // Set the profile
            var profile = "driving";
            // Get the coordinates that were drawn on the map
            var data = draw.getAll();
            var lastFeature = data.features.length - 1;
            var coords = data.features[lastFeature].geometry.coordinates;
            // Format the coordinates
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
            // Separate the radiuses with semicolons
            var radiuses = radius.join(';')
            // Create the query
            debugger
            var query = 'https://api.mapbox.com/matching/v5/mapbox/' + profile + '/' + coordinates + '?geometries=geojson&radiuses=' + radiuses + '&steps=true&access_token=' + mapboxgl.accessToken;

            $.ajax({
                method: 'GET',
                url: query
            }).done(function (data) {
                // Get the coordinates from the response
                var coords = data.matchings[0].geometry;
                console.log(coords);
                // Code from the next step will go here
                addRoute(coords);
            });
        } 
           
        // Draw the Map Matching route as a new layer on the map
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
        
        function removeRoute() {
            if (map.getSource('route')) {
                map.removeLayer('route');
                map.removeSource('route');
            } else {
                return;
            }
        }
        map.on('draw.create', updateRoute);
        map.on('draw.update', updateRoute);
        map.on('draw.delete', removeRoute);
    }

    render () {
        return (
        <div className='route-new-container-page'>
            <div className="route-new-container">
                    <div className="route-form">
                        <h1>My Route</h1>
                        <form>
                    
                        <label>Route Name (Required)
                            <input type="text" className="login-input"/>
                        </label>

                        <label>Description
                            <textarea 
                                placeholder="Add some more details or notes" 
                                value="Add some more details or notes"
                                className="login-input"></textarea>
                        </label>

                        <button>Save to My Routes</button>

                        </form>
                    </div>
                    <div className="new-map-container">
                        <div ref={el => this.mapContainer = el} id='map-leaflet' className='mapContainer' >
                        </div>
                    </div>
            </div>
            <div className='new-form-stats'>
                <ul className="route-new-time">
                    <li className="stat-label">Type</li>
                    <li className="stat-data">Run</li>
                </ul>
                <ul className="route-new-time">
                    <li className="stat-label">Distance </li>
                    <li className="stat-data"> 142 mi </li>
                </ul>
                <ul className="route-new-time">
                        <li className="stat-label">Elevation </li>
                        <li className="stat-data" >123 ft</li>
                </ul>
                <ul className="route-new-time">
                        <li className="stat-label">Est. Moving Time </li>
                        <li className="stat-data" >12312 s</li>
                </ul>
         
            </div>
        </div>
        )
    }
}

export default NewRouteForm;