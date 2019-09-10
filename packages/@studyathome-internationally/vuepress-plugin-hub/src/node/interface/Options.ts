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
   * Frontmatter for entry page.
   */
  frontmatter?: Record<string, any>;
  /**
   * Layout for matched page.
   */
  itemLayout?: string;
  /**
   * Display in navbar.
   */
  nav?: {
    /**
     * Navbar title.
     */
    title: string;
    /**
     * Navbar order.
     */
    order: number;
  };
  /**
   * Enrollment config.
   */
  enroll?: {
    /**
     * Path to enrollment template.
     */
    template: string;
    /**
     * Path of generated enrollment.
     */
    path: string;
    /**
     * Layout for enrollment page.
     */
    enrollLayout: string;
  };
}

/**
 * Options for this plugin.
 */
export interface HubPluginOptions {
  directories: DirectoryClassifier[];
}
