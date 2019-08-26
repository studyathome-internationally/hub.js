import { VuePressContext as BaseContext, VuePressPage as BasePage } from "../../types/VuePress";

export interface VuePressContext extends BaseContext {}

export interface VuePressPage extends BasePage {
  frontmatter: any;
}
