import http from "../http-common";

const getAll = () => {
    return http.get("/coin");
};

const get = id => {
    return http.get(`/coin/${id}`);
};

const create = data => {
    return http.post("/coin", data);
};

const update = (id, data) => {
    return http.put(`/coin/${id}`, data);
};

const remove = id => {
    return http.delete(`/coin/${id}`);
};

const removeAll = () => {
    return http.delete(`/coin`);
};

const findByWalletId = wallid => {
    return http.get(`/coin?wallid=${wallid}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByWalletId
};