import { useState } from 'react';
import './App.scss';
import ListView from './components/ListView/ListView';
import Filters from './components/Filters/Filters';
import { ForeningTypeValues, GroupTypeValues } from './types/types';

const App = () => {
  const [currentForeningTypeFilter, setCurrentForeningTypeFilter] = useState<
    ForeningTypeValues | undefined
  >(undefined);
  const [currentGroupTypeFilter, setCurrentGroupTypeFilter] = useState<
    GroupTypeValues | undefined
  >(undefined);

  const handleSetForeningTypeFilter = (newValue: string | undefined) => {
    setCurrentForeningTypeFilter(newValue as ForeningTypeValues);
  };

  const handleSetGroupTypeFilter = (newValue: string | undefined) => {
    setCurrentGroupTypeFilter(newValue as GroupTypeValues);
  };

  return (
    <div className="app">
      <main>
        <h1>DNT Foreningsoversikt</h1>
        <p>
          Her kan du søke etter og finne alle foreningene i Den Norske
          Turistforening.
        </p>
        <div className="app-filter-row">
          <Filters
            currentValue={currentForeningTypeFilter}
            filterType="forening"
            setFilter={handleSetForeningTypeFilter}
            label="Foreningstype"
          />
          <Filters
            currentValue={currentGroupTypeFilter}
            filterType="group"
            setFilter={handleSetGroupTypeFilter}
            label="Gruppetype"
          />
        </div>
        <ListView
          currentForeningTypeFilter={currentForeningTypeFilter}
          currentGroupTypeFilter={currentGroupTypeFilter}
        />
      </main>
    </div>
  );
};

export default App;
