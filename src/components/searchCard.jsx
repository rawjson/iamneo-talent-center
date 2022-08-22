import { useState, useContext } from 'react';
import { SearchIcon } from './icons-dashboard/searchIcon';
import { DataContext } from './dataContext/dataContext';

const SearchCard = () => {
  const [search, setSearch] = useState('');
  const { data, setData, reset } = useContext(DataContext);

  const findCard = () => {
    if (search.length < 4) return;
    const searchStr = search.trim();
    const candidates = Object.entries(data['candidates']);
    let found = {};
    for (let i = 0; i < candidates.length; i++) {
      let l = 1;
      let r = candidates[i].length - 1;

      while (l <= r) {
        const str = candidates[i][l].name.trim().slice(0, 4).toLowerCase();
        if (searchStr.match(str)) {
          const id = candidates[i][l].id;
          const data = candidates[i][l];
          Object.assign(found, { [id]: data });
        }
        l++;
      }
    }

    const candidate = Object.entries(found);

    if (candidate.length) {
      const columns = Object.entries(data['columns']);
      let newColumns = {};

      for (let i in candidate) {
        let l = 0;
        let r = columns.length - 1;

        while (l <= r) {
          let len = columns[l][1].candIds.length;
          for (let j = 0; j < len; j++) {
            if (columns[l][1].candIds[j] === candidate[i][0]) {
              const id = columns[l][0];
              const data = columns[l][1];

              for (let x = 0; x < data.candIds.length; x++) {
                if (data.candIds[x] !== candidate[i][0]) {
                  delete data.candIds.splice(x, 1);
                }
              }
              Object.assign(newColumns, { [id]: data });
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
    if (e.target.value.length < 3) {
      reset();
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
              findCard();
            }
          }}
        />
      </div>
    </div>
  );
};

export default SearchCard;
