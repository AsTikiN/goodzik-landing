import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

import { SnapSection } from "@/components/SnapSection";
import { Box, Container } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { styled, Typography, Popover } from "@mui/material";

const mockLocations = [
  {
    title: "Main Office",
    lng: -74.5,
    lat: 40,
    owner: "John Smith",
    contact: "+1 234 567 8900",
  },
  {
    title: "Branch Office",
    lng: -74.3,
    lat: 40.2,
    owner: "Jane Doe",
    contact: "+1 234 567 8901",
  },
];

export const Map = () => {
  const mapRef = useRef<mapboxgl.Map | undefined>();
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [popoverAnchor, setPopoverAnchor] = useState<HTMLElement | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<
    (typeof mockLocations)[0] | null
  >(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYXN0aWtpbiIsImEiOiJjbGJkZDF5NGwwMDl0M3BvMDhocTljMGs5In0.ynCQEC2NEX1PfFQkafdTRQ";
    if (mapContainerRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [-74.5, 40],
        zoom: 9,
        scrollZoom: false,
      });

      mapRef.current.addControl(new mapboxgl.NavigationControl());

      // Add markers for each location
      mockLocations.forEach((location) => {
        const marker = new mapboxgl.Marker()
          .setLngLat([location.lng, location.lat])
          .addTo(mapRef.current!);

        const markerElement = marker.getElement();
        markerElement.addEventListener("click", (e) => {
          setSelectedLocation(location);
          setPopoverAnchor(markerElement);

          // Zoom to marker location
          mapRef.current?.flyTo({
            center: [location.lng, location.lat],
            zoom: 13,
            duration: 1500,
          });
        });
      });

      mapContainerRef.current.addEventListener("mouseenter", () => {
        mapRef.current?.scrollZoom.enable();
      });

      mapContainerRef.current.addEventListener("mouseleave", () => {
        mapRef.current?.scrollZoom.disable();
      });
    }

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  const handlePopoverClose = () => {
    setPopoverAnchor(null);
    setSelectedLocation(null);
  };

  return (
    <SnapSection
      padding="100px 0"
      justifyContent="center"
      width="100vw"
      height="400px"
    >
      <Container>
        <Title>Where we are</Title>
        <Description>
          We are located in the heart of the city, in the center of the business
          district.
        </Description>
      </Container>
      <Box mt="40px" width="100%" height="650px" ref={mapContainerRef}></Box>

      <Popover
        open={Boolean(popoverAnchor)}
        anchorEl={popoverAnchor}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {selectedLocation && (
          <Box p={2}>
            <Typography variant="h6">{selectedLocation.title}</Typography>
            <Typography>Owner: {selectedLocation.owner}</Typography>
            <Typography>Contact: {selectedLocation.contact}</Typography>
          </Box>
        )}
      </Popover>
    </SnapSection>
  );
};

const Title = styled(Typography)`
  font-size: 48px;
  font-weight: 600;
`;

const Description = styled(Typography)`
  font-size: 18px;
  line-height: 33px;
  font-weight: 500;
  color: #7d82a1;
  max-width: 500px;
`;
