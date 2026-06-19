
import React, {useEffect, useRef} from "react";
import styled from "styled-components";


const Container = styled.div`
    width: 100%;
    max-width: 600px;
    height: 60vh;
    overflow: hidden;
    margin: 1rem;
`;


const Map = ({lat = -22.93592061, lng = -42.8249576, zoom = 12}) =>{
    const mapRef = useRef(null);

    useEffect(() => {
        const loadMapScript = () => {
            if (window.google){
                initMap();
                return;
            }

            const script = document.createElement('script');
            script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBlUeJOvuMtpbQBN6nZFhTd0q2G3hUWbD4";
            script.async = true;
            script.defer = true;
            script.onload = initMap;
            document.body.appendChild(script);
        };

        const initMap = () => {

            const map = new window.google.maps.Map(mapRef.current, {
                center: {lat, lng},
                zoom,
            });

            const cityMarkers = [
                {lat: -22.95, lng: -42.90, title: 'Espraiado'},
                {lat: -22.87, lng: -42.78, title: 'Ubatiba'},
                {lat: -22.93, lng: -42.82, title: 'Centro'},
            ];

            cityMarkers.forEach((loc) => {
                new window.google.maps.Marker({
                    position: {lat: loc.lat, lng: loc.lng},
                    map,
                    title: loc.title
                });
            });
        };

        loadMapScript();
    }, [lat, lng, zoom]);

    return (
        <>
            <Container ref={mapRef}>
            </Container>
        </>
    );
};

export default Map;