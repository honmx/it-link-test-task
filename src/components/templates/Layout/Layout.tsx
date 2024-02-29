import { FC, ReactElement, ReactNode } from "react";
import s from "./Layout.module.scss";
import { Container } from "react-bootstrap";

interface Props {
  renderHeader?: () => ReactElement;
  renderFooter?: () => ReactElement;
  children: ReactNode;
}

const Layout: FC<Props> = ({ renderHeader, renderFooter, children }) => {
  return (
    <div className={s.layoutWrapper}>
      {renderHeader && renderHeader()}
      <main className={s.layoutMain}>
        <Container className={s.container}>
          {children}
        </Container>
      </main>
      {renderFooter && renderFooter()}
    </div>
  )
};

export default Layout;