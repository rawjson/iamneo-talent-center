import { BriefCaseIcon } from '../components/icons-sidebar/briefCaseIcon';
import KanbanBoards from '../components/kanbanBoards';
import KanBanNav from '../components/Boards/kanbanNav';

const JobsBoard = () => {
  return (
    <>
      <div className="w-full h-16 px-6 flex items-center justify-between bg-zinc-100">
        {/* left side */}
        <div className="flex space-x-2 items-center text-sm font-bold text-cyan-900">
          <BriefCaseIcon className="h-4 w-4" />
          <span>Jobs</span>
          <span>&gt;</span>
          <span>Full-stack Engineer</span>

          <button className="font-normal px-2 py-1 rounded border border-cyan-900 text-xs bg-white">
            View Job Details
          </button>
        </div>

        {/* right side */}
        <div className="text-sm flex space-x-4">
          <select
            name="options"
            id="add-candidate"
            className="p-2 rounded border border-cyan-900"
            defaultValue="default"
          >
            <option value="default" disabled>
              Add Candidate
            </option>
          </select>

          <select
            className="bg-[#13334A] text-white px-2 font-bold rounded border-4 border-[#13334A]"
            defaultValue="default"
          >
            <option value="default" disabled>
              Published
            </option>
          </select>
        </div>
      </div>

      <div className="px-6 py-2 h-full">
        <KanBanNav />
        <div className="flex space-x-10">
          <KanbanBoards />
        </div>
      </div>
    </>
  );
};

export default JobsBoard;
