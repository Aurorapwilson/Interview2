import http from "../http-common";

class TutorialDataService {
    getAll() {
        return http.get("/tutorial");
    }

    get(id) {
        return http.get(`/tutorial/${id}`);
    }

    create(data) {
        return http.post("/tutorials", data);
    }

    update(id, data) {
        return http.put(`/tutorial/${id}`, data);
    }

    delete(id) {
        return http.delete(`/tutorials/${id}`);
    }

    deleteAll() {
        return http.delete("/tutorials");
    }

    findByTitle(title) {
        return http.get(`/tutorials/${title}`);
    }
}

export default new TutorialDataService;