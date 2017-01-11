import { Link } from 'react-router';


export default class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <Link to="/" >Home</Link>
                    </div>
                    <div>
                        <Link to="/about">Load About</Link>
                    </div>
                    <div>
                        <Link to="/contacts">Load Contacts22222222222233sd</Link>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}