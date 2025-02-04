import Footer from './footer';
import Navbar from './navbar';
import About from './about';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <About />
      </main>

      <Footer />
    </div>
  );
}
