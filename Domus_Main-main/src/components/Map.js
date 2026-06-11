import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    max-width: 600px;
    height: 60vh;
    overflow: hidden;
    margin: 1rem;
`;

const Map = ({ lat = -22.93592061, lng = -42.8249576, zoom = 12, imoveis = [] }) => {
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null); // Guarda a instância do mapa para não duplicar
    const markersRef = useRef([]);       // Guarda os marcadores para podermos limpá-los

    useEffect(() => {
        const initMap = () => {
            if (!mapRef.current) return;

            // 1. SÓ CRIA O MAPA SE ELE NÃO EXISTIR NA TELA
            if (!mapInstanceRef.current) {
                mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
                    center: { lat: Number(lat), lng: Number(lng) },
                    zoom,
                });
            } else {
                // Se o mapa já existir, apenas atualiza o centro de forma suave
                mapInstanceRef.current.setCenter({ lat: Number(lat), lng: Number(lng) });
                mapInstanceRef.current.setZoom(zoom);
            }

            // 2. LIMPA OS MARCADORES ANTIGOS (Evita duplicar pinhos ao re-renderizar)
            markersRef.current.forEach((marker) => marker.setMap(null));
            markersRef.current = [];

            // 3. ADICIONA OS NOVOS MARCADORES DINÂMICOS DO POSTGRESQL
            imoveis.forEach((imovel) => {
                const imovelLat = Number(imovel.latitude);
                const imovelLng = Number(imovel.longitude);

                // Trava de segurança: Só desenha o marcador se a latitude/longitude forem números válidos
                if (!isNaN(imovelLat) && !isNaN(imovelLng)) {
                    const marker = new window.google.maps.Marker({
                        position: { lat: imovelLat, lng: imovelLng },
                        map: mapInstanceRef.current,
                        title: `${imovel.tipo || "Imóvel"} em ${imovel.bairro || ""}`
                    });
                    
                    // Salva a referência do marcador criado
                    markersRef.current.push(marker);
                }
            });
        };

        const loadMapScript = () => {
            if (window.google) {
                initMap();
                return;
            }

            // Evita injetar mais de um script do Google idêntico na página
            const scriptExistente = document.querySelector('script[src*="maps.googleapis.com"]');
            if (scriptExistente) {
                scriptExistente.onload = initMap;
                return;
            }

            const script = document.createElement('script');
            script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBlUeJOvuMtpbQBN6nZFhTd0q2G3hUWbD4";
            script.async = true;
            script.defer = true;
            script.onload = initMap;
            document.body.appendChild(script);
        };

        loadMapScript();
    }, [lat, lng, zoom, imoveis]); // Monitora a mudança dos imóveis vindos do backend

    return (
        <Container ref={mapRef} />
    );
};

export default Map;