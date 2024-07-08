import "./App.css";
import ThemeProvider from "./theme";
import Router from "./routes";
import { IconButton, Slide } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import { createRef } from "react";
import { SnackbarProvider } from "notistack";
function App() {
  const notiStackRef = createRef();
  const onClickDismiss = (key) => () => {
    notiStackRef.current.closeSnackbar(key);
  };
  return (
    <ThemeProvider>
      <SnackbarProvider
        hideIconVariant
        ref={notiStackRef}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        TransitionComponent={Slide}
        maxSnack={3}
        autoHideDuration={2000}
        action={(key) => (
          <IconButton onClick={onClickDismiss(key)}>
            <Icon icon="mdi:close" style={{ color: "#fff" }} />
          </IconButton>
        )}
      >
        <Router />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
