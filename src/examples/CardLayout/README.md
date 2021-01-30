https://moderncss.dev/container-query-solutions-with-css-grid-and-flexbox/

## When to Use Each Method

### Choose `grid` if:

- Equal-width columns with more "reader friendly" minimum width settings are a priority (`ch` vs. `rem`)
- It's more desirable for columns to break a bit more independently when they arrive at the minimum acceptable width
- "Orphan" columns for odd numbers of columns are acceptable (seen on the demo at a mid-size viewport)

### Choose `flex` if:

- You need variable width columns that still have "breakpoint" behavior based on container size
- Lack of full `gap` support is not an issue

### Choose the Flexbox Albatross if:

- It's acceptable for columns to hit the breakpoint simultaneously
- Fallout of adjustment of that breakpoint is acceptable (possibility of extra columns breaking to rows as described)
- You want the `flex-basis` breakpoint to be the parent's width

### Choose the Deconstructed Pancake if:

- You want the `flex-basis` breakpoint based on the item width
- You want items to break to new rows on an individual basis
- You want to use CSS units like `ch` that aren't allowed in `calc`
