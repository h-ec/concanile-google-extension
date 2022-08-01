// setInterval(() => {
//     async function getCurrentTabUrl () {
//         const tabs = await chrome.tabs.query({ active: true })
//         return tabs[0].url
//     }
//     var cli = getCurrentTabUrl();
//     var exts = [".7z", ".zip", ".rar", ".exe", ".msi", ".jpg", ".jpeg", ".iso", ".img", ".webm", ".png", ".gif", ".js", ".jsx", ".css", ".cs", ".c", ".cpp", ".h", ".mkv", ".mp4", ".mp3", ".wav", ".txt", ".pdf", ".doc", ".docx"];
//     exts.push(".php");
//     exts.push(".flac");
//     exts.push(".wma");
//     exts.push(".reg");
//     exts.push(".tif");
//     exts.push(".log");
//     exts.push(".ini");
//     exts.push(".pst");
//     exts.push(".torrent");
//     exts.push(".mpa");
//     exts.push(".ogg");
//     exts.push(".wma");
//     exts.push(".wpl");
//     exts.push(".cda");
//     exts.push(".mid");
//     exts.push(".midi");
//     exts.push(".aif");
//     exts.push(".arj");
//     exts.push(".deb");
//     exts.push(".pkg");
//     exts.push(".rpm");
//     exts.push(".tar.gz");
//     exts.push(".z");
//     exts.push(".bin");
//     exts.push(".dmg");
//     exts.push(".toast");
//     exts.push(".vcd");
//     exts.push(".csv");
//     exts.push(".dat");
//     exts.push(".db");
//     exts.push(".dbf");
//     exts.push(".log");
//     exts.push(".mdb");
//     exts.push(".sav");
//     exts.push(".sql");
//     exts.push(".tar");
//     exts.push(".xml");
//     exts.push(".email");
//     exts.push(".eml");
//     exts.push(".emlx");
//     exts.push(".msg");
//     exts.push(".oft");
//     exts.push(".ost");
//     exts.push(".pst");
//     exts.push(".vcf");
//     exts.push(".apk");
//     exts.push(".bat");
//     exts.push(".cgi");
//     exts.push(".pl");
//     exts.push(".com");
//     exts.push(".gadget");
//     exts.push(".jar");
//     exts.push(".py");
//     exts.push(".wsf");
//     exts.push(".fnt");
//     exts.push(".fon");
//     exts.push(".otf");
//     exts.push(".ttf");
//     exts.push(".ai");
//     exts.push(".bmp");
//     exts.push(".ico");
//     exts.push(".ps");
//     exts.push(".svg");
//     exts.push(".tif");
//     exts.push(".tiff");
//     exts.push(".cer");
//     exts.push(".cfm");
//     exts.push(".jsp");
//     exts.push(".part");
//     exts.push(".rss");
//     exts.push(".key");
//     exts.push(".odp");
//     exts.push(".pps");
//     exts.push(".ppt");
//     exts.push(".pptx");
//     exts.push(".class");
//     exts.push(".java");
//     exts.push(".php");
//     exts.push(".sh");
//     exts.push(".swift");
//     exts.push(".vb");
//     exts.push(".ods");
//     exts.push(".xls");
//     exts.push(".xlsm");
//     exts.push(".xlsx");
//     exts.push(".bak");
//     exts.push(".cfg");
//     exts.push(".cab");
//     exts.push(".cpl");
//     exts.push(".cur");
//     exts.push(".dll");
//     exts.push(".dmp");
//     exts.push(".drv");
//     exts.push(".icns");
//     exts.push(".lnk");
//     exts.push(".sys");
//     exts.push(".tmp");
//     exts.push(".3g2");
//     exts.push(".3gp");
//     exts.push(".avi");
//     exts.push(".flv");
//     exts.push(".h264");
//     exts.push(".m4v");
//     exts.push(".mov");
//     exts.push(".mpg");
//     exts.push(".mpeg");
//     exts.push(".rm");
//     exts.push(".swf");
//     exts.push(".vob");
//     exts.push(".wmv");
//     exts.push(".rtf");
//     exts.push(".odt");
//     exts.push(".tex");
//     exts.push(".wpd");
//     exts.forEach(xt => {
//     var cli = getCurrentTabUrl();
//     cli.then((e) => {
//             if(e.indexOf(xt) !== -1)
//             {
//                     window.open("concanil-fiddle-dm://open/" + e);
//             }
//     });
//     });
//     chrome.windows.onFocusChanged.addListener(() => {
//     var cli = getCurrentTabUrl();
//     exts.forEach(xt => {
//             cli.then((e) => {
//                 if(e.indexOf(xt) !== -1)
//                 {
//                     window.open("concanil-fiddle-dm://open/" + e);
//                 }
//             });
//         })
//     })
//     chrome.tabs.onCreated.addListener(() => {
//     var cli = getCurrentTabUrl();
//     exts.forEach(xt => {
//             cli.then((e) => {
//                 if(e.indexOf(xt) !== -1)
//                 {
//                     window.open("concanil-fiddle-dm://open/" + e);
//                 }
//             });
//         })
//     });

//     document.addEventListener("loadstart", () => {
//     var cli = getCurrentTabUrl();
//     exts.forEach(xt => {
//             cli.then((e) => {
//                 if(e.indexOf(xt) !== -1)
//                 {
//                     window.open("concanil-fiddle-dm://open/" + e);
//                 }
//             });
//         })
//     });
// }, 496);

