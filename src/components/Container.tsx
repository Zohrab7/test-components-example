import * as React from "react";
import {Segment} from "semantic-ui-react";

import "./container.scss";


interface IProps {
    flexDirection?: 'column' | 'row',
    background?: string,
    height?: string
}

export const Container: React.FC<IProps> = ({height, background = 'initial', flexDirection = "row", children}) => {
    return (
        <Segment style={{flexDirection, height, background}} className="dashboard__container">
            {children}
        </Segment>
    );
};
