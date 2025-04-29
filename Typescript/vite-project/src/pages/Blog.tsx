import { PureComponent, ReactNode } from 'react';
import { Helmet } from 'react-helmet';

interface Props {}
interface State {}

class Blog extends PureComponent<Props, State> {
    render(): ReactNode {
        return (
            <div>
                <Helmet>
                    <title>Blog</title>
                    <meta name="description" content="Блог интернет-магазина" />
                    <meta name="keywords" content="новости, статьи, блог, SEO" />
                </Helmet>
                <h1>Blog</h1>
            </div>
        );
    }
}

export default Blog;