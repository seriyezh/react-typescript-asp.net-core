import React from "react";

type MyProps = {
    // using `interface` is also ok
    message: string;
};

export default class AboutPage extends React.Component<MyProps> {
    
    render() {
        return (
            <div>
                <h2>About project</h2>
            </div>
        );
    }
}
