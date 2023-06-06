export const getTokenHeader = () => {
  const ls = localStorage.getItem("camping-store-user");

  if (ls) {
    const token = JSON.parse(ls).token;
    return {
      headers: {
        Authorization: `bearer ${token}`,
      },
    };
  }

  return null;
};
