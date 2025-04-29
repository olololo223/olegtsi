import { PureComponent, ReactNode } from 'react';
import { Helmet } from 'react-helmet';

interface Props {}
interface State {}

class About extends PureComponent<Props, State> {
    render(): ReactNode {
        return (
            <div>
                <Helmet>
                    <title>About</title>
                    <meta name="description" content="Страница About интернет-магазина" />
                    <meta name="keywords" content="о нас, информация, контакты, SEO" />
                </Helmet>
                <h1>About</h1>
            </div>
        );
    }
}

export default About;