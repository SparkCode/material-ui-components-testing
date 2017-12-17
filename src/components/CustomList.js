import React from 'react';
import PropTypes from 'prop-types';
import {List, ListItem, ListItemText} from "material-ui";
import {compose, setPropTypes, withProps, withState} from "recompose";
import Box from 'react-layout-components'

const CustomList = ({ ListItemDescriptions, selectedListItem, setSelectedListItem }) => {
    const listItems = ListItemDescriptions.map(({value, label}) => (
        <ListItem key={value} onClick={() => setSelectedListItem(value)}>
            <ListItemText primary={label}/>
        </ListItem>));
    const { container } = ListItemDescriptions[selectedListItem];
    return (
        <Box>
            <Box width={300} style={{marginTop: "50px"}}>
                <List>
                    {listItems}
                </List>
            </Box>
            {container}
        </Box>
    );
};

export default compose(
    setPropTypes({
        ListItemDescriptions: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.any.isRequired,
                label: PropTypes.string.isRequired,
                container: PropTypes.element.isRequired,
            })
        ).isRequired,
    }),
    withProps(({ListItemDescriptions}) => ({
        firstListItem: ListItemDescriptions.length ? ListItemDescriptions[0].value : undefined,
    })),
    withState('selectedListItem', 'setSelectedListItem', ({firstListItem}) => firstListItem)
)(CustomList);
