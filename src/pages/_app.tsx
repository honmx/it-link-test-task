import { store } from "@/store";
import { IAppPropsWithLayout } from "@/types/IAppPropsWithLayout";
import { Provider } from "react-redux";
import "../styles/reset.scss";
import "../styles/bootstrap.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: IAppPropsWithLayout) {

  const pageLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>
      <main className={inter.className}>
        {
          pageLayout(<Component {...pageProps} />)
        }
      </main>
    </Provider>
  )
}
