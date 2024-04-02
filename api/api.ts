const BASE_URL = "https://bootcamp-api.codeit.kr/api/";

const fetchJson = async (url: string) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getFolderInfo = async () => {
  const url = `${BASE_URL}sample/folder`;
  return await fetchJson(url);
};

export const getUserInfo = async () => {
  const url = `${BASE_URL}sample/user`;
  return await fetchJson(url);
};

export const getFolderList = async () => {
  const url = `${BASE_URL}users/1/folders`;
  return fetchJson(url);
};
export const getAllLinkData = async (id: string) => {
  const url = id
    ? `${BASE_URL}users/1/folders/${id}`
    : `${BASE_URL}users/1/links`;
  return fetchJson(url);
};
