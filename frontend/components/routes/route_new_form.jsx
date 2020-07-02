import React from 'react';

let routeData;

class NewRouteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: -122.4213644,
            lat: 37.80176523,
            user_id: this.props.userId,
            zoom: 12,
            route_name: "",
            route_description: "",
            route_data: "",
            distance: 0,
            elevation: 0,
            estTime: 0,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateState = this.updateState.bind(this);
        
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
                        "line-color": "#e47b43",
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
                        "circle-color": "#4643e4",
                    }
                },
            ]
        });
        // Add the draw tool to the map
        map.addControl(draw);
        // Use the coordinates you drew to make the Map Matching API request
        function updateRoute() {
            // Set the profile
            var profile = "walking";
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
            var query = 'https://api.mapbox.com/matching/v5/mapbox/' + profile + '/' + coordinates + '?geometries=geojson&radiuses=' + radiuses + '&steps=false&access_token=' + mapboxgl.accessToken;
            $.ajax({
                method: 'GET',
                url: query
            }).done(function (data) {
                // Get the coordinates from the response
                if (data.code === 'NoMatch') {
                    console.log("route couldn't be found")
                } else {
                var coords = data.matchings[0].geometry;
                routeData = data;
                addRoute(coords);
                }
            });
        } 
    
    
        // Draw the Map Matching route as a new layer on the map
        function addRoute(coords) {
            // updateState(JSON.stringify(routeData));

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
                        "line-color": "#e47b43",
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

   
    handleSubmit(e) {
        e.preventDefault();
        let routeDataString = JSON.stringify(routeData);
        const route = (({ route_name, route_description, user_id }) => ({ route_name, route_description, user_id }))(this.state);
        route["route_data"] = routeDataString;
        
        this.props.routeProcessForm(route).then(() => this.props.history.push("/routes"))
    }

    renderErrors() {
        return (
            <ul className="create-route-error-messages">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render () {
        
        return (
        <div className='route-new-container-page'>
            <div className="route-new-container">
                    <div className="route-form">
                        <h1 className="create-form-title">My Route</h1>
                       
                    <form className="create-route-form" onSubmit={this.handleSubmit}>
                        <h1> {this.state.route_data }</h1>
                        <div className="form-section-name">
                                <label><div>Name (Required)</div>
                                <input type="text" 
                                        value={this.state.route_name}
                                        className="route-form-data"
                                        placeholder="Route name"
                                        onChange={this.update('route_name')} 
                                />
                            </label>
                        </div>
                        <div className="form-section-name">
                            <label>Description
                                <textarea
                                    rows="7" cols="30"
                                    placeholder="Add some more details or notes" 
                                    value={this.state.route_description}
                                    className="route-form-text"
                                    onChange={this.update('route_description')
                                    }
                                    />
                            </label>
                        </div>
                            {this.renderErrors()}
                            <div className="center-submit">
                                <input className="create_route_submit" type="submit" value="Save to My Routes"/>
                            </div>
                            <div id="route-errors'">
                                    
                            </div>
                        </form>
                        
                    </div>
                    <div className="new-map-container">
                        <div ref={el => this.mapContainer = el} id='map-leaflet' className='mapContainer' >
                        </div>
                    </div>
            </div>
            <div className="bottom-info-flex">
                <div className='new-form-stats'>
                    <ul className="route-new-time">
                        <li className="stat-label">Type</li>
                        <li className="stat-data">Run</li>
                    </ul>
                    <ul className="route-new-time">
                        <li className="stat-label">Distance </li>
                        <li className="stat-data"> {this.state.distance} </li>
                    </ul>
                    <ul className="route-new-time">
                            <li className="stat-label">Elevation </li>
                            <li className="stat-data" >{this.state.elevation} ft</li>
                    </ul>
                    <ul className="route-new-time">
                            <li className="stat-label">Est. Moving Time </li>
                            <li className="stat-data" >{this.state.estTime} s</li>
                    </ul>
                </div>
                <div className="use-info">
                        <h5 className="help"> Use the line string icon on the top right corner of the map to create a route <br />
                         create 2 points on the map at minimum and a maximum of 25 <br />
                        click on a marker a dotted line to create the route
                        <br />the route line must be solid before it is considered a valid route</h5>
                </div>
            </div>
        </div>
        )
    }
}

export default NewRouteForm;