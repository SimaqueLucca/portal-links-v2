import { Flex } from "@chakra-ui/react";
import { CompanyCard } from "../../components/Home/CompanyCard";
import "./Home.scss";

export function Home() {
  return (
    <>
      <Flex className="bannerContainer" width={"100%"} justifyContent="center">
        <Flex
          className="contentContainer"
          justifyContent={"center"}
          marginTop={["10vw", "10vw", "2vw"]}
        >
          <Flex className="content" alignItems={"center"} flexWrap={"wrap"}>
            <CompanyCard
              companyName="Docly"
              companyImage="../../../public/img/docly.png"
            ></CompanyCard>
            <CompanyCard
              companyName="Manager"
              companyImage="../../../public/img/manager.png"
            ></CompanyCard>
            <CompanyCard
              companyName="Portais"
              companyImage="../../../public/img/portais.png"
            ></CompanyCard>
          </Flex>
        </Flex>
        <Flex className="banner" h={["100vh", "150vh", "100vh", "50vw"]}></Flex>
      </Flex>
    </>
  );
}
