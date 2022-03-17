import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

import * as C from "./styles";

interface SelectOptionProps {
  title: string;
  quantityOptions: number | string;
}

export const SelectOption: React.FC<SelectOptionProps> = ({
  children,
  title,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <C.Container onClick={() => setIsOpen(!isOpen)} {...rest} isOpen={isOpen}>
      <div className="container-title-options">
        <span>{title}</span>
        <button className="icon">
          <IoIosArrowUp />
        </button>
      </div>
      <div className="children">{children}</div>
    </C.Container>
  );
};
