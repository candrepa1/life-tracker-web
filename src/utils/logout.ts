const logout = async (token: string) => {
  const url = new URL("https://oauth2.googleapis.com/revoke");
  url.search = new URLSearchParams({ token }).toString();

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export default logout;
