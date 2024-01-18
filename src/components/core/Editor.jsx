import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
// import "../css/App.css";
import '../../css/App.css'

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import { Controlled as ControlledEditor } from "react-codemirror2";

const Container = styled(Box)`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  /* background-color: red; */
  flex-direction: column;
  padding: 0 8px 8px;
  color: white;
`;
const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  color: white;
  padding: 9px;
  /* color: gray; */
`;
const Header = styled(Box)`
  background: #060606;
  display: flex;
  color: white;
  justify-content: space-between;
`;
const Editor = ({ heading, icon, color, value, onChange }) => {
  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <Container style={open ? null : { flexGrow: 0 }}>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: color,
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              borderRadius: 5,
              marginRight: 5,
              paddingBottom: 3,
              color: "#fff",
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>
        <CloseFullscreenIcon
          fontSize="small"
          style={{ alignSelf: "center" }}
          onClick={() => setOpen((prevState) => !prevState)}
        />
      </Header>
      <ControlledEditor
        className="controlled-editor"
        value={value}
        onBeforeChange={handleChange}
        option={{
          theme: "material",
          lineNumbers: true,
        }}
      />
    </Container>
  );
};

export default Editor;
