import * as React from "react";
import {Header as HeaderWrapper, Image, Menu} from "semantic-ui-react";

import logo from "../static/images/logo.svg"

interface IProps {

}

export const Header: React.FC<IProps> = () => {


    return (
        <HeaderWrapper>
            <Menu>
                <Menu.Item as='a' header>
                    <Image size='tiny' src={logo} style={{marginRight: '1.5em'}}/>
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='Link1'
                        link={true}
                    />
                    <Menu.Item
                        name='Link2'
                        link={true}
                    />
                    <Menu.Item
                        name='Link3'
                        link={true}
                    />
                    <Menu.Item
                        name='Link4'
                        link={true}
                    />
                </Menu.Menu>
            </Menu>
        </HeaderWrapper>

    );
};
