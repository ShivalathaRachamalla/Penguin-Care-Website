import Api from "./Api";

class RecepieApi {
  getAllRecepies() {
    return Api.get("/recepies");
  }

  postRecepie(recepie) {
    console.log(recepie, "......");

    return Api.post("/recepies", recepie, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  deleteRecepieById(id) {
    return Api.delete("/recepies/" + id);
  }

  updateRecepie(recepie) {
    return Api.put("/recepies", recepie);
  }
}

export default new RecepieApi();
