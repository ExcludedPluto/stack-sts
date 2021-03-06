import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(() => ({
   cardHrizontal: {
      display: "flex",
   },
   cardVertical: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
   },
   cardMedia: {
      paddingTop: "30%",
      paddingLeft: "24%",
   },
   cardMediaVertical: {
      paddingTop: "80%", // 16:9
   },
}));

function Greeting() {
   const classes = useStyles();
   //innerWidth가 460px 이상일 경우 사진-글, 미만일 경우 사진 밑 글로 모양을 나누기위한 변수선언
   const innerWidth = window.innerWidth;
   const profilePhoto = process.env.REACT_APP_PROFILE_PHOTO_PATH;
   return (
      <>
         <Container maxWidth="lg">
            <Typography component="h1" variant="h4">
               인삿말
            </Typography>
            <hr />
            <br />
            <Typography component="h1" variant="h5">
               Stack Trust&Sincerity, 신뢰와 진심을 쌓겠습니다.
            </Typography>
            <br />
            {innerWidth >= 460 ? (
               <Card className={classes.cardHrizontal}>
                  <CardMedia
                     className={classes.cardMedia}
                     image={profilePhoto}
                     title="Image title"
                  />
                  <Box components="div" ml={2}>
                     <br />
                     조적STS를 방문해주신 모든 여러분, 감사합니다.
                     <br />
                     <br />
                     조적STS라는 이름을 갖기 훨씬 이전인 30년 전부터,
                     <br />
                     <br />
                     저희는 항상 기술력과 경험을 쌓아가며, 대한민국 조적 산업의
                     한 축을 담당했습니다.
                     <br />
                     <br />
                     이제 저희는 조적STS라는 이름과 함께, 새로운 정신으로 더욱
                     발전된 기술력으로 고객님의 일을 완수하겠습니다.
                     <br />
                     <br />
                     고객 여러분의 사랑과 성원에 항상 감사드립니다.
                     <br />
                     <br />
                     조적STS 대표 신태식
                  </Box>
               </Card>
            ) : (
               <Card className={classes.cardVertical}>
                  <CardMedia
                     className={classes.cardMediaVertical}
                     image={profilePhoto}
                     title="Image title"
                  />
                  <Box components="div" ml={2}>
                     <br />
                     조적STS를 방문해주신 모든 여러분, 감사합니다.
                     <br />
                     <br />
                     조적STS라는 이름을 갖기 훨씬 이전인 30년 전부터,
                     <br />
                     <br />
                     저희는 항상 기술력과 경험을 쌓아가며, 대한민국 조적 산업의
                     한 축을 담당했습니다.
                     <br />
                     <br />
                     이제 저희는 조적STS라는 이름과 함께, 새로운 정신으로 더욱
                     발전된 기술력으로 고객님의 일을 완수하겠습니다.
                     <br />
                     <br />
                     고객 여러분의 사랑과 성원에 항상 감사드립니다.
                     <br />
                     <br />
                     조적STS 대표 신태식
                  </Box>
               </Card>
            )}
         </Container>
      </>
   );
}
export default Greeting;
