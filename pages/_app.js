import "../styles/globals.css";
import Layout from "../components/layout";
// import { gsap } from "gsap";
// import { TransitionProvider } from "../animation/TransitionContext";
// import { TransitionProvider } from "../animation/TransitionContext";
import TransitionLayout from "../animation/TransitionLayout";
import { TransitionProvider } from "../animation/TransitionContext";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <TransitionProvider>
        <TransitionLayout>
          <Component {...pageProps} key={router.route} />
        </TransitionLayout>
      </TransitionProvider>
    </Layout>
  );
}

export default MyApp;
