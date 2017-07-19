import React, { Component } from "react";
import { injectGlobal } from "styled-components";

import Api from "./api";
import StoryList from "./containers/StoryList";

// eslint-disable-next-line no-unused-expressions
injectGlobal`
@font-face {
  font-family: 'Verdana, Geneva, sans-serif' 
}
body {
  margin: 0;
}
`;

class App extends Component {
  state = {
    newStories: []
  };

  fetchNewStories(storyIds) {
    let actions = storyIds.slice(0, 30).map(this.fetchSingleStory);
    let results = Promise.all(actions);
    results.then(data =>
      this.setState(
        Object.assign({}, this.state, {
          newStories: data
        })
      )
    );
  }

  fetchSingleStory(id, index) {
    const rank = index + 1;
    return new Promise(resolve => {
      Api.fetch(`/item/${id}`, {
        then(data) {
          let item = data;
          // add the rank since it does not exist yet
          item.rank = rank;
          resolve(item);
        }
      });
    });
  }

  componentDidMount() {
    Api.fetch(`/newstories`, {
      context: this,
      then(storyIds) {
        this.fetchNewStories(storyIds);
      }
    });
  }

  render() {
    return <StoryList items={this.state.newStories} />;
  }
}

export default App;
