const server = (done) => {
  if ($.app.isProd) {
    done(); 
    return;
  }

  $.browserSync.init({
    server: {
      baseDir: $.path.root,
    },
    open: false,
    notify: false,
  });

  done();
};

module.exports = server;
