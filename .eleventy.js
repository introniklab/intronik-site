module.exports = function(eleventyConfig) {
  // Копируем папку со стилями в готовый сайт
  eleventyConfig.addPassthroughCopy("src/css");

  // Добавляем копирование папки с изображениями
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
