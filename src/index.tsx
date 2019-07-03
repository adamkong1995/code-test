import React from "react";
import ReactDOM from "react-dom";
import Switch from "./Switch";

interface State {
    isSwitchChecked: boolean;
    isSwitchDisabled: boolean;
    isSwitchControlled: boolean;
}

class App extends React.PureComponent<{}, State> {
    public state: State = {
        isSwitchChecked: false,
        isSwitchDisabled: false,
        isSwitchControlled: true,
    };

    onToggleDisable = () => this.setState({isSwitchDisabled: !this.state.isSwitchDisabled});

    onChange = (checked: boolean) => this.setState({isSwitchChecked: checked});

    onToggleControlled = () => this.setState({isSwitchControlled: !this.state.isSwitchControlled});

    render() {
        return (
            <div>
                <div>
                    <Switch controlled={this.state.isSwitchControlled} checked={this.state.isSwitchChecked} disabled={this.state.isSwitchDisabled} onChange={this.onChange} />
                    <button type="button" onClick={this.onToggleDisable}>
                        Toggle Disable
                    </button>
                </div>
                <div>
                    <button type="button" onClick={this.onToggleControlled}>
                        Toggle Uncontrolled
                    </button>
                    <div>{this.state.isSwitchControlled ? "Controlled" : "Un-Controlled"}</div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app")!);
