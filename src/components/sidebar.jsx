/**
 * This is the sidebar component of our Talent Center Dashboard
 * Pass children to it like draggable cards and other data
 * @param {props} props
 * @returns {component}
 */
import { SideNavButton } from './buttons/sideNavButton';
import { AnnotationIcon } from './icons-sidebar/annotationIcon';
import { BriefCaseIcon } from './icons-sidebar/briefCaseIcon';
import { CogIcon } from './icons-sidebar/cogIcon';
import { GridIcon } from './icons-sidebar/gridIcon';
import { HelpIcon } from './icons-sidebar/helpIcon';
import { InboxIcon } from './icons-sidebar/inboxIcon';
import { ProfileIcon } from './icons-sidebar/profile';
import { UsersIcon } from './icons-sidebar/usersIcon';
import { DotsVerticalIcon } from './icons-sidebar/dotsVerticalIcon';

const TopNavigation = [
  { Icon: InboxIcon, fn: () => {} },
  { Icon: BriefCaseIcon, fn: () => {}, expandable: true },
  { Icon: UsersIcon, fn: () => {}, expandable: true },
  { Icon: CogIcon, fn: () => {} },
];

const BottomNavigation = [
  { Icon: HelpIcon, fn: () => {} },
  { Icon: AnnotationIcon, fn: () => {} },
  { Icon: GridIcon, fn: () => {} },
];

const SideBar = () => {
  return (
    <div className="bg-[#13334A] text-gray-900 fixed inset-y-0 z-20 w-16">
      <div className="pt-4 overflow-y-auto h-screen">
        <div className="mx-auto flex flex-col items-center relative h-full">
          <ProfileIcon className="h-8 w-8 rounded-full text-cyan-900" />
          <div className="border-t mt-4 w-full border-cyan-900" />

          {/* top navigation */}
          <nav>
            <ul className="space-y-4 mt-5 text-white">
              {TopNavigation.map((Nav, i) => (
                <li key={i} className="relative">
                  <SideNavButton onClick={Nav.fn}>
                    <Nav.Icon className="h-6 w-6" />
                  </SideNavButton>
                  <span className="absolute -right-3 top-1/4">
                    {Nav.expandable && (
                      <DotsVerticalIcon className="w-4 h-5 cursor-pointer hover:text-purple-400" />
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </nav>

          {/* bottom navigation */}
          <nav className="absolute bottom-5">
            <ul className="space-y-4 mt-5 text-white">
              {BottomNavigation.map((Nav, i) => (
                <li key={i}>
                  <SideNavButton onClick={Nav.fn}>
                    <Nav.Icon className="h-6 w-6" />
                  </SideNavButton>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
