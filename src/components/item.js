import React from 'react';
import * as ReactDOM from "react-dom";

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
            <p onDoubleClick={this.enableEdit}
            >
                <input type="text"
                       className={this.props.status ? 'itemTextDone' : 'itemText' }
                       value={data}
                       onChange={this.editFunc}
                       disabled={this.state.editable}
                />
                <input type='checkbox'
                       checked={this.props.status}
                       onChange={this.checkBox}
                />
                <input type='button'
                       className={'deleteButton'}
                       onClick={this.delButton}
                />
            </p>
        );
    }
}