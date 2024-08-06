"use client";
import {
  Box,
  FormControl,
  FormLabel,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import BackLink from "../common/BackLink";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const LiveMap = () => {
  return (
    <>
      <Box width={"100%"}>
        <Text
          fontSize={{ base: "24px", md: "28px" }}
          fontWeight={"500"}
          color={"white"}
          textAlign={"center"}
          mt={4}
          mb={7}
        >
          Live Test Map of Nearby Tests
        </Text>

        <BackLink text="Back to Results" url="/" />

        <Stack direction={{ base: "column", md: "row" }}>
          <FormControl maxW={{ base: "100%", md: "308px" }}>
            <FormLabel fontSize={"14px"}>ISP Name</FormLabel>
            <Select
              id="selectIsp"
              cursor={"pointer"}
              bg={"var(--secondary-bg-color)"}
              placeholder="Select ISP Name"
            >
              <option value="general">General</option>
              <option value="isp">ISP</option>
            </Select>
          </FormControl>

          <FormControl maxW={{ base: "100%", md: "308px" }}>
            <FormLabel fontSize={"14px"}>Duration</FormLabel>
            <Select
              id="selectDuration"
              cursor={"pointer"}
              bg={"var(--secondary-bg-color)"}
              placeholder="Select Duration"
            >
              <option value="general">1h</option>
              <option value="isp">2h</option>
            </Select>
          </FormControl>
        </Stack>

        <Box
          backgroundColor={"green"}
          borderRadius={"12px"}
          marginTop={5}
          width={"100%"}
          height={"600px"}
        >
          {/* <Map
            accessToken="dasvdfbasdfhbsufdvnbasbdjk"
            initialViewState={{
              longitude: -122.4,
              latitude: 37.8,
              zoom: 14,
            }}
            style={{ width: "600px", height: "600px" }}
            mapStyle="mapbox://styles/mapbox/dark-v9"
          /> */}
        </Box>
      </Box>
    </>
  );
};

export default LiveMap;
