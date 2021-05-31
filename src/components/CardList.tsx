import * as React from "react";
import {Card, Header, Image} from "semantic-ui-react";
import {useSelector} from "react-redux";
import {delay} from "rxjs/operators";
import {Axios} from "axios-observable";

import {StoreState} from "../types";
import {useAppDispatch} from "../redux/store";
import {setCards, setCardsLoaded, setCardsLoading} from "../redux/actions";
import {ICardsState} from "../redux/reducers";
import {response, url} from "../const";
import Loader from "./Loader";


interface IProps {
    width?: string
}

export const CardList: React.FC<IProps> = ({width = '100%'}) => {

    const {loading, content} = useSelector((state: StoreState) => state.cards);

    const dispatch = useAppDispatch();

    const dispatchActions: ICardActionTypes = ({
        setCardsLoading: () => dispatch(setCardsLoading()),
        setCards: (cards) => dispatch(setCards(cards)),
        setCardsLoaded: () => dispatch(setCardsLoaded()),
    })

    const _getCards = () => {

        dispatchActions.setCardsLoading();
        const instance =
            Axios.post(url.cards, response.cards)
                .pipe(delay(400))
                .subscribe(
                    {
                        next: ({data}) => {
                            dispatchActions.setCards(data.content)
                        },
                        error: (err) => console.error(err),
                        complete: () => {
                            dispatchActions.setCardsLoaded();
                            instance.unsubscribe();
                        }
                    }
                )
    };

    React.useEffect(() => {
        _getCards();
    }, [])

    return (
        <React.Fragment>
            <Header
                as='h1'
                content='Наши Клиенты'
                style={{
                    fontSize: '3em',
                    fontWeight: 'normal',
                    marginBottom: '1em',
                    marginTop: '1em',

                }}
            />
            <Loader width={width} loading={loading}>
                <Card.Group
                    style={{
                        paddingBottom: 50,
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >

                    {
                        content.map(({id, title, descr, src}) => (
                            <Card style={{height: 120}} key={id}>
                                <Card.Content>
                                    <Image
                                        style={{borderRadius: 50}}
                                        rounded
                                        floated='left'
                                        size='tiny'
                                        src={src}
                                    />
                                    <Card.Header>{title}</Card.Header>
                                    <Card.Meta>{descr}</Card.Meta>
                                </Card.Content>
                            </Card>
                        ))
                    }

                </Card.Group>
            </Loader>
        </React.Fragment>
    );
};

interface ICardActionTypes {

    setCardsLoading(): void,

    setCards(cards: ICardsState[]): void;

    setCardsLoaded(): void,

}
