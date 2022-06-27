## 🚨 Disclaimer - Template Application
>:warning: **This project is not maintained by VTEX, and this app is provided as a working example on how this feature can be implemented. Improvements and fixes will be on the implementation team side.**
>
>All template applications provided are developed by the VTEX community, you can use them freely.

&nbsp;
# VTEX Product Specification Image

## Disclaimer: this is not an official VTEX app
:loudspeaker:  This app is not supported by the product team. Use it on your own risk!

## Description

This app allows placing images from product specification fields into the template.



## Table of Contents

- [Usage](#usage)
- [CSS Handles](#css-handles)


## Usage
Clone the app and make it yours. Replace the vendor name with the name of your account.
To use this app, you need to import in your dependencies on `manifest.json`.

```json
  "dependencies": {
    "VENDOR.product-specification-image": "0.x"
  }
```

Then, you can add a component block into your app theme on your product detail page. It is mandatory to select the specification group and specification field name where the image url is stored. 

```json
 "productimage": {
    "props": {
      "blockClass": "Classname",
      "group": "Product media",
      "specification": "Highlights_Image_4",

    }
  },
```

## Props:
| Prop | Purpose | expected values| Default |
| ---- | ---- | ---- |---- |
| blockClass | defines a CSS class for the handles | string | undefined |
| specification | the specification field name to load the image from. **Mandatory** | string | undefined |
| group | The specification group name to look for the specification in **Mandatory** | string | undefined |
| maxWidth | CSS rule to apply on max with. PX or percent | string | undefined |
| maxHeight | CSS rule to apply on max height. PX or percent | string | undefined |
| minWidth | CSS rule to apply on min width. PX or percent | string | undefined |
| maxWidth | CSS rule to apply on max width. PX or percent | string | undefined |
| name | the image title | string | undefined |

## CSS handles
The following CSS handles can be used for styling:

```js
'containerEmpty'
'imageContainer'
```




