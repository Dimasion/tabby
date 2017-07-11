# Tabby

Super simple js tabs library.

### Usage:
 - HTML:
    ```html
    <div class="tabby">
    
      <div class="tabby__tabs">
        <div class="tabby__tab tabby__tab--active" data-tab="1">First</div>
        <div class="tabby__tab" data-tab="2">Second</div>
        <div class="tabby__tab" data-tab="3">Third</div>
      </div>
      
      <div class="tabby__contents">
        <div class="tabby__content" data-tab="1">Content 1</div>
        <div class="tabby__content" data-tab="2">Content 2</div>
         <div class="tabby__content" data-tab="3">Content 3</div> 
      </div>
      
    </div>
    ```
  - JS:
    ```js
    $.fn.tabby() - simple init
    
    $.fn.tabby(options) - init with custom settings
    
    var tabs = $.fn.tabby(); - init for api methods like:
        tabs.init();
    ```


### Api:
##### Options
- Defaults and will be changable (type - object):
    ```js
    elRoot: ".tabby", - root selector
    elTab: ".tabby__tab", - tab selector
    elContent: ".tabby__content", - tab content selector
    classActiveTab: "tabby__tab--active", - tab active class
    welcome: true/false - show info in console
    ```
##### Methods
When you called tabby, its automatically called init method.
```js
init() - init/update tabs
```