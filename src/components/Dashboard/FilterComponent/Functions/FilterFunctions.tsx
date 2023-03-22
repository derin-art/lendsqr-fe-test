import { DashboardTableItemProps } from "../../DashboardTableItem";
import { DashboardTableItemType } from "../../Types/DashboardTableItemType";
/*I Imported the type props from DashboardTableItem.tsx to help better with the filtering of the Array that will be passed into the function below. The objects of the array should all be based on the DashboardTableItem type imported above.  */

function FilterFunction(
  Username: string,
  Organization: string,
  Email: string,
  DateJoined: string,
  PhoneNumber: string,
  Status: string,
  Array: DashboardTableItemType[]
) {
  const filterObject = {
    userName: Username,
    orgName: Organization,
    email: Email,
    createdAt: DateJoined,
    status: Status,
    phoneNumber: PhoneNumber,
  };

  const filteredArray = Array.filter((item) => {
    for (let key in filterObject) {
      /* Using Type assertion to assert that dashboardItemKey is the type of one of the keys of the DashboardTableItemProps/Object   */
      const dashboardItemkey = key as keyof typeof filterObject;

      /*Similarly Using Type assertion to assert that filterObjectItemKey is the type of one of the keys of the filterObject   */
      const filterObjectItemKey = key as keyof typeof filterObject;
      console.log({
        l: item[dashboardItemkey].toLowerCase(),
        k: filterObject[filterObjectItemKey].toLowerCase(),
      });
      const includesFilterValues = item[dashboardItemkey]
        .toLowerCase()
        .includes(filterObject[filterObjectItemKey].toLowerCase());
      console.log(includesFilterValues);
      if (!includesFilterValues) {
        return false;
      }
    }

    return true;
  });
  console.log("filtered", filteredArray);
  return filteredArray;
}

export { FilterFunction };