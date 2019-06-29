import React, { PureComponent } from "react";
import "./index.css";

export default class Uncontrolled extends PureComponent {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    };

    render() {
        return (
            <div className="comp-switch">
                <input 
                    disabled={this.props.disabled}
                    ref={this.input}
                    type="checkbox"
                />
            </div>
        );
    };
};