// This is the global JS file that will be accessible from any component
// import 'novicell-lazyload';

import '../02-molecules/animate-on-scroll-wrapper/animate-on-scroll-wrapper';
import '../02-molecules/navigation/nav-trigger/nav-trigger';
import '../02-molecules/navigation/nav-main-list-priority/nav-main-list-priority';
import '../02-molecules/box/box-image-duotone/box-image-duotone';
import '../03-organisms/pageheaders/pageheader-slider/pageheader-slider';
import '../03-organisms/pageheaders/pageheader-dots/pageheader-dots';
import '../03-organisms/topbar/topbar-related/topbar-related';
import '../03-organisms/pageheaders/pageheader-video/pageheader-video--youtube';

// Note - the following is uncommented as it cause build issues with Netlify (Reason unknown)
// import NovicellLazyLoad from 'novicell-lazyload'; Look at npm docs for adding listeners without
// import debounce from 'lodash/debounce';

// document.addEventListener('lazybeforeunveil', NovicellLazyLoad.lazyLoad, true);
// window.addEventListener('resize', debounce(NovicellLazyLoad.checkImages), 100, false);
