import TopAppBar from './components/TopAppBar';
import Services from './services/page';
import Start from './start/page';

export default function Home() {
  return (
    <>
      <main className='bg-white dark:bg-darkGray h-auto w-screen'>
            <main className='flex flex-col min-h-screen snap-mandatory snap-y scroll-smooth'>
              <TopAppBar />
              <Start/>
              <Services/>
            </main>
          </main>
    </>
  );
}
