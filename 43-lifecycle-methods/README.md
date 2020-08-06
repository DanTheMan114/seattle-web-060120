- What were some of the pain points in mod 3 ( think back to your project, what was frustrating to do as you were writing code )

# Intro to some tools that we will use in React:

### npm:

- packages javascript code

### babel:

- 

### jsx:

- `erb` for javascript

### webpack:

- allows us to `import` and `export`

```HTML
Convert some Element and render them onto the page using React:
{
/* <div class="ui inverted red menu">
      <a class='item'>
        <h2 class="ui header">
          <i class="bug icon"></i>
          <div class="content">
            bugger
          </div>
        </h2>
      </a>
    </div> */
}
```


```HTML
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css">
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
</head>

<body>
    <div id="main"></div>
    <script type="text/babel" src="index.js"></script>
</body>

</html>
```

# Lifecycle Methods:

- `constructor()`:
    - set initial `state`
    - construct our whole react component for us
- `render()`:
    - displays to the screen
        - components/Ui/JSX
    - whenever there is a change → there is change in `state` → `render()`
- `componentDidMount()`:

```jsx
componentDidMount(){
    fetch("http://localhost:3000/paintings")
    .then(res => res.json())
    .then(data => { this.setState({paintings: data})})
  }
```

- `componentDidUpdate()`:

```jsx
componentDidUpdate(prevProps, prevState) {
      if (prevState.paintings !== this.state.paintings) {
        console.log('Paintings have changed')
      }
    }
```

- `componentWillUnmount()`