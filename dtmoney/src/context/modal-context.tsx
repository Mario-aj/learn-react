import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ContextProps {
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  nomes: Array<string>;
}

export const ModalContext = createContext<ContextProps>({
  open: false,
  setIsOpen: () => {},
  nomes: [],
});

export const useModal = () => useContext(ModalContext);

export const ModalProvider = (children: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const Product = ["mario", "luis", "clementina"];

  return (
    <ModalContext.Provider value={{ open: isOpen, setIsOpen, nomes: Product }}>
      {children}
    </ModalContext.Provider>
  );
};
