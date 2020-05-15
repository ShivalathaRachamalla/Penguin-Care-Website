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
      console.log("response", response);
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
        await RecepieApi.deleteRecepie(recepie.id);
        const newRecepies = this.state.recepies.filter(r => r.id !== recepie.id);
        this.setState({
            recepies: newRecepies,
        });
    } catch (e) {
        console.error(e);
    }
}

async updateRecepie(recepie) {
  try {
      console.log(recepie);
      const response = await RecepieApi.updateRecepie(recepie);
      const recepie = response.data;
      const newRecepies = this.state.recepies.filter(r => r.id !== recepie.id).concat(recepie);;
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
            <AddRecepie key={recepie.id} recepie={recepie} onDeleteClick={(recepie) => this.deleteRecepie(recepie)} 
            onHandleEdit={(recepie) => this.updateRecepie(recepie)}/>
          ))}{" "}
        </div>
      </div>
    );
  }
}

export default AddRecepiePage;
