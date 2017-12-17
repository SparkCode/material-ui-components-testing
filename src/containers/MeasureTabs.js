import React from 'react';
import {compose, defaultProps} from "recompose";
import { CustomTabs } from "../components";

const MeasureTabBody = ({value}) => (<span>{value}</span>);

const MeasureTabs = compose(
    defaultProps({
        tabDescriptions: [
            {value: 0, label: "By length"},
            {value: 1, label: "By width"},
            {value: 2, label: "By years"},
            {value: 3, label: "By smth other"},
        ],
        TabBody: MeasureTabBody
    })
)(CustomTabs);

export default MeasureTabs;
