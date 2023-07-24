// ==UserScript==
// @name         JutSU Plus
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       Deoconst
// @match        https://jut.su/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jut.su
// @grant        GM_getValue
// ==/UserScript==

(function () {
    'use strict';
var windowOnloadAdd = function (event) {
    if ( window.onload ){
        window.onload = window.onload + event;
    } else {
        window.onload = event;
    };
};

windowOnloadAdd(function() {
    setTimeout(checkNextEpisodeElement, 5000);
    setTimeout(checkIntroElement, 5000);
    document.getElementsByTagName("video")[0].play();
    document.getElementsByTagName("video")[0].playbackRate = getDataFromLocal(1);
    function saveData(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    function saveDataToLocal(key, value) {
        saveData(key, value);
    }

    function getData(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    function getDataFromLocal(key) {
        return getData(key);
    }
    function ChangeSpeed1(){
        document.getElementsByTagName("video")[0].playbackRate = 2;
        saveDataToLocal(1, 2.0);
    }
    function ChangeSpeed2(){
        document.getElementsByTagName("video")[0].playbackRate = 1.5;
        saveDataToLocal(1, 1.5);
    }
    function ChangeSpeed3(){
        document.getElementsByTagName("video")[0].playbackRate = 1.25;
        saveDataToLocal(1, 1.25);
    }
    function ChangeSpeed4(){
        document.getElementsByTagName("video")[0].playbackRate = 1;
        saveDataToLocal(1, 1);
    }
    const addPlayBackRate = document.getElementsByClassName(
        'vjs-quality-selector vjs-menu-button vjs-menu-button-popup vjs-control vjs-button'
      )[0];
      if (addPlayBackRate) {
        addPlayBackRate.insertAdjacentHTML(
          'afterend',
          `<div class="vjs-speed-selector vjs-menu-button vjs-menu-button-popup vjs-control vjs-button">
            <button class="vjs-menu-button vjs-menu-button-popup vjs-button" type="button" aria-disabled="false" aria-haspopup="true" aria-expanded="false" title="Выбрать скорость воспроизведения">
              <span aria-hidden="true" class="vjs-icon-placeholder">Скорость</span>
              <span class="vjs-control-text" aria-live="polite">Выбрать скорость воспроизведения</span>
            </button>
            <div class="vjs-menu">
              <ul class="vjs-menu-content" role="menu">
                <li id="ChangeSpeed4" class="vjs-menu-item vjs-selected" tabindex="-1" role="menuitemradio" aria-disabled="false" aria-checked="true"><span class="">x2</span><span class="vjs-control-text" aria-live="polite"> </span></li>
                <li id="ChangeSpeed3" class="vjs-menu-item vjs-selected" tabindex="-1" role="menuitemradio" aria-disabled="false" aria-checked="false"><span class="">x1.5</span><span class="vjs-control-text" aria-live="polite"></span></li>
                <li id="ChangeSpeed2" class="vjs-menu-item vjs-selected" tabindex="-1" role="menuitemradio" aria-disabled="false" aria-checked="false"><span class="">x1.25</span><span class="vjs-control-text" aria-live="polite"></span></li>
                <li id="ChangeSpeed1" class="vjs-menu-item vjs-selected" tabindex="-1" role="menuitemradio" aria-disabled="false" aria-checked="false"><span class="">x1</span><span class="vjs-control-text" aria-live="polite"></span></li>
              </ul>
            </div>
          </div>
          <style>
            .vjs-speed-selector .vjs-menu-button{margin: 0;padding: 0;height: 100%;width: 100%;}
            .vjs-speed-selector.vjs-menu-button-popup .vjs-menu{width: 5em;left: 0em; z-index: 4;}
            @media only screen and (min-width: 861px) {
              .video-js:not(.vjs-fullscreen) .vjs-speed-selector .vjs-menu-content, .video-js:not(.vjs-fullscreen) .vjs-subtitles-button .vjs-menu-content {z-index: 4;}
            }
            .vjs-speed-selector .vjs-icon-placeholder {font-family: -apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;font-size: 13px;font-weight: bold;}
            .vjs-speed-selector .vjs-icon-placeholder
            .vjs-button>.vjs-icon-placeholder:before {font-size: 1.8em;line-height: 1.67;}
            .video-js .vjs-big-play-button .vjs-icon-placeholder:before, .vjs-button>.vjs-icon-placeholder:before {text-align: center;}
            .video-js .vjs-big-play-button .vjs-icon-placeholder:before, .vjs-button > .vjs-icon-placeholder:before, .video-js .vjs-modal-dialog, .vjs-modal-dialog .vjs-modal-dialog-content {position: absolute;top: 0;left: 0;width: 100%;height: 100%;}
            .vjs-menu-button-popup .vjs-menu .vjs-menu-content {border-top-left-radius: 3px;border-top-right-radius: 3px;z-index: 4;}
          </style>`
        );

        const Change1 = document.querySelector('#ChangeSpeed1');
        if (Change1) {
          Change1.addEventListener('click', ChangeSpeed4, false);
        }

        const Change2 = document.querySelector('#ChangeSpeed2');
        if (Change2) {
          Change2.addEventListener('click', ChangeSpeed3, false);
        }

        const Change3 = document.querySelector('#ChangeSpeed3');
        if (Change3) {
          Change3.addEventListener('click', ChangeSpeed2, false);
        }

        const Change4 = document.querySelector('#ChangeSpeed4');
        if (Change4) {
          Change4.addEventListener('click', ChangeSpeed1, false);
        }
      }
})
    function autoSkipVideoIntro() {
        if (typeof skip_video_intro === 'function') {
        skip_video_intro();
        }
    }
    function autoGoNextEpisode() {
      if (typeof video_go_next_episode === 'function') {
        video_go_next_episode();
      }
    }
    function checkIntroElement() {
      const IntroElement = document.querySelector(
        '.vjs-overlay-skip-intro[title="Нажмите, если лень смотреть опенинг"]'
      );
      if (IntroElement && isVisible(IntroElement)) {
        autoSkipVideoIntro();
      }
    }
    function checkNextEpisodeElement() {
      const nextEpisodeElement = document.querySelector(
        '.vjs-overlay-skip-intro[title="Перейти к следующему эпизоду"]'
      );
      if (nextEpisodeElement && isVisible(nextEpisodeElement)) {
        autoGoNextEpisode();
      }
    }

    function isVisible(element) {
      const computedStyle = window.getComputedStyle(element);
      return (
        computedStyle &&
        computedStyle.display !== 'none' &&
        computedStyle.visibility !== 'hidden'
      );
    }
    window.addEventListener('load', function () {

      const observer = new MutationObserver(function (mutationsList) {
        for (const mutation of mutationsList) {
          if (mutation.type === 'childList') {
            checkIntroElement()
            checkNextEpisodeElement()
          }
        }

      });

      observer.observe(document.body, { childList: true, subtree: true });

});
    })();
