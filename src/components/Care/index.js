import React, { Component } from 'react';
import CareFrequency from '../CareFrequency';
import ToggleButton from '../ToggleButton';
import LastCareCalendar from '../LastCareCalendar';

export default class Care extends Component {

    render() {
        return (
            <div>
                <ToggleButton
                    title={this.props.title}
                    checked={this.props.isActive}
                    onChange={this.props.onActiveChange} />
                {this.props.isActive
                    ? <div>
                        <CareFrequency
                            frequency={this.props.frequency}
                            onFrequencySelected={this.props.onFrequencySelected} />
                        <LastCareCalendar
                            lastCare={this.props.lastCare}
                            onLastCareChanged={this.props.onLastCareChanged} />
                    </div>
                    : <div></div>}
            </div>
        )
    }

}
