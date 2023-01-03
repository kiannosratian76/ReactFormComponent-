import React from "react";
import "./App.css";
class Form extends React.Component {
    // function for get input value and set to the state
    sumitButton = (e) => {
        e.preventDefault();
        console.log("form Submited");
    };

    render() {
        //  this is jsx html Code for return container for  html in React
        return (
            <div className="Container-root">
                <div className="formContainer">
                    {/*Header */}
                    <header>
                        <h1>React_Component</h1>
                    </header>
                    {/* Container wrapper */}
                    <div className="Wrapper">
                        <ul className="Wrapper-menu">
                            {/* li items menu  */}
                            <li className="wrapper-items">
                                <p className="Wr-items-para">FirstItems</p>
                                <input />
                                <p className="wrapper-btn">
                                    <i>TIk</i>_<i>Close</i>
                                </p>
                            </li>
                            <li className="wrapper-items">
                                <p className="Wr-items-para">SecondItems</p>
                                <input />
                                <p className="wrapper-btn">
                                    <i>TIk</i>_<i>Close</i>
                                </p>
                            </li>
                            <li className="wrapper-items">
                                <p className="Wr-items-para">ThreeItems</p>
                                <input />
                                <p className="wrapper-btn">
                                    <i>TIk</i>_<i>Close</i>
                                </p>
                            </li>
                        </ul>
                        {/* form for plus element to state  */}
                        <div className="form-wrapper">
                            <form onSubmit={this.sumitButton}>
                                {/* Get Element name  */}
                                <input
                                    id="input-from"
                                    placeholder="insert the name"
                                />
                                {/* Submit Form and import the element with submit form */}
                                <button id="clickBtn">ClickMe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;
