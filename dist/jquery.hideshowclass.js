/*
 *  Show/Hide Class - v0.0.1
 *  Modifying display property and later adding a class on the element for smooth transitions.
 *  https://github.com/adrianleb/hideshowclass/
 *
 *  Made by Adrian le Bas
 *  Under MIT License
 */
(function() {
  var __slice = [].slice;

  (function($, window) {
    var defaults;
    defaults = {
      className: "",
      classElement: ""
    };
    return $.fn.showClass = function() {
      var i, k, options, v, _oldOptions;
      options = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (typeof options[0] === "object") {
        options = options[0];
      } else {
        _oldOptions = options;
        options = $.extend({}, defaults);
        i = 0;
        for (k in options) {
          v = options[k];
          options[k] = _oldOptions[i];
          i += 1;
        }
      }
      return this.each(function() {
        var add;
        $(this).show();
        add = (function(_this) {
          return function() {
            var classElement;
            classElement = _this;
            if (options.classElement.length) {
              classElement = options.classElement;
            }
            return $(classElement).addClass(options.className);
          };
        })(this);
        return window.requestAnimationFrame(add);
      });
    };
  })(jQuery, window);

  (function($, window) {
    var defaults;
    defaults = {
      className: "",
      classElement: ""
    };
    return $.fn.hideClass = function() {
      var i, k, options, v, _oldOptions;
      options = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (typeof options[0] === "object") {
        options = options[0];
      } else {
        _oldOptions = options;
        options = $.extend({}, defaults);
        i = 0;
        for (k in options) {
          v = options[k];
          options[k] = _oldOptions[i];
          i += 1;
        }
      }
      return this.each(function() {
        if (!options.classElement.length) {
          options.classElement = $(this);
        }
        return $(options.classElement).removeClass(options.className).on("transitionend", (function(_this) {
          return function() {
            var remove;
            $(options.classElement).off("transitionend");
            remove = function() {
              return $(_this).hide();
            };
            return window.requestAnimationFrame(remove);
          };
        })(this));
      });
    };
  })(jQuery, window);

}).call(this);
