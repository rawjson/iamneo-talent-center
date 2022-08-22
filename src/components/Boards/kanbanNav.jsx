import { ChevronRightIcon } from '../icons-dashboard/chevronRightIcon';
import { initialData } from './initData';
import { FlaskIcon } from '../icons-dashboard/flaskIcon';
import { UploadIcon } from '../icons-dashboard/uploadIcon';
import { ViewListIcon } from '../icons-dashboard/viewListIcon';
const KanBanNav = () => {
  const len = Object.keys(initialData['candidates']).length;

  return (
    <nav className="flex items-center text-sm my-5 justify-between">
      <div className="flex space-x-2 items-center">
        <span className="font-bold">All Candidates</span>
        <span>-</span>
        <span className="text-gray-600">Active &#40;{len}&#41;</span>
        <ChevronRightIcon className="h-3 w-3 transform rotate-90" />
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-gray-600">Sort by</span>
        <span className="font-bold">Last Updated</span>
        <ChevronRightIcon className="h-3 w-3 transform rotate-90" />
      </div>

      <div className="flex items-center space-x-2 pr-10 text-gray-600">
        {[ViewListIcon, FlaskIcon, UploadIcon].map((Icon, i) => (
          <Icon key={i} className="h-5 w-5" />
        ))}
      </div>
    </nav>
  );
};

export default KanBanNav;
