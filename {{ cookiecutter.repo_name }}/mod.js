(() => {
  const mod = new Mod("{{ cookiecutter.mod_id }}");
  mod.name = "{{ cookiecutter.mod_name }}";

  mod.init = () => {
    // Add setup code here
  };

  mod.boot = () => {
    // Add on reload code here
  }
})();
