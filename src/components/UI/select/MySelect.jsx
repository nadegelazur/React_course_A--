import React from 'react';

// {option} - массив опций

const MySelect = ({options, defaultValue}) => {
    return (
        <select>
            <option disabled={true} value="">{defaultValue}</option>
            {options.map(option => 
                <option value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;