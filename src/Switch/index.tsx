import React from "react";
import "./index.css";

interface Props {
    controlled: boolean;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
}

export default class Switch extends React.PureComponent<Props> {
    private input: React.RefObject<HTMLInputElement>;
    constructor(props: Props) {
        super(props);
        this.input = React.createRef();
    }

    onClick = () => {
        if (this.props.controlled) {
            return this.props.onChange(!this.props.checked);
        }
        return this.props.onChange(this.input.current!.checked);
    };

    render() {
        return (
            <div className="comp-switch">
                <input disabled={this.props.disabled} ref={this.input} onClick={this.onClick} type="checkbox" />
            </div>
        );
    }
}
