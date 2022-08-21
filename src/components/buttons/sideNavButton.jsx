export const SideNavButton = (props) => {
  return (
    <button
      className="hover:bg-purple-400 px-2 py-2 rounded-md transition-all"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
