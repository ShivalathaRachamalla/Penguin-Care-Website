import React from "react";
import OutdoorActivityApi from "../api/OutdoorActivityApi";
import AddOutdoorActivity from "./AddOutdoorActivity";
import AddOutdoorActivityForm from "./AddOutdoorActivityForm";

class AddOutdoorActivityPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      outdooractivities: [],
    };
  }

  async postOutdoorActivity(outdooractivityData) {
    console.log("outdooractivityData", outdooractivityData);

    try {
      const response = await OutdoorActivityApi.postOutdoorActivity(
        outdooractivityData
      );
      console.log("response", response);
      const outdooractivity = response.data;
<<<<<<< HEAD
      const newOutdoorActivities = this.state.outdooractivities.concat(
=======
      const newOutdoorActivities = this.state.OutdoorActivities.concat(
>>>>>>> master
        outdooractivity
      );

      this.setState({
        outdooractivities: newOutdoorActivities,
      });
    } catch (e) {
      console.error(e);
    }
  }

  async deleteOutdoorActivity(outdooractivity) {
    try {
<<<<<<< HEAD
      await OutdoorActivityApi.deleteOutdoorActivity(outdooractivity.id);
      const newOutdoorActivities = this.state.outdooractivities.filter(
=======
      console.log(outdooractivity.id, ".....");
      await OutdoorActivityApi.deleteOutdoorActivity(outdooractivity.id);
      const newOutdoorActivities = this.state.OutdoorActivities.filter(
>>>>>>> master
        (r) => r.id !== outdooractivity.id
      );
      this.setState({
        outdooractivities: newOutdoorActivities,
      });
    } catch (e) {
      console.error(e);
    }
  }

<<<<<<< HEAD
  async updateOutdoorActivity(outdooractivityData) {
    try {
      const response = await OutdoorActivityApi.updateOutdoorActivity(
        outdooractivityData
=======
  async updateOutdoorActivity(outdooractivity) {
    try {
      console.log(outdooractivity);
      const response = await OutdoorActivityApi.updateOutdoorActivity(
        outdooractivity
>>>>>>> master
      );
      const outdooractivity = response.data;
      const newOutdoorActivities = this.state.outdooractivities
        .filter((r) => r.id !== outdooractivity.id)
        .concat(outdooractivity);
      this.setState({
        outdooractivities: newOutdoorActivities,
      });
    } catch (e) {
      console.error(e);
    }
  }

  componentDidMount() {
    OutdoorActivityApi.getAllOutdoorActivities()
      .then(({ data }) => this.setState({ outdooractivities: data }))
      .catch((err) => console.error(err));
  }

  render() {
    const outdooractivities = this.state.outdooractivities;

    return (
      <div className="card">
        <AddOutdoorActivityForm
          onSubmit={(formData) => this.postOutdoorActivity(formData)}
        />
        <div className="recipe">
          {outdooractivities.map((outdooractivity) => (
            <AddOutdoorActivity
              key={outdooractivity.id}
              outdooractivity={outdooractivity}
<<<<<<< HEAD
              onDeleteClick={() => this.deleteOutdoorActivity(outdooractivity)}
              onHandleEdit={(outdooractivityData) =>
                this.updateOutdoorActivity(outdooractivityData)
=======
              onDeleteClick={(outdooractivity) =>
                this.deleteOutdoorActivity(outdooractivity)
              }
              onHandleEdit={(outdooractivity) =>
                this.updateOutdoorActivity(outdooractivity)
>>>>>>> master
              }
            />
          ))}{" "}
        </div>
      </div>
    );
  }
}

export default AddOutdoorActivityPage;
