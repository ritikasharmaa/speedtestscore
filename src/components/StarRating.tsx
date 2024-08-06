import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Radio, HStack, Box } from "@chakra-ui/react";

interface StarRatingProps {
  rating: number;
  setRating?: (rating: number) => void;
  count?: number;
  size?: number; // Icon size in pixels (default: 20)
}

const StarRating: React.FC<StarRatingProps> = ({ rating, setRating, count, size }) => {
  const [hover, setHover] = useState<number | null>(null);
  
  return (
    <HStack spacing={"2px"}>
      {[...Array(count || 5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <Box
            as="label"
            key={index}
            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
          >
            <Radio
              name="rating"
              onChange={() => {
                if(setRating){
                  setRating(ratingValue)
                }
              }}
              value={ratingValue.toString()}
              display='none'
            />
            <FaStar
              cursor={"pointer"}
              size={size || 20}
              style={{ transition: "color 200ms" }}
            />
          </Box>
        );
      })}
    </HStack>
  );
}

export default StarRating;
