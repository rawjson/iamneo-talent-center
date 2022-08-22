import SideBar from './components/sidebar';
import TopBar from './components/topBar';
import JobsBoard from './pages/jobsBoard';
import Readme from './components/readme';

export default function App() {
  return (
    <div className="flex bg-slate-100">
      <SideBar>
        <div className="pl-16 flex flex-col flex-1 w-full min-w-max max-w-7xl">
          <TopBar />
          <JobsBoard />
        </div>
      </SideBar>

      <Readme />
    </div>
  );
}
