import { useState } from "react";

export function useDisclosure(defaultValue?: boolean) {
  const [isOpen, setIsOpen] = useState(defaultValue ?? false);

  return {
    isOpen,
    onClose: () => setIsOpen(false),
    onOpen: () => setIsOpen(true),
    onToggle: () => setIsOpen((prev) => !prev),
  };
}
