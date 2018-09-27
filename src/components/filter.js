import React from 'react';
import * as ReactDOM from "react-dom";
import {render} from "react-dom";
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import {withStyles} from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const options = [
    'Done',
    'Undone'
];

const ITEM_HEIGHT = 48;

export class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.counter = this.counter.bind(this);
        this.filterAll = this.filterAll.bind(this);
        this.filterFalse = this.filterFalse.bind(this);
        this.filterTrue = this.filterTrue.bind(this);
        this.delAllDone = this.delAllDone.bind(this);
        this.state = {anchorEl: null};
    }

    counter(param) {
        let data = this.props.data;
        let count = data.filter(function (index) {
            return index.status == param;
        });
        return (count.length);
    }

    filterAll() {
        this.props.filterAll(0);
    }

    filterFalse() {
        this.props.filterFalse(false);
    }

    filterTrue() {
        this.props.filterTrue(true);
    }

    delAllDone() {
        this.props.delAllDone();
    }

    handleClick = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    render() {
        const {anchorEl} = this.state;
        const open = Boolean(anchorEl);
        return (
            <div className='filter'>
                <div className={'filterMenu'}>
                    <IconButton
                        aria-owns={anchorEl ? 'simple-menu' : null}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                    >
                        <MoreVertIcon/>
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.filterAll}>All</MenuItem>
                        <MenuItem onClick={this.filterTrue}>Done</MenuItem>
                        <MenuItem onClick={this.filterFalse}>Not Done</MenuItem>
                    </Menu>
                </div>
                <div className={'counter'}>
                    <span> Total:
                        <strong>{this.counter(true) + this.counter(false)}</strong>
                    </span>
                    <span> Done:
                        <strong>{this.counter(true)} </strong>
                    </span>
                    <span> Undone:
                        <strong>{this.counter(false)} </strong>
                    </span>
                </div>
                <IconButton variant="fab"
                            color={'secondary'}
                            className={'deleteDone'}
                            onClick={this.delAllDone}
                >
                    <DeleteIcon/>
                </IconButton>
            </div>
        )
    }
}
