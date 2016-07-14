
import Backbone from 'backbone';
//import formPage from './entry';

const Write = Backbone.Model.extend({
  urlRoot: 'https://tiny-za-server.herokuapp.com/collections/hakchurinblog',
  default: {
    //title: $('.post-title').val(),
    //body: $('textarea').val()
  }
});

export default Write;
