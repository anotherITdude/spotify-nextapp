import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import {MdClose} from 'react-icons/md'

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onChange,
  title,
  description,
  children,
}) => {
  return (
    <Dialog.Root open={true} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="
            bg-neutral-900/90
            backdrop-blurr-sm
            fixed
            inset-0
            "
        />
        <Dialog.Content
          className="
          fixed
          drop-shadow-md
          border
          border-neutral-700
          top-[50%]
          left-[50%]
          max-h-full
          h-full
          max-w-[90%]
          translate-x-[-50%]
          translate-y-[-50%]
          rounded-md
          bg-neutral-800
          p-[25px]
          focus:outline-none
          md:h-auto
          md:max-h-[85vh]
          md:w-[90vw]
          md:p-[40px]
          md:max-w-[450px]
          translate-y
          "
        >
          <Dialog.Title className="text-xl text-center font-semibold mb-4">
            {title}
          </Dialog.Title>
          <Dialog.Description className="mb05 text0sm leading-normal text-center">{description}</Dialog.Description>
          <div>{children}</div>
          <Dialog.Close asChild>
            <button className="
            text-neutral-400
            hover:text-white
            absolute
            top-[10px]
            right-[10px]
            inline-flex
            h-[25px]
            w-[25px]
            appearance-none
            items-center
            justify-center
            rounded-full
            focus:outline-none
            hover:cursor-pointer
            "><MdClose/></button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
Modal;
