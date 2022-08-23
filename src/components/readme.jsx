const Readme = () => {
  return (
    <>
      <div className="bg-white hidden 2xl:block shadow-lg px-8 py-5 space-y-4 text-sm overflow-auto inset-y-0 h-screen overflow-y-auto border-l fixed">
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
          The icons used in this replica are take from{' '}
          <a href="https://heroicons.com" className="underline font-bold">
            heroicons.com
          </a>
          , hence, I apologize for the slight difference in the appearance.
        </p>

        <p>TailwindCSS and Vite.js is used for faster developmnent.</p>
        <p>
          No other external library is used except:
          <br />
          <code>react-beautiful-dnd</code>
        </p>

        <p>No routing package is used as we are only dealing with one page.</p>
        <p>
          Link to the source code is available with:
          <br />
          <a
            href="https://github.com/rawjson/iamneo-talent-center"
            className="font-bold underline"
          >
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

        <div className="flex items-center space-x-4 min-w-max">
          <p className="font-bold">Lighthouse score:</p>
          <div className="w-12 h-12 border-4 border-green-600 rounded-full relative">
            <p className="text-base font-bold absolute top-1/4 ml-1.5 text-green-700">
              100
            </p>
          </div>
        </div>
        <p>
          Lighthouse score of 100 is acheived with this replica. This can be
          confirmed by navigating to developer tools &gt; Lighthouse.
        </p>
      </div>
    </>
  );
};

export default Readme;
