import React from 'react';
function Hello ({person}) {
    return (
        <div>
            <h1>
                {person.message} {person.emoji}
                {person.name}{person.number}
                {person.email}{person.address}{person.seatNumbers}

            </h1>
        </div>

    )
}

export default Hello