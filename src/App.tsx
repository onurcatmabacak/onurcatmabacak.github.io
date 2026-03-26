/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import CV from "./components/CV";
import Research from "./components/Research";
import CompAstro from "./components/CompAstro";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <CV />
        <Research />
        <CompAstro />
      </main>
      <Footer />
    </div>
  );
}
