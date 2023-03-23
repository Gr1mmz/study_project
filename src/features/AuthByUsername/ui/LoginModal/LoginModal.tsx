import { Suspense } from 'react';

import { Modal } from 'shared/ui/Modal/Modal';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const LoginModal = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={className}
      lazy
    >
      <Suspense fallback="">
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};