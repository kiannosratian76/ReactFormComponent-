import React from "react";

const StateListItems = ({ listInformation, deletItems }) => {
    const itemsList = listInformation.map((item) => {
        return item.id > 0 ? (
            <div key={item.id}>
                <li className="wrapper-items">
                    <p className="Wr-items-para">{item.name}</p>
                    <input />
                    <p className="wrapper-btn">
                        <i>TIk</i>_
                        <i
                            onClick={() => {
                                deletItems(item.id);
                            }}
                        >
                            Close
                        </i>
                    </p>
                </li>
            </div>
        ) : null;
    });

    return (
        <div>
            <div className="formContainer">
                {/*Header */}
                <header>
                    <h1>React_Component</h1>
                </header>
                {/* Container wrapper */}
                <div className="Wrapper">
                    <ul className="Wrapper-menu">
                        {/* li items menu  */}

                        {itemsList}
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default StateListItems;
