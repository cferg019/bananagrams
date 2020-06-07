import React from 'react';
import './Grid.css';
import Container from '@material-ui/core/Container';



function Grid() {
    return (
        <div className="Grid">
            <Container className="grid" maxWidth="sm">
                <h1>grid</h1>
            </Container>
        </div>
    );
}

export default Grid;
