# Interview

Hello. This is an interactive project designed to be used for interviewing frontend, backend, and full-stack engineers using a Next.js project.

## Exercises

### Run the project.

As stated above, this is a Next.js project. Run it.

### Show the actual color data.

The home page says "here are some colors", but there aren't any colors. Fix the bug in `page.tsx` that's causing this.

### List it.

Instead of just listing the JSON, show the colors in an un-ordered list as `* {Name}: {HEX}`

### Add more colors.

The data comes from an API. Add some more colors to the API output.

### Show some color.

The list looks a bit dull. Make the background of each item the color.

### Ensure contrast.

With the default settings (white font color), not everything is readable. Set the font color dynamically based on the background color.

### Sort the colors.

The colors currently don't have any thoughtful sort order. Order them by name of the color (case-insensitive).

### Sort the colors multiple ways.

Add an option for the user to choose the sorting: by name or hex value (case-insensitive).

### Improve the typing of the colors.

Currently the `Colors` const says that the values are `string`s, which allows non-color values. Change the type to require a hex value.
