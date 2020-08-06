import React from "react";

const Navbar = (props) => { 
    return (
            <div className={`ui inverted ${props.color} menu`}>
                <a className="item">
                    <h2 className="ui header">
                        <i className="paint brush icon"/>
                            <div className="content">
                                {`${props.message}`}
                            </div>
                    </h2>
                </a>
            </div>
    )
}

export default Navbar;