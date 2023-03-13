import Head from "next/head";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import home1 from "/public/home1.jpg";
import home2 from "/public/home2.jpg";
import home3 from "/public/home3.jpg";
import home4 from "/public/home4.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Dashboard() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Box>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          interval={15000}
        >
          <div
            className="carousel-img-1"
            style={{
              backgroundImage: `url(${home1.src})`,
            }}
          />
          <div
            className="carousel-img-2"
            style={{
              backgroundImage: `url(${home2.src})`,
            }}
          />
          <div
            className="carousel-img-3"
            style={{
              backgroundImage: `url(${home3.src})`,
            }}
          />
          <div
            className="carousel-img-4"
            style={{
              backgroundImage: `url(${home4.src})`,
            }}
          />
        </AutoPlaySwipeableViews>
      </Box>
    </>
  );
}
