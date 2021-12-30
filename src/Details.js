import { Component } from "react-dom";
import { withRouter } from "react-router-dom";

class Details extends Component {
    constructor() {
        super();

        this.state = { loading: true };

    }

    async componentDidMount() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
        )
    }

    render() {
        return (
            <h2>hi</h2>
        )
    }
}


export default Details;