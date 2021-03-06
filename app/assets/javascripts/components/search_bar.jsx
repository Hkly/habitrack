var searchBar = HabitrackApp.searchBar = React.createClass({
  getInitialState: function() {
    return { searchTerm: '' };
  },

  handleChange: function(event) {
    var inputValue = event.target.value;

    this.hideList();
    if(inputValue.length > 0) {
      this.showList();
    }

    this.setState({ searchTerm: inputValue });
  },

  makeUsersList: function(users) {
    var makeUsernameMarkup = function(username) {
      return <li className="list-username" key={ username }>{ username }</li>;
    };

    return users.map(makeUsernameMarkup);
  },

  showList: function() {
    $('.filtered-user-list').removeClass('hidden');
  },

  hideList: function() {
    $('.filtered-user-list').addClass('hidden');
  },

  render: function() {
    var users = this.props.items;
    var searchTerm = this.state.searchTerm.trim().toLowerCase();
    var matchSearchTerm = function(username) {
      return username.toLowerCase().match(searchTerm);
    };

    if(searchTerm.length > 0) {
      users = users.filter(matchSearchTerm);
    }

    return (
      <div>
        <form id="friend-search-form">
          <input
            type="text"
            autoComplete="off"
            className="form-control friend-search-input"
            name="username"
            value={ this.state.searchTerm }
            onChange={ this.handleChange }
            placeholder="Friend's Username" />
          <input
            type="submit"
            className="btn btn-default hidden"
            value="+" />
        </form>
        <div className="filtered-user-list hidden">
          <ul>
            { this.makeUsersList(users) }
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
