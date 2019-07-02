import React, {PureComponent} from "react";
import "./index.css";

interface Props {
    disabled: boolean;
}

export default class Uncontrolled extends PureComponent<Props> {
    private input: React.RefObject<HTMLInputElement>;
    constructor(props: Props) {
        super(props);
        this.input = React.createRef();
    }

    render() {
        return (
            <div className="comp-switch">
                <input disabled={this.props.disabled} ref={this.input} type="checkbox" />
            </div>
        );
    }
}
