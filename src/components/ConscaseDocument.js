import { fireStoreService } from "fbase";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ImageModal from "./elements/ImageModal";

function ConscaseDocument({ history }) {
   const location = useLocation();
   const conscaseId = location.state.conscaseId;
   const [init, setInit] = useState(false);
   const [conscase, setConscase] = useState({});
   const [modalSrc, setModalSrc] = useState("");
   const [showModal, setShowModal] = useState(false);

   const onEditClick = () => {
      history.push({
         pathname: "/admin/conscase/document/edit",
         state: { conscase: conscase, id: conscaseId },
      });
   };

   const onDelete = async () => {
      const ok = window.confirm("정말로 삭제하시겠습니까?");
      if (ok) {
         await fireStoreService.doc(`conscase/${conscaseId}`).delete();
         history.goBack();
      }
   };
   useEffect(() => {
      const c = (e) => {
         if (e.target.currentSrc) {
            setModalSrc(e.target.currentSrc);
            setShowModal((prev) => !prev);
         } else if (showModal) {
            setShowModal((prev) => !prev);
         }
      };
      document.addEventListener("click", c);
      return () => {
         document.removeEventListener("click", c);
      };
   }, [showModal]);
   useEffect(() => {
      //location.state로 넘어온 conscaseId로 문서를 파이어스토어에서 가져옴
      async function getConscases() {
         const dbconscases = await fireStoreService
            .collection("conscase")
            .doc(conscaseId)
            .get();
         setConscase((prev) => dbconscases.data());
         setInit(true);
      }
      getConscases();
      return () => {
         setConscase({});
      };
   }, [conscaseId]);

   return (
      <>
         {init ? (
            <>
               <ImageModal src={modalSrc} showModal={showModal} />
               <br />
               <Container maxWidth="md">
                  <Typography component="h1" variant="h4">
                     {conscase.subject}
                  </Typography>
                  <hr />
                  <Box ml={2} overflow="auto">
                     <div dangerouslySetInnerHTML={{ __html: conscase.html }} />
                     <Button
                        onClick={() => history.goBack()}
                        color="primary"
                        variant="outlined"
                     >
                        &nbsp;&nbsp;&nbsp;목록으로&nbsp;&nbsp;&nbsp;
                     </Button>{" "}
                     <br />
                     <br />
                     {location.pathname === "/admin/conscase/document" && (
                        <div>
                           <Button
                              color="primary"
                              variant="outlined"
                              onClick={onEditClick}
                           >
                              &nbsp;&nbsp;&nbsp;수정&nbsp;&nbsp;&nbsp;
                           </Button>
                           &nbsp;&nbsp;&nbsp;
                           <Button
                              color="secondary"
                              variant="outlined"
                              onClick={onDelete}
                           >
                              &nbsp;&nbsp;&nbsp;삭제&nbsp;&nbsp;&nbsp;
                           </Button>
                        </div>
                     )}
                  </Box>
               </Container>
            </>
         ) : (
            <>
               <div>잠시만 기다려주세요...</div>
            </>
         )}
      </>
   );
}
export default ConscaseDocument;
