import React from "react";
import RecepieApi from "../api/RecepieApi";
import AddRecepie from "./AddRecepie";
import AddRecepieForm from "./AddRecepieForm";


class AddRecepiePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recepies : []
        };
    }

    async postRecepie(recepieData) {
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

    
    componentDidMount() {
        RecepieApi.getAllRecepies()
            .then(({data}) => this.setState({recepies: data}))
            .catch(err => console.error(err));
    }

    render() {
        const recepies = this.state.recepies;

        return (
            <div className="card">
                <AddRecepieForm onSubmit={(recepieData) => this.postRecepie(recepieData)}/>
                <div className="recipe">
                {recepies.map(recepie => 
                    <AddRecepie key={recepie.id} recepie={recepie} />
                )} </div>
            </div>
        );
    }
}

export default AddRecepiePage;
