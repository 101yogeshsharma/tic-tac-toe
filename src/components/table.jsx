import React from 'react';

class Table extends React.Component {

    constructor(props) {
        super(props);

        // let states = {
        //     columns : 3
        //}
    }

    table = {
        margin : "auto",
        border : "1px solid black"
    }

    tableHeader = () => {
        <table style={this.style}>
            <th>
                <td>S No.</td>
                <td>Cell No.</td>
                <td>Move</td>
            </th>
        </table>
    }

    render() {
        this.tableHeader();
        return(
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.cell}</td>
                <td>{this.props.value}</td>
            </tr>
        );
    }

}

export default Table;