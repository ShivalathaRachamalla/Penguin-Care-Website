import Api from "./Api";

class RecepieApi {
  getAllRecepies() {
    return Api.get("/recepies");
  }

  postRecepie(recepie) {
    return Api.post("/recepies", recepie, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }
}

export default new RecepieApi();
