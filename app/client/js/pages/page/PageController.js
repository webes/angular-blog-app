class PageController {
  static $inject = [
    '$stateParams',
    'setTitle',
    'Post'
  ];

  constructor($stateParams, setTitle, Post) {
    this.deps = {
      $stateParams,
      setTitle,
      Post
    };

    this.pageNumber = Number($stateParams.pageNumber) || 1;

    this.title = `Blog app - Page ${this.pageNumber}`;

    setTitle(this.title);

    this.loadPosts();
  }

  loadPosts() {
    const {
      Post
    } = this.deps;

    Post.$page(this.pageNumber).$then((posts) => {
      this.posts = posts;
    });
  }
}

export default PageController;
