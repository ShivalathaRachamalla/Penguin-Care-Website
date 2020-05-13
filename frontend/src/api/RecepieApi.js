import Api from "./Api";

class RecepieApi {
    getAllRecepies() {
        return Api.get('/recepies');
    }

    postRecepie(recepie) {
        return Api.post('/recepies', recepie);
    }
}

export default new RecepieApi();