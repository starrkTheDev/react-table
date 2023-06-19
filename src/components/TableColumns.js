const tableColumns = (selectedRows) => [
    {
        Header: 'Author',
        accessor: 'volumeInfo.authors',
        Cell: ({ value }) => value[0],
    },
    {
        Header: 'Title',
        accessor: 'volumeInfo.title',
        Cell: ({ row }) => {
            if (selectedRows.includes(row.index)) {
                return <>{row.original.volumeInfo.title}</>;
            } else {
                return null;
            }
        },
    },
    {
        Header: 'Release Year',
        accessor: 'volumeInfo.publishedDate',
        Cell: ({ row }) => {
            if (selectedRows.includes(row.index)) {
                const year = row.original.volumeInfo.publishedDate.split('-')[0];
                return <>{year}</>;
            } else {
                return null;
            }
        },
    },
    {
        Header: 'Kind',
        accessor: 'volumeInfo.categories',
        Cell: ({ row }) => {
            if (selectedRows.includes(row.index)) {
                if (!row.original.volumeInfo.categories) {
                    return <p>-</p>;
                } else {
                    return <>{row.original.volumeInfo.categories}</>;
                }
            } else {
                return null;
            }
        },
    },
    {
        Header: 'ID',
        accessor: 'id',
        Cell: ({ row }) => {
            if (selectedRows.includes(row.index)) {
                return <>{row.original.id}</>;
            } else {
                return null;
            }
        },
    },

];
export default tableColumns;

