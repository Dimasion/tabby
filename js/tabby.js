;(function ( $ ) {
 
    $.fn.tabby = function( options ) {
        // This is the easiest way to have default options.
        var settings = $.extend({
          // These are the defaults.
          elRoot: ".tabby",
          elTab: ".tabby__tab",
          elContent: ".tabby__content",
          classActiveTab: "tabby__tab--active",
          welcome: true
        }, options );

        function Tabby() {
          var self = this;
          // ----------------------------
          // Private methods
          // ----------------------------

          function showActiveContent() {
            $('.' + settings.classActiveTab).each(function(index, item) {
              var activeTab = $(item).data('tab');
              var content = $(item)
                .closest(settings.elRoot)
                .find(settings.elContent + '[data-tab=' + activeTab + ']');
              $(content).show();
            });
          };

          function showContent(tab) {
            var tabData = $(tab).data('tab');
            var content = $(tab)
              .closest(settings.elRoot)
              .find(settings.elContent + '[data-tab=' + tabData + ']');
            hideContents(tab);
            cleanActiveTab(tab);
            setActiveTab(tab);
            $(content).fadeIn();
          };

          function setActiveTab(tab) {
            $(tab)
              .addClass(settings.classActiveTab)
              .css('pointer-events', 'none');
          }

          function cleanActiveTab(tab) {
            var tabs = $(tab)
              .closest(settings.elRoot)
              .find(settings.elTab);
            $(tabs)
              .removeClass(settings.classActiveTab)
              .css('pointer-events', 'all');
          };
          function hideContents(tab) {
            var contents = $(tab)
              .closest(settings.elRoot)
              .find(settings.elContent);
            $(contents).hide();
          };
          // ----------------------------
          // Public methods
          // ----------------------------
          this.init = function() {
            $(settings.elTab).on('click', function() {
              showContent(this);
            });

            settings.welcome
              ? console.log('Tabby init v0.1, to disable this message set option > welcome: false')
              : ''
            // Hide contents
            hideContents(settings.elTab);
            // Show active
            showActiveContent(self);
          }
          // ----------------------------
          // Initialization
          // ----------------------------
          this.init();
        }
        // Return object
        return new Tabby;
    };
}( jQuery ));