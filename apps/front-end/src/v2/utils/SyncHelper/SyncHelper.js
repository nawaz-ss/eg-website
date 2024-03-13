import { facilitatorRegistryService } from "@shiksha/common-lib";
import {
  getHeaderDetails,
  getIndexedDBItem,
  setIndexedDBItem,
} from "../Helper/JSHelper";
import moment from "moment";

export async function setPrerakOfflineInfo(id) {
  try {
    const currentTime = moment().toString();
    const data = await facilitatorRegistryService.getPrerakOfflineInfo();
    let commonHeader = await getHeaderDetails();
    setIndexedDBItem(
      `${id}_${commonHeader?.program_id}_${commonHeader?.academic_year_id}_Get`,
      data?.data
    );
    setIndexedDBItem("GetSyncTime", currentTime);
  } catch (error) {
    console.error("Error setting IndexedDB item:", error);
  }
}
export async function setPrerakUpdateInfo(id, data) {
  try {
    const currentTime = moment().toString();
    let commonHeader = await getHeaderDetails();
    setIndexedDBItem(
      `${id}_${commonHeader?.program_id}_${commonHeader?.academic_year_id}_Update`,
      data
    );
    setIndexedDBItem("UpdateSyncTime", currentTime);
  } catch (error) {
    console.error("Error setting IndexedDB item:", error);
  }
}
export async function setIpUserInfo(id) {
  try {
    const currentTime = moment().toString();
    const data = await facilitatorRegistryService.getInfo();
    let commonHeader = await getHeaderDetails();
    if (commonHeader?.program_id && commonHeader?.academic_year_id) {
      setIndexedDBItem(
        `${id}_${commonHeader?.program_id}_${commonHeader?.academic_year_id}_Ip_User_Info`,
        data
      );
      setIndexedDBItem("GetSyncTime", currentTime);
    }
    return data;
  } catch (error) {
    console.error("Error setting IndexedDB item:", error);
  }
}
export async function getIpUserInfo(id) {
  try {
    let commonHeader = await getHeaderDetails();
    let ip_user_info = await getIndexedDBItem(
      `${id}_${commonHeader?.program_id}_${commonHeader?.academic_year_id}_Ip_User_Info`
    );
    return ip_user_info;
  } catch (error) {
    return null;
  }
}

export async function checkPrerakOfflineTimeInterval() {
  try {
    const timeInterval = 30;

    const GetSyncTime = await getIndexedDBItem("GetSyncTime");

    if (GetSyncTime) {
      const timeDiff = moment.duration(moment().diff(GetSyncTime)).asMinutes();
      return timeDiff >= timeInterval;
    }
  } catch (error) {
    console.error("Error setting IndexedDB item:", error);
  }
}

export async function checkIpUserInfo(id) {
  try {
    let commonHeader = await getHeaderDetails();
    const editRequest = await getIndexedDBItem(
      `${id}_${commonHeader?.program_id}_${commonHeader?.academic_year_id}_Ip_User_Info`
    );
    return !!editRequest;
  } catch (error) {
    console.error("Error getting IndexedDB item:", error);
    return null;
  }
}
export async function checkGetUserInfo(id) {
  try {
    let commonHeader = await getHeaderDetails();
    const editRequest = await getIndexedDBItem(
      `${id}_${commonHeader?.program_id}_${commonHeader?.academic_year_id}_Get`
    );
    return !!editRequest;
  } catch (error) {
    console.error("Error getting IndexedDB item:", error);
    return null;
  }
}
export async function checkGetUserUpdateInfo(id) {
  try {
    let commonHeader = await getHeaderDetails();
    const editRequest = await getIndexedDBItem(
      `${id}_${commonHeader?.program_id}_${commonHeader?.academic_year_id}_Update`
    );
    return !!editRequest;
  } catch (error) {
    console.error("Error getting IndexedDB item:", error);
    return null;
  }
}

