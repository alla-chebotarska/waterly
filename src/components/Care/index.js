import React, { Component } from 'react';
import DaySelector from '../DaySelector';
import ToggleButton from '../ToggleButton';
import LastCareCalendar from '../LastCareCalendar';

export default class Care extends Component {

    render() {
        return (
            <div>
                <h5>{this.props.title}</h5>
                <ToggleButton checked={this.props.isActive} onChange={this.props.onActiveChange}/>
                {this.props.isActive ?
                    <div>
                        <DaySelector />
                        <LastCareCalendar />
                    </div> : <div></div>}
            </div>
        )
    }

}
