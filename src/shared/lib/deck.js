'use strict';

require('bespoke');
var slice = Array.prototype.slice;

exports.create = function(parentTagName, slideTagName) {
  var parent = document.createElement(parentTagName || 'section');

  var instance = {
    push: function(content) {
      var slide = document.createElement(slideTagName || 'article');

      if(typeof content === 'string') {
        slide.innerHTML = content;
        parent.appendChild(slide);
      }
      else if(content instanceof HTMLElement) {
        slide.appendChild(content);
        parent.appendChild(slide);
      }
      else if(typeof content === 'function') {
        instance.push(content.apply(null, slice.call(arguments, 1)));
      }
      else if(content && typeof content.length === 'number') {
        slice.call(content, 0).forEach(instance.push);
      }

      return instance;
    },
    start: function(container, options) {
      var deck;

      // Determine container and add our deck there
      if(arguments.length === 1) {
        options = container;
        container = document.body;
      }
      if(typeof container === 'string') {
        container = document.querySelector(container);
      }
      container.appendChild(parent);

      // Create deck and replace instance properties with deck properties
      deck = window.bespoke.from(parent, options);
      Object.keys(instance).forEach(function(key) {
        delete instance[key];
      });
      Object.keys(deck).forEach(function(key) {
        instance[key] = deck[key];
      });

      return instance;
    }
  };

  return instance;
};
