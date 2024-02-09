import { useTranslation } from 'react-i18next';
import './projects.modules.css';
import React, { useState, useEffect } from 'react';

function Projects() {
    //Change language
    const { t } = useTranslation();

    //Carousel
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const carouselImagesElecticarMobile = [
        '/project/electricMovil/electricMovil.jpg',
        '/project/electricMovil/electricMovil1.jpg',
        '/project/electricMovil/electricMovil2.jpg',
        '/project/electricMovil/electricMovil3.jpg',
        '/project/electricMovil/electricMovil4.jpg',
        '/project/electricMovil/electricMovil5.jpg',
        '/project/electricMovil/electricMovil6.jpg',
        '/project/electricMovil/electricMovil7.jpg'
    ];

    const carouselImagesAbarrotes = [
        '/project/abarrotes/abarrotes1.jpg',
        '/project/abarrotes/abarrotes2.jpg',
        '/project/abarrotes/abarrotes3.jpg',
        '/project/abarrotes/abarrotes4.jpg',
        '/project/abarrotes/abarrotes5.jpg',
        '/project/abarrotes/abarrotes6.jpg',
        '/project/abarrotes/abarrotes1.jpg',
        '/project/abarrotes/abarrotes3.jpg'

    ];

    const carouselImagesAlex = [
        '/project/alex/alex.jpg',
        '/project/alex/alex.jpg',
        '/project/alex/alex.jpg',
        '/project/alex/alex.jpg',
        '/project/alex/alex.jpg',
        '/project/alex/alex.jpg',
        '/project/alex/alex.jpg'
    ];

    const carouselImagesBola = [
        '/project/bola/bola.jpg',
        '/project/bola/bola1.jpg',
        '/project/bola/bola2.jpg',
        '/project/bola/bola.jpg',
        '/project/bola/bola1.jpg',
        '/project/bola/bola2.jpg',
        '/project/bola/bola.jpg',
        '/project/bola/bola1.jpg'
    ];

    const carouselImagesElectricWeb = [
        '/project/electricarWeb/elec.png',
        '/project/electricarWeb/elec1.png',
        '/project/electricarWeb/elec2.png',
        '/project/electricarWeb/elec3.png',
        '/project/electricarWeb/elec4.png',
        '/project/electricarWeb/elec.png',
        '/project/electricarWeb/elec1.png',
        '/project/electricarWeb/elec2.png'
    ];

    //ELECTRICAR MOBILE
    const nextImageElectricarMobile = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImagesElecticarMobile.length);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextImageElectricarMobile();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [currentImageIndex]);

    //ABARROTES
    const nextImageAbarrotes = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImagesAbarrotes.length);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextImageAbarrotes();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [currentImageIndex]);

    //CASA DOMÓTICA ALEX
    const nextImageAlex = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImagesAbarrotes.length);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextImageAlex();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [currentImageIndex]);

    //BOLA MÁGICA
    const nextImageBola = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImagesBola.length);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextImageBola();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [currentImageIndex]);

    //ELECTRICAR WEB
    const nextImageElectricarWeb = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImagesBola.length);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextImageElectricarWeb();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [currentImageIndex]);


    return (
        <div>
            <div className="title">
                <span>{t('PROJECTS')}</span>
            </div>
            <div className="con">
                <div className="column-left">
                    <article className="cardv2" style={{marginTop:"10px"}}>
                        <img
                            className="cardv2__background"
                            src={carouselImagesElecticarMobile[currentImageIndex]}
                            alt={`Project Image ${currentImageIndex + 1}`}
                            width="1920"
                            height="2193"
                        />
                        <div className="cardv2__content | flow">
                            <div className="cardv2__content--container | flow">
                                <h2 className="cardv2__title">{t('ElectricarMobile')}</h2>
                                <div className="pv2">
                                    <p className="cardv2__description">
                                    {t('DescriptionEM')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className="cardv2" style={{ maxWidth: "38rem", height: "28rem", objectFit: "cover", marginTop:"18px"}}>
                        <img
                            className="cardv2__background"
                            src={carouselImagesElectricWeb[currentImageIndex]}
                            alt={`Project Image ${currentImageIndex + 1}`}
                            width="1920"
                            height="2193"
                        />
                        <div className="cardv2__content | flow" style={{height:"73%"}}>
                            <div className="cardv2__content--container | flow">
                                <h2 className="cardv2__title">{t('ElectricarWeb')}</h2>
                                <div className="pv2">
                                    <p className="cardv2__description">
                                    {t('DescriptionEW')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

                <div className="column-right">
                    <article className="cardv2" style={{ maxWidth: "38rem", height: "28rem", objectFit: "cover",marginTop:"10px" }}>
                        <img
                            className="cardv2__background"
                            src={carouselImagesAlex[currentImageIndex]}
                            alt={`Project Image ${currentImageIndex + 1}`}
                            width="1920"
                            height="2193"
                        />
                        <div className="cardv2__content | flow" style={{height: "72%"}}>
                            <div className="cardv2__content--container | flow">
                                <h2 className="cardv2__title">{t('Alex')}</h2>
                                <div className="pv2">
                                    <p className="cardv2__description">
                                    {t('DescriptionAlex')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className="cardv2" style={{ maxWidth: "38rem", height: "28rem", objectFit: "cover", marginTop:"18px" }}>
                        <img
                            className="cardv2__background"
                            src={carouselImagesBola[currentImageIndex]}
                            alt={`Project Image ${currentImageIndex + 1}`}
                            width="1920"
                            height="2193"
                        />
                        <div className="cardv2__content | flow">
                            <div className="cardv2__content--container | flow">
                                <h2 className="cardv2__title">{t('Bola')}</h2>
                                <div className="pv2">
                                    <p className="cardv2__description">
                                    {t('DescriptionBola')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

                <article class="cardv2" style={{ maxWidth: "38rem", height: "28rem", objectFit: "cover", margin: "0", alignItems:"center", alignContent:"center" }}>
                        <img
                            class="cardv2__background"
                            src={carouselImagesAbarrotes[currentImageIndex]}
                            alt={`Project Image ${currentImageIndex + 1}`}
                            width="1920"
                            height="2193"
                        />
                        <div class="cardv2__content | flow">
                            <div class="cardv2__content--container | flow">
                                <h2 class="cardv2__title"> {t('Abarrotes')}</h2>
                                <div className="pv2">
                                    <p class="cardv2__description">
                                    {t('DescriptionA')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
            </div>
        </div>
    );
}

export default Projects;
