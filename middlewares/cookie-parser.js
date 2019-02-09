const cookieParser = (req, res, next) => {
  const cookies = req.headers.cookie;
  if (!cookies) {
    next();
  } else {
    req.parsedCookies = parse(cookies);
    next();
  }
};

const parse = (str) => {
  let obj = {};
  const cookieElements = str.split('; ');

  cookieElements.forEach(element => {
    const equalIndex = element.indexOf('=');
    if (equalIndex > -1) {
      const key = element.substr(0, equalIndex).trim();
      let value = element.substr(equalIndex + 1, element.length).trim();
      if (value) {
        obj[key] = value;
      }
    }
  });
  return obj;
};

module.exports = cookieParser;