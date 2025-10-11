import { useState, useEffect } from "preact/hooks";
import { render } from "preact";
import { Route, Link, Router, BaseLocationHook } from "wouter-preact";

// Components
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';

// Pages
import { Home } from './pages/home';
import { Resume } from './pages/resume';
import { NotFound } from './pages/_404.js';

import { Speedcubing } from "./pages/activities/speedcubing.js";

import './style.css';

// Custom hook for hash-based routing
const useHashLocation: BaseLocationHook = () => {
  const getHash = () => window.location.hash.replace(/^#/, "") || "/";

  const [loc, setLoc] = useState<string>(getHash);

  useEffect(() => {
    const handler = () => setLoc(getHash());
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const navigate = (to: string, { replace = false }: { replace?: boolean } = {}) => {
    if (replace) {
      const base = window.location.href.replace(/#.*$/, "");
      window.location.replace(base + "#" + to);
    } else {
      window.location.hash = to;
    }
  };

  return [loc, navigate];
};

const default_page_layout = (Comp) => (
  <>
    <Header />
    <main>
      <Comp />
    </main>
    <Footer />
  </>
);

export function App() {
  return (
    <Router hook={useHashLocation}>
      {/* <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link>
      </nav> */}
	  	<Header />

		<main>
    		<Route path="/home" component={Home} />
        <Route path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/activity/speedcubing" component={Speedcubing} />
		</main>

		<Footer />
    </Router>
  );
}

render(<App />, document.getElementById('app'))
