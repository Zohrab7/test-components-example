import * as React from "react";
import {Carousel} from "react-responsive-carousel";

import {IImageState} from "../redux/reducers";
import Loader from "./Loader";


interface IProps {
    width?: string | number,
    content?: IImageState[] | [],
    loading?: boolean
}

export const ImageCarousel: React.FC<IProps> = ({width = 480, loading, content = []}) => {

    return (
        <Loader width={width} loading={loading}>
            <Carousel>
                {
                    content.map(({id, descr, src}) => (
                        <div key={id}>
                            <img alt="" src={src}/>
                            <p className="legend">{descr}</p>
                        </div>
                    ))
                }
            </Carousel>
        </Loader>
    );
};
