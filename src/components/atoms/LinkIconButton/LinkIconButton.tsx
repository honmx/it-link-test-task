import Link from "next/link";
import { FC, ReactNode } from "react";
import { Button } from "react-bootstrap";

interface Props {
  href: string;
  icon: ReactNode;
}

const LinkIconButton: FC<Props> = ({ href, icon }) => {
  return (
    <Link href={href}>
      <Button size="sm">
        {icon}
      </Button>
    </Link>
  )
};

export default LinkIconButton;