type UserInfo = {
  sub: string;
  name?: string;
  given_name?: string;
  family_name?: string;
  picture?: string;
  email?: string;
  email_verified?: boolean;
  locale?: string;
  hd?: string;
};

const fetchUserData = async (token: string): Promise<UserInfo> => {
  const url = new URL("https://openidconnect.googleapis.com/v1/userinfo");

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();

  return result;
};

export default fetchUserData;
