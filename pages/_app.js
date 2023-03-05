import '@/styles/globals.css'

//Internal Import
import { NavBar, Footer } from '@/components/componentsindex';

const MyApp = ({ Component, pageProps })=> (
  <div>
    <NavBar/>
    <Component {...pageProps} />
    <Footer/>
  </div>
);

export default MyApp;