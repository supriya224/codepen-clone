import React from "react";
// import { Box } from "@mui/material";
import { Box, styled } from "@mui/material";
// import styled from "@emotion/styled";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";

import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import { Controlled as ControlledEditor } from "react-codemirror2";

const Container = styled(Box)`
  flex-grow: 1;
  /* flex-basic: 0; */
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
`;
const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  color: white;
  padding: 9px;
  color: gray;
`;
const Header = styled(Box)`
  background: #060606;
  display: flex;
  color: white;
  justify-content: space-between;
`;
const Editor = ({ heading, icon, color, value, onChange }) => {
  // const [open, setOpen] = useState(true);

  const handleChange = ( value) => {
    onChange(value);
  };

  return (
    <Container>
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
        <CloseFullscreenIcon />
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
      {/* <Heading>
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
        <CloseFullscreenIcon /> */}
    </Container>

    // <Container style={open ? null : { flexGrow: 0 }}>
    //   <Header>
    //     <Heading>
    //       <Box
    //         component="span"
    //         style={{
    //           background: color,
    //           borderRadius: 5,
    //           marginRight: 5,
    //           height: 20,
    //           width: 20,
    //           display: "flex",
    //           placeContent: "center",
    //           color: "#000",
    //           paddingBottom: 2,
    //         }}
    //       >
    //         {icon}
    //       </Box>
    //       {heading}
    //     </Heading>
    //     <CloseFullscreen
    //       fontSize="small"
    //       style={{ alignSelf: "center" }}
    //       onClick={() => setOpen((prevState) => !prevState)}
    //     />
    //   </Header>
    //   <ControlledEditor
    //     onBeforeChange={handleChange}
    //     value={value}
    //     className="controlled-editor"
    //     options={{
    //       lineWrapping: true,
    //       lint: true,
    //       mode: language,
    //       lineNumbers: true,
    //       theme: "material",
    //     }}
    //   />
    // </Container>
    //
  );
};

export default Editor;
