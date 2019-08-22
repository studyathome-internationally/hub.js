import { handleOptions } from "./handleOptions";
import { HubPluginOptions } from "./interface/Options";

module.exports = (options: HubPluginOptions, ctx: any) => {

    const {} = handleOptions(options, ctx);

    return {
        name: "vuepress-plugin-hub"
    }
}