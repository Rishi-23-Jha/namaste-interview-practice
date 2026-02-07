import React, { useState } from 'react';

function ProgressBar() {
    const [value, setValue] = useState(0)

    function getColor() {
        if (value >= 80) return 'green';
        if (value >= 40) return 'orange';
        return 'red';
    }


    function plusTen() {
        setValue((prev) => prev === 100 ? 100 : prev + 10);
    }

    function minusTen() {
        setValue((prev) => prev === 0 ? 0 : prev - 10)
    }

    return (
        <div>
            {/* Implement the ProgressBar component logic here */}
            <h1>Progress Bar</h1>
            <div style={{ backgroundColor: 'grey', width: '100%' }}>
                <div style={{
                    width: `${value}%`,
                    backgroundColor: getColor()


                }}
                    id='testBgColor'>


                    {value}% </div>
            </div>
            <button onClick={minusTen}>-10%</button>
            <button onClick={plusTen}>+10%</button>

        </div>
    );
}

export default ProgressBar;
