import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Image from 'next/image';

const icon = L.icon({
  iconUrl: "/images/marker-icon.png",
  iconSize: [30, 30],
});

const tealIcon = L.icon({
  iconUrl: "/images/marker-icon-teal.png",
  iconSize: [30, 30],
});

const polyline: { name: string, location: [number, number] }[] = [
    { name: 'VCC–Clark Station', location: [49.2659, -123.0790] },
    { name: 'Commercial Broadway', location: [49.2626, -123.0692]},
    { name: 'Renfrew Station', location: [49.2589, -123.0454] },
    { name: 'Rupert Station', location: [49.2609, -123.0325] },
    { name: 'Gilmore Station', location: [49.2650, -123.0136] },
    { name: 'Brentwood Town Centre Station', location: [49.2664, -123.0016] },
    { name: 'Holdom Station', location: [49.2647, -122.9822] },
    { name: 'Sperling–Burnaby Lake Station', location: [49.2592, -122.9640] },
    { name: 'Lake City Way Station', location: [49.2546, -122.9392] },
    { name: 'Production Way–University Station', location: [49.2534, -122.9181] },
    { name: 'Lougheed Town Centre Station', location: [49.2485, -122.8970] },
    { name: 'Burquitlam Station', location: [49.2613, -122.8899] },
    { name: 'Moody Centre Station', location: [49.2780, -122.8460] },
    { name: 'Inlet Centre Station', location: [49.2772, -122.8282] },
    { name: 'Coquitlam Central Station', location: [49.2739, -122.8001] },
    { name: 'Lincoln Station', location: [49.2804, -122.7939] },
    { name: 'Lafarge Lake–Douglas Station', location: [49.2856, -122.7916] },
];

const multiPolyline: { name: string, location: [number, number] }[][] = [
  [
    { name: 'King George Station', location: [49.1828, -122.8448] },
    { name: 'Surrey Central Station', location: [49.1896, -122.8480] },
    { name: 'Gateway Station', location: [49.1990, -122.8507] },
    { name: 'Scott Road Station', location: [49.2044, -122.8743] },
    { name: 'Columbia Station', location: [49.2048, -122.9061] },
    { name: 'New Westminster Station', location: [49.2015, -122.9126] },
    { name: '22nd Street Station', location: [49.2000, -122.9490] },
    { name: 'Edmonds Station', location: [49.2123, -122.9592] },
    { name: 'Royal Oak Station', location: [49.2201, -122.9885] },
    { name: 'Metrotown Station', location: [49.2258, -123.0039] },
    { name: 'Patterson Station', location: [49.2298, -123.0127] },
    { name: 'Joyce–Collingwood Station', location: [49.2384, -123.0318] },
    { name: '29th Avenue Station', location: [49.2443, -123.0461] },
    { name: 'Nanaimo Station', location: [49.2483, -123.0559] },
    { name: 'Commercial Broadway', location: [49.2626, -123.0692]},
    { name: 'Main–Street Science World Station', location: [49.2732, -123.1003] },
    { name: 'Stadium–Chinatown', location: [49.2797,  -123.1097] },
    { name: 'Granville Station', location: [49.2833, -123.1161] },
    { name: 'Burrard Station', location: [49.2856, -123.1202] },
    { name: 'Waterfront Station', location: [49.2856, -123.1115] },
  ],
  [
    { name: 'Columbia Station', location: [49.2048, -122.9061] },
    { name: 'Sapperton Station', location: [49.2247, -122.8894] },
    { name: 'Braid Station', location: [49.2333, -122.8829] },
    { name: 'Lougheed Station', location: [49.2485, -122.8970] },
    { name: 'Production Way–University Station', location: [49.2534, -122.9181] },
  ]
];

const darkBlueOptions = { color: 'darkblue' };
const tealOptions = {color: 'teal'};

const Map = () => {
  const polylineCoordinates = polyline.map(station => station.location);
  return (

    <div>
      <div style={{ padding: '1rem' }}>
        <header>
            <Image src="/images/logo.png" width={50} height={50} alt='bunnylogo'/>
        </header>
      </div>

    <MapContainer
      style={{ height: "88vh" }}
      center={[49.2066, -122.9099]}
      zoom={12}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://github.com/omnomrose/Expo-Line-and-Millennium-Line.git"> By Rose Nguyen </a> contributors'
        url='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      {multiPolyline.map((expoStations, expoIndex) => (
        <div key={expoIndex}>
          {expoStations.map((station, index) => (
            <Marker key={index} position={station.location} icon={icon}>
              <Popup>
                {station.name}
              </Popup>
            </Marker>
          ))}
          {expoStations.length > 1 && <Polyline pathOptions={darkBlueOptions} positions={expoStations.map(station => station.location)} />}
        </div>
      ))}

        <div>
        {polyline.map((station, index) => (
          <Marker key={index} position={station.location} icon={tealIcon}>
            <Popup>{station.name}</Popup>
          </Marker>
        ))}
        {polyline.length > 1 && (
          <Polyline pathOptions={tealOptions} positions={polylineCoordinates} />
        )}
      </div>

    </MapContainer>
    </div>
  );
}

export default Map;
