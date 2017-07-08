import React, { Component } from "react";
import { injectGlobal } from "styled-components";
import * as api from "./api";

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
    stories: []
  };

  componentWillMount() {
    const fetchedStories = api.stories;

    this.setState(Object.assign({}, this.state, { stories: fetchedStories }));
  }

  render() {
    return <StoryList items={this.state.stories} />;
  }
}

export default App;
