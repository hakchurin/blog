import $ from 'jquery';
import Backbone from 'backbone';
//import formPage from './entry';
import Write from './post';




function renderPosts() {
    let $posts = $(`
    <div class="postContainer">
      <h2>New Post</h2>
      <form>
        <input type="text" name="title" class="post-title" placeholder="Title">
        <textarea name="body"  placeholder="write here"></textarea>
        <input type="submit" class="submit" name="submit" value="submit">
      </form>
    </div>
  `);
    $posts.find('input[type="submit"]').on('click', function(evt) {
        evt.preventDefault();
        var write = new Write({
            title: $('.post-title').val(),
            body: $('textarea').val()
          });
            write.save();
      });
    $('.container').append($posts);
    return $posts;
}
console.log(renderPosts);
export default renderPosts;
