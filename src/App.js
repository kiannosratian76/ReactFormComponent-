import React from "react";
import "./App.css";
// import addState Component
import AddState from "./importSatae/addState";
// import stateListItems Component
import StateListItems from "./stateList/stateListItems";
class Form extends React.Component {
    //State li Element information
    state = {
        listInformation: [
            { name: "firstItems", id: 1 },
            { name: "scondItems", id: 2 },
            { name: "thretItems", id: 3 },
        ],
    };

    // create function for create new ListInformation
    addItems = (item) => {
        item.id = Math.floor(Math.random() * 9);
        let listItems = [...this.state.listInformation, item];
        this.setState({ listInformation: listItems });
    };

    // function Delete Items
    deletItems = (id) => {
        let listItems = this.state.listInformation.filter((item) => {
            return item.id !== id;
        });
        this.setState({ listInformation: listItems });
    };
    // function change name Item

    render() {
        //  this is jsx html Code for return container for  html in React
        return (
            <div className="Container-root">
                <StateListItems
                    listInformation={this.state.listInformation}
                    deletItems={this.deletItems}
                />
                <AddState addItems={this.addItems} />
            </div>
        );
    }
}

export default Form;
