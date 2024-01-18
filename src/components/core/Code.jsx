import React, { useContext } from "react";
import Editor from "./Editor";
import { Box, styled } from "@mui/material";

import { DataContext } from "../../context/DataProvider";

const Container = styled(Box)`
  display: flex;
  background-color: #060606;
  color: white;
  height: 50vh;
`;
const Code = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
  return (
    <Container>
            <Editor 
                language="xml"
                heading="HTML"
                value={html}
                onChange={setHtml}
                icon='/'
                color='#FF3C41'
            />
            <Editor 
                language="css"
                heading="CSS"
                value={css}
                onChange={setCss}
                icon='*'
                color='#0EBEFF'
            />
            <Editor 
                language="javascript"
                heading="JS"
                value={js}
                onChange={setJs}
                icon='( )'
                color='#FCD000'
            />
        </Container>
  );
};

export default Code;
