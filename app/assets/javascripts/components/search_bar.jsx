var searchBar = HabitrackApp.searchBar = React.createClass({
  getInitialState() {
    return { searchTerm: '' };
  },

  handleChange: function(event) {
    this.setState({ searchTerm:event.target.value });
  },


  render: function() {
    var users = this.props.items;
    var searchTerm = this.state.searchTerm.trim().toLowerCase();

    if(searchTerm.length > 0) {
      users = users.filter(function(friend) {
        return friend.toLowerCase().match(searchTerm);
      });
    }
    var usersList = users.map(function(username) {
      return <li className="list-username" key={ username }>{ username }</li>;
    });

    return (
      <div>
        <form id="friend-search-form">
          <input type="text" autoComplete="off" className="form-control friend-search-input" name="username" value={ this.state.searchTerm } onChange={ this.handleChange } placeholder="Friend's Username" />
          <input type="submit" className="btn btn-default hidden" value="+" />
        </form>
        <div className="filtered-user-list">
          <ul>
            { usersList }
          </ul>
        </div>
      </div>
    );
  }
});

HabitrackApp.renderSearchBar = function(usernames) {
  ReactDOM.render(
    <HabitrackApp.searchBar items={ usernames } />,
    document.getElementById('friend-search')
  );
}
