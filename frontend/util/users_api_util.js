export const fetchUser = (user) => {
    return $.ajax({
        method: "GET",
        url: "/api/users",
        data: { user }
    });
}