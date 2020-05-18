import Api from "./Api";

class OutdoorActivityApi {
  getAllOutdoorActivities() {
    return Api.get("/outdooractivities");
  }

  postOutdoorActivity(outdooractivity) {
    return Api.post("/outdooractivities", outdooractivity, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  deleteOutdoorActivity(id) {
    return Api.delete('/outdooractivities/'+id);
  }

  updateOutdoorActivity(outdooractivity) {
    return Api.put("/outdooractivities", outdooractivity, {
      headers: { "Content-Type": "multipart/form-data" },
    });
}
}

export default new OutdoorActivityApi();
