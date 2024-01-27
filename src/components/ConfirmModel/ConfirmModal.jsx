import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import "./confirmModal.css";

const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="confirm-modal-overlay"
        >
          <motion.div
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.7 }}
            className="confirm-modal-content"
          >
            <h2 className="min500:text-sm min500:text-center">
              Bu ürünü sepetten kaldırmak istediğinizden emin misiniz?
            </h2>
            <div className="flex justify-around mt-4 gap-2 min500:flex-row">
              <button
                onClick={onConfirm}
                className="border border-slate-400 text-black hover:bg-black hover:text-white transition-all font-bold py-2 w-1/2 min500:text-sm"
              >
                Sil
              </button>
              <button
                onClick={onClose}
                className="bg-black text-white font-bold py-2 w-1/2 min500:text-sm"
              >
                İptal
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmModal;

ConfirmModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
};
