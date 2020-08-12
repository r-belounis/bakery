import React from 'react';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Slider = props => {
    return (
        <RCSlider
        min={props.min}
        max={props.max}
        onChange={props.onChange}
        value={props.value}
        />
    );
}

export default Slider;