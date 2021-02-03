import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import AutoCompleteCombo from "./AutoCompleteCombo";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { setPlayList } from "../../redux/playlist/action"

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const PlayListModal = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [selectedPlayListName, setSelectedPlayListName] = useState('');

  const handleSave = () => {    
    dispatch(setPlayList(selectedPlayListName, props.albumId));
    props.handleModalClose();     
  }

const setPlayListName = (playListName) => {
    setSelectedPlayListName(playListName);
}

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleModalClose}
        closeAfterTransition
        clearText={"Create or select playlist"}
        clearOnBlur={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">PlayList</h2>
            <p id="transition-modal-description">
              Create or select existing playlist
            </p>
            <AutoCompleteCombo setPlayListName={setPlayListName}/>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
              disabled={selectedPlayListName === ''}
              onClick={handleSave}
            >
              Save
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default PlayListModal;
