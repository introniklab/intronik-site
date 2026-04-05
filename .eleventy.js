export default function(eleventyConfig) {
  // Копируем папки со стилями и изображениями
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
