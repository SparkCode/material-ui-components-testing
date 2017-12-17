import React from 'react';
import {compose, defaultProps} from "recompose";
import CustomList from "../components/CustomList";
import MeasureTabs from "./MeasureTabs";

const FacilityListContainer = ({facilityId}) => (<MeasureTabs/>);

const FacilityList = compose(
    defaultProps({
        ListItemDescriptions: [
            {value: 4, label: "Оборудование для производства банковских карт", container: (<span>value1</span>)},
            {value: 0, label: "Оборудование для производства топливных брикетов из навоза", container: (<span>value1</span>)},
            {value: 1, label: "Оборудование для майнинга эфира", container: (<FacilityListContainer/>)},
            {value: 2, label: "Оборудование для шаурмы на углях", container: (<span>value3</span>)},
            {value: 3, label: "Оборудование для производства бумажных пакетов", container: (<span>value4</span>)},
        ]
    })
)(CustomList);

export default FacilityList;
