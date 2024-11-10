import { useTranslation } from 'react-i18next';
import './projects.modules.css';
import React, { useState, useEffect } from 'react';

function Projects() {
    //Change language
    const { t } = useTranslation();

    //Carousel
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const carouselImagesElecticarMobile = [
        `${process.env.PUBLIC_URL}/project/electricMovil/electricMovil.jpg`,
        `${process.env.PUBLIC_URL}/project/electricMovil/electricMovil1.jpg`,
        `${process.env.PUBLIC_URL}/project/electricMovil/electricMovil2.jpg`,
        `${process.env.PUBLIC_URL}/project/electricMovil/electricMovil3.jpg`,
        `${process.env.PUBLIC_URL}/project/electricMovil/electricMovil4.jpg`,
        `${process.env.PUBLIC_URL}/project/electricMovil/electricMovil5.jpg`,
        `${process.env.PUBLIC_URL}/project/electricMovil/electricMovil6.jpg`,
        `${process.env.PUBLIC_URL}/project/electricMovil/electricMovil7.jpg`
    ];

    const carouselImagesAbarrotes = [
        `${process.env.PUBLIC_URL}/project/abarrotes/abarrotes1.jpg`,
        `${process.env.PUBLIC_URL}/project/abarrotes/abarrotes2.jpg`,
        `${process.env.PUBLIC_URL}/project/abarrotes/abarrotes3.jpg`,
        `${process.env.PUBLIC_URL}/project/abarrotes/abarrotes4.jpg`,
        `${process.env.PUBLIC_URL}/project/abarrotes/abarrotes5.jpg`,
        `${process.env.PUBLIC_URL}/project/abarrotes/abarrotes6.jpg`,
        `${process.env.PUBLIC_URL}/project/abarrotes/abarrotes1.jpg`,
        `${process.env.PUBLIC_URL}/project/abarrotes/abarrotes3.jpg`

    ];

    const carouselImagesAlex = [
        `${process.env.PUBLIC_URL}/project/alex/alex.jpg`,
        `${process.env.PUBLIC_URL}/project/alex/alex.jpg`,
        `${process.env.PUBLIC_URL}/project/alex/alex.jpg`,
        `${process.env.PUBLIC_URL}/project/alex/alex.jpg`,
        `${process.env.PUBLIC_URL}/project/alex/alex.jpg`,
        `${process.env.PUBLIC_URL}/project/alex/alex.jpg`,
        `${process.env.PUBLIC_URL}/project/alex/alex.jpg`
    ];

    const carouselImagesBola = [
        `${process.env.PUBLIC_URL}/project/bola/bola.jpg`,
        `${process.env.PUBLIC_URL}/project/bola/bola1.jpg`,
        `${process.env.PUBLIC_URL}/project/bola/bola2.jpg`,
        `${process.env.PUBLIC_URL}/project/bola/bola.jpg`,
        `${process.env.PUBLIC_URL}/project/bola/bola1.jpg`,
        `${process.env.PUBLIC_URL}/project/bola/bola2.jpg`,
        `${process.env.PUBLIC_URL}/project/bola/bola.jpg`,
        `${process.env.PUBLIC_URL}/project/bola/bola1.jpg`
    ];

    const carouselImagesElectricWeb = [
        `${process.env.PUBLIC_URL}/project/electricarWeb/elec.PNG`,
        `${process.env.PUBLIC_URL}/project/electricarWeb/elec1.PNG`,
        `${process.env.PUBLIC_URL}/project/electricarWeb/elec2.PNG`,
        `${process.env.PUBLIC_URL}/project/electricarWeb/elec3.PNG`,
        `${process.env.PUBLIC_URL}/project/electricarWeb/elec4.PNG`,
        `${process.env.PUBLIC_URL}/project/electricarWeb/elec.PNG`,
        `${process.env.PUBLIC_URL}/project/electricarWeb/elec1.PNG`,
        `${process.env.PUBLIC_URL}/project/electricarWeb/elec2.PNG`
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
        <>
            <div className="P-title" style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif", fontSize: "x-large", fontWeight: "bolder", textAlign: "center"}}>
                {t('PROJECTS')}</div>
            <br/>
            <br/>
            <div className="App-fila">
                <div className="App-columna">
                    <article className="cardv2" style={{ alignItems: 'center', justifyContent: 'center' }}>
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
                </div>
                <br />
                <br />
                <div className="App-columna" >
                    <article className="cardv2" style={{ maxWidth: "35rem", height: "28rem", alignItems: 'center', justifyContent: 'center' }}>
                        <img
                            className="cardv2__background"
                            src={carouselImagesElectricWeb[currentImageIndex]}
                            alt={`Project Image ${currentImageIndex + 1}`}
                            width="1920"
                            height="2193"
                        />
                        <div className="cardv2__content | flow" style={{ height: "73%" }}>
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
            </div>
            <br />
            <br />
            <div className="App-fila">
                <div className="App-columna">
                    <article className="cardv2" style={{ maxWidth: "35rem", height: "28rem", alignItems: 'center', justifyContent: 'center' }}>
                        <img
                            className="cardv2__background"
                            src={carouselImagesAlex[currentImageIndex]}
                            alt={`Project Image ${currentImageIndex + 1}`}
                            width="1920"
                            height="2193"
                        />
                        <div className="cardv2__content | flow" style={{ height: "72%" }}>
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
                </div>
                <br />
                <br />
                <div className="App-columna">
                    <article className="cardv2" style={{ maxWidth: "35rem", height: "28rem", alignItems: 'center', justifyContent: 'center' }}>
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
            </div>
            <br />
            <br />
            <div className='App-columna' >
                <article class="cardv2" style={{ maxWidth: "35rem", height: "28rem", alignItems: 'center', justifyContent: 'center' }}>
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
        </>

    );
}

export default Projects;
