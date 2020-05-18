import React from "react";
import RecepieApi from "../api/RecepieApi";
import AddRecepie from "./AddRecepie";
import AddRecepieForm from "./AddRecepieForm";

class AddRecepiePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recepies: [],
    };
  }

  async postRecepie(recepieData) {
    console.log("recepieData", recepieData);

    try {
      const response = await RecepieApi.postRecepie(recepieData);
      const recepie = response.data;
      const newRecepies = this.state.recepies.concat(recepie);

      this.setState({
        recepies: newRecepies,
      });
    } catch (e) {
      console.error(e);
    }
  }

  async deleteRecepie(recepie) {
    try {
      await RecepieApi.deleteRecepieById(recepie.id);
      const newRecepies = this.state.recepies.filter(
        (r) => r.id !== recepie.id
      );
      this.setState({
        recepies: newRecepies,
      });
    } catch (e) {
      console.error(e);
    }
  }

  async updateRecepie(formData) {
    try {
      const response = await RecepieApi.updateRecepie(formData);
      const recepie = response.data;
      const newRecepies = this.state.recepies
        .filter((r) => r.id !== recepie.id)
        .concat(recepie);
      this.setState({
        recepies: newRecepies,
      });
    } catch (e) {
      console.error(e);
    }
  }

  componentDidMount() {
    RecepieApi.getAllRecepies()
      .then(({ data }) => this.setState({ recepies: data }))
      .catch((err) => console.error(err));
  }

  render() {
    const recepies = this.state.recepies;

    return (
      <div className="card">
        <AddRecepieForm onSubmit={(formData) => this.postRecepie(formData)} />
        <div className="recipe">
          {recepies.map((recepie) => (
            <AddRecepie
              key={recepie.id}
              recepie={recepie}
              onDeleteClick={() => this.deleteRecepie(recepie)}
              onHandleEdit={(formData) => this.updateRecepie(formData)}
            />
          ))}{" "}
        </div>
      </div>
    );
  }
}

export default AddRecepiePage;
