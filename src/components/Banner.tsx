import * as React from "react";
import {useSelector} from "react-redux";
import {Button, Container, Header} from "semantic-ui-react";
import {Axios} from "axios-observable";
import {delay} from "rxjs/operators";

import {ImageCarousel} from "./ImageCarousel";
import {handleUserLoggedTxt, response, url} from "../const";
import {useAppDispatch} from "../redux/store";
import {StoreState} from "../types";
import {logOutUser, setImages, setImagesLoaded, setImagesLoading, toggleAuthModal} from "../redux/actions";
import {IImageState} from "../redux/reducers";

interface IProps {

}


export const Banner: React.FC<IProps> = () => {

    const {images, auth} = useSelector((state: StoreState) => state);
    const {logged, login} = auth;

    const dispatch = useAppDispatch();

    const dispatchActions: ISliderImagesActionTypes = ({
        setSliderImagesLoading: () => dispatch(setImagesLoading()),
        setSliderImages: (images) => dispatch(setImages(images)),
        setSliderImagesLoaded: () => dispatch(setImagesLoaded()),
        toggleAuthModal: () => dispatch(toggleAuthModal()),
        logOutUser: () => dispatch(logOutUser()),
    })

    const handleAuth = () => dispatchActions[logged ? 'logOutUser' : 'toggleAuthModal']();


    const _getSliderPhotos = () => {

        dispatchActions.setSliderImagesLoading();
        const instance =
            Axios.post(url.photos, response.photos)
                .pipe(delay(400))
                .subscribe(
                    {
                        next: ({data}) => {
                            dispatchActions.setSliderImages(data.content)
                        },
                        error: (err) => console.error(err),
                        complete: () => {
                            dispatchActions.setSliderImagesLoaded();
                            instance.unsubscribe();
                        }
                    }
                )
    };

    React.useEffect(() => {
        _getSliderPhotos();
    }, [])

    return (
        <React.Fragment>
            <Container text>
                <Header
                    as='h1'
                    content='Авторизация'
                    style={{
                        fontSize: '3em',
                        fontWeight: 'normal',
                        marginBottom: 0,
                        marginTop: '1em',
                    }}
                />
                <Header
                    as='h2'
                    style={{
                        fontSize: '1em',
                        fontWeight: 'normal',
                        marginTop: '1.5em',
                    }}
                >
                    {handleUserLoggedTxt(logged, login)}
                </Header>

                <Button onClick={handleAuth} primary size='huge'>
                    {logged ? 'Выйти' : 'Войти'}
                </Button>
            </Container>
            <Container>
                <ImageCarousel {...{...images}}/>
            </Container>

        </React.Fragment>
    );
};

interface ISliderImagesActionTypes {

    setSliderImages(images: IImageState[]): void;

    setSliderImagesLoading(): void,

    setSliderImagesLoaded(): void,

    toggleAuthModal(): void,

    logOutUser(): void,
}
