import React from 'react';
import PropTypes from 'prop-types';
import {Tab, Tabs} from "material-ui";
import {compose, setPropTypes, withProps, withState} from "recompose";

const CustomTabs = ({ tabDescriptions, selectedTab, setSelectedTab }) => {
    const tabComponents = tabDescriptions.map(({value, label}) => (
        <Tab value={value} label={label} key={value}/>
    ));
    return (
        <Tabs value={selectedTab} onChange={(event,value) => setSelectedTab(value)}>
            {tabComponents}
        </Tabs>
    );
};

export default compose(
    setPropTypes({
        tabDescriptions: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.any.isRequired,
                label: PropTypes.string.isRequired,
            })
        ).isRequired,
    }),
    withProps(({tabDescriptions}) => ({
        firstTab: tabDescriptions.length ? tabDescriptions[0].value : undefined,
    })),
    withState('selectedTab', 'setSelectedTab', ({firstTab}) => firstTab)
)(CustomTabs);
