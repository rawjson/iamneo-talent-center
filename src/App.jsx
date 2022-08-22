import SideBar from './components/sidebar';
import TopBar from './components/topBar';
import JobsBoard from './pages/jobsBoard';
import Readme from './components/readme';
import { DataProvider } from './components/dataContext/dataContext';
import { ChevronRightIcon } from './components/icons-dashboard/chevronRightIcon';
import { useState } from 'react';

export default function App() {
  const [showReadme, setShowReadme] = useState(false);

  const filterClass = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };

  return (
    <div className="w-full flex">
      <SideBar>
        <div className="pl-16 flex flex-col flex-1">
          <DataProvider>
            <TopBar />
            <JobsBoard />
          </DataProvider>
        </div>
      </SideBar>

      <div
        className={filterClass(
          showReadme ? 'w-96 z-20' : '',
          'flex items-center fixed right-0 top-1/2'
        )}
      >
        <button
          onClick={() => setShowReadme(!showReadme)}
          className="z-20 w-10 h-10 bg-white rounded-full flex justify-center items-center border -ml-10"
        >
          <span className="sr-only">Open Readme</span>
          <ChevronRightIcon
            className={filterClass(
              showReadme ? '' : 'tranform rotate-180',
              'h-5 w-6'
            )}
          />
        </button>
        {showReadme && <Readme show={setShowReadme} />}
      </div>
    </div>
  );
}
