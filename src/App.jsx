import SideBar from './components/sidebar';
import TopBar from './components/topBar';
import JobsBoard from './pages/jobsBoard';

export default function App() {
  return (
    <>
      <SideBar>
        <div className="pl-16 flex flex-col flex-1 bg-white w-full min-w-max">
          <TopBar />
          <JobsBoard />
        </div>
      </SideBar>
      ;
    </>
  );
}
