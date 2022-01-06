import { Component } from "react";

class Carousel extends Component {
    state = {
        active: 0
    };

    static defaultProps = {
        images: ['http://pets-images.dev-apis.com/pets/none.jpg']
    };

    handleIndexClick = (event) => {
        // console.log(this);
        // console.log(event.target.dataset.index);
        this.setState({
            active: +event.target.dataset.index,
        })
    }

    render() {
        const { active } = this.state;
        const { images } = this.props;

        return (
            <div className="carousel">
                <img src={images[active]} alt="animal" />
                <div className="carousel-smaller">
                    {images.map((photo, index) => {
                        return (
                            // eslint-disable-next-line

                            <img
                                key={photo}
                                src={photo}
                                data-index={index}
                                onClick={this.handleIndexClick}
                                className={index === active ? "active" : ""}
                                alt="animal thumbnai"
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Carousel;