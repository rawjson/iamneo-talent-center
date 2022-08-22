export const SideNavButton = (props) => {
  return (
    <button
      className={[
        props.active ? 'bg-purple-400' : '',
        'hover:bg-purple-400 px-2 py-2 rounded-md transition-all',
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
