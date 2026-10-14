import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { MapPin, Navigation, Compass, AlertCircle, Sparkles, ExternalLink } from 'lucide-react';
import { LisbonSpot, SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface LisbonMapProps {
  spots: LisbonSpot[];
  currentLang: SupportedLanguage;
  onSpotSelect?: (spotName: string) => void;
}

export const LisbonMap: React.FC<LisbonMapProps> = ({ spots, currentLang, onSpotSelect }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);

  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [geoStatus, setGeoStatus] = useState<string | null>(null);
  const t = TRANSLATIONS[currentLang];

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      // Create map centered on Lisbon Historic Core
      const map = L.map(mapContainerRef.current, {
        center: [38.7169, -9.1399],
        zoom: 13,
        scrollWheelZoom: false,
      });

      // CartoDB Positron clean map tiles (OpenStreetMap data)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);

      markersLayerRef.current = L.layerGroup().addTo(map);
      mapInstanceRef.current = map;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update Markers when spots change
  useEffect(() => {
    const map = mapInstanceRef.current;
    const layer = markersLayerRef.current;
    if (!map || !layer) return;

    layer.clearLayers();

    spots.forEach((spot) => {
      // Category color marker
      const isFood = spot.category === 'food';
      const isNight = spot.category === 'nightlife';
      const isBeach = spot.category === 'beaches' || spot.category === 'daytrips';
      const color = isFood ? '#C85A32' : isNight ? '#D97706' : isBeach ? '#0284C7' : '#0B192C';

      const customIcon = L.divIcon({
        className: 'custom-leaflet-marker',
        html: `
          <div style="background-color: ${color}; width: 28px; height: 28px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 11px;">
            ●
          </div>
        `,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
        popupAnchor: [0, -14],
      });

      const marker = L.marker(spot.coordinates, { icon: customIcon });

      const popupHtml = `
        <div style="font-family: inherit; max-width: 240px; padding: 4px;">
          <img src="${spot.imageUrl}" alt="${spot.name}" style="width: 100%; height: 90px; object-fit: cover; border-radius: 8px; margin-bottom: 8px;" />
          <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: #C85A32;">${spot.neighbourhood}</div>
          <div style="font-size: 13px; font-weight: 700; color: #0B192C; margin-top: 2px; line-height: 1.2;">${spot.name}</div>
          <div style="font-size: 11px; color: #4b5563; margin-top: 4px;">${spot.shortDescription}</div>
          <div style="margin-top: 8px; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: 800; font-size: 12px; color: #0B192C;">${spot.price}</span>
            <a href="${spot.mapsUrl}" target="_blank" rel="noopener noreferrer" style="font-size: 11px; font-weight: 600; color: #C85A32; text-decoration: none;">Get Directions →</a>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml);
      layer.addLayer(marker);
    });

    // If spots exist, fit bounds to them
    if (spots.length > 0) {
      const bounds = L.latLngBounds(spots.map((s) => s.coordinates));
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 14 });
    }
  }, [spots]);

  // Request browser location with clear consent
  const handleRequestLocation = () => {
    if (!navigator.geolocation) {
      setGeoStatus('Geolocation is not supported by your browser.');
      return;
    }

    setGeoStatus('Requesting location permission...');

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords: [number, number] = [pos.coords.latitude, pos.coords.longitude];
        setUserLocation(coords);
        setGeoStatus('Location enabled!');

        if (mapInstanceRef.current) {
          const userIcon = L.divIcon({
            className: 'user-marker',
            html: `
              <div style="background-color: #2563EB; width: 22px; height: 22px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 0 6px rgba(37,99,235,0.25);"></div>
            `,
            iconSize: [22, 22],
            iconAnchor: [11, 11],
          });

          L.marker(coords, { icon: userIcon })
            .addTo(mapInstanceRef.current)
            .bindPopup('<strong>Your Current Location</strong><br />Showing verified Lisbon places nearby.')
            .openPopup();

          mapInstanceRef.current.setView(coords, 14);
        }
      },
      (err) => {
        if (err.code === err.PERMISSION_DENIED) {
          setGeoStatus('Location access was declined. You can still explore all spots on the map freely.');
        } else {
          setGeoStatus('Could not retrieve your location. You can still explore the map manually.');
        }
      },
      { timeout: 8000 }
    );
  };

  return (
    <section id="map-view" className="py-12 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header & Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C85A32] mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>Interactive Geographical Explorer</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0B192C]">
              Lisbon Places on the Map
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleRequestLocation}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-800 text-xs font-semibold transition-colors border border-stone-200"
            >
              <Navigation className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>Find spots near me</span>
            </button>
          </div>
        </div>

        {/* Geolocation feedback note if any */}
        {geoStatus && (
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>{geoStatus}</span>
          </div>
        )}

        {/* Map Canvas Container */}
        <div className="relative rounded-2xl overflow-hidden border border-stone-300 shadow-md">
          <div ref={mapContainerRef} className="w-full h-[460px] sm:h-[520px] bg-stone-100 z-10" />

          {/* Map Legend Floating Box */}
          <div className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur-xs p-3 rounded-xl border border-stone-200 shadow-lg text-[11px] space-y-1.5 hidden sm:block">
            <span className="font-bold text-slate-900 block mb-1">Legend</span>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0B192C]"></span>
              <span>Monuments & Culture</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C85A32]"></span>
              <span>Food, Tascas & Bakeries</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D97706]"></span>
              <span>Bars & Rooftops</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7]"></span>
              <span>Beaches & Day Trips</span>
            </div>
          </div>
        </div>

        <p className="text-xs text-stone-700 italic text-center">
          *Click any marker to see photos, verified prices in €, and get direct Google Maps routing directions.
        </p>

      </div>
    </section>
  );
};
