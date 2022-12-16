import { useState } from "react";

export const useModal = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModalOpen = () => setShowModal(true);
    const handleModalClose = () => setShowModal(false);

    return { showModal, handleModalOpen, handleModalClose };
};
