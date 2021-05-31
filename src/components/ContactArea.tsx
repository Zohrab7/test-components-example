import * as React from "react";
import {Grid, Header} from "semantic-ui-react";

interface IProps {

}

export const ContactArea: React.FC<IProps> = ({children}) => {
    return (
        <Grid padded="horizontally" textAlign="left" float="left">
            <Grid.Row>
                <Grid.Column>
                    <Header
                        as='h1'
                        content='Обратная связь'
                        style={{
                            fontSize: '3em',
                            fontWeight: 'normal',
                            marginBottom: '1em',
                            marginTop: '1em',

                        }}
                    />
                    {children}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};
