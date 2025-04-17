import { PureComponent, ReactNode } from 'react';

interface Props {}
interface State {}

class Blog extends PureComponent<Props, State> {
    render(): ReactNode {
        return (
            <div>
                <h1>Blog</h1>
            </div>
        );
    }
}

export default Blog;