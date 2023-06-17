import Banner from './components/Banner';
import LanguagesCarousel from './components/LanguagesCarousel';
import TopAppBar from './components/TopAppBar';

export default function Home() {
  return (
    <>
      <main className='bg-white dark:bg-darkGray min-h-screen w-screen'>
            <main className='flex flex-col gap-8 min-h-screen m-auto'>
              <TopAppBar />
              <Banner/>
              <LanguagesCarousel/>
            </main>
          </main>
    </>
  );
}
