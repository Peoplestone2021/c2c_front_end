const sessionCookieName = "sid";

const getSessionId = () => {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        sessionCookieName.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export { getSessionId };
