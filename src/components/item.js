import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';


export class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data.text,
            editable: true,
            status: this.props.status
        };
        this.checkBox = this.checkBox.bind(this);
        this.delButton = this.delButton.bind(this);
        this.enableEdit = this.enableEdit.bind(this);
        this.editFunc = this.editFunc.bind(this);
        this.disableEdit = this.disableEdit.bind(this);
    }

    checkBox() {
        this.props.done(this.props.id);
    }

    delButton() {
        this.props.del(this.props.id);
    }

    editFunc(e) {
        this.props.edit(this.props.id, e.target.value);
    }

    enableEdit() {
        this.setState({editable: !this.state.editable});
    }
    disableEdit(){
        this.setState({editable : true});
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
                <TextField className={this.props.status ? 'itemTextDone' : 'itemText'}
                           type='text'
                           value={data}
                           onChange={this.editFunc}
                           disabled={this.state.editable}
                           onDoubleClick = {this.disableEdit}
                           multiline={true}
                           rowsMax={5}
                />
                <IconButton variant="fab"
                            className={'deleteButton'}
                            onClick={this.delButton}
                >
                    <DeleteIcon/>
                </IconButton>
                <IconButton variant="fab"
                            color="primary"
                            aria-label="Edit"
                            className={'editButton'}
                            onClick={this.enableEdit}
                >
                    <EditIcon/>
                </IconButton>

            </ListItem>


        );
    }
}