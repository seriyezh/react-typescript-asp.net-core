import React from "react";

type MyProps = {
    // using `interface` is also ok
    message: string;
};

type MyState = {
    count: number; // like this
};

export class HomePage extends React.Component<MyProps, MyState> {
    state: MyState = {
        // optional second annotation for better type inference
        count: 0
    };
    render() {
        return (
            <div>
                <h1>Home page</h1>
                {this.props.message} {this.state.count}
            </div>
        );
    }
}
