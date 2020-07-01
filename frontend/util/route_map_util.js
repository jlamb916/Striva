
export const fetchAllRoutes = () => {
    return $.ajax({
        url: 'api/routes',
        method: 'GET'
    });
}

export const fetchRoute = (routeId) => {
    
    return $.ajax({
        url: `/api/routes/${routeId}`,
        method: 'GET',
    });
}

export const createRoute = (route) => {
    return $.ajax({
        url: 'api/routes',
        method: 'POST',
        data: { route }
    });
}

export const deleteRoute = (routeId) => {
    return $.ajax({
        url: `api/routes/${routeId}`,
        method: 'DELETE'
    });
}