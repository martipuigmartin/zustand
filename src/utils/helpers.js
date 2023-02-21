export const lowerNumberOption = (options, key) => options.reduce((prev, current) => (prev[key] < current[key]) ? prev : current);
