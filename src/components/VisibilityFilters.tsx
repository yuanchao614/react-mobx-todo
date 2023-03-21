import { useContext } from "react";
import cx from "classnames";
// import { TodoStore } from "../store/TodoStore";
import { TFilter, VISIBILITY_FILTERS } from "../constants";
import { observer } from "mobx-react-lite";
import { TodoContext } from "../store";

// interface PropsType {
//   todoStore: TodoStore;
// }

const VisibilityFilters = () => {
  const todoStore = useContext(TodoContext)

  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map((item: TFilter | string) => {
        return (
          <span
            key={item}
            className={cx("visibility-filters__item", {
              'visibility-filters__item--active': todoStore.activeFilter === VISIBILITY_FILTERS[item as TFilter],
            })}
            onClick={() => todoStore.setFilter(VISIBILITY_FILTERS[item as TFilter])}
          >
            {VISIBILITY_FILTERS[item as TFilter]}
          </span>
        );
      })}
    </div>
  );
};

export default observer(VisibilityFilters);
