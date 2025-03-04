const login = () => {
  const GOOGLE_OAUTH_LOGIN = "https://accounts.google.com/o/oauth2/v2/auth";
  const client_id = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const redirect_uri = import.meta.env.VITE_GOOGLE_REDIRECT_URI;

  const params = {
    client_id,
    redirect_uri,
    response_type: "token",
    scope: "openid email profile",
    include_granted_scopes: "true",
    // state: "pass-through value",
  };

  const url = new URL(GOOGLE_OAUTH_LOGIN);
  url.search = new URLSearchParams(params).toString();

  window.location.href = url.toString();
};

export default login;
