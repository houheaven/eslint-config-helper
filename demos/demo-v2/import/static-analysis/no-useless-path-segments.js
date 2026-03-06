
/* eslint-disable import/extensions */
/* eslint-disable import/no-unassigned-import */
/* eslint-disable import/no-unresolved */

import "./../my-project/pages/about.js"; // should be "./pages/about.js"
import "./../my-project/pages/about"; // should be "./pages/about"
import "../my-project/pages/about.js"; // should be "./pages/about.js"
import "../my-project/pages/about"; // should be "./pages/about"
import "./pages//about"; // should be "./pages/about"
import "./pages/"; // should be "./pages"
import "./pages/index"; // should be "./pages" (except if there is a ./pages.js file)
import "./pages/index.js"; // should be "./pages" (except if there is a ./pages.js file)
