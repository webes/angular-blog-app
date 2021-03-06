import commentsTemplate from './comments.html';

class CommentsDirective {
  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.scope = {};

    this.controller = 'CommentsController';
    this.controllerAs = 'ctrl';

    this.bindToController = {
      comments: '='
    };

    this.template = commentsTemplate;
  }
}

export default (...args) => {
  return new CommentsDirective(...args);
};

export { CommentsDirective };
