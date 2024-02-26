import { ChakraProvider } from "@chakra-ui/react";
import AppRouter from "./routes/AppRouter";

function CreadoresApp() {
  return (
    <>
      <ChakraProvider>
        <AppRouter />
      </ChakraProvider>
    </>
  );
}

export default CreadoresApp;
