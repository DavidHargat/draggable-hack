# draggable hack

Quick and dirty draggable image.

See `index.html` for an example.

# usage

### include

`<script src="draghack.js"></script>`

### add the `draghack` class

`<img class="draghack" src="image.png"></img>`

### OPTIONAL: put your image in a styled container

```
<head>
    <style>
    .container {
        border: solid 1px black;
        overflow: hidden;
        width: 300px;
        height: 300px;
    }
    </style>
</head>

<div class="container">
    <img class="draghack" src="image.png"></img>
</div>
```
