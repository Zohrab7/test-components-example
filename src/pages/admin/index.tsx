import * as React from "react";

import {Banner, CardList, ContactArea, Container, Footer, Header} from "../../components";
import UserAuthModal from "./modals";
import {ContactForm} from "./forms";


interface IProps {

}

export const AdminPage: React.FC<IProps> = () => {
    return (
        <div className="dashboard">
            <Header/>
            <Container>
                <Banner/>
            </Container>
            <Container
                height="auto"
                flexDirection="column"
                background="#e2e2e2"
            >
                <CardList/>
            </Container>
            <Container
                height="450px"
                flexDirection="column">
                <ContactArea>
                    <ContactForm/>
                </ContactArea>
            </Container>
            <br/>
            <Footer/>
            <UserAuthModal/>
        </div>
    );
};
