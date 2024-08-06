import LiveMap from "@/components/LiveTestMap/LiveMap";
import PageComponent from "@/components/PageComponent";
import VerticalTypeAd from "@/components/VerticalTypeAd";

import { Flex } from "@chakra-ui/react";

import React from "react";

const LiveTestMap = () => {
  return (
    <PageComponent
      left={<VerticalTypeAd />}
      right={<VerticalTypeAd marginDirection="right" />}
    >
      <Flex direction={"column"} width={"100%"}>
        <LiveMap />
      </Flex>
    </PageComponent>
  );
};

export default LiveTestMap;
