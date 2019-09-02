# React QuickHub GitHub User Search

QuickHub is a web application that allows you to search GitHub users and view information on their profile. This project uses the GitHub API to search for users in the database and display their profile information including repos.

### Prerequisites

You must first register for an account on GitHub if you don't already have one follow this link:

```
https://github.com/join
```

### Getting your Client ID/Secret key and entering it in the script.

1. Sign up and goto your account settings page:

```
https://github.com/settings/applications/new
```

2. Enter the following information:

<table class="table"><thead>
<tr>
<th>Field</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Application name</td>
<td>The name of your app</td>
</tr>
<tr>
<td>Homepage URL</td>
<td><code>https://YOUR_DOMAIN</code></td>
</tr>
<tr>
<td>Application description</td>
<td>The description of your app users will see (Optional)</td>
</tr>
<tr>
<td>Authorization callback URL</td>
<td><code>https://YOUR_DOMAIN/login/callback</code></td>
</tr>
</tbody>
</table>

3. Copy your Client ID and Client Secret

```
Go to GitHub personal settings, then click Developer settings -> OAuth Apps -> Select the app you created
and you should see a Client ID and Client Secret.
```

4. Create a file named called .env.local in the main project directory.

5. Add your Client ID and Client Secret as follows:

```
REACT_APP_GITHUB_CLIENT_ID="YOUR_CLIENT_ID"
REACT_APP_GITHUB_CLIENT_SECRET="YOUR_CLIENT_SECRET"

```

## Installation

1. Install dependencies in main project folder.

```
npm install
```

## Running the servers

1. Start React server

```
npm start
```

## Screenshots

![Search Users](https://i.imgur.com/kUGYVfq.png "Search Users")
![User Profile](https://i.imgur.com/6bSQRSA.png "User Profile")

## Built With

- React (hooks & context API)
- JavaScript
- NodeJS

## APIs used

- https://developer.github.com/v3/

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
