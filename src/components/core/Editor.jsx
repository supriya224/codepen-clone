import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
// import Header from '../shared/Header/Header'
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";


const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  color: white;
  padding: 9px;
`;
const Header = styled(Box)`
  background: #060606;
  display: flex;
  color: white;
  justify-content: space-between;
`;
const Editor = () => {
  return (
    <Box>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: "red",
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              borderRadius: 5,
              marginRight: 5,
              paddingBottom: 3,
            }}
          >
            /
          </Box>
          HTMl
        </Heading>
        <CloseFullscreenIcon />
        <Heading>
          <Box
            component="span"
            style={{
              background: "red",
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              borderRadius: 5,
              marginRight: 5,
              paddingBottom: 3,
            }}
          >
            /
          </Box>
          HTMl
        </Heading>
        <CloseFullscreenIcon />
        <Heading>
          <Box
            component="span"
            style={{
              background: "red",
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              borderRadius: 5,
              marginRight: 5,
              paddingBottom: 3,
            }}
          >
            /
          </Box>
          HTMl
        </Heading>
        <CloseFullscreenIcon />
      </Header>
      <ControlledEditor />
    </Box>
  );
};

export default Editor;
