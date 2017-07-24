import React, { Component } from "react";
import { injectGlobal } from "styled-components";

import Api from "./api";
import StoryList from "./containers/StoryList";
import NavBar from "./components/NavBar";

// eslint-disable-next-line no-unused-expressions
injectGlobal`
@font-face {
  font-family: 'Verdana, Geneva, sans-serif' 
}
body {
  margin: 0;
}
`;

function fetchSingleStory(id, index) {
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

class App extends Component {
  state = {
    newStories: []
  };

  fetchNewStories(storyIds) {
    let actions = storyIds.slice(0, 30).map(fetchSingleStory);
    let results = Promise.all(actions);
    results.then(data =>
      this.setState(
        Object.assign({}, this.state, {
          newStories: data
        })
      )
    );
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
    return (
      <div>
        <NavBar />
        <StoryList items={this.state.newStories} />
      </div>
    );
  }
}

export default App;
