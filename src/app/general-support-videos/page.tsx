import SupportVideos from "@/components/GeneralSupportVideos/SupportVideos";
import PageComponent from "@/components/PageComponent";
import VerticalTypeAd from "@/components/VerticalTypeAd";
import { Flex } from "@chakra-ui/react";
import React, { Suspense } from "react";

const GeneralSupportVideos = () => {
  return (
    <PageComponent
      left={<VerticalTypeAd />}
      right={<VerticalTypeAd marginDirection="right" />}
    >
      <Flex direction={"column"} width={"100%"}>
        <Suspense fallback={<div>Loading...</div>}>
          <SupportVideos />
        </Suspense>
      </Flex>
    </PageComponent>
  );
};

export default GeneralSupportVideos;
