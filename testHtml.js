const { tokenizer, parser, toText } = require("./src")
const util = require('util')
let lispStr = `<html lang="en" class="octotree"><head>
<meta charset="utf-8">
<link rel="dns-prefetch" href="https://github.githubassets.com">
<link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
<link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
<link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
<link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
<link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
<link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



<link crossorigin="anonymous" media="all" integrity="sha512-TD/1gdStKo77Iu1A+WNb+2YoRJv7l1hZVO0/0h+eJ5wyGxiTvIbLRko1dQ1jEa9w5BK3poi18st9OPel71zK8A==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-94d2de65a56b07e193e50e91873678b6.css">

<link crossorigin="anonymous" media="all" integrity="sha512-eqU1NT5qhoZheRt6/GHsj8HMrNov9OI9sca28p0UDl1Zpm4amrLbq0o+7nZD3wkgM4h6huySMJFgj1eWIIvobw==" rel="stylesheet" href="https://github.githubassets.com/assets/github-d8b247d5c67a70b1cd47491640d354aa.css">





<meta name="viewport" content="width=device-width">

<title>bupt1987/html-parser: php html parser，类似与PHP Simple HTML DOM Parser，但是比它快好几倍</title>
<meta name="description" content="php html parser，类似与PHP Simple HTML DOM Parser，但是比它快好几倍 - bupt1987/html-parser">
<link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
<link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
<meta property="fb:app_id" content="1401488693436528">

<meta name="twitter:image:src" content="https://avatars0.githubusercontent.com/u/1306979?s=400&amp;v=4"><meta name="twitter:site" content="@github"><meta name="twitter:card" content="summary"><meta name="twitter:title" content="bupt1987/html-parser"><meta name="twitter:description" content="php html parser，类似与PHP Simple HTML DOM Parser，但是比它快好几倍 - bupt1987/html-parser">
<meta property="og:image" content="https://avatars0.githubusercontent.com/u/1306979?s=400&amp;v=4"><meta property="og:site_name" content="GitHub"><meta property="og:type" content="object"><meta property="og:title" content="bupt1987/html-parser"><meta property="og:url" content="https://github.com/bupt1987/html-parser"><meta property="og:description" content="php html parser，类似与PHP Simple HTML DOM Parser，但是比它快好几倍 - bupt1987/html-parser">

<link rel="assets" href="https://github.githubassets.com/">
<link rel="web-socket" href="wss://live.github.com/_sockets/VjI6NDI3ODM5MjE3OjY4YjI0N2M2Nzk3ZjBkMzhlMjg2MGEwNzg1ZGFlYTc0Yzg3NTlhMThkYzJkYmFmNTU0MDMxYjYyMDRiOWUxMzc=--fc0c735bebc2acee7a21fb74fe4475d47c0adb98">
<link rel="sudo-modal" href="/sessions/sudo_modal">
<meta name="request-id" content="FA5A:8364:23868A:33F7D4:5DB29430" data-pjax-transient="">




<meta name="selected-link" value="repo_source" data-pjax-transient="">

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
<meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

<meta name="octolytics-host" content="collector.githubapp.com"><meta name="octolytics-app-id" content="github"><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event"><meta name="octolytics-dimension-request_id" content="FA5A:8364:23868A:33F7D4:5DB29430"><meta name="octolytics-dimension-region_edge" content="sea"><meta name="octolytics-dimension-region_render" content="iad"><meta name="octolytics-dimension-ga_id" content="400365380.1563862363" class="js-octo-ga-id"><meta name="octolytics-dimension-visitor_id" content="1494200818691646801"><meta name="octolytics-actor-id" content="16101602"><meta name="octolytics-actor-login" content="Mike-Zhu"><meta name="octolytics-actor-hash" content="d88596f007bc8f86c3ea3e3f9aa857a24158c81c3df98e14f9c95631a057b6b8">
<meta name="analytics-location" content="/<user-name/>/<repo-name/>" data-pjax-transient="true">



<meta name="google-analytics" content="UA-3769691-2">

<meta class="js-ga-set" name="userId" content="242e6338b26019487fa41a2aa8c08bff">

<meta class="js-ga-set" name="dimension1" content="Logged In">





  <meta name="hostname" content="github.com">
<meta name="user-login" content="Mike-Zhu">

  <meta name="expected-hostname" content="github.com">
<meta name="js-proxy-site-detection-payload" content="NTBhMDZkZGIyNTg0ZTU0MWMyMzBjODAzZjkyZjg4OGU4ZjViMmNlNWJlMTlmNWZhNDg1Y2VlNThmYjFiZWJiMnx7InJlbW90ZV9hZGRyZXNzIjoiNjEuMTUyLjE1MC4xMzciLCJyZXF1ZXN0X2lkIjoiRkE1QTo4MzY0OjIzODY4QTozM0Y3RDQ6NURCMjk0MzAiLCJ0aW1lc3RhbXAiOjE1NzE5ODQ0MzYsImhvc3QiOiJnaXRodWIuY29tIn0=">

<meta name="enabled-features" content="ACTIONS_V2_ON_MARKETPLACE,MARKETPLACE_FEATURED_BLOG_POSTS,MARKETPLACE_INVOICED_BILLING,MARKETPLACE_SOCIAL_PROOF_CUSTOMERS,MARKETPLACE_TRENDING_SOCIAL_PROOF,MARKETPLACE_RECOMMENDATIONS,MARKETPLACE_PENDING_INSTALLATIONS,NOTIFY_ON_BLOCK,RELATED_ISSUES,GHE_CLOUD_TRIAL">

<meta name="html-safe-nonce" content="c278891513ffee87ae6d2a30c2cae9a3ace9c2c4">

<meta http-equiv="x-pjax-version" content="e6b1e455ee6c25be2a8c961e49b31bd2">


  <link href="https://github.com/bupt1987/html-parser/commits/master.atom" rel="alternate" title="Recent Commits to html-parser:master" type="application/atom+xml">

<meta name="go-import" content="github.com/bupt1987/html-parser git https://github.com/bupt1987/html-parser.git">

<meta name="octolytics-dimension-user_id" content="1306979"><meta name="octolytics-dimension-user_login" content="bupt1987"><meta name="octolytics-dimension-repository_id" content="10686133"><meta name="octolytics-dimension-repository_nwo" content="bupt1987/html-parser"><meta name="octolytics-dimension-repository_public" content="true"><meta name="octolytics-dimension-repository_is_fork" content="false"><meta name="octolytics-dimension-repository_network_root_id" content="10686133"><meta name="octolytics-dimension-repository_network_root_nwo" content="bupt1987/html-parser"><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false">


<link rel="canonical" href="https://github.com/bupt1987/html-parser" data-pjax-transient="">


<meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

<meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

<link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
<link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



<meta name="webauthn-auth-enabled" content="true">

<meta name="webauthn-registration-enabled" content="true">

<link rel="manifest" href="/manifest.json" crossorigin="use-credentials">

</head>

<body class="logged-in env-production min-width-lg">


<div class="position-relative js-header-wrapper ">
<a href="#start-of-content" tabindex="1" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
<span class="Progress progress-pjax-loader position-fixed width-full js-pjax-loader-bar">
  <span class="progress-pjax-loader-bar top-0 left-0" style="width: 0%;"></span>
</span>






      <header class="Header" role="banner">

<div class="Header-item">
  <a class="Header-link" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
<svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>

</div>


<div class="Header-item Header-item--full">
    <div class="header-search mr-3 scoped-search site-scoped-search js-site-search position-relative js-jump-to" role="combobox" aria-owns="jump-to-results" aria-label="Search or jump to" aria-haspopup="listbox" aria-expanded="false">
<div class="position-relative">
<form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="10686133" data-scoped-search-url="/bupt1987/html-parser/search" data-unscoped-search-url="/search" action="/bupt1987/html-parser/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="✓">
  <label class="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
    <input type="text" class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable" data-hotkey="s,/" name="q" value="" placeholder="Search or jump to…" data-unscoped-placeholder="Search or jump to…" data-scoped-placeholder="Search or jump to…" autocapitalize="off" aria-autocomplete="list" aria-controls="jump-to-results" aria-label="Search or jump to…" data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=NMOk6x9LPCuowYSxeL7aH25FTCcGobM0I/cHCxNwWrHwn5vNHCBxkv6jZrth/Ay0XxuryGwfUMzvwuTTLuAzlA==" spellcheck="false" autocomplete="off">
      <input type="hidden" class="js-site-search-type-field" name="type">
        <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

        <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
          
<ul class="d-none js-jump-to-suggestions-template-container">


<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
<a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
<div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
  <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
  <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"></path></svg>
  <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"></path></svg>
</div>

<img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

<div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
</div>

<div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
  <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
    In this repository
  </span>
  <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
    All GitHub
  </span>
  <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
</div>

<div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
  Jump to
  <span class="d-inline-block ml-1 v-align-middle">↵</span>
</div>
</a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
<li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
<span class="text-gray">No suggested jump to results</span>
</li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">


<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
<a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
<div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
  <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
  <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"></path></svg>
  <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"></path></svg>
</div>

<img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

<div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
</div>

<div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
  <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
    In this repository
  </span>
  <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
    All GitHub
  </span>
  <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
</div>

<div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
  Jump to
  <span class="d-inline-block ml-1 v-align-middle">↵</span>
</div>
</a>
</li>



<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
<a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
<div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
  <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
  <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"></path></svg>
  <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"></path></svg>
</div>

<img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

<div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
</div>

<div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
  <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
    In this repository
  </span>
  <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
    All GitHub
  </span>
  <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
</div>

<div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
  Jump to
  <span class="d-inline-block ml-1 v-align-middle">↵</span>
</div>
</a>
</li>


<li class="d-flex flex-justify-center flex-items-center p-0 f5 js-jump-to-suggestion">
  <img src="https://github.githubassets.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
</li>
</ul>

        </div>
  </label>
</form>  </div>
</div>


  <nav class="d-flex" aria-label="Global">

<a class="js-selected-navigation-item Header-link  mr-3" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
Pull requests
</a>
<a class="js-selected-navigation-item Header-link  mr-3" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
Issues
</a>
<div class="mr-3">
  <a class="js-selected-navigation-item Header-link" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
    Marketplace
</a>      

</div>

<a class="js-selected-navigation-item Header-link  mr-3" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
Explore
</a>

</nav>

</div>



<div class="Header-item">
  

<a aria-label="You have unread notifications" class="Header-link notification-indicator position-relative tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:unread" data-channel="notification-changed:16101602" href="/notifications">
    <span class="mail-status unread"></span>
    <svg class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path></svg>
</a>
</div>


<div class="Header-item position-relative">
  <details class="details-overlay details-reset">
<summary class="Header-link" aria-label="Create new…" data-ga-click="Header, create new, icon:add" aria-haspopup="menu" role="button">
<svg class="octicon octicon-plus" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path></svg> <span class="dropdown-caret"></span>
</summary>
<details-menu class="dropdown-menu dropdown-menu-sw" role="menu">

<a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
New repository
</a>

<a role="menuitem" class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
Import repository
</a>

<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
New gist
</a>

<a role="menuitem" class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
New organization
</a>


<div role="none" class="dropdown-divider"></div>
<div class="dropdown-header">
<span title="bupt1987/html-parser">This repository</span>
</div>
<a role="menuitem" class="dropdown-item" href="/bupt1987/html-parser/issues/new" data-ga-click="Header, create new issue" data-skip-pjax="">
  New issue
</a>


</details-menu>
</details>

</div>

<div class="Header-item position-relative mr-0">
  
<details class="details-overlay details-reset">
<summary class="Header-link" aria-label="View profile and more" data-ga-click="Header, show menu, icon:avatar" aria-haspopup="menu" role="button">
<img alt="@Mike-Zhu" class="avatar" src="https://avatars2.githubusercontent.com/u/16101602?s=40&amp;v=4" height="20" width="20">
  <span class="feature-preview-indicator"></span>

<span class="dropdown-caret"></span>
</summary>
<details-menu class="dropdown-menu dropdown-menu-sw mt-2" style="width: 180px" role="menu">
<div class="header-nav-current-user css-truncate"><a role="menuitem" class="no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block" href="/Mike-Zhu" data-ga-click="Header, go to profile, text:Signed in as">Signed in as <strong class="css-truncate-target">Mike-Zhu</strong></a></div>
<div role="none" class="dropdown-divider"></div>

  <div class="pl-3 pr-3 f6 user-status-container js-user-status-context pb-1" data-url="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1">
    
<div class="js-user-status-container
user-status-compact rounded-1 px-2 py-1 mt-2
border
" data-team-hovercards-enabled="">
<details class="js-user-status-details details-reset details-overlay details-overlay-dark">
<summary class="btn-link btn-block link-gray no-underline js-toggle-user-status-edit toggle-user-status-edit " role="menuitem" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:1306979,&quot;target&quot;:&quot;EDIT_USER_STATUS&quot;,&quot;user_id&quot;:16101602,&quot;client_id&quot;:&quot;347895738.1563862353&quot;,&quot;originating_request_id&quot;:&quot;FA5A:8364:23868A:33F7D4:5DB29430&quot;,&quot;originating_url&quot;:&quot;https://github.com/bupt1987/html-parser&quot;,&quot;referrer&quot;:&quot;https://github.com/search?q=html-parser&quot;}}" data-hydro-click-hmac="4dbe11855a8157fb3300a4817c9f15320325e7a85cfaf424fdee36fb4dd96e8b">
  <div class="d-flex">
    <div class="f6 lh-condensed user-status-header
      d-inline-block v-align-middle
        user-status-emoji-only-header circle
        pr-2
" style="max-width: 29px">
      <div class="user-status-emoji-container flex-shrink-0 mr-1 mt-1 lh-condensed-ultra v-align-bottom" style="">
        <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 01-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 01-1.45-2.17A6.59 6.59 0 011.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 018 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"></path></svg>
      </div>
    </div>
    <div class="
      d-inline-block v-align-middle
      
      
       css-truncate css-truncate-target 
       user-status-message-wrapper f6" style="line-height: 20px;">
      <div class="d-inline-block text-gray-dark v-align-text-top text-left">
          <span class="text-gray ml-2">Set status</span>
      </div>
    </div>
  </div>
</summary>
<details-dialog class="details-dialog rounded-1 anim-fade-in fast Box Box--overlay" role="dialog" tabindex="-1" aria-modal="true">
  <form class="position-relative flex-auto js-user-status-form" action="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="_method" value="put"><input type="hidden" name="authenticity_token" value="8rVjzR1EMyrGoLL8KVV6NWb56XQVO0qX6dH5DFGyYQoGxrul4ttw4BJ/F+I0u++oOyFPuayVHyQx+nIk4a+Y4A==">
    <div class="Box-header bg-gray border-bottom p-3">
      <button class="Box-btn-octicon js-toggle-user-status-edit btn-octicon float-right" type="reset" aria-label="Close dialog" data-close-dialog="">
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
      </button>
      <h3 class="Box-title f5 text-bold text-gray-dark">Edit status</h3>
    </div>
    <input type="hidden" name="emoji" class="js-user-status-emoji-field" value="">
    <input type="hidden" name="organization_id" class="js-user-status-org-id-field" value="">
    <div class="px-3 py-2 text-gray-dark">
      <div class="js-characters-remaining-container position-relative mt-2">
        <div class="input-group d-table form-group my-0 js-user-status-form-group">
          <span class="input-group-button d-table-cell v-align-middle" style="width: 1%">
            <button type="button" aria-label="Choose an emoji" class="btn-outline btn js-toggle-user-status-emoji-picker btn-open-emoji-picker p-0">
              <span class="js-user-status-original-emoji" hidden=""></span>
              <span class="js-user-status-custom-emoji"></span>
              <span class="js-user-status-no-emoji-icon">
                <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 01-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 01-1.45-2.17A6.59 6.59 0 011.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 018 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"></path></svg>
              </span>
            </button>
          </span>
          <text-expander keys=": @" data-mention-url="/autocomplete/user-suggestions" data-emoji-url="/autocomplete/emoji">
            <input type="text" autocomplete="off" data-no-org-url="/autocomplete/user-suggestions" data-org-url="/suggestions?mention_suggester=1" data-maxlength="80" class="d-table-cell width-full form-control js-user-status-message-field js-characters-remaining-field" placeholder="What's happening?" name="message" value="" aria-label="What is your current status?">
          </text-expander>
          <div class="error">Could not update your status, please try again.</div>
        </div>
        <div style="margin-left: 53px" class="my-1 text-small label-characters-remaining js-characters-remaining" data-suffix="remaining" hidden="">
          80 remaining
        </div>
      </div>
      <include-fragment class="js-user-status-emoji-picker" data-url="/users/status/emoji"></include-fragment>
      <div class="overflow-auto ml-n3 mr-n3 px-3 border-bottom" style="max-height: 33vh">
        <div class="user-status-suggestions js-user-status-suggestions collapsed overflow-hidden">
          <h4 class="f6 text-normal my-3">Suggestions:</h4>
          <div class="mx-3 mt-2 clearfix">
              <div class="float-left col-6">
                  <button type="button" value=":palm_tree:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                    <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                      <g-emoji alias="palm_tree" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f334.png"><img class="emoji" alt="palm_tree" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/1f334.png"></g-emoji>
                    </div>
                    <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                      On vacation
                    </div>
                  </button>
                  <button type="button" value=":face_with_thermometer:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                    <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                      <g-emoji alias="face_with_thermometer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f912.png"><img class="emoji" alt="face_with_thermometer" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/1f912.png"></g-emoji>
                    </div>
                    <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                      Out sick
                    </div>
                  </button>
              </div>
              <div class="float-left col-6">
                  <button type="button" value=":house:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                    <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                      <g-emoji alias="house" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png"><img class="emoji" alt="house" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png"></g-emoji>
                    </div>
                    <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                      Working from home
                    </div>
                  </button>
                  <button type="button" value=":dart:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                    <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                      <g-emoji alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png"><img class="emoji" alt="dart" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png"></g-emoji>
                    </div>
                    <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                      Focusing
                    </div>
                  </button>
              </div>
          </div>
        </div>
        <div class="user-status-limited-availability-container">
          <div class="form-checkbox my-0">
            <input type="checkbox" name="limited_availability" value="1" class="js-user-status-limited-availability-checkbox" data-default-message="I may be slow to respond." aria-describedby="limited-availability-help-text-truncate-true-compact-true" id="limited-availability-truncate-true-compact-true">
            <label class="d-block f5 text-gray-dark mb-1" for="limited-availability-truncate-true-compact-true">
              Busy
            </label>
            <p class="note" id="limited-availability-help-text-truncate-true-compact-true">
              When others mention you, assign you, or request your review,
              GitHub will let them know that you have limited availability.
            </p>
          </div>
        </div>
      </div>
        

<div class="d-inline-block f5 mr-2 pt-3 pb-2">
<div class="d-inline-block mr-1">
Clear status
</div>

<details class="js-user-status-expire-drop-down f6 dropdown details-reset details-overlay d-inline-block mr-2">
<summary class="f5 btn-link link-gray-dark border px-2 py-1 rounded-1" aria-haspopup="true">
  <div class="js-user-status-expiration-interval-selected d-inline-block v-align-baseline">
    Never
  </div>
  <div class="dropdown-caret"></div>
</summary>

<ul class="dropdown-menu dropdown-menu-se pl-0 overflow-auto" style="width: 220px; max-height: 15.5em">
  <li>
    <button type="button" class="btn-link dropdown-item js-user-status-expire-button ws-normal" title="Never">
      <span class="d-inline-block text-bold mb-1">Never</span>
      <div class="f6 lh-condensed">Keep this status until you clear your status or edit your status.</div>
    </button>
  </li>
  <li class="dropdown-divider" role="none"></li>
    <li>
      <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 30 minutes" value="2019-10-25T14:50:37+08:00">
        in 30 minutes
      </button>
    </li>
    <li>
      <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 1 hour" value="2019-10-25T15:20:37+08:00">
        in 1 hour
      </button>
    </li>
    <li>
      <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 4 hours" value="2019-10-25T18:20:37+08:00">
        in 4 hours
      </button>
    </li>
    <li>
      <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="today" value="2019-10-25T23:59:59+08:00">
        today
      </button>
    </li>
    <li>
      <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="this week" value="2019-10-27T23:59:59+08:00">
        this week
      </button>
    </li>
</ul>
</details>
<input class="js-user-status-expiration-date-input" type="hidden" name="expires_at" value="">
</div>

      <include-fragment class="js-user-status-org-picker" data-url="/users/status/organizations"></include-fragment>
    </div>
    <div class="d-flex flex-items-center flex-justify-between p-3 border-top">
      <button type="submit" disabled="" class="width-full btn btn-primary mr-2 js-user-status-submit">
        Set status
      </button>
      <button type="button" disabled="" class="width-full js-clear-user-status-button btn ml-2 ">
        Clear status
      </button>
    </div>
</form>    </details-dialog>
</details>
</div>

  </div>
  <div role="none" class="dropdown-divider"></div>


<a role="menuitem" class="dropdown-item" href="/Mike-Zhu" data-ga-click="Header, go to profile, text:your profile">Your profile</a>


<a role="menuitem" class="dropdown-item" href="/Mike-Zhu?tab=repositories" data-ga-click="Header, go to repositories, text:your repositories">Your repositories</a>

<a role="menuitem" class="dropdown-item" href="/Mike-Zhu?tab=projects" data-ga-click="Header, go to projects, text:your projects">Your projects</a>

<a role="menuitem" class="dropdown-item" href="/Mike-Zhu?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">Your stars</a>
  <a role="menuitem" class="dropdown-item" href="https://gist.github.com/mine" data-ga-click="Header, your gists, text:your gists">Your gists</a>



<div role="none" class="dropdown-divider"></div>
  
<div id="feature-enrollment-toggle" class="hide-sm hide-md feature-preview-details position-relative">
<button type="button" class="dropdown-item btn-link" role="menuitem" data-feature-preview-trigger-url="/users/Mike-Zhu/feature_previews" data-feature-preview-close-details="{&quot;event_type&quot;:&quot;feature_preview.clicks.close_modal&quot;,&quot;payload&quot;:{&quot;client_id&quot;:&quot;347895738.1563862353&quot;,&quot;originating_request_id&quot;:&quot;FA5A:8364:23868A:33F7D4:5DB29430&quot;,&quot;originating_url&quot;:&quot;https://github.com/bupt1987/html-parser&quot;,&quot;referrer&quot;:&quot;https://github.com/search?q=html-parser&quot;,&quot;user_id&quot;:16101602}}" data-feature-preview-close-hmac="0d00aa75a316b537c72aa65c62b62ec84b7c62416e4c7d35cfe24173645fcd2d" data-hydro-click="{&quot;event_type&quot;:&quot;feature_preview.clicks.open_modal&quot;,&quot;payload&quot;:{&quot;link_location&quot;:&quot;user_dropdown&quot;,&quot;client_id&quot;:&quot;347895738.1563862353&quot;,&quot;originating_request_id&quot;:&quot;FA5A:8364:23868A:33F7D4:5DB29430&quot;,&quot;originating_url&quot;:&quot;https://github.com/bupt1987/html-parser&quot;,&quot;referrer&quot;:&quot;https://github.com/search?q=html-parser&quot;,&quot;user_id&quot;:16101602}}" data-hydro-click-hmac="578bfafe8e5871dc7fa85801091c13c82a2a2f3c544acb45b6496480f4936427">
Feature preview
</button>
<span class="feature-preview-indicator"></span>

</div>

<a role="menuitem" class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
<a role="menuitem" class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">Settings</a>
<form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="W7OkswcSul/yaEEGkUal8WMB/Xr6COwqz3LcsCCdWVJUa0gS/tQDVrDcsc4fpbpuM7TdErw/IVuZjt6jMsRuTQ==">
  
  <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" role="menuitem">
    Sign out
  </button>
</form>  </details-menu>
</details>

</div>

</header>

  

</div>

<div id="start-of-content" class="show-on-focus"></div>


<div id="js-flash-container">

</div>



<div class="application-main " data-commit-hovercards-enabled="">
    <div itemscope="" itemtype="http://schema.org/SoftwareSourceCode" class="">
<main id="js-repo-pjax-container" data-pjax-container="">
  












<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
<div class="repohead-details-container clearfix container">

  <ul class="pagehead-actions">



<li hidden="">
  <include-fragment src="/bupt1987/html-parser/used_by_count" class="is-error">
</include-fragment>
</li>

<li>
<form data-remote="true" class="clearfix js-social-form js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="MyNavRNqsAd2YKsmqqa2o2MFgtLQkmiLQ3EGsIq7ynmT7rLxbM8ce/Pv+t4mAROs5kf6c8oZlkP27E0fqPhVBw==">      <input type="hidden" name="repository_id" value="10686133">

  <details class="details-reset details-overlay select-menu float-left">
    <summary class="select-menu-button float-left btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;WATCH_BUTTON&quot;,&quot;repository_id&quot;:10686133,&quot;client_id&quot;:&quot;347895738.1563862353&quot;,&quot;originating_request_id&quot;:&quot;FA5A:8364:23868A:33F7D4:5DB29430&quot;,&quot;originating_url&quot;:&quot;https://github.com/bupt1987/html-parser&quot;,&quot;referrer&quot;:&quot;https://github.com/search?q=html-parser&quot;,&quot;user_id&quot;:16101602}}" data-hydro-click-hmac="3bbbe93c1355869d698ddcd3f549f26cc5e6d51fcd7e6fdd8c9bc5cfd084b1d4" data-ga-click="Repository, click Watch settings, action:files#disambiguate" aria-haspopup="menu" role="button">          <span data-menu-button="">
          <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
          Watch
      </span>
</summary>        <details-menu class="select-menu-modal position-absolute mt-5" style="z-index: 99;" role="menu">
      <div class="select-menu-header">
        <span class="select-menu-title">Notifications</span>
      </div>
      <div class="select-menu-list">
        <button type="submit" name="do" value="included" class="select-menu-item width-full" aria-checked="true" role="menuitemradio">
          <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
          <div class="select-menu-item-text">
            <span class="select-menu-item-heading">Not watching</span>
            <span class="description">Be notified only when participating or @mentioned.</span>
            <span class="hidden-select-button-text" data-menu-button-contents="">
              <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
              Watch
            </span>
          </div>
        </button>

        <button type="submit" name="do" value="release_only" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
          <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
          <div class="select-menu-item-text">
            <span class="select-menu-item-heading">Releases only</span>
            <span class="description">Be notified of new releases, and when participating or @mentioned.</span>
            <span class="hidden-select-button-text" data-menu-button-contents="">
              <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
              Unwatch releases
            </span>
          </div>
        </button>

        <button type="submit" name="do" value="subscribed" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
          <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
          <div class="select-menu-item-text">
            <span class="select-menu-item-heading">Watching</span>
            <span class="description">Be notified of all conversations.</span>
            <span class="hidden-select-button-text" data-menu-button-contents="">
              <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
              Unwatch
            </span>
          </div>
        </button>

        <button type="submit" name="do" value="ignore" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
          <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
          <div class="select-menu-item-text">
            <span class="select-menu-item-heading">Ignoring</span>
            <span class="description">Never be notified.</span>
            <span class="hidden-select-button-text" data-menu-button-contents="">
              <svg class="octicon octicon-mute v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"></path></svg>
              Stop ignoring
            </span>
          </div>
        </button>
      </div>
    </details-menu>
  </details>
    <a class="social-count js-social-count" href="/bupt1987/html-parser/watchers" aria-label="33 users are watching this repository">
      33
    </a>
</form>
</li>

<li>
  <div class="js-toggler-container js-social-container starring-container ">
<form class="starred js-social-form" action="/bupt1987/html-parser/unstar" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="P2Rjxe1M9OH6Jge+EXze+Gq604pn92nHY8MVoP36rb7PNVSCa7AnRj6Lg5YJmrHsTA71RXql1hYQDpwBv0F2dw==">
  <input type="hidden" name="context" value="repository">
  <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Unstar bupt1987/html-parser" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;UNSTAR_BUTTON&quot;,&quot;repository_id&quot;:10686133,&quot;client_id&quot;:&quot;347895738.1563862353&quot;,&quot;originating_request_id&quot;:&quot;FA5A:8364:23868A:33F7D4:5DB29430&quot;,&quot;originating_url&quot;:&quot;https://github.com/bupt1987/html-parser&quot;,&quot;referrer&quot;:&quot;https://github.com/search?q=html-parser&quot;,&quot;user_id&quot;:16101602}}" data-hydro-click-hmac="e7ffb22298d2060bc2431225c015c7c5e83edc4dc130a28c45b53e8d6cdb4ef8" data-ga-click="Repository, click unstar button, action:files#disambiguate; text:Unstar">        <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
    Unstar
</button>        <a class="social-count js-social-count" href="/bupt1987/html-parser/stargazers" aria-label="484 users starred this repository">
       484
    </a>
</form>
<form class="unstarred js-social-form" action="/bupt1987/html-parser/star" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="Klxpdc9c4+0+cJokYYBZLqXJHfA6+K9M/i8Cp10Jq5p463AHsN4NWc7FpGbAGiclYgjHpfO5Uyn+4D6r/L/2kQ==">
  <input type="hidden" name="context" value="repository">
  <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Star bupt1987/html-parser" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;STAR_BUTTON&quot;,&quot;repository_id&quot;:10686133,&quot;client_id&quot;:&quot;347895738.1563862353&quot;,&quot;originating_request_id&quot;:&quot;FA5A:8364:23868A:33F7D4:5DB29430&quot;,&quot;originating_url&quot;:&quot;https://github.com/bupt1987/html-parser&quot;,&quot;referrer&quot;:&quot;https://github.com/search?q=html-parser&quot;,&quot;user_id&quot;:16101602}}" data-hydro-click-hmac="08af70074abf86f6f4f4cf9a65e9f00699080c54bde6bc3992872c5ad335c323" data-ga-click="Repository, click star button, action:files#disambiguate; text:Star">        <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
    Star
</button>        <a class="social-count js-social-count" href="/bupt1987/html-parser/stargazers" aria-label="484 users starred this repository">
      484
    </a>
</form>  </div>

</li>

<li>
      <details class="details-reset details-overlay details-overlay-dark d-inline-block float-left">
        <summary class="btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FORK_BUTTON&quot;,&quot;repository_id&quot;:10686133,&quot;client_id&quot;:&quot;347895738.1563862353&quot;,&quot;originating_request_id&quot;:&quot;FA5A:8364:23868A:33F7D4:5DB29430&quot;,&quot;originating_url&quot;:&quot;https://github.com/bupt1987/html-parser&quot;,&quot;referrer&quot;:&quot;https://github.com/search?q=html-parser&quot;,&quot;user_id&quot;:16101602}}" data-hydro-click-hmac="595531e487a77d84f03def28cf0ee1382178697601f8a371fe60a243a5a50f1b" data-ga-click="Repository, show fork modal, action:files#disambiguate; text:Fork" title="Fork your own copy of bupt1987/html-parser to your account" role="button">              <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
          Fork
</summary>            <details-dialog class="anim-fade-in fast Box Box--overlay d-flex flex-column" src="/bupt1987/html-parser/fork?fragment=1" preload="" role="dialog" aria-modal="true">
          <div class="Box-header">
            <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog="">
              <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
            </button>
            <h3 class="Box-title">Fork html-parser</h3>
          </div>
          <div class="overflow-auto text-center">
            <include-fragment>
              <div class="octocat-spinner my-3" aria-label="Loading..."></div>
              <p class="f5 text-gray">If this dialog fails to load, you can visit <a href="/bupt1987/html-parser/fork">the fork page</a> directly.</p>
            </include-fragment>
          </div>
        </details-dialog>
      </details>

<a href="/bupt1987/html-parser/network/members" class="social-count" aria-label="150 users forked this repository">
  150
</a>
</li>
</ul>

  <h1 class="public ">
<svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
<span class="author" itemprop="author"><a class="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=1306979" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/bupt1987">bupt1987</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/bupt1987/html-parser">html-parser</a></strong>


</h1>

</div>

<nav class="hx_reponav reponav js-repo-nav js-sidenav-container-pjax container" itemscope="" itemtype="http://schema.org/BreadcrumbList" aria-label="Repository" data-pjax="#js-repo-pjax-container">

<span itemscope="" itemtype="http://schema.org/ListItem" itemprop="itemListElement">
<a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /bupt1987/html-parser" href="/bupt1987/html-parser">
  <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
  <span itemprop="name">Code</span>
  <meta itemprop="position" content="1">
</a>  </span>

<span itemscope="" itemtype="http://schema.org/ListItem" itemprop="itemListElement">
  <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /bupt1987/html-parser/issues" href="/bupt1987/html-parser/issues">
    <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
    <span itemprop="name">Issues</span>
    <span class="Counter">3</span>
    <meta itemprop="position" content="2">
</a>    </span>

<span itemscope="" itemtype="http://schema.org/ListItem" itemprop="itemListElement">
<a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /bupt1987/html-parser/pulls" href="/bupt1987/html-parser/pulls">
  <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0010 15a1.993 1.993 0 001-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v6.56A1.993 1.993 0 002 15a1.993 1.993 0 001-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
  <span itemprop="name">Pull requests</span>
  <span class="Counter">0</span>
  <meta itemprop="position" content="3">
</a>  </span>


<a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /bupt1987/html-parser/projects" href="/bupt1987/html-parser/projects">
  <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"></path></svg>
  Projects
  <span class="Counter">0</span>
</a>


<a data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy code_scanning /bupt1987/html-parser/security/advisories" href="/bupt1987/html-parser/security/advisories">
  <svg class="octicon octicon-shield" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 2l7-2 7 2v6.02C14 12.69 8.69 16 7 16c-1.69 0-7-3.31-7-7.98V2zm1 .75L7 1l6 1.75v5.268C13 12.104 8.449 15 7 15c-1.449 0-6-2.896-6-6.982V2.75zm1 .75L7 2v12c-1.207 0-5-2.482-5-5.985V3.5z"></path></svg>
  Security
</a>
<a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse people /bupt1987/html-parser/pulse" href="/bupt1987/html-parser/pulse">
  <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path></svg>
  Insights
</a>

</nav>


</div>
<div class="container-lg clearfix new-discussion-timeline experiment-repo-nav  px-3">
<div class="repository-content ">





  <div class="">  <div class="f4">
    <span class="text-gray-dark mr-2" itemprop="about">
      php html parser，类似与PHP Simple HTML DOM Parser，但是比它快好几倍
    </span>
</div>
</div>

<div class="repository-topics-container mt-2 mb-3 js-topics-list-container">  <div class="list-topics-container f6">
  <a class="topic-tag topic-tag-link " href="/topics/html" title="Topic: html" data-ga-click="Topic, repository page" data-octo-click="topic_click" data-octo-dimensions="topic:html">
html
</a>

  <a class="topic-tag topic-tag-link " href="/topics/parser" title="Topic: parser" data-ga-click="Topic, repository page" data-octo-click="topic_click" data-octo-dimensions="topic:parser">
parser
</a>

  <a class="topic-tag topic-tag-link " href="/topics/html-parser" title="Topic: html-parser" data-ga-click="Topic, repository page" data-octo-click="topic_click" data-octo-dimensions="topic:html-parser">
html-parser
</a>

</div>
</div>



<div class="overall-summary overall-summary-bottomless">
<ul class="numbers-summary">
  <li class="commits">
    <a data-pjax="" href="/bupt1987/html-parser/commits/master">
        <svg class="octicon octicon-history" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 13H6V6h5v2H8v5zM7 1C4.81 1 2.87 2.02 1.59 3.59L0 2v4h4L2.5 4.5C3.55 3.17 5.17 2.3 7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-.34.03-.67.09-1H.08C.03 7.33 0 7.66 0 8c0 3.86 3.14 7 7 7s7-3.14 7-7-3.14-7-7-7z"></path></svg>
        <span class="num text-emphasized">
          101
        </span>
        commits
    </a>
  </li>
  <li>
    <a data-pjax="" href="/bupt1987/html-parser/branches">
      <svg class="octicon octicon-git-branch" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 00-1-3.72C.88 1 0 1.89 0 3a2 2 0 001 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
      <span class="num text-emphasized">
        1
      </span>
      branch
    </a>
  </li>


  <li>
    <a href="/bupt1987/html-parser/releases">
      <svg class="octicon octicon-tag" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.73 1.73C7.26 1.26 6.62 1 5.96 1H3.5C2.13 1 1 2.13 1 3.5v2.47c0 .66.27 1.3.73 1.77l6.06 6.06c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 000-1.41L7.73 1.73zM2.38 7.09c-.31-.3-.47-.7-.47-1.13V3.5c0-.88.72-1.59 1.59-1.59h2.47c.42 0 .83.16 1.13.47l6.14 6.13-4.73 4.73-6.13-6.15zM3.01 3h2v2H3V3h.01z"></path></svg>
      <span class="num text-emphasized">
        5
      </span>
      releases
    </a>
  </li>


    <li data-contributors-hovercards-enabled="">
        <a href="/bupt1987/html-parser/graphs/contributors" data-hovercard-type="contributors" data-hovercard-url="/bupt1987/html-parser/community_contributors/hovercard">
<svg class="octicon octicon-organization" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4z"></path></svg>
<span class="num text-emphasized">
  4
</span>
contributors
</a>        </li>

    <li>
      <a href="/bupt1987/html-parser/blob/master/LICENSE">
        <svg class="octicon octicon-law" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 4c-.83 0-1.5-.67-1.5-1.5S6.17 1 7 1s1.5.67 1.5 1.5S7.83 4 7 4zm7 6c0 1.11-.89 2-2 2h-1c-1.11 0-2-.89-2-2l2-4h-1c-.55 0-1-.45-1-1H8v8c.42 0 1 .45 1 1h1c.42 0 1 .45 1 1H3c0-.55.58-1 1-1h1c0-.55.58-1 1-1h.03L6 5H5c0 .55-.45 1-1 1H3l2 4c0 1.11-.89 2-2 2H2c-1.11 0-2-.89-2-2l2-4H1V5h3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1h3v1h-1l2 4zM2.5 7L1 10h3L2.5 7zM13 10l-1.5-3-1.5 3h3z"></path></svg>
          MIT
      </a>
    </li>
</ul>
</div>

<details class="details-reset">
  <summary title="Click for language details" data-ga-click="Repository, language bar stats toggle, location:repo overview">
    <div class="d-flex repository-lang-stats-graph">
        <span class="language-color" aria-label="PHP 96.0%" style="width:96.0%; background-color:#4F5D95;" itemprop="keywords">PHP</span>
        <span class="language-color" aria-label="HTML 4.0%" style="width:4.0%; background-color:#e34c26;" itemprop="keywords">HTML</span>
    </div>
  </summary>
  <div class="repository-lang-stats">
    <ol class="repository-lang-stats-numbers">
      <li>
          <a href="/bupt1987/html-parser/search?l=php" data-ga-click="Repository, language stats search click, location:repo overview">
            <span class="color-block language-color" style="background-color:#4F5D95;"></span>
            <span class="lang">PHP</span>
            <span class="percent">96.0%</span>
          </a>
      </li>
      <li>
          <a href="/bupt1987/html-parser/search?l=html" data-ga-click="Repository, language stats search click, location:repo overview">
            <span class="color-block language-color" style="background-color:#e34c26;"></span>
            <span class="lang">HTML</span>
            <span class="percent">4.0%</span>
          </a>
      </li>
    </ol>
  </div>
</details>





<div class="mt-2">
  
</div>

<div class="file-navigation in-mid-page d-flex flex-items-start">

<details class="details-reset details-overlay select-menu branch-select-menu  hx_rsm" id="branch-select-menu">
<summary class="btn btn-sm select-menu-button css-truncate" data-hotkey="w" title="Switch branches or tags" aria-haspopup="menu" role="button">
<i>Branch:</i>
<span class="css-truncate-target" data-menu-button="">master</span>
</summary>

<details-menu class="select-menu-modal hx_rsm-modal position-absolute" style="z-index: 99;" src="/bupt1987/html-parser/ref-list/master?source_action=disambiguate&amp;source_controller=files" preload="" role="menu">
<include-fragment class="select-menu-loading-overlay anim-pulse">
  <svg height="32" class="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"></path></svg>
</include-fragment>
</details-menu>
</details>


    <a class="btn btn-sm new-pull-request-btn" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;NEW_PULL_REQUEST_BUTTON&quot;,&quot;repository_id&quot;:10686133,&quot;client_id&quot;:&quot;347895738.1563862353&quot;,&quot;originating_request_id&quot;:&quot;FA5A:8364:23868A:33F7D4:5DB29430&quot;,&quot;originating_url&quot;:&quot;https://github.com/bupt1987/html-parser&quot;,&quot;referrer&quot;:&quot;https://github.com/search?q=html-parser&quot;,&quot;user_id&quot;:16101602}}" data-hydro-click-hmac="479ae2411e0ba3d5e9aa90fbbe6f5b80eea66e80c16e5cdcdbad1342dab1c438" data-ga-click="Repository, new pull request, location:repo overview" data-pjax="true" href="/bupt1987/html-parser/pull/new/master">New pull request</a>

<div class="breadcrumb flex-auto">

</div>

<div class="BtnGroup">
  
<form class="BtnGroup-parent" action="/bupt1987/html-parser/new/master" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="8uyhm9somMHIH9TwtkbdAorOU3UXJcdJ5IM1nheFfYLKdr+nb/pLwEN2UcbD17z0yipPD31+O1QW6kEYilq34w==">
<button class="btn btn-sm BtnGroup-item" type="submit" data-disable-with="Creating file…">
  Create new file
</button>
</form>

  
<a href="/bupt1987/html-parser/upload/master" class="btn btn-sm BtnGroup-item">
Upload files
</a>



<a class="btn btn-sm empty-icon float-right BtnGroup-item" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FIND_FILE_BUTTON&quot;,&quot;repository_id&quot;:10686133,&quot;client_id&quot;:&quot;347895738.1563862353&quot;,&quot;originating_request_id&quot;:&quot;FA5A:8364:23868A:33F7D4:5DB29430&quot;,&quot;originating_url&quot;:&quot;https://github.com/bupt1987/html-parser&quot;,&quot;referrer&quot;:&quot;https://github.com/search?q=html-parser&quot;,&quot;user_id&quot;:16101602}}" data-hydro-click-hmac="fbcbaf4f6956acdbe52459c4a4c9858e5c0248f423832a551030b6f31157cedf" data-ga-click="Repository, find file, location:repo overview" data-hotkey="t" data-pjax="true" href="/bupt1987/html-parser/find/master">Find file</a>
</div>




<details class="get-repo-select-menu js-get-repo-select-menu  position-relative details-overlay details-reset">
<summary class="btn btn-sm ml-2 btn-primary" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;repository_id&quot;:10686133,&quot;target&quot;:&quot;CLONE_OR_DOWNLOAD_BUTTON&quot;,&quot;client_id&quot;:&quot;347895738.1563862353&quot;,&quot;originating_request_id&quot;:&quot;FA5A:8364:23868A:33F7D4:5DB29430&quot;,&quot;originating_url&quot;:&quot;https://github.com/bupt1987/html-parser&quot;,&quot;referrer&quot;:&quot;https://github.com/search?q=html-parser&quot;,&quot;user_id&quot;:16101602}}" data-hydro-click-hmac="1b5faf52366ebe9a7783ee16a9b5eb1df4df7e4147ca2715ab45cad5e628f0de">
Clone or download
<span class="dropdown-caret"></span>
</summary>  <div class="position-relative">
<div class="get-repo-modal dropdown-menu dropdown-menu-sw pb-0 js-toggler-container on js-get-repo-modal">

  <div class="get-repo-modal-options">
      <div class="clone-options https-clone-options">
          <form data-remote="true" action="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="+yT+zk4Ep5A9hsOqhEWd/Cx446YzUpORLDvF/0QPFdUZ+dxSgNxkDVuEh4Hp4zQU/W2KCF4GQUa3Eme9VbwqZA=="><button name="button" type="submit" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;USE_SSH&quot;,&quot;git_repository_type&quot;:&quot;REPOSITORY&quot;,&quot;repository_id&quot;:10686133,&quot;client_id&quot;:&quot;347895738.1563862353&quot;,&quot;originating_request_id&quot;:&quot;FA5A:8364:23868A:33F7D4:5DB29430&quot;,&quot;originating_url&quot;:&quot;https://github.com/bupt1987/html-parser&quot;,&quot;referrer&quot;:&quot;https://github.com/search?q=html-parser&quot;,&quot;user_id&quot;:16101602}}" data-hydro-click-hmac="04fd14789c0cd7fb99d4243a4a0dc84f2d7bcedf76d214688aa76c62a5f0c126" class="btn-link btn-change-protocol js-toggler-target float-right">Use SSH</button></form>

        <h4 class="mb-1">
          Clone with HTTPS
          <a class="muted-link" href="https://help.github.com/articles/which-remote-url-should-i-use" target="_blank" title="Which remote URL should I use?">
            <svg class="octicon octicon-question" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"></path></svg>
          </a>
        </h4>
        <p class="mb-2 get-repo-decription-text">
          Use Git or checkout with SVN using the web URL.
        </p>

        <div class="input-group">
<input type="text" class="form-control input-monospace input-sm" data-autoselect="" value="https://github.com/bupt1987/html-parser.git" aria-label="Clone this repository at https://github.com/bupt1987/html-parser.git" readonly="">
<div class="input-group-button">
<clipboard-copy value="https://github.com/bupt1987/html-parser.git" aria-label="Copy to clipboard" class="btn btn-sm" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;COPY_URL&quot;,&quot;git_repository_type&quot;:&quot;REPOSITORY&quot;,&quot;repository_id&quot;:10686133,&quot;client_id&quot;:&quot;347895738.1563862353&quot;,&quot;originating_request_id&quot;:&quot;FA5A:8364:23868A:33F7D4:5DB29430&quot;,&quot;originating_url&quot;:&quot;https://github.com/bupt1987/html-parser&quot;,&quot;referrer&quot;:&quot;https://github.com/search?q=html-parser&quot;,&quot;user_id&quot;:16101602}}" data-hydro-click-hmac="ec465da815a9f5a3c504ee3263cb52e0f8c856ed050383f9ffb29985578e7d78" tabindex="0" role="button"><svg class="octicon octicon-clippy" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path></svg></clipboard-copy>
</div>
</div>

      </div>

      <div class="clone-options ssh-clone-options">
          <form data-remote="true" action="/users/set_protocol?protocol_selector=https&amp;protocol_type=clone" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="SgnJ6yfQE+BwQVzGEVAwy624k2pKPn5i/Mz+uWWTGYqo1Ot36QjQfRZDGO189pkjfK36xCdqrLVn5Vz7dCAmOw=="><button name="button" type="submit" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;USE_HTTPS&quot;,&quot;git_repository_type&quot;:&quot;REPOSITORY&quot;,&quot;repository_id&quot;:10686133,&quot;client_id&quot;:&quot;347895738.1563862353&quot;,&quot;originating_request_id&quot;:&quot;FA5A:8364:23868A:33F7D4:5DB29430&quot;,&quot;originating_url&quot;:&quot;https://github.com/bupt1987/html-parser&quot;,&quot;referrer&quot;:&quot;https://github.com/search?q=html-parser&quot;,&quot;user_id&quot;:16101602}}" data-hydro-click-hmac="d6380b585c9a8b8c1965dc0700ecf5b1b5b348ea76fc742b3428b477f393929f" class="btn-link btn-change-protocol js-toggler-target float-right">Use HTTPS</button></form>
          <h4 class="mb-1">
            Clone with SSH
            <a class="muted-link" href="https://help.github.com/articles/which-remote-url-should-i-use" target="_blank" title="Which remote URL should I use?">
              <svg class="octicon octicon-question" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"></path></svg>
            </a>
          </h4>


          <p class="mb-2 get-repo-decription-text">
              Use a password protected SSH key.
          </p>

          <div class="input-group">
<input type="text" class="form-control input-monospace input-sm" data-autoselect="" value="git@github.com:bupt1987/html-parser.git" aria-label="Clone this repository at git@github.com:bupt1987/html-parser.git" readonly="">
<div class="input-group-button">
<clipboard-copy value="git@github.com:bupt1987/html-parser.git" aria-label="Copy to clipboard" class="btn btn-sm" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;COPY_URL&quot;,&quot;git_repository_type&quot;:&quot;REPOSITORY&quot;,&quot;repository_id&quot;:10686133,&quot;client_id&quot;:&quot;347895738.1563862353&quot;,&quot;originating_request_id&quot;:&quot;FA5A:8364:23868A:33F7D4:5DB29430&quot;,&quot;originating_url&quot;:&quot;https://github.com/bupt1987/html-parser&quot;,&quot;referrer&quot;:&quot;https://github.com/search?q=html-parser&quot;,&quot;user_id&quot;:16101602}}" data-hydro-click-hmac="ec465da815a9f5a3c504ee3263cb52e0f8c856ed050383f9ffb29985578e7d78" tabindex="0" role="button"><svg class="octicon octicon-clippy" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path></svg></clipboard-copy>
</div>
</div>

      </div>
    <div class="mt-2">
        <a class="btn btn-outline get-repo-btn tooltipped tooltipped-s tooltipped-multiline js-get-repo" aria-label="Clone bupt1987/html-parser to your computer and use it in GitHub Desktop." data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;OPEN_IN_DESKTOP&quot;,&quot;git_repository_type&quot;:&quot;REPOSITORY&quot;,&quot;repository_id&quot;:10686133,&quot;client_id&quot;:&quot;347895738.1563862353&quot;,&quot;originating_request_id&quot;:&quot;FA5A:8364:23868A:33F7D4:5DB29430&quot;,&quot;originating_url&quot;:&quot;https://github.com/bupt1987/html-parser&quot;,&quot;referrer&quot;:&quot;https://github.com/search?q=html-parser&quot;,&quot;user_id&quot;:16101602}}" data-hydro-click-hmac="14cb4f430ceef4aceb44b49dfc595bb7af6ff44b192fcd17689a4b1f0763a276" data-open-app="windows" href="https://desktop.github.com">Open in Desktop</a>

<a class="btn btn-outline get-repo-btn  " rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;DOWNLOAD_ZIP&quot;,&quot;git_repository_type&quot;:&quot;REPOSITORY&quot;,&quot;repository_id&quot;:10686133,&quot;client_id&quot;:&quot;347895738.1563862353&quot;,&quot;originating_request_id&quot;:&quot;FA5A:8364:23868A:33F7D4:5DB29430&quot;,&quot;originating_url&quot;:&quot;https://github.com/bupt1987/html-parser&quot;,&quot;referrer&quot;:&quot;https://github.com/search?q=html-parser&quot;,&quot;user_id&quot;:16101602}}" data-hydro-click-hmac="234b39335b4f60b5ecd7c513aaaee86d0ba7749ffd841b3280b19ffa4b85a934" data-ga-click="Repository, download zip, location:repo overview" href="/bupt1987/html-parser/archive/master.zip">Download ZIP</a>

    </div>
  </div>


  <div class="js-modal-download-mac py-2 px-3 d-none">
    <h4 class="lh-condensed mb-3">Launching GitHub Desktop<span class="animated-ellipsis-container"><span class="animated-ellipsis">...</span></span></h4>
    <p class="text-gray">If nothing happens, <a href="https://desktop.github.com/">download GitHub Desktop</a> and try again.</p>
    <p><button class="btn-link js-get-repo-modal-download-back">Go back</button></p>
  </div>

  <div class="js-modal-download-windows py-2 px-3 d-none">
    <h4 class="lh-condensed mb-3">Launching GitHub Desktop<span class="animated-ellipsis-container"><span class="animated-ellipsis">...</span></span></h4>
    <p class="text-gray">If nothing happens, <a href="https://desktop.github.com/">download GitHub Desktop</a> and try again.</p>
    <p><button class="btn-link js-get-repo-modal-download-back">Go back</button></p>
  </div>

  <div class="js-modal-download-xcode py-2 px-3 d-none">
    <h4 class="lh-condensed mb-3">Launching Xcode<span class="animated-ellipsis-container"><span class="animated-ellipsis">...</span></span></h4>
    <p class="text-gray">If nothing happens, <a href="https://developer.apple.com/xcode/">download Xcode</a> and try again.</p>
    <p><button class="btn-link js-get-repo-modal-download-back">Go back</button></p>
  </div>

  <div class="js-modal-download-visual-studio py-2 px-3 d-none">
    <h4 class="lh-condensed mb-3">Launching Visual Studio<span class="animated-ellipsis-container"><span class="animated-ellipsis">...</span></span></h4>
    <p class="text-gray">If nothing happens, <a href="https://visualstudio.github.com/">download the GitHub extension for Visual Studio</a> and try again.</p>
    <p><button class="btn-link js-get-repo-modal-download-back">Go back</button></p>
  </div>

</div>
</div>
</details>

</div>





<div class="commit-tease js-details-container Details d-flex rounded-top-1" data-issue-and-pr-hovercards-enabled="">

<div class="AvatarStack flex-self-start ">
<div class="AvatarStack-body" aria-label="bupt1987">
    <a class="avatar" data-skip-pjax="true" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=1306979" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/bupt1987">
      <img height="20" width="20" alt="@bupt1987" src="https://avatars2.githubusercontent.com/u/1306979?s=60&amp;v=4">
</a>  </div>
</div>

<div class="flex-auto f6 mr-3">
  
  <a href="/bupt1987/html-parser/commits?author=bupt1987" class="commit-author tooltipped tooltipped-s user-mention" aria-label="View all commits by bupt1987">bupt1987</a>





    <a data-pjax="true" title="Update .travis.yml

只对7.2以上版本支持" class="message text-inherit" href="/bupt1987/html-parser/commit/9e5fac05b9354eee16bfc84058c73c5e2b1f84a3">Update .travis.yml</a>
      <span class="hidden-text-expander inline">
        <button type="button" class="ellipsis-expander js-details-target" aria-expanded="false">…</button>
      </span>

    <div class="commit-desc"><pre class="text-small">只对7.2以上版本支持</pre></div>
</div>
<div class="no-wrap d-flex flex-self-start flex-items-baseline">
  <span class="mr-1">Latest commit</span>
  <a class="commit-tease-sha mr-1" href="/bupt1987/html-parser/commit/9e5fac05b9354eee16bfc84058c73c5e2b1f84a3" data-pjax="">
    9e5fac0
  </a>
  <span itemprop="dateModified"><relative-time datetime="2019-08-17T08:35:45Z" class="no-wrap" title="2019年8月17日 GMT+8 下午4:35">on 17 Aug</relative-time></span>
</div>
</div>



<div class="file-wrap">
<a class="d-none js-permalink-shortcut" data-hotkey="y" href="/bupt1987/html-parser/tree/9e5fac05b9354eee16bfc84058c73c5e2b1f84a3">Permalink</a>

<table class="files js-navigation-container js-active-navigation-container" data-pjax="">
<thead>
  <tr>
    <th><span class="sr-only">Type</span></th>
    <th><span class="sr-only">Name</span></th>
    <th><span class="sr-only">Latest commit message</span></th>
    <th><span class="sr-only">Commit time</span></th>
  </tr>
</thead>


<tbody>
  <tr class="warning include-fragment-error">
    <td class="icon"><svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"></path></svg></td>
    <td class="content" colspan="3">Failed to load latest commit information.</td>
  </tr>

    <tr class="js-navigation-item navigation-focus" aria-selected="true">
      <td class="icon">
        <svg aria-label="directory" class="octicon octicon-file-directory" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"></path></svg>
        <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif">
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="phpunit" id="85af727fd022d3a13e7972fd6a418582-9fe4791ac348c04b87db4ec2530ee22cc9f9a338" href="/bupt1987/html-parser/tree/master/phpunit">phpunit</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target">
              <a data-pjax="true" title="开放node" class="link-gray" href="/bupt1987/html-parser/commit/65f668de9a05fe6c6df2c5d7652100a4a4e64572">开放node</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time-ago datetime="2015-06-03T14:47:17Z" class="no-wrap" title="2015年6月3日 GMT+8 下午10:47">5 years ago</time-ago></span>
      </td>
    </tr>
    <tr class="js-navigation-item" aria-selected="false">
      <td class="icon">
        <svg aria-label="directory" class="octicon octicon-file-directory" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"></path></svg>
        <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif">
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="src" id="25d902c24283ab8cfbac54dfa101ad31-b947afaae49ce5566a0b30cd713ff456a082c210" href="/bupt1987/html-parser/tree/master/src">src</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target">
              <a data-pjax="true" title="fix: php73 &quot;Compilation failed&quot;

&quot;Compilation failed: invalid range in character class at offset 3&quot;" class="link-gray" href="/bupt1987/html-parser/commit/e907c223c1410fd3f4f1163f086c1b63dfc3beea">fix: php73 "Compilation failed"</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time-ago datetime="2019-04-16T08:43:04Z" class="no-wrap" title="2019年4月16日 GMT+8 下午4:43">6 months ago</time-ago></span>
      </td>
    </tr>
    <tr class="js-navigation-item" aria-selected="false">
      <td class="icon">
        <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
        <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif">
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title=".gitignore" id="a084b794bc0759e7a6b77810e01874f2-b87b2dc8a8c6966aae20cdcb9c469041074f3abe" href="/bupt1987/html-parser/blob/master/.gitignore">.gitignore</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target">
              <a data-pjax="true" title="up" class="link-gray" href="/bupt1987/html-parser/commit/fa12c020b1f4f3e6c7eea0ca62e0614e086ac136">up</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time-ago datetime="2015-05-21T08:05:13Z" class="no-wrap" title="2015年5月21日 GMT+8 下午4:05">5 years ago</time-ago></span>
      </td>
    </tr>
    <tr class="js-navigation-item" aria-selected="false">
      <td class="icon">
        <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
        <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif">
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title=".travis.yml" id="354f30a63fb0907d4ad57269548329e3-42ae403b1611be6c1dc99d586a497f6ade0f37de" href="/bupt1987/html-parser/blob/master/.travis.yml">.travis.yml</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target">
              <a data-pjax="true" title="Update .travis.yml

只对7.2以上版本支持" class="link-gray" href="/bupt1987/html-parser/commit/9e5fac05b9354eee16bfc84058c73c5e2b1f84a3">Update .travis.yml</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time-ago datetime="2019-08-17T08:35:45Z" class="no-wrap" title="2019年8月17日 GMT+8 下午4:35">2 months ago</time-ago></span>
      </td>
    </tr>
    <tr class="js-navigation-item" aria-selected="false">
      <td class="icon">
        <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
        <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif">
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="LICENSE" id="9879d6db96fd29134fc802214163b95a-e8bbd31527bcfb9b21889ff2f5c675b832881637" itemprop="license" href="/bupt1987/html-parser/blob/master/LICENSE">LICENSE</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target">
              <a data-pjax="true" title="Update LICENSE" class="link-gray" href="/bupt1987/html-parser/commit/c27b4be4aaf742c9494769f5296db0a23894ed76">Update LICENSE</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time-ago datetime="2014-08-05T09:24:21Z" class="no-wrap" title="2014年8月5日 GMT+8 下午5:24">5 years ago</time-ago></span>
      </td>
    </tr>
    <tr class="js-navigation-item" aria-selected="false">
      <td class="icon">
        <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
        <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif">
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="README.md" id="04c6e90faac2675aa89e2176d2eec7d8-041c160c3971d76cfa99a15e5311a31822cd40f0" href="/bupt1987/html-parser/blob/master/README.md">README.md</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target">
              <a data-pjax="true" title="Update README.md" class="link-gray" href="/bupt1987/html-parser/commit/3010bcf843d55ac2d4a51fd79f4e2406080f7ff9">Update README.md</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time-ago datetime="2016-04-19T07:26:17Z" class="no-wrap" title="2016年4月19日 GMT+8 下午3:26">4 years ago</time-ago></span>
      </td>
    </tr>
    <tr class="js-navigation-item">
      <td class="icon">
        <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
        <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif">
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="composer.json" id="b5d0ee8c97c7abd7e3fa29b9a27d1780-dc5e1a6de7bb5a1ee8b934570478b637b593adf8" href="/bupt1987/html-parser/blob/master/composer.json">composer.json</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target">
              <a data-pjax="true" title="up phpunit" class="link-gray" href="/bupt1987/html-parser/commit/a30c4fc9355acf869167cbc8a78ccb72c608d8ab">up phpunit</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time-ago datetime="2016-08-19T03:50:49Z" class="no-wrap" title="2016年8月19日 GMT+8 上午11:50">3 years ago</time-ago></span>
      </td>
    </tr>
    <tr class="js-navigation-item">
      <td class="icon">
        <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
        <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif">
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="phpunit.xml.dist" id="98c12a693941ae3c4f50872403416471-111aa35d0729815f929113078d16b3e777fd2c94" href="/bupt1987/html-parser/blob/master/phpunit.xml.dist">phpunit.xml.dist</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target">
              <a data-pjax="true" title="up" class="link-gray" href="/bupt1987/html-parser/commit/c0292da8dfb3b00eb50238e2e3af8bcece6e901b">up</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time-ago datetime="2015-05-21T09:46:53Z" class="no-wrap" title="2015年5月21日 GMT+8 下午5:46">5 years ago</time-ago></span>
      </td>
    </tr>
    <tr class="js-navigation-item">
      <td class="icon">
        <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
        <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif">
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="test.php" id="93bc3c03503d8768cf7cc1e39ce16fcb-77d16e5d5edde42145aceb76a1650eaead9c8e05" href="/bupt1987/html-parser/blob/master/test.php">test.php</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target">
              <a data-pjax="true" title="删除内存清理, 因为用了Dom扩展,内存释放的问题已经解决" class="link-gray" href="/bupt1987/html-parser/commit/60f207eb5259988a3fb3c400efcb1ef7c6e7b58c">删除内存清理, 因为用了Dom扩展,内存释放的问题已经解决</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time-ago datetime="2016-04-21T12:18:56Z" class="no-wrap" title="2016年4月21日 GMT+8 下午8:18">4 years ago</time-ago></span>
      </td>
    </tr>
</tbody>
</table>

</div>




<div id="readme" class="Box Box--condensed instapaper_body md js-code-block-container">
<div class="Box-header d-flex flex-items-center flex-justify-between px-2">
  <h3 class="Box-title pr-3">
    <svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path></svg>
    README.md
  </h3>
</div>
    <div class="Popover anim-scale-in js-tagsearch-popover" hidden="" data-tagsearch-url="/bupt1987/html-parser/find-symbols" data-tagsearch-ref="master" data-tagsearch-path="README.md" data-tagsearch-lang="Markdown" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.click_on_symbol&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;click_on_symbol&quot;,&quot;repository_id&quot;:10686133,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;Markdown&quot;,&quot;client_id&quot;:&quot;347895738.1563862353&quot;,&quot;originating_request_id&quot;:&quot;FA5A:8364:23868A:33F7D4:5DB29430&quot;,&quot;originating_url&quot;:&quot;https://github.com/bupt1987/html-parser&quot;,&quot;referrer&quot;:&quot;https://github.com/search?q=html-parser&quot;,&quot;user_id&quot;:16101602}}" data-hydro-click-hmac="608dacf3b512d26ce0021f6727370e4801c4f9f60b2dc6eb2cc8c75cb948af64">
<div class="Popover-message Popover-message--large Popover-message--top-left TagsearchPopover mt-1 mb-4 mx-auto Box box-shadow-large">
<div class="TagsearchPopover-content js-tagsearch-popover-content overflow-auto" style="will-change:transform;">
</div>
</div>
</div>

  <div class="Box-body">
    <article class="markdown-body entry-content p-5" itemprop="text"><h1><a id="user-content-htmlparser" class="anchor" aria-hidden="true" href="#htmlparser"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>HtmlParser</h1>
<p><a href="https://packagist.org/packages/bupt1987/html-parser" rel="nofollow"><img src="https://camo.githubusercontent.com/25eed6b617d66a94c8c68b423fa996edae246992/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f646f776e6c6f6164732d392e346b2d677265656e2e737667" alt="Total Downloads" data-canonical-src="https://img.shields.io/badge/downloads-9.4k-green.svg" style="max-width:100%;"></a>
<a href="https://travis-ci.org/bupt1987/html-parser" rel="nofollow"><img src="https://camo.githubusercontent.com/152e56e7f03adf38e111dfffe10310656494740f/68747470733a2f2f6170692e7472617669732d63692e6f72672f62757074313938372f68746d6c2d7061727365722e737667" alt="Build Status" data-canonical-src="https://api.travis-ci.org/bupt1987/html-parser.svg" style="max-width:100%;"></a></p>
<p>php html解析工具，类似与PHP Simple HTML DOM Parser。
由于基于php模块dom，所以在解析html时的效率比 PHP Simple HTML DOM Parser 快好几倍。</p>
<p>注意：html代码必须是utf-8编码字符，如果不是请转成utf-8<br>
如果有乱码的问题参考：<a href="http://www.fwolf.com/blog/post/314" rel="nofollow">http://www.fwolf.com/blog/post/314</a></p>
<p>现在支持composer</p>
<p>"require": {"bupt1987/html-parser": "dev-master"}</p>
<p>加载composer<br>
require 'vendor/autoload.php';</p>
<p>================================================================================</p>
<h5><a id="user-content-example" class="anchor" aria-hidden="true" href="#example"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><em>Example</em></h5>
<pre><code>&lt;?php
require 'vendor/autoload.php';

$html = '&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv="Content-Type" content="text/html; charset=utf-8" /&gt;
&lt;title&gt;test&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;p class="test_class test_class1"&gt;p1&lt;/p&gt;
&lt;p class="test_class test_class2"&gt;p2&lt;/p&gt;
&lt;p class="test_class test_class3"&gt;p3&lt;/p&gt;
&lt;div id="test1"&gt;测试1&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;';
$html_dom = new \HtmlParser\ParserDom($html);
$p_array = $html_dom-&gt;find('p.test_class');
$p1 = $html_dom-&gt;find('p.test_class1',0);
$div = $html_dom-&gt;find('div#test1',0);
foreach ($p_array as $p){
echo $p-&gt;getPlainText() . "\n";
}
echo $div-&gt;getPlainText() . "\n";
echo $p1-&gt;getPlainText() . "\n";
echo $p1-&gt;getAttr('class') . "\n";
echo "show html:\n";
echo $div-&gt;innerHtml() . "\n";
echo $div-&gt;outerHtml() . "\n";
?&gt;
</code></pre>
<h1><a id="user-content-基础用法" class="anchor" aria-hidden="true" href="#基础用法"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>基础用法</h1>
<pre><code>// 查找所有a标签
$ret = $html-&gt;find('a');

// 查找a标签的第一个元素
$ret = $html-&gt;find('a', 0);

// 查找a标签的倒数第一个元素
$ret = $html-&gt;find('a', -1); 

// 查找所有含有id属性的div标签
$ret = $html-&gt;find('div[id]');

// 查找所有含有id属性为foo的div标签
$ret = $html-&gt;find('div[id=foo]'); 
</code></pre>
<h1><a id="user-content-高级用法" class="anchor" aria-hidden="true" href="#高级用法"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>高级用法</h1>
<pre><code>// 查找所有id=foo的元素
$ret = $html-&gt;find('#foo');

// 查找所有class=foo的元素
$ret = $html-&gt;find('.foo');

// 查找所有拥有 id属性的元素
$ret = $html-&gt;find('*[id]'); 

// 查找所有 anchors 和 images标记 
$ret = $html-&gt;find('a, img'); 

// 查找所有有"title"属性的anchors and images 
$ret = $html-&gt;find('a[title], img[title]');
</code></pre>
<h1><a id="user-content-层级选择器" class="anchor" aria-hidden="true" href="#层级选择器"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>层级选择器</h1>
<pre><code>// Find all &lt;li&gt; in &lt;ul&gt; 
$es = $html-&gt;find('ul li');

// Find Nested &lt;div&gt; tags
$es = $html-&gt;find('div div div'); 

// Find all &lt;td&gt; in &lt;table&gt; which class=hello 
$es = $html-&gt;find('table.hello td');

// Find all td tags with attribite align=center in table tags 
$es = $html-&gt;find('table td[align=center]'); 
</code></pre>
<h1><a id="user-content-嵌套选择器" class="anchor" aria-hidden="true" href="#嵌套选择器"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>嵌套选择器</h1>
<pre><code>// Find all &lt;li&gt; in &lt;ul&gt; 
foreach($html-&gt;find('ul') as $ul) 
{
   foreach($ul-&gt;find('li') as $li) 
   {
         // do something...
   }
}

// Find first &lt;li&gt; in first &lt;ul&gt; 
$e = $html-&gt;find('ul', 0)-&gt;find('li', 0);
</code></pre>
<h1><a id="user-content-属性过滤" class="anchor" aria-hidden="true" href="#属性过滤"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>属性过滤</h1>
<pre><code>支持属性选择器操作:

过滤	描述
[attribute]	匹配具有指定属性的元素.
[!attribute]	匹配不具有指定属性的元素。
[attribute=value]	匹配具有指定属性值的元素
[attribute!=value]	匹配不具有指定属性值的元素
[attribute^=value]	匹配具有指定属性值开始的元素
[attribute$=value]	匹配具有指定属性值结束的元素
[attribute*=value]	匹配具有指定属性的元素,且该属性包含了一定的值
</code></pre>
<h1><a id="user-content-dom扩展用法" class="anchor" aria-hidden="true" href="#dom扩展用法"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dom扩展用法</h1>
<pre><code>获取dom通过扩展实现更多的功能，详见：http://php.net/manual/zh/book.dom.php

/**
* @var \DOMNode
*/
$oHtml-&gt;node

$oHtml-&gt;node-&gt;childNodes
$oHtml-&gt;node-&gt;parentNode
$oHtml-&gt;node-&gt;firstChild
$oHtml-&gt;node-&gt;lastChild
等等...

</code></pre>
</article>
  </div>
</div>



</div>
</div>

</main>
</div>


</div>

    
<div class="footer container-lg width-full px-3" role="contentinfo">
<div class="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
<ul class="list-style-none d-flex flex-wrap ">
  <li class="mr-3">© 2019 <span title="0.65251s from unicorn-747fff6dcd-8bzsd">GitHub</span>, Inc.</li>
    <li class="mr-3"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
    <li class="mr-3"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
    <li class="mr-3"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
    <li class="mr-3"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
    <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
</ul>

<a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
  <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
<ul class="list-style-none d-flex flex-wrap ">
    <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
    <li class="mr-3"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
  <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
  <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
    <li class="mr-3"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
    <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

</ul>
</div>
<div class="d-flex flex-justify-center pb-6">
<span class="f6 text-gray-light"></span>
</div>
</div>



<div id="ajax-error-message" class="ajax-error-message flash flash-error">
<svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"></path></svg>
<button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
  <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
</button>
You can’t perform that action at this time.
</div>



<script crossorigin="anonymous" integrity="sha512-H68lyjqvhf8QSmg/2hTgg/jxC3W0viB1sxl0EcLEZFB+L5UJf78D38ce69KLWXeTI1sI/3TRRdDyrS/dEVaPdw==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-02ee494c.js"></script>

<script crossorigin="anonymous" async="async" integrity="sha512-2jQaY/BluAVCl9LO/gjmKgk7aqCqbktUvJlXzPCt4Ik2mq0VCuQi+25kUQPZQZ87nM/2ooZDXC3F29d9cQR8Ag==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-e6a5a935.js"></script>



<div class="js-stale-session-flash flash flash-warn flash-banner" hidden="">
<svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"></path></svg>
<span class="js-stale-session-flash-signed-in" hidden="">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
<span class="js-stale-session-flash-signed-out" hidden="">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
</div>
<template id="site-details-dialog">
<details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open="">
<summary role="button" aria-label="Close dialog"></summary>
<details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
  <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog="">
    <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
  </button>
  <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
</details-dialog>
</details>
</template>

<div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
<div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
</div>
</div>

<div aria-live="polite" class="js-global-screen-reader-notice sr-only"></div>




<nav class="octotree-sidebar octotree-github-sidebar ui-resizable" style="width: 232px;">
<div class="octotree-toggle">
  <i class="octotree-toggle-icon" role="button"></i> <span>Octotree</span>

  
</div>

<a class="octotree-pin" data-store="PINNED" href="javascript:void(0)">
  <span class="tooltipped tooltipped-s" aria-label="Pin this sidebar"> <i class="octotree-icon-pin"></i> </span>
</a>

<a class="octotree-settings" href="javascript:void(0)">
  <span class="tooltipped tooltipped-s" aria-label="Settings"> <i class="octotree-icon-settings"></i> </span>
</a>

<div class="octotree-views">
  <div class="octotree-view octotree-tree-view current">
    <div class="octotree-view-header"><div class="octotree-header-summary">
      <div class="octotree-header-repo">
        <i class="octotree-icon-repo"></i>
        <a href="/bupt1987">bupt1987</a> /
        <a data-pjax="" href="/bupt1987/html-parser">html-parser</a>
      </div>
      <div class="octotree-header-branch">
        <i class="octotree-icon-branch"></i>
        master
      </div>
    </div></div>
    <div class="octotree-view-body jstree jstree-1 jstree-default" role="tree" tabindex="0" aria-activedescendant="octotreephpunit.xml.dist" aria-busy="false"><ul class="jstree-container-ul jstree-children jstree-wholerow-ul jstree-no-dots" role="group"><li role="treeitem" aria-selected="false" aria-level="1" aria-labelledby="octotreephpunit_anchor" aria-expanded="false" id="octotreephpunit" class="jstree-node  jstree-closed"><div unselectable="on" role="presentation" class="jstree-wholerow">&nbsp;</div><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor" href="/bupt1987/html-parser/tree/master/phpunit" tabindex="-1" data-download-url="/bupt1987/html-parser/tree/master/phpunit" data-download-filename="phpunit" id="octotreephpunit_anchor"><i class="jstree-icon jstree-themeicon tree jstree-themeicon-custom" role="presentation"></i>phpunit</a></li><li role="treeitem" aria-selected="false" aria-level="1" aria-labelledby="octotreesrc_anchor" aria-expanded="false" id="octotreesrc" class="jstree-node  jstree-closed"><div unselectable="on" role="presentation" class="jstree-wholerow">&nbsp;</div><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor" href="/bupt1987/html-parser/tree/master/src" tabindex="-1" data-download-url="/bupt1987/html-parser/tree/master/src" data-download-filename="src" id="octotreesrc_anchor"><i class="jstree-icon jstree-themeicon tree jstree-themeicon-custom" role="presentation"></i>src</a></li><li role="treeitem" aria-selected="false" aria-level="1" aria-labelledby="octotree.gitignore_anchor" id="octotree.gitignore" class="jstree-node  jstree-leaf"><div unselectable="on" role="presentation" class="jstree-wholerow">&nbsp;</div><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor" href="/bupt1987/html-parser/blob/master/.gitignore" tabindex="-1" data-download-url="/bupt1987/html-parser/blob/master/.gitignore" data-download-filename=".gitignore" id="octotree.gitignore_anchor"><i class="jstree-icon jstree-themeicon blob git-icon medium-red jstree-themeicon-custom" role="presentation"></i>.gitignore</a></li><li role="treeitem" aria-selected="false" aria-level="1" aria-labelledby="octotree.travis.yml_anchor" id="octotree.travis.yml" class="jstree-node  jstree-leaf"><div unselectable="on" role="presentation" class="jstree-wholerow">&nbsp;</div><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor" href="/bupt1987/html-parser/blob/master/.travis.yml" tabindex="-1" data-download-url="/bupt1987/html-parser/blob/master/.travis.yml" data-download-filename=".travis.yml" id="octotree.travis.yml_anchor"><i class="jstree-icon jstree-themeicon blob travis-icon medium-red jstree-themeicon-custom" role="presentation"></i>.travis.yml</a></li><li role="treeitem" aria-selected="false" aria-level="1" aria-labelledby="octotreeLICENSE_anchor" id="octotreeLICENSE" class="jstree-node  jstree-leaf"><div unselectable="on" role="presentation" class="jstree-wholerow">&nbsp;</div><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor" href="/bupt1987/html-parser/blob/master/LICENSE" tabindex="-1" data-download-url="/bupt1987/html-parser/blob/master/LICENSE" data-download-filename="LICENSE" id="octotreeLICENSE_anchor"><i class="jstree-icon jstree-themeicon blob book-icon medium-blue jstree-themeicon-custom" role="presentation"></i>LICENSE</a></li><li role="treeitem" aria-selected="false" aria-level="1" aria-labelledby="octotreeREADME.md_anchor" id="octotreeREADME.md" class="jstree-node  jstree-leaf"><div unselectable="on" role="presentation" class="jstree-wholerow">&nbsp;</div><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor" href="/bupt1987/html-parser/blob/master/README.md" tabindex="-1" data-download-url="/bupt1987/html-parser/blob/master/README.md" data-download-filename="README.md" id="octotreeREADME.md_anchor"><i class="jstree-icon jstree-themeicon blob book-icon medium-blue jstree-themeicon-custom" role="presentation"></i>README.md</a></li><li role="treeitem" aria-selected="false" aria-level="1" aria-labelledby="octotreecomposer.json_anchor" id="octotreecomposer.json" class="jstree-node  jstree-leaf"><div unselectable="on" role="presentation" class="jstree-wholerow">&nbsp;</div><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor" href="/bupt1987/html-parser/blob/master/composer.json" tabindex="-1" data-download-url="/bupt1987/html-parser/blob/master/composer.json" data-download-filename="composer.json" id="octotreecomposer.json_anchor"><i class="jstree-icon jstree-themeicon blob composer-icon medium-yellow jstree-themeicon-custom" role="presentation"></i>composer.json</a></li><li role="treeitem" aria-selected="false" aria-level="1" aria-labelledby="octotreephpunit.xml.dist_anchor" id="octotreephpunit.xml.dist" class="jstree-node  jstree-leaf"><div unselectable="on" role="presentation" class="jstree-wholerow">&nbsp;</div><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor" href="/bupt1987/html-parser/blob/master/phpunit.xml.dist" tabindex="-1" data-download-url="/bupt1987/html-parser/blob/master/phpunit.xml.dist" data-download-filename="phpunit.xml.dist" id="octotreephpunit.xml.dist_anchor"><i class="jstree-icon jstree-themeicon blob file-generic jstree-themeicon-custom" role="presentation"></i>phpunit.xml.dist</a></li><li role="treeitem" aria-selected="false" aria-level="1" aria-labelledby="octotreetest.php_anchor" id="octotreetest.php" class="jstree-node  jstree-leaf jstree-last"><div unselectable="on" role="presentation" class="jstree-wholerow">&nbsp;</div><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor" href="/bupt1987/html-parser/blob/master/test.php" tabindex="-1" data-download-url="/bupt1987/html-parser/blob/master/test.php" data-download-filename="test.php" id="octotreetest.php_anchor"><i class="jstree-icon jstree-themeicon blob php-icon dark-blue jstree-themeicon-custom" role="presentation"></i>test.php</a></li></ul></div>
    <a class="octotree-spin"> <span class="octotree-spin--loader"></span> </a>
  </div>

  <div class="octotree-view octotree-error-view">
    <div class="octotree-view-header"></div>
    <form class="octotree-view-body"><div class="message"></div></form>
  </div>

  <div class="octotree-view octotree-settings-view">
    <div class="octotree-view-header">Settings</div>
    <form class="octotree-view-body">
      <div>
        <label>GitHub access token</label>
        <div class="octotree-token-actions">
          <a class="octotree-create-token" target="_blank" tabindex="-1" href="https://github.com/settings/tokens/new?scopes=repo&amp;description=Octotree%20browser%20extension"><!--
            --><span class="tooltipped tooltipped-n" aria-label="Generate new token"><i class="octotree-icon-key"></i></span><!--
          --></a>
          <a class="octotree-help" href="https://github.com/ovity/octotree#access-token" target="_blank" tabindex="-1">
            <span class="tooltipped tooltipped-n" aria-label="Why is this needed?">
              <i class="octotree-icon-help"></i>
            </span>
          </a>
        </div>
        <input type="text" class="form-control input-block" data-store="TOKEN">
      </div>

      <div>
        <div>
          <label>Hotkeys</label>
          <div class="octotree-token-actions">
            <a class="octotree-help" href="https://github.com/ovity/octotree#hotkeys" target="_blank" tabindex="-1">
              <span class="tooltipped tooltipped-n" aria-label="Learn more">
                <i class="octotree-icon-help"></i>
              </span>
            </a>
          </div>
        </div>
        <input type="text" autocomplete="off" spellcheck="false" autocapitalize="off" class="form-control" data-store="HOTKEYS">
      </div>

      <div>
        <label><input type="checkbox" data-store="HOVEROPEN"> Open sidebar on hover</label>
      </div>
      <div>
        <label><input type="checkbox" data-store="LOADALL"> Load entire tree at once</label>
      </div>
      <div>
        <label><input type="checkbox" data-store="NONCODE"> Show in non-code pages</label>
      </div>
      <div>
        <label><input type="checkbox" data-store="ICONS"> Show file-specific icons</label>
      </div>
      <div>
        <label>
          <input type="checkbox" data-store="PR"> Show pull request changes
          <span class="octotree-disclaimer">Note: maximum of 300 files</span>
        </label>
      </div>

      <div><button class="btn btn-primary">Apply settings</button></div>
    </form>

    <div class="octotree-ad-big">
      <div>
        Loving Octotree? You will love Octotree Pro even more. Octotree Pro is loaded with features that bring your
        productivity to the next level.
        <a href="https://www.octotree.io/?utm_source=lite&amp;utm_medium=extension" target="_blank"> Learn more</a>
      </div>
    </div>
  </div>
</div>

<div class="octotree-footer">
  <div class="octotree-ad-small">
    <a href="https://chrome.google.com/webstore/detail/octotree/bkhaagjahfmjljalopjnoealnfndnagc?hl=en-US" target="_blank">Rate Octotree on Chrome</a>
  </div>
</div>
<div class="ui-resizable-handle ui-resizable-e" style="z-index: 90;"></div></nav></body></html>`
let code = tokenizer(lispStr)
console.log(util.inspect(code, { showHidden: false, depth: null }))
let ast = parser(code)
let text = toText(ast)

console.log({ text })