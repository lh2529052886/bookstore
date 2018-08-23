(function(window){var svgSprite='<svg><symbol id="icon-circularsearch" viewBox="0 0 1024 1024"><path d="M442.24 231.296c-99.968 0-181.312 81.408-181.312 181.312 0 100.032 81.408 181.248 181.312 181.248 99.968 0 181.248-81.28 181.248-181.248C623.488 312.704 542.208 231.296 442.24 231.296z"  ></path><path d="M512 32C246.784 32 32 246.848 32 512c0 265.152 214.784 480 480 480 265.152 0 480-214.848 480-480C992 246.848 777.152 32 512 32zM830.4 800.832c-10.816 10.88-25.216 16.192-39.36 16.192-14.4 0-28.48-5.312-39.424-16.192L591.36 640.512C589.568 638.656 588.032 636.608 586.56 634.688c-41.536 27.008-91.072 42.816-144.32 42.816-146.24 0-264.96-118.592-264.96-264.96 0-146.304 118.656-264.96 264.96-264.96 146.496 0 264.96 118.656 264.96 264.96 0 53.248-15.68 102.656-42.816 144.192 1.92 1.6 4.096 3.072 5.888 4.864l160.192 160.256C852.096 743.68 852.096 778.944 830.4 800.832z"  ></path></symbol><symbol id="icon-add" viewBox="0 0 1024 1024"><path d="M512 1024c-282.752 0-512-229.248-512-512s229.248-512 512-512 512 229.248 512 512S794.752 1024 512 1024zM512 128C299.968 128 128 299.968 128 512s171.968 384 384 384 384-171.968 384-384S724.032 128 512 128zM704 576 576 576l0 128c0 35.392-28.608 64-64 64-35.328 0-64-28.608-64-64L448 576 320 576C284.672 576 256 547.392 256 512c0-35.328 28.672-64 64-64l128 0L448 320c0-35.328 28.672-64 64-64 35.392 0 64 28.672 64 64l0 128 128 0c35.392 0 64 28.672 64 64C768 547.392 739.392 576 704 576z"  ></path></symbol><symbol id="icon-bianji" viewBox="0 0 1024 1024"><path d="M868.368 60H142.72a90.72 90.72 0 0 0-90.72 90.704v725.664a90.72 90.72 0 0 0 90.72 90.72h725.664a90.72 90.72 0 0 0 90.72-90.72V150.704a90.736 90.736 0 0 0-90.736-90.704zM488.576 704.128l-0.272-0.304a14 14 0 0 1-4.64 2.816l-227.68 83.12a16.16 16.16 0 0 1-17.04-3.888 16.048 16.048 0 0 1-3.744-17.008l83.008-227.632a15.296 15.296 0 0 1 2.768-4.576l-0.176-0.224 204.48-204.416a35396 35396 0 0 1 40.432 40.352L405.504 532.32a12.496 12.496 0 0 0-3.728 9.152c0 3.296 1.152 6.592 3.728 9.152a13.088 13.088 0 0 0 18.448 0l160.112-159.856 50.304 50.224-159.408 159.232a13.072 13.072 0 0 0 0 18.336 13.2 13.2 0 0 0 18.448 0.048c0-0.048 159.36-159.232 159.36-159.232s23.424 23.408 40.24 40.32L488.576 704.128z m286.688-286.544l-63.808 63.776c-32.784-32.752-108.976-108.976-167.728-167.632l63.904-63.856c22.896-22.864 60.304-22.912 83.12 0l84.512 84.544c22.896 22.864 22.848 60.192 0 83.168z"  ></path></symbol><symbol id="icon-shanchu" viewBox="0 0 1260 1024"><path d="M534.305767 0C251.025715 0 22.305767 228.719948 22.305767 512S251.025715 1024 534.305767 1024s512-228.719948 512-512S817.585819 0 534.305767 0m215.079922 727.079922c-13.640026 13.640026-37.593242 13.640026-51.233268 0l-163.846654-163.846654-163.846653 163.846654c-13.640026 13.640026-37.593242 13.640026-51.233269 0s-13.640026-37.593242 0-51.233268l163.846654-163.846654-163.846654-163.846654c-13.640026-13.640026-13.640026-37.593242 0-51.233268s37.593242-13.640026 51.233269 0l163.846653 163.846654 163.846654-163.846654c13.640026-13.640026 37.593242-13.640026 51.233268 0s13.640026 37.593242 0 51.233268l-163.846653 163.846654 163.846653 163.846654c17.133203 13.640026 17.133203 37.426901 0 51.233268"  ></path></symbol><symbol id="icon-baocun" viewBox="0 0 1024 1024"><path d="M715.093333 332.48l-277.435733 277.461333L308.906667 481.211733l-48.264534 48.264534 144.814934 144.814933 32.200533 32.1792 325.700267-325.700267L715.093333 332.48zM512 921.6c-226.2144 0-409.6-183.364267-409.6-409.6 0-226.2144 183.3856-409.6 409.6-409.6s409.6 183.3856 409.6 409.6c0 226.235733-183.3856 409.6-409.6 409.6z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)