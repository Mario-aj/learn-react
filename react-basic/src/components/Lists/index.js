import React, { Component } from "react";

class Lists extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      feed: [
        { id: 1, name: "Mario", likes: 30, comments: 10 },
        { id: 2, name: "Fernando", likes: 310, comments: 110 },
        { id: 3, name: "Jorgito", likes: 1760, comments: 600 },
        { id: 4, name: "Isabel", likes: 4, comments: 15 },
        { id: 5, name: "Foguinho", likes: 1, comments: 0 },
      ],
    };
  }
  render() {
    const { feed } = this.state;
    return (
      <div>
        <hr />
        <h1>Lists</h1>
        {feed.map((user) => (
          <>
            <div key={user.id}>
              <h4>name: {user.name}</h4>
              <span>
                {user.likes > 1 ? user.likes + " likes" : user.likes + " like"}
                {" / "}
                {user.comments > 1
                  ? user.comments + " comments"
                  : user.comments + " comment"}
              </span>
            </div>
            <hr />
          </>
        ))}
      </div>
    );
  }
}

export default Lists;
