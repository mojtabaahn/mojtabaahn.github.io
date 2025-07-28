import yaml from 'js-yaml';

export const loadData = async () => {
  try {
    const response = await fetch('/dataset.yaml');
    const yamlText = await response.text();
    return yaml.load(yamlText);
  } catch (error) {
    console.error('Error loading YAML data:', error);
    return null;
  }
};