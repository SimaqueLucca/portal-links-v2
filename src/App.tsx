import { Flex } from "@chakra-ui/react";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <>
      <Flex flexDirection={"column"} width={"100%"} paddingTop={["4vw"]}>
        <Header></Header>
        <Home></Home>
      </Flex>
    </>
  );
}

export default App;
