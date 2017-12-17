import React from 'react';
import {compose, withState} from "recompose";

const MonitoringPage = (props) => {
    return (
        <div></div>
    );
};

export default compose(
    withState("measureId", "setMeasureId"),
    withState("facilityId", "setFacilityId"),
)(MonitoringPage);
