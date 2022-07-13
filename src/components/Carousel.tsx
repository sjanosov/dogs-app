import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../scss/carousel.scss';
import '../scss/dogs.scss';

function Carousel() {

    const [breeds, setBreeds] = useState([]);
    const [imagesURL, setImagesURL] = useState("");
    const settings = {
        dots: false,
        navigator: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                navigator: true,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    useEffect(() => {
        getBreeds();
    }, [])
    const getBreeds = async () => {
        const api = await fetch(`https://api.thedogapi.com/v1/breeds`)

        const data = await api.json();

        setBreeds(data);


        // setImagesURL(data.image.url);
        console.log(data)

    }
    return (
        <Slider {...settings}>
            {breeds.map((breed: Record<string, any>) => {
                return (
                    <div className="card" key={breed.id}>
                        <div className="card-top">
                            <img src={breed.image['url']} />
                        </div>
                        <div className="card-bottom">
                            <h1>{breed.name}</h1>
                            <p>
                                <b>Temperament:</b> {breed.temperament}
                            </p>
                            <div>
                                <b>Breed group:</b> {breed.breed_group}
                            </div>
                        </div>
                    </div>
                )
            })}
        </Slider>

    )
}

export default Carousel