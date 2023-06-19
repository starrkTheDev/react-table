import React, { useMemo, useState, useEffect } from 'react';
import { useTable, useRowSelect } from 'react-table';
import './Page.css';
import tableColumns from './TableColumns';
import Breadcrumb from './Breadcrumb';
import Table from './Table';

const Page = (props) => {
    const [books, setBooks] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);
    const [breadcrumb, setBreadcrumb] = useState(['Table']);

    const highlightRowHandler = (rowIndex) => {
        setSelectedRows([rowIndex]);
        setBreadcrumb(['Table', books[rowIndex].volumeInfo.authors[0]]);
    };

    const handleBreadcrumbClick = (index) => {
        if (index === breadcrumb.length - 1) {
            return;
        }
        setSelectedRows([]);
        setBreadcrumb(breadcrumb.slice(0, index + 1));
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await fetch(
                'https://www.googleapis.com/books/v1/volumes?q=react'
            );
            const data = await response.json();
            setBooks(data.items);
        } catch (error) {
            console.log('Error fetching books:', error);
        }
    };

    const data = useMemo(() => books, [books]);

    const columns = useMemo(() => tableColumns(selectedRows), [selectedRows]);

    const {
        getTableProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        { columns, data },
        useRowSelect,
        (hooks) => {
            hooks.visibleColumns.push((columns) => {
                return [...columns];
            });
        }
    );

    return (
        <div className='flex flex-col items-center mx-2' >
            {breadcrumb.length > 0 && (
                <Breadcrumb
                    breadcrumb={breadcrumb}
                    selectedRows={selectedRows}
                    handleBreadcrumbClick={handleBreadcrumbClick}
                />
            )}

            <Table
                getTableProps={getTableProps}
                headerGroups={headerGroups}
                rows={rows}
                prepareRow={prepareRow}
                selectedRows={selectedRows}
                highlightRowHandler={highlightRowHandler}
            />
        </div>
    );
};

export default Page;
