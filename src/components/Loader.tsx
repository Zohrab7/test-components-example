import * as React from "react";
import {Grid, Loader as LoaderWrapper} from "semantic-ui-react";

interface IProps {
    width?: string | number,
    loading?: boolean
}

const Loader: React.FC<IProps> = ({width, loading, children}) => {
    return (
        <Grid style={{width, height: '100%'}} verticalAlign="middle">
            <Grid.Row>
                <Grid.Column>
                    {
                        loading ?
                            <div>
                                <LoaderWrapper active inline='centered'/>
                            </div>

                            :
                            children
                    }
                </Grid.Column>
            </Grid.Row>
        </Grid>)
};

export default Loader;
