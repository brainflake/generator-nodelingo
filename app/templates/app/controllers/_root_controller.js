exports.index = function(req, res, next) {
  <% if (handlebars) { %>
  	res.render('index')
  <% } else { %>
    res.send('hi!')
  <% } %>
}
