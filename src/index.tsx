import React from "react";
import ReactDOM from "react-dom";
import Switch from "./Switch";
import Uncontrolled from "./Switch/Uncontrolled";

interface State {
    isSwitchChecked: boolean;
    isSwitchDisabled: boolean;
    isSwitchUncontrolled: boolean;
}

class App extends React.PureComponent<{}, State> {
    public state: State = {
        isSwitchChecked: false,
        isSwitchDisabled: false,
        isSwitchUncontrolled: false,
    };

    onToggleDisable = () => this.setState({isSwitchDisabled: !this.state.isSwitchDisabled});

    onChange = (checked: boolean) => this.setState({isSwitchChecked: checked});

    onToggleUncontrolled = () => this.setState({isSwitchUncontrolled: !this.state.isSwitchUncontrolled});

    renderContent() {
        if (this.state.isSwitchUncontrolled) {
            return <Uncontrolled disabled={this.state.isSwitchDisabled} />;
        }
        return <Switch checked={this.state.isSwitchChecked} disabled={this.state.isSwitchDisabled} onChange={this.onChange} />;
    }

    render() {
        return (
            <div>
                <div>
                    {this.renderContent()}
                    <button type="button" onClick={this.onToggleDisable}>
                        Toggle Disable
                    </button>
                </div>
                <div>
                    <button type="button" onClick={this.onToggleUncontrolled}>
                        Toggle Uncontrolled
                    </button>
                    <div>{this.state.isSwitchUncontrolled ? "Un-Controlled" : "Controlled"}</div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app")!);
