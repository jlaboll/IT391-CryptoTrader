import http from "../http-common";

const getAllUser = () => {
    return http.get("/user");
};

const getUser = id => {
    return http.get(`/user/${id}`);
};

const createUser = data => {
    return http.post("/user", data);
};

const updateUser = (id, data) => {
    return http.put(`/user/${id}`, data);
};

const removeUser = id => {
    return http.delete(`/user/${id}`);
};

const removeAllUser = () => {
    return http.delete(`/user`);
};

const findByLoginUser = login => {
    return http.get(`/user/${login}`);
};

export {
    getAllUser,
    getUser,
    createUser,
    updateUser,
    removeUser,
    removeAllUser,
    findByLoginUser
};