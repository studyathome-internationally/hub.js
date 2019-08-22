/**
 * A Directory-based Classifier
 */
export interface DirectoryClassifier {
  /**
   * Unique id for current classifier.
   */
  id: string;
  /**
   * Matched directory name.
   */
  dirname: string;
  /**
   * Entry page for current classifier.
   */
  path: string;
  /**
   * Layout component name for entry page.
   */
  layout?: string;
  /**
   * Layout for matched page.
   */
  itemLayout?: string;
}

/**
 * Options for this plugin.
 */
export interface HubPluginOptions {
  directories: DirectoryClassifier[];
}
