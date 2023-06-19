import React from 'react';

const Table = ({
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    selectedRows,
    highlightRowHandler,
}) => {
    return (
        <table {...getTableProps()}>
            <thead >
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {rows.map((row, index) => {
                    prepareRow(row);
                    const rowSelected = selectedRows.includes(index);
                    return (
                        <tr
                            key={index}
                            className={rowSelected ? 'highlight' : ''}
                            onClick={() => highlightRowHandler(index)}
                            {...row.getRowProps()}
                        >
                            {row.cells.map((cell) => (
                                <td
                                    {...cell.getCellProps()}
                                >
                                    {cell.render('Cell')}
                                </td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
