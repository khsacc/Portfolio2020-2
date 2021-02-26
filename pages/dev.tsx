import UAParser from 'ua-parser-js';

export default function () {
  const uaParser = new UAParser();
  const currentBrowser = uaParser.getBrowser().name;
  const currentOs = uaParser.getOS().name;
  return (
    <>
      {currentBrowser}, {currentOs}
    </>
  );
}
