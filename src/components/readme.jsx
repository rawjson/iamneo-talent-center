const Readme = () => {
  return (
    <>
      <div className="h-screen bg-white w-full shadow-lg px-5 py-10 space-y-4 text-sm overflow-y-auto inset-y-0">
        <h2 className="text-base font-bold text-cyan-900 border-b">
          A Replica of a Recruitment tool built for managing 1000+ candidate
          applications.
        </h2>
        <p>
          A drag and drop UI friendly Kanban board for managing the overall
          process.
        </p>

        <h3 className="text-base font-bold">Tools used:</h3>
        <ul>
          <li>React - JS Library</li>
          <li>Vite.js - Build tool</li>
          <li>React Beautiflul DND</li>
          <li>TailwindCSS</li>
        </ul>

        <p>
          The icons used in this replica are take from heroicons.com, hence,
          there is a difference in the appearance.
        </p>

        <p>
          TailwindCSS framework is used as it helps me write css faster. I
          believe only someone who is experienced with CSS would be able to use
          it.
        </p>
        <p>
          No other external library is used except:
          <br />
          <code>react-beautiful-dnd</code>
        </p>

        <p>No routing package is used as we are only dealing with one page.</p>
        <p>
          Link to the source code is available with:
          <br />
          <a href="" className="font-bold underline">
            GitHub Repository
          </a>
        </p>
        <p>
          Some navigation and button functions are left empty for the sake of
          simplicity. Only features that are asked are implemented.
        </p>

        <p>
          Search feature is added as asked for this assignment. No, external
          APIs are called but the search is performed with the data available in
          memory.
        </p>
      </div>
    </>
  );
};

export default Readme;
