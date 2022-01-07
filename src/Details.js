// const Details = () => {
//     return <h2>Hello</h2>
// }
import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

class Details extends Component {
    // constructor() {
    //     super();
    //     this.state = { loading: true };
    // }

    state = { loading: true };

    async componentDidMount() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
        );
        const json = await res.json();
        this.setState(Object.assign({ loading: false }, json.pets[0])
        );
    }
    render() {
        if (this.state.loading) {
            return (
                <h2>Loading...</h2>
            )
        }
        const { animal, breed, name, description, city, state, images } = this.state;

        // throw new Error("lol");
        return (
            <div className="details">
                <Carousel images={images} />
                <div>
                    <h1>{name}</h1>
                    <h2>{animal} - {breed} -{city}, {state}</h2>
                    <ThemeContext.Consumer>
                        {([theme]) => (
                            <button style={{ backgroundColor: theme }}>Adopt {name}</button>
                        )}
                        {/* either themeHooke and themeHook[0] of [theme] and theme */}
                    </ThemeContext.Consumer>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}
const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
    return (
        <ErrorBoundary>
            <DetailsWithRouter />
        </ErrorBoundary>
    )
}