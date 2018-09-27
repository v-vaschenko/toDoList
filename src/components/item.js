import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';


export class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data.text,
            editable: true,
            status : this.props.status
        };
        this.checkBox = this.checkBox.bind(this);
        this.delButton = this.delButton.bind(this);
        this.enableEdit = this.enableEdit.bind(this);
        this.editFunc = this.editFunc.bind(this);
    }

    checkBox() {
        this.props.done(this.props.id);
    }

   delButton() {
        this.props.del(this.props.id);
    }

    editFunc(e) {
    this.props.edit (this.props.id, e.target.value);
    }
    enableEdit() {
        this.setState ( {editable : ! this.state.editable});
    }

    render() {

        let data = this.props.data.text;
        return (
            <ListItem className={'item'}
                      button={true}
            >
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.props.status}
                            onChange={this.checkBox}
                            color="primary"
                        />
                    }
                />
                <TextField className={this.props.status ? 'itemTextDone' : 'itemText' }
                           type = 'text'
                           value={data}
                           onChange={this.editFunc}
                           disabled={this.state.editable}
                           autoFocus={true}
                />
                <IconButton variant="fab"
                        className={'deleteButton'}
                        onClick={this.delButton}
                >
                    <DeleteIcon />
                </IconButton>
                <IconButton variant="fab"
                        color="primary"
                        aria-label="Edit"
                        className = {'editButton'}
                        onClick = {this.enableEdit}
                >
                    <EditIcon/>
                </IconButton>

            </ListItem>


        );
    }
}