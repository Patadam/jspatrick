# Global Scope Content
Global Scope Content includes all content found in the global folder, which spans across multiple projects and applications

Global Scope Content includes, Global Styling, Global Javascript Functions & the template bases for new projects.

> Changes to any of these documents may have significant dominoes effects - BE CAUTIOUS


## Adjusting Styling
To adjust styling, enter the global.scss files and alter the HTML or HTML[data-theme=dark] styling to adjust colour. All cross project colour originates from this point.

Additionally, font-sizing is cross project and originates from this file. Consider using a different pre-existing style as an alternate to altering, or where you can not, consider creating a new project specific styling or new style class.

## Adjusting Functions
To adjust functions, enter the /Global/Functions/global.js file. When altering functions please consider all projects which might rely on the operation of that function, consider alternative methods to achieve your result or create a new function. Please try to make functions as cross project compatable as possible, Code in this document should be refined and refactored for best efficiency.

## Adjusting Base Documents
When Updating this document, please be aware that other documents will not update automatically, Manual adjustment to all pre-existing documents is required. You will also need to fill in the link references for your Project Specific CSS & Javascript.