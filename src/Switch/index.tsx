import React from "react";
import "./index.css";

interface Props {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
}

export default class Switch extends React.PureComponent<Props> {
    onClick = () => {
        this.props.onChange(!this.props.checked);
    };

    render() {
        return (
            <div className="comp-switch">
                <input disabled={this.props.disabled} onClick={this.onClick} type="checkbox" />
            </div>
        );
    }
}
