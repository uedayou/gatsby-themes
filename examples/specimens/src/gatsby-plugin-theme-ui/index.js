import { system } from "@theme-ui/presets"

export default {
  ...system,
  styles: {
    ...system.styles,
    root: {
      ...system.styles.root,
      "::selection": {
        color: `#fff`,
        backgroundColor: `#3490dc`,
      },
      "h1, h2, h3, h4, h5, h6": {
        marginTop: `2rem !important`,
        marginBottom: `1rem !important`,
      },
      h3: {
        marginTop: `6rem !important`,
      },
      ".sizes-table": {
        "> div:not(:first-of-type)": {
          paddingTop: `0.5rem !important`,
          paddingBottom: `0.5rem !important`,
        },
      },
      pre: {
        padding: `0.75rem`,
        borderRadius: `0.25rem`,
        fontSize: `1rem`,
        overflow: `auto`,
      },
      code: {
        backgroundColor: `rgb(30, 30, 30)`,
        color: `white`,
        padding: `0.25rem 0.5rem`,
        borderRadius: `0.25rem`,
        fontSize: `1rem`,
        marginLeft: `0.25rem`,
        marginRight: `0.25rem`,
      },
    },
  },
}
