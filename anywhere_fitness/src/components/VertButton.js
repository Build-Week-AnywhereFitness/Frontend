import React, {useState,useEffect} from 'react'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const SimpleMenu = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    
    };

    return (
        <div>
        <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MoreVertIcon />
        </IconButton >
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >

            <MenuItem >Edit</MenuItem>
            <MenuItem >Delete</MenuItem>
        </Menu>
    </div>
    );
};


export default SimpleMenu;
