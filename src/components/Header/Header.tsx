import { Flex, Image, Box, Link } from "@chakra-ui/react";
import "./Header.scss";

export function Header() {
  return (
    <>
      <Flex
        className="navBar"
        height={["10vw", "10vw", "4vw"]}
        justifyContent={"center"}
      >
        <Flex className="menu" width={["80%"]} padding={["0.5vw", "0.5vw"]}>
          <Link
            className="logoBox"
            height={["100%"]}
            href="https://www.sbkbs.com.br"
            isExternal
          >
            <Image
              src="../../public/img/sbkLogo.png"
              height={["100%"]}
              className="logoSbk"
              userSelect={"none"}
            ></Image>
          </Link>
          <Flex
            className="menuButtons"
            width={["30vw"]}
            alignItems={"center"}
            justifyContent={["flex-end"]}
          >
            <Box className="button" padding={["0.5vw", "1vw"]}>
              <Link textDecoration={"none!important"} userSelect={"none"}>
                {" "}
                Home{" "}
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
