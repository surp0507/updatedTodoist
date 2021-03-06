import React, { useState } from "react";
import PropTypes from "prop-types";
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";

export const App = ({ darkModeDefault = false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);

  return (
    <main
      data-testid="application"
      className={darkMode ? "darkmode" : undefined}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Content />
    </main>
  );
};

App.propTypes = {
  darkModeDefault: PropTypes.bool,
};
