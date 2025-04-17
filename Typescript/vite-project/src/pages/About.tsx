import { PureComponent, ReactNode } from 'react';

interface Props {}
interface State {}

class About extends PureComponent<Props, State> {
    render(): ReactNode {
        return (
            <div>
                <h1>About</h1>
            </div>
        );
    }
}

export default About;