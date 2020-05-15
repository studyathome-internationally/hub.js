export default {
  methods: {
    isYoutube(url) {
      const patterns = [
        /https:\/\/.*youtube\.com.*v=(.*?)(&.*)?$/,
        /https?:\/\/.*youtu\.be\/(.*?)(\?.*)?$/,
      ];
      const pattern = patterns.find((e) => e.exec(url));
      return url && pattern ? url.replace(pattern, (m, code) => code) : false;
    },
  },
};
