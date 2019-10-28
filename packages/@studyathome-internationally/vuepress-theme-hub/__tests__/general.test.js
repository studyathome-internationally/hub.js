import components from "./components.vue";

for (const component in components) {
  describe(component, () => {
    // Inspect the raw component options
    const componentName = components[component].name;
    it(`has a property name (${componentName})`, () => {
      expect(typeof componentName).toBe("string");
    });
  });
}
