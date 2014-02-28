do ($ = jQuery, window) ->
  defaults =
    className: ""
    classElement: ""
  $.fn.showClass = (options...) ->
    if typeof options[0] is "object"
      options = options[0]
    else
      _oldOptions = options
      options = $.extend {}, defaults
      i = 0
      for k, v of options
        options[k] = _oldOptions[i]
        i += 1

    @each ->
      $(this).show()

      add = =>
        classElement = this
        if options.classElement.length
          classElement = options.classElement
        $(classElement).addClass options.className

      window.requestAnimationFrame add




do ($ = jQuery, window) ->


  defaults =
    className: ""
    classElement: ""


  $.fn.hideClass = (options...) ->

    if typeof options[0] is "object"
      options = options[0]
    else
      _oldOptions = options
      options = $.extend {}, defaults
      i = 0
      for k, v of options
        options[k] = _oldOptions[i]
        i += 1

    @each ->
      unless options.classElement.length
        options.classElement = $(this)

      $(options.classElement).removeClass(options.className).on "transitionend", =>
        $(options.classElement).off "transitionend"
        remove = =>
          $(this).hide()      
        window.requestAnimationFrame remove

