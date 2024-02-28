import { FC, PropsWithRef, ReactNode, RefObject, forwardRef } from "react";
import { Button } from "react-bootstrap";

interface Props {
  href: string;
  icon: ReactNode;
}

const LinkIconButton: FC<Props> = ({ href, icon }) => {
  return (
    <a href={href}>
      <Button size="sm">
        {icon}
      </Button>
    </a>
  )
};

export default LinkIconButton;