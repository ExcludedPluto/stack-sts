import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
   footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 2),
   },
}));

function Footer() {
   const classes = useStyles();
   return (
      <Container maxWidth="lg" className={classes.footer}>
         <Typography
            variant="subtitle1"
            align="left"
            color="textSecondary"
            component="span"
         >
            <div>
               조적STS | 대표 신태식 | 문의 : 상단 게시판 혹은 sts8448@naver.com
            </div>
            <div>사업자 등록번호 : 742-70-00261</div>
            <div>&copy; {new Date().getFullYear()} 조적STS</div>
         </Typography>
      </Container>
   );
}

export default Footer;
