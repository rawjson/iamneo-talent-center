import { useState, useContext } from 'react';
import { SearchIcon } from './icons-dashboard/searchIcon';
import { DataContext } from './dataContext/dataContext';

const SearchCard = () => {
  const [search, setSearch] = useState('');
  const { data, setData } = useContext(DataContext);

  const searchFor = (string) => {
    if (string.length < 4) return;
    const searchStr = string.trim();
    const candidates = Object.entries(data['candidates']);
    let found = {};

    for (let i = 0; i < candidates.length; i++) {
      const str = candidates[i][1].name.trim().slice(0, 4).toLowerCase();
      if (searchStr.match(str)) {
        const id = candidates[i][0];
        const cdata = candidates[i][1];
        Object.assign(found, { [id]: cdata });
      }
    }
    return found;
  };

  const findCard = (str) => {
    const found = searchFor(str);
    const candidate = Object.entries(found);

    if (candidate.length) {
      const columns = Object.entries(data['columns']);
      let newColumns = {};

      let l = 0;
      let r = columns.length - 1;

      for (let i = 0; i < candidate.length; i++) {
        while (l <= r) {
          for (let j = 0; j < columns[l][1].candIds.length; j++) {
            if (columns[l][1].candIds[j] === candidate[i][0]) {
              const id = columns[l][0];
              let cdata = columns[l][1];

              for (let x = 0; x < cdata.candIds.length; x++) {
                if (cdata.candIds[x] === candidate[i][0]) {
                  let id = [cdata.candIds[x]];
                  cdata = {
                    ...cdata,
                    candIds: id,
                  };
                }
              }
              Object.assign(newColumns, { [id]: cdata });
            }
          }
          l++;
        }
      }

      const columnOrder = Object.keys(newColumns).map((key) => key);
      const newData = {
        columns: {
          ...newColumns,
        },
        candidates: {
          ...found,
        },
        columnOrder,
      };

      setData(newData);
    }
  };

  const onSearch = (e) => {
    if (e.target.value.length === 0) {
      window.location.reload();
    }
    setSearch(e.target.value);
  };

  return (
    <div className="w-52 relative">
      <div className="flex items-center border-b p-1 space-x-2 focus-within:ring-violet-500 focus-within:ring-2 ring-offset-1 rounded transition-all">
        <SearchIcon className="h-4 w-4" />
        <input
          type="text"
          placeholder="Search"
          className="text-sm outline-none"
          onChange={onSearch}
          onKeyDown={(e) => {
            if (e.code === 'Enter' || e.code === 'NumpadEnter') {
              findCard(search);
            }
          }}
        />
      </div>
    </div>
  );
};

export default SearchCard;
