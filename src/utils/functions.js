const safeParseJson = (json) => {
  try {
    return JSON.parse(json);
  } catch (err) {
    console.log('safeParseJson', err);
    return false;
  }
};

export {safeParseJson};