export async function getUserInfo(id) {
  try {
    let commonHeader = await getHeaderDetails();
    const getUserInfo = await getIndexedDBItem(
      `${id}_${commonHeader?.program_id}_${commonHeader?.academic_year_id}_Get`
    );
    if (getUserInfo) {
      return getUserInfo;
    } else {
      return {};
    }
  } catch (error) {
    console.error("Error getting IndexedDB item:", error);
    return {};
  }
}
export async function getUserInfoNull(id) {
  try {
    let commonHeader = await getHeaderDetails();
    const getUserInfo = await getIndexedDBItem(
      `${id}_${commonHeader?.program_id}_${commonHeader?.academic_year_id}_Get`
    );
    return getUserInfo;
  } catch (error) {
    return null;
  }
}

export async function getUserUpdatedInfo(id) {
  try {
    let commonHeader = await getHeaderDetails();
    const getUserInfo = await getIndexedDBItem(
      `${id}_${commonHeader?.program_id}_${commonHeader?.academic_year_id}_Update`
    );
    if (getUserInfo) {
      return getUserInfo;
    } else {
      return {};
    }
  } catch (error) {
    console.error("Error getting IndexedDB item:", error);
    return {};
  }
}
export async function getUserUpdatedInfoNull(id) {
  try {
    let commonHeader = await getHeaderDetails();
    const getUserInfo = await getIndexedDBItem(
      `${id}_${commonHeader?.program_id}_${commonHeader?.academic_year_id}_Update`
    );
    return getUserInfo;
  } catch (error) {
    return null;
  }
}

export async function getOnlyChanged(MainObj, UpdateObj) {
  const NewObject = {};

  for (const key in UpdateObj) {
    if (UpdateObj.hasOwnProperty(key)) {
      if (
        typeof UpdateObj[key] === "object" &&
        !Array.isArray(UpdateObj[key])
      ) {
        const updatedSubObject = await getOnlyChanged(
          MainObj[key],
          UpdateObj[key]
        );
        if (Object.keys(updatedSubObject).length > 0) {
          NewObject[key] = updatedSubObject;
        }
      } else if (Array.isArray(UpdateObj[key])) {
        if (MainObj[key] && Array.isArray(MainObj[key])) {
          const updatedArray = MainObj[key].map((item) => {
            const updatedItem = UpdateObj[key].find(
              (updated) => updated.id === item.id
            );
            return updatedItem ? updatedItem : item;
          });
          NewObject[key] = updatedArray;
        } else {
          NewObject[key] = UpdateObj[key];
        }
      } else {
        if (MainObj[key] !== UpdateObj[key]) {
          NewObject[key] = UpdateObj[key];
        }
      }
    }
  }

  // Merge arrays and remove duplicates
  for (const key in MainObj) {
    if (
      MainObj.hasOwnProperty(key) &&
      Array.isArray(MainObj[key]) &&
      UpdateObj[key]
    ) {
      const mergedArray = [
        ...MainObj[key].filter(
          (item) => !UpdateObj[key].some((updated) => updated.id === item.id)
        ),
        ...UpdateObj[key],
      ];
      NewObject[key] = mergedArray;
    }
  }

  return NewObject;
}
export async function mergeOnlyChanged(MainObj, UpdateObj) {
  try {
    const NewObject = { ...MainObj };

    for (const key in UpdateObj) {
      if (UpdateObj.hasOwnProperty(key)) {
        if (
          typeof UpdateObj[key] === "object" &&
          !Array.isArray(UpdateObj[key])
        ) {
          NewObject[key] = await mergeOnlyChanged(MainObj[key], UpdateObj[key]);
        } else if (Array.isArray(UpdateObj[key])) {
          if (MainObj[key] && Array.isArray(MainObj[key])) {
            NewObject[key] = await Promise.all(
              MainObj[key].map(async (item, index) => {
                if (UpdateObj[key][index]) {
                  return await mergeOnlyChanged(item, UpdateObj[key][index]);
                }
                return item;
              })
            );
          } else {
            NewObject[key] = UpdateObj[key];
          }
        } else {
          if (MainObj[key] !== UpdateObj[key]) {
            NewObject[key] = UpdateObj[key];
          }
        }
      }
    }
  } catch (e) {
    console.log("error test", e);
  }

  //experience add
  try {
    var finalObj = MainObj?.experience.concat(UpdateObj?.experience);
    //console.log("finalObj", finalObj);
    NewObject.experience = finalObj;
  } catch (e) {}

  return NewObject;
}
