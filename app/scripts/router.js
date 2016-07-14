import $ from 'jquery';
import Backbone from 'backbone';
import $posts from './formPage';
import $information from './personForm';



const Router = Backbone.Router.extend({
    routes: {
        posts: 'postsFunction',
  information: 'informationFunction'
    },
    postsFunction: function() {
        $('.container').append($posts);
        console.log('hi');
    },
    informationFunction: function() {
        $('.container').append($information);
        console.log('hi');
    }
});



const router = new Router();
export default router;
