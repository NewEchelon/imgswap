# imgswap
simple if else script to swap images based on the src name 
ex.

Original Image: icon.png
Swap Image:     icon-dark.png

On Mouseover, the code looks at the image source for "-dark.png"
If this exists, the src does nothing, until mouseout.
If this does not exist, the src is appended to include "-dark.png"

On Mouseleave, the code looks at the image source for "dark.png"
If this does not exist, the src does nothing.
If this does exist, the src is truncated to remove "-dark.png"
