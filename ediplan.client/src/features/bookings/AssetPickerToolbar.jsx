import { useMemo } from 'react';
import Toolbar from '../../ui/Toolbar';
import Input from '../../ui/Form/Input';
import FilterMenu from '../../ui/Table/FilterMenu';
import Filter from '../../ui/Filter';
import { LuPackagePlus } from 'react-icons/lu';
import Warning from '../../ui/Warning';

function AssetPickerToolbar({
  isFilterOpen,
  setIsFilterOpen,
  filterPosition,
  setFilterPosition,
  toggleTables,
  showFilters,
  showLockWarning
}) {
  const memoizedToolbar = useMemo(
    () => (
      <Toolbar>
        <Toolbar.Panel side="left">
          <Toolbar.Button $variation="primary" onClick={toggleTables}>
            <LuPackagePlus />
          </Toolbar.Button>
          {showLockWarning && (
            <Warning>Select dates before assigning assets...</Warning>
          )}
          {showFilters && <Input />}
        </Toolbar.Panel>
        <Toolbar.Panel side="right">
          {showFilters && (
            <FilterMenu
              isOpen={isFilterOpen}
              setIsOpen={setIsFilterOpen}
              position={filterPosition}
              setPosition={setFilterPosition}
            >
              <FilterMenu.Toggle />
              <FilterMenu.List>
                <Filter
                  filterField="Type"
                  options={[
                    { value: 'all', label: 'All' },
                    { value: 'equipment', label: 'Equipment' },
                    { value: 'person', label: 'Person' },
                    { value: 'room', label: 'Room' }
                  ]}
                />
              </FilterMenu.List>
            </FilterMenu>
          )}
        </Toolbar.Panel>
      </Toolbar>
    ),
    [
      filterPosition,
      setFilterPosition,
      isFilterOpen,
      setIsFilterOpen,
      toggleTables,
      showFilters,
      showLockWarning
    ]
  );

  return memoizedToolbar;
}

export default AssetPickerToolbar;
