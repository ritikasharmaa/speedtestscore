"use client";
import { Box, SimpleGrid, Text, Wrap } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomGradientButton from "../ui/CustomGradientButton";
import VideoCard from "./VideoCard";
import { VideoListData } from "../../data/videosList";
import { useRouter, useSearchParams } from "next/navigation";
import VideoModal from "./VideoModal";

type CategoryKey =
  | "wifi"
  | "routers"
  | "modems"
  | "streaming-devices"
  | "printers"
  | "laptop"
  | "networking-switching"
  | "adapters";

const categories: Record<CategoryKey, string> = {
  wifi: "Wifi",
  routers: "Routers",
  modems: "Modems",
  "streaming-devices": "Streaming Devices",
  printers: "Printers",
  laptop: "Laptop/Pcs",
  "networking-switching": "Networking Switching",
  adapters: "Adapters/Do dads",
};

const SupportVideos = () => {
  const searchParams = useSearchParams();
  const queryTab = searchParams.get("tab") as CategoryKey;
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("wifi");

  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedVideo(null);
  };

  const handleSelectedFilter = (category: CategoryKey) => {
    setSelectedCategory(category);
    router.push(`?tab=${category}`, undefined);
  };

  const filteredVideos = VideoListData?.filter(
    (video) =>
      video.category.toLowerCase().replace(/\s+/g, "-") === selectedCategory
  );

  useEffect(() => {
    if (queryTab && Object.keys(categories).includes(queryTab)) {
      setSelectedCategory(queryTab);
    }
  }, [queryTab]);

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
          General Support Videos
        </Text>
      </Box>

      <Wrap spacing={3} justifyContent={"center"} mb={5}>
        {Object.keys(categories).map((category) => (
          <CustomGradientButton
            key={category}
            text={categories[category as CategoryKey]}
            active={category === selectedCategory}
            onClick={() => handleSelectedFilter(category as CategoryKey)}
            size={{ base: "sm", md: "md" }}
          />
        ))}
      </Wrap>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacingX={4} spacingY={4}>
        {filteredVideos?.map(({ id, title, description }) => (
          <VideoCard
            key={id}
            title={title}
            description={description}
            onClick={() =>
              openModal(
                "https://www.youtube.com/embed/-jlot3wVuxk?si=tM_eKVJnghwvDErJ"
              )
            }
          />
        ))}
        <VideoModal
          isOpen={isOpen}
          onClose={closeModal}
          videoUrl={selectedVideo}
        />
      </SimpleGrid>
    </>
  );
};

export default SupportVideos;
