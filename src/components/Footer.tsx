import * as React from "react";
import {Grid} from "semantic-ui-react";

interface IProps {

}

export const Footer: React.FC<IProps> = () => {
    return (
        <Grid
            centered
            columns={3}
            padded
            stackable
            style={{margin: '-1.5em', width: '100%', background: '#1b1c1d'}}
            textAlign='center'
        >
            <Grid.Column color='black' style={{margin: '0.5em', width: 200, height: 50}}>
                © Copyright 2021
            </Grid.Column>
        </Grid>
    );
};
