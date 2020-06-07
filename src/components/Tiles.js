import React from 'react';
import './Tiles.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';



function Tiles() {
    return (
        <div className="Grid">
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                <Button>Peel</Button>
                <Button>Dump</Button>
            </ButtonGroup>
            <Container className="tiles" maxWidth="sm">
                tiles go here
            </Container>

        </div>
    );
}

export default Tiles;
