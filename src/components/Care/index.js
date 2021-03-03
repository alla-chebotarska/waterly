import React, { Component } from 'react';
import DaySelector from '../DaySelector';
import ToggleButton from '../ToggleButton';
import LastCareCalendar from '../LastCareCalendar';

export default class Care extends Component {

    constructor() {
        super();
        this.state = {
            isActive: true,
        }
    }

    onToggleChange = (checked) => {
        this.setState({
            isActive: checked,
        })
    }

    render() {
        return (
            <div>
                <h5>{this.props.title}</h5>
                <ToggleButton active={this.state.isActive} onChange={this.onToggleChange}/>
                {this.state.isActive ?
                    <div>
                        <DaySelector />
                        <LastCareCalendar />
                    </div> : <div></div>}
            </div>
        )
    }

}
