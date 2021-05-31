export enum url {
    photos = "https://jsonplaceholder.typicode.com/photos",
    cards = "https://jsonplaceholder.typicode.com/photos"
}

export const response = {
    photos: {
        content: [
            {
                id: 1,
                descr: "Legend 1",
                src: "http://react-responsive-carousel.js.org/assets/1.jpeg"
            },
            {
                id: 2,
                descr: "Legend 2",
                src: "http://react-responsive-carousel.js.org/assets/2.jpeg"
            },
            {
                id: 3,
                descr: "Legend 3",
                src: "http://react-responsive-carousel.js.org/assets/3.jpeg"
            },
            {
                id: 4,
                descr: "Legend 4",
                src: "http://react-responsive-carousel.js.org/assets/4.jpeg"
            }
        ]
    },
    cards: {
        content: [
            {
                id: 1,
                title: 'Steve Sanders',
                descr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                src: "https://react.semantic-ui.com/images/avatar/large/steve.jpg"
            },
            {
                id: 2,
                title: 'Molly Thomas',
                descr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                src: "https://react.semantic-ui.com/images/avatar/large/molly.png"
            },
            {
                id: 3,
                title: 'Jenny Lawrence',
                descr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                src: "https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
            },
            {
                id: 4,
                title: 'Elliot Baker',
                descr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                src: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
            }
        ]
    }
};
