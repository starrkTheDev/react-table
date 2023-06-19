import React from 'react';

const Breadcrumb = ({ breadcrumb, selectedRows, handleBreadcrumbClick }) => {
    return (
        <div className="breadcrumb">
            {breadcrumb.map((item, index) => (
                <React.Fragment key={index}>
                    {index === 0 ? null : (
                        <>
                            <span className="breadcrumb-separator">&gt;</span>
                        </>
                    )}
                    <span onClick={() => handleBreadcrumbClick(index)}>
                        {item}
                    </span>
                </React.Fragment>
            ))}
        </div>
    );
};

export default Breadcrumb;
