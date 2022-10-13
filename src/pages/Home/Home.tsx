import { Box, Button, Flex } from "@chakra-ui/react";
import "./Home.scss";

export function Home() {
  return (
    <>
      <Flex className="bannerContainer" width={"100%"} justifyContent="center">
        <Flex
          className="contentContainer"
          justifyContent={"center"}
          marginTop={["2vw"]}
        >
          <Flex className="content" alignItems={"center"} flexWrap={"wrap"}>
            <Box className="card"></Box>
            <Box className="card"></Box>
            <Box className="card"></Box>
            <Button className="companyButton"> Empresa </Button>
          </Flex>
        </Flex>
        <Flex className="banner"></Flex>
      </Flex>
    </>
  );
}
