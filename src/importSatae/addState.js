import React, { Component } from "react";

export default class AddState extends Component {
    //Create state for get name list from input
    state = {
        name: "null",
    };
    // create Function for change the state
    hendelName = (e) => {
        this.setState({
            //  [e.target.id]: e.target.value,
            name: e.target.value,
        });
    };
    // create Function for set litsItems
    formSubmited = (e) => {
        e.preventDefault();
        this.props.addItems(this.state);
    };
    render() {
        return (
            <div>
                {/* form for plus element to state  */}
                <div className="form-wrapper">
                    <form onSubmit={this.formSubmited}>
                        {/* Get Element name  */}
                        <input
                            id="inputfrom"
                            placeholder="insert the name"
                            onChange={this.hendelName}
                        />
                        {/* Submit Form and import the element with submit form */}
                        <button typeof="submit" id="clickBtn">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
