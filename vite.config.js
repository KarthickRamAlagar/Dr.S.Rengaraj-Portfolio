export default defineConfig({
  base: "/Dr.Rengaraj/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
