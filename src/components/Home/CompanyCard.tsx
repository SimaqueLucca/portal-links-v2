import { Flex, Image, Text } from "@chakra-ui/react";
import "./CompanyCard.scss";

type props = {
  companyName: string;
  companyImage: string;
};

export function CompanyCard(props: props) {
  return (
    <>
      <Flex
        className="card"
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        w={["60vw", "17vw"]}
        h={["60vw", "17vw"]}
      >
        <Image src={props.companyImage} width={["25vw", "10vw"]}></Image>
        <Text className="companyName" as={"b"} fontSize={["7vw", "1.5vw"]}>
          {props.companyName}
        </Text>
      </Flex>
    </>
  );
}
