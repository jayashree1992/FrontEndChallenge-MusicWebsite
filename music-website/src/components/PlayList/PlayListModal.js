import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { setPlayList } from '../../redux/playlist/action';
import AutoCompleteCombo from './AutoCompleteCombo';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: '5px',
    padding: theme.spacing(2, 4, 3),
  },
}));

const PlayListModal = props => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [selectedPlayListName, setSelectedPlayListName] = useState('');

  const popUpSnackBar = () => {
    const message = `Saved to playlist ${selectedPlayListName}!`;
    enqueueSnackbar(message, {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
        autoHideDuration: 3000,
        variant: 'success'
      },
    });
  };

  const handleSave = () => {
    dispatch(setPlayList(selectedPlayListName, props.albumId));
    setSelectedPlayListName('');
    popUpSnackBar();
    props.handleModalClose();
  };

  const setPlayListName = playListName => {
    setSelectedPlayListName(playListName);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleModalClose}
        closeAfterTransition
        clearText="Create or select playlist"
        clearOnBlur
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <h4 id="transition-modal-title">Add To Playlist</h4>
            <p id="transition-modal-description">
              Create or select existing playlist
            </p>
            <AutoCompleteCombo setPlayListName={setPlayListName} />
            <Button
              variant="contained"
              color="secondary"
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
