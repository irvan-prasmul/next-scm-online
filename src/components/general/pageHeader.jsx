import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { Fragment } from "react";

export default function PageHeader({ icon, title = "text" }) {
  return (
    <>
      <Box
        sx={{
          pt: 1,
          pl: 2,
          pb: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        {icon}
        {Array.isArray(title) ? (
          title.map((t, index) => {
            return (
              <Fragment key={index}>
                <Typography
                  variant="h6"
                  sx={{ marginLeft: index == 0 ? "3px" : "0px" }}
                >
                  {t}
                </Typography>
                {title[index + 1] ? (
                  <>
                    <div>&nbsp;</div> <ArrowForward />
                    <div>&nbsp;</div>
                  </>
                ) : (
                  <></>
                )}
              </Fragment>
            );
          })
        ) : (
          <Typography variant="h6" sx={{ marginLeft: "3px" }}>
            {title}
          </Typography>
        )}
        {/* <Typography variant="h6" sx={{ marginLeft: "3px" }}>
          {title}
        </Typography> */}
      </Box>
      <Divider />
    </>
  );
}
