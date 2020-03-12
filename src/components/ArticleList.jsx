import React from "react";
import { connect } from "react-redux";

class ArticleList extends Component {
    constructor(props) {
      super(props);
      this.state = {

      }
    }


  const ConnectedList = ({ articles }) => (
    <ul>
      {articles.map(el => (
        <li key={el.id}>{el.title}</li>,
        <li key={el.id}>{el.author}</li>
      ))}
    </ul>
  );
}

function mapStateToProps(state, props) {
  return {
    articles: state.article
  }
};

mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators()
  }
}

const ArticleListConnected = connect(mapStateToProps)(ConnectedList);

export default ArticleListConnected;
