import React from 'react';

interface IModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

export const Modal = ({ children, title, onClose }: IModalProps) => {
  return (
    <>
      <div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0" onClick={onClose} />
      <div className="w-[500px] flex flex-col justify-center items-center p-5 rounded bg-white absolute top-[150px] left-1/2 -translate-x-1/2">
        <h1 className="text-2xl text-center mb-3 uppercase font-bold">{title}</h1>
        {children}
      </div>
    </>
  );
};
