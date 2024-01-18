import { Box, Button, Typography, styled } from "@mui/material";

export const NewSec=styled(Box)(()=>({
    padding:"30px",
    borderRadius: "16px",
    background: "#2B2B2D",
    marginBottom:"43px",
})) 

export const NewLetterImg=styled(Box)(()=>({
    width:"163px",
    height: "163px",
    display: "block",
    marginRight:"50px",
    "& img":{
        width:"100%",
        heigth:"100%",
        objectPosition:"100%",
        objectFit: "cover",
    }

})) 

export const LetterTittleMin=styled(Typography)(()=>({
    color: "#FFF",
    fontFamily: "inherit",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "21px",
    letterSpacing: "1.2px",
    marginBottom:"27px",
})) 

export const LetterTittle=styled(Typography)(()=>({
    color: "#FFF",
    fontFamily: "inherit",
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    letterSpacing: "1.8px",
    marginBottom:"27px",
})) 


export const NBtn = styled(Button)(() => ({
    display: 'inlineFlex',
    padding: '12px ',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    background: '#CEBD63',
    color: "rgba(32, 33, 36, 0.70)",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    letterSpacing: "0.96px",
    maxWidth:"155px",
    minWidth:"155px",
    flexShrink:"0",
    marginLeft:"10px"
})); 