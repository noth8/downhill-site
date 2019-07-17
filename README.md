## :iphone: View Site

:link: [link](https://devmeed.com/downhill/)
<p align="center">
<img src="../assets/imac.png?raw=true" width="620" />
<img src="../assets/ipad.png?raw=true" width="350" style="padding-left:2px"/> 
<img src="../assets/iphone.png?raw=true" width="200" style="padding-left:25px"/>
</p>

<br/>
<br/>
<br/>

## :department_store: Project Structure
<br/>

```
├── dist/                          # Static version of the website
│   ├── css/                       # Folder for concatenated css files
│   ├── fonts/                     # All fonts files
│   ├── img/                       # Images
│   ├── js/                        # Javascript code
│   └── index.html                 # Landing page
├── src/                           # Source files
│   ├── fonts/                     # Fonts
│   │   └── fonts.list             # Google Fonts config
│   ├── img/                       # Site images
│   ├── js/                        # Javascript files
│   │   ├── bootstrap.js           # Enable/disable required modules
│   │   ├── entry.js               # Webpack entry point
│   │   └── main.js                # All user scripts
│   ├── styles/                    # Styles
│   │   ├── bootstrap/             # Bootstrap sass config
│   │   │   ├── bootstrap.scss     # Enable/disable required modules
│   │   │   └── _variables.scss    # Core setting
│   │   └── main.styl              # Main stylesheet file
│   ├── templates/                 # Site templates (Pug)
│   │   ├── pages/                 # Pug only looks for this dir
│   │   │   ├── sections           # Separate blocks for landing page template
│   │   │   │   ├── about.pug      # Company information block template
│   │   │   │   ├── contact.pug    # Contacts information block
│   │   │   │   ├── gallery.pug    # Image gallery block
│   │   │   │   └── offers.pug     # Offers and prizes block
│   │   │   └── index.pug          # Landing page template
│   │   ├── footer.pug             # Site footer
│   │   ├── header.pug             # Site header
│   │   ├── layout.pug             # Main layout
│   │   └── navigation.pug         # Site navigation
│   └── vendor/                    # Appears if CUSTOM_SOURCE options specified or fonts enabled.
│       ├── @fortawesome/          # Font awesome 
│       │   └── fontawesome-free/  # Font awesome source for editing
│       ├── bootstrap/             # Bootstrap source for editing
│       ├── googleFonts/           # Storage for downloaded fonts
│       └── magnific-popup/        # Mugnific-popup gallery source for editing
├── tmp/                           # Temporary folder
│   └── manifest/                  # Manifests for the production build
│       └── rev-images.json        # Hashed images names
├── .babelrc                       # Babel presets for latest js features
├── .eslintrc.js                   # ESLint config
├── .gitignore                     # List of files ignored by git
├── .prettierrc                    # Prettier formatter config
├── LICENSE                        # Project license
├── README.md                      # Description of the project
├── gulpfile.babel.js              # Gulpfile config and tasks
└── package.json                   # Node.js dependencies and scripts
```
