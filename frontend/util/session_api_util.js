

// creates new user
export const signup = (user) => {
    return $.ajax({
        method: "POST",
        url: "/api/users",
        data: { user }
    });
}

// logs in user
export const signin = (user) => {
    return $.ajax({
        method: "POST",
        url: "/api/session",
        data: { user }
    });
}

// logs out user
export const signout = () => {
    return $.ajax({
        method: "DELETE",
        url: "/api/session",
    });
}
