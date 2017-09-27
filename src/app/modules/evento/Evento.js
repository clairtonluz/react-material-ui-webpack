import React, {Component} from "react";
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class Evento extends Component {
    constructor(props) {
        super(props);
        this.state = {selected: []};
        this.isSelected = this.isSelected.bind(this);
        this.handleRowSelection = this.handleRowSelection.bind(this);
    }

    isSelected(index) {
        return this.state.selected.indexOf(index) !== -1;
    };

    handleRowSelection(selectedRows) {
        this.setState({
            selected: selectedRows,
        });
    };

    render() {
        let selectable = false;
        return (
            <div>
                <h3>Eventos</h3>
                <Table selectable={selectable}>
                    <TableHeader displaySelectAll={selectable} adjustForCheckbox={selectable}>
                        <TableRow>
                            <TableHeaderColumn colSpan="5">
                            </TableHeaderColumn>
                            <TableHeaderColumn style={{textAlign: 'center'}}>
                                <IconButton title="Novo evento">
                                    <AddIcon/>
                                </IconButton>
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Nome</TableHeaderColumn>
                            <TableHeaderColumn>Início</TableHeaderColumn>
                            <TableHeaderColumn>Fim</TableHeaderColumn>
                            <TableHeaderColumn>Local</TableHeaderColumn>
                            <TableHeaderColumn>Vagas</TableHeaderColumn>
                            <TableHeaderColumn>Ações</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={selectable}>
                        <TableRow>
                            <TableRowColumn>1</TableRowColumn>
                            <TableRowColumn>Enem não tira férias</TableRowColumn>
                            <TableRowColumn>01/10/2017</TableRowColumn>
                            <TableRowColumn>20/10/2017</TableRowColumn>
                            <TableRowColumn>Sefor 1</TableRowColumn>
                            <TableRowColumn>3500</TableRowColumn>
                            <TableRowColumn>
                                <IconButton title="Editar evento">
                                    <EditIcon/>
                                </IconButton>
                                <IconButton title="Remover evento">
                                    <DeleteIcon/>
                                </IconButton>
                            </TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>2</TableRowColumn>
                            <TableRowColumn>FDS Enem</TableRowColumn>
                            <TableRowColumn>10/10/2017</TableRowColumn>
                            <TableRowColumn>12/10/2017</TableRowColumn>
                            <TableRowColumn>Sefor 2</TableRowColumn>
                            <TableRowColumn>5000</TableRowColumn>
                            <TableRowColumn>
                                <IconButton title="Editar evento">
                                    <EditIcon/>
                                </IconButton>
                                <IconButton title="Remover evento">
                                    <DeleteIcon/>
                                </IconButton>
                            </TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default Evento;
