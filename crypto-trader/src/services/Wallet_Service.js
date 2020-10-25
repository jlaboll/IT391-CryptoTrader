import http from "../http-common";

const getAll = () => {
    return http.get("/wallet");
};

const get = id => {
    return http.get(`/wallet/${id}`);
};

const create = data => {
    return http.post("/wallet", data);
};

const update = (id, data) => {
    return http.put(`/wallet/${id}`, data);
};

const remove = id => {
    return http.delete(`/wallet/${id}`);
};

const removeAll = () => {
    return http.delete(`/wallet`);
};

const findByUserId = user_id => {
    return http.get(`/wallet?user_id=${user_id}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByUserId
};