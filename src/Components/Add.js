import React, { Component } from 'react';
import Slider from './Core/Slider';
import Button from './Core/Button';

class Add extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            price: 1
        };

        this.onChangeInput = this.onChangeInput.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeInput(evt) {
        console.log("App#onChangeInput => evt.target.value :", evt.target.value);

        const input = evt.target.value;

        this.setState({ input });
    }

    onChangePrice(price) {
        console.log("App#onChangePrice => price :", price);

        this.setState({ price });
    }

    onSubmit() {
        console.log("App#onSubmit => this.state", this.state);
        const {
            price,
            input
        } = this.state;

        console.log("App#onSubmit => this.props.onSubmit", this.props.onSubmit);
        this.props.onSubmit(price, input);
    }

    render() {
        const {
            price
        } = this.state;

        return (
            <>
                <input placeholder="items" onChange={this.onChangeInput}/>
                <Slider max={10} min={1} value={price} onChange={this.onChangePrice} />
                <Button onClick={this.onSubmit}>Add</Button>
            </>
        );
    }
}

export default Add;