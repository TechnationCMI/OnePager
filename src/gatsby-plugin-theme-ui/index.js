import baseTheme from "@lekoarts/gatsby-theme-jodie/src/gatsby-plugin-theme-ui"
import { merge } from "theme-ui"

export default merge(baseTheme, {
    colors: {
        primary: `#ADBFE1`,
        primaryLight: `#ADBFE1`,
    },
    sidebar: {
        normal: `250px`,
        wide: `250px`,
    },
})