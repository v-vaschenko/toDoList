import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

export class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.counter = this.counter.bind(this);
        this.filterAll = this.filterAll.bind(this);
        this.filterFalse = this.filterFalse.bind(this);
        this.filterTrue = this.filterTrue.bind(this);
        this.delAllDone = this.delAllDone.bind(this);
    }

    counter(param) {
        let data = this.props.data;
        let count = data.filter(function (index) {
            return index.status === param;
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
    render() {
        const { classes } = this.props;
        return (
            <div className='filter col row'>
                <Button variant="contained"
                        size="small"
                        color="secondary"
                        className={'col'}
                        onClick = {this.filterAll}
                >
                    Show All
                </Button>
                <Button variant="contained"
                        size="medium"
                        color="primary"
                        className={'col'}
                        onClick = {this.filterFalse}
                >
                    Show ToDo
                </Button>
                <Button variant="contained"
                        size="small"
                        color="default"
                        className={'col'}
                        onClick={this.filterTrue}
                >
                    Show Done
                </Button>
                <div className={'counter col'}>
                    <span> Total:
                        <strong>{this.counter(true) + this.counter(false)}</strong><br/>
                    </span>
                    <span> Done:
                        <strong>{this.counter(true)} </strong><br/>
                    </span>
                    <span> Undone:
                        <strong>{this.counter(false)} </strong><br/>
                    </span>
                </div>
                <IconButton variant="fab"
                            color={'secondary'}
                            className={'deleteDone col'}
                            onClick={this.delAllDone}
                >
                    <DeleteIcon/>
                </IconButton>
            </div>
        )
    }
}
