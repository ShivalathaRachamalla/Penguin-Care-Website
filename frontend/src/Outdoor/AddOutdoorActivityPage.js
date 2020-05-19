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
      const newOutdoorActivities = this.state.outdooractivities.concat(
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
      await OutdoorActivityApi.deleteOutdoorActivity(outdooractivity.id);
      const newOutdoorActivities = this.state.outdooractivities.filter(
        (r) => r.id !== outdooractivity.id
      );
      this.setState({
        outdooractivities: newOutdoorActivities,
      });
    } catch (e) {
      console.error(e);
    }
  }

  async updateOutdoorActivity(outdooractivityData) {
    try {
      const response = await OutdoorActivityApi.updateOutdoorActivity(
        outdooractivityData
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
              onDeleteClick={() => this.deleteOutdoorActivity(outdooractivity)}
              onHandleEdit={(outdooractivityData) =>
                this.updateOutdoorActivity(outdooractivityData)
              }
            />
          ))}{" "}
        </div>
      </div>
    );
  }
}

export default AddOutdoorActivityPage;
