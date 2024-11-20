import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { createPortal } from 'react-dom';
import { ReactNode } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

type CustomModalProps = {
  content: ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function CustomModal({ content, open, setOpen }: CustomModalProps) {
  return createPortal(
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {content}
        </Box>
      </Modal>
    </div>, document.getElementById(`form`) as HTMLElement
  );
}