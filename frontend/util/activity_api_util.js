export const fetchActivities = () => {
    return (
        $.ajax({
            url: `api/activities`,
            method: "GET"
        })
    );
};

export const fetchActivity = id => {
    return (
        $.ajax({
            url: `api/activities/${id}`,
            method: "GET"
        })
    );
};

export const createActivity = activity => {
    return (
        $.ajax({
            url: `api/activities`,
            method: "POST",
            data: { activity }
        })
    );
};

export const deleteActivity = id => {
    return (
        $.ajax({
            url: `api/activities/${id}`,
            method: "DELETE"
        })
    );
};



export const updateActivity = activity => {
    return (
        $.ajax({
            url: `api/activities/${activity.id}`,
            method: "PATCH",
            data: { activity }
        })
    )
}