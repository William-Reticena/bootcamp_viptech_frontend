import React from "react";
import { Box, Button, Modal, Paper, Typography } from "@mui/material";
import { styles } from "./styles";

export const ModalDelete = ({ open, product, onClose, onConfirm }) => {
  return (
    <Modal open={open} sx={styles.modal} onClose={onClose}>
      <Paper sx={styles.modalPaper}>
        <Typography variant="h5">
          Você realmente deseja excluir o item: <strong>{product.name}</strong>
        </Typography>

        <Box sx={styles.modalBox}>
          <Button variant="contained" onClick={onConfirm}>
            Confirmar
          </Button>

          <Button color="error" variant="contained" onClick={onClose}>
            Cancelar
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
};
