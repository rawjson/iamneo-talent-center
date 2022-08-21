import { ProfileIcon } from './icons-sidebar/profile';
import { SearchIcon } from './icons-dashboard/searchIcon';
import { PlusIcon } from './icons-dashboard/plusIcon';
import { GiftIcon } from './icons-dashboard/giftIcon';

const TopBar = () => {
  return (
    <div className="h-16 sticky top-0 z-10 flex-shrink-0 flex items-center justify-between bg-white border-b w-full min-w-max px-6">
      {/* left side */}
      <div className="flex space-x-4 items-center">
        <ProfileIcon className="h-10 w-10 text-violet-600" />
        <span className="text-lg font-bold text-[#13334A]">
          iamneo.ai Talent Center
        </span>
      </div>

      {/* right side */}
      <div className="flex space-x-4 items-center">
        <div className="flex items-center border-b p-1 space-x-2 focus-within:ring-violet-500 focus-within:ring-2 ring-offset-1 rounded transition-all">
          <SearchIcon className="h-4 w-4" />
          <input
            type="text"
            placeholder="Search"
            className="text-sm outline-none"
          />
        </div>

        {/* menu and profile buttons */}
        <div className="flex items-center space-x-4">
          <button className="bg-[#13334A] w-28 rounded px-2 py-1 flex items-center space-x-1 text-white">
            <PlusIcon className="h-5 w-5" />
            <span className="text-sm font-bold">Add New</span>
          </button>

          {/* divider */}
          <div className="border-l h-6" />

          <button className="relative">
            <GiftIcon className="h-7 w-7 text-gray-500" />
            <span className="w-4 h-4 bg-red-500 rounded-full absolute -top-1.5 -right-1 text-xs text-white">
              1
            </span>
          </button>

          <button className="bg-[#D0DCB2] w-10 h-10 rounded-full text-white">
            <span className="font-medium">S</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
