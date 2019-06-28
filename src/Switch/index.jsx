import React from "react";
import "./index.css";

export default class Switch extends React.PureComponent {
    onClick = () => {this.props.onChange(!this.props.checked)}

    render() {
        return (
            <div className="comp-switch">
                <input 
                    type='checkbox'
                    disabled={this.props.disabled}
                    onClick={this.onClick} 
                />
            </div>
        );
    };
};
