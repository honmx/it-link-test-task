import Link from "next/link";
import { FC, PropsWithChildren, ReactNode } from "react";
import { Button } from "react-bootstrap";

interface Props extends PropsWithChildren {
  href: string;
}

const LinkButton: FC<Props> = ({ href, children }) => {
  return (
    <Link href={href}>
      <Button>
        {children}
      </Button>
    </Link>
  )
};

export default LinkButton;