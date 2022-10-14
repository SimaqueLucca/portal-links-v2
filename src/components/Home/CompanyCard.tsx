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
      >
        <Image src={props.companyImage} width={["10vw"]}></Image>
        <Text className="companyName" as={"b"}>
          {props.companyName}
        </Text>
      </Flex>
    </>
  );
}
