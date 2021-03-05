import React, { Component } from 'react';
import CareFrequency from '../CareFrequency';
import ToggleButton from '../ToggleButton';
import LastCareCalendar from '../LastCareCalendar';
import './care.css';
import { Divider } from '@material-ui/core';

export default class Care extends Component {

    render() {
        return (
            <div className='care-container'>
                <div className='care-toggle-btn'>
                    <ToggleButton
                        title={this.props.title}
                        checked={this.props.isActive}
                        onChange={this.props.onActiveChange}
                    />
                </div>

                {this.props.isActive
                    ? <div>
                        <Divider />
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
