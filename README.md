# angular-skeleton
___
### Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Documentation](#documentation)
* [Commits convention](#commits-convention)
* [Contributing](#contributing)

___

## Description
This is a skeleton for Angular projects. It contains the basic structure of an Angular project, with some useful tools and configurations such as:
* [Angular Material](https://material.angular.io/)
* Internationalization (i18n)
* Shared components


## Installation
Firstly, to install this project, you need to have [Node.js](https://nodejs.org/en/) installed on your machine. 

Then, you can clone this repository and run the following command:
```bash
git clone https://github.com/iSwamb/angular-skeleton.git
```

Change the remote URL to your repository:
```bash
git remote set-url origin [URL OF YOUR REPOSITORY]
```

After that, you need to install the dependencies:
```bash
npm install
```

Finally, you can run the project:
```bash
ng serve
```


## Documentation
As mentioned before, this project contains some useful tools and configurations. There are the explanations of each one of them: 

### Angular Material
Angular Material is a UI component library for Angular. It is a reference implementation of Google's Material Design Specification. You can find more information about it [here](https://material.angular.io/).

### Internationalization (i18n)
Internationalization is the process of designing a software application so that it can be adapted to various languages and regions without engineering changes. You can find more information about it [here](https://angular.io/guide/i18n).

In this skeleton you'll find a configuration for i18n. You can find the translations in the `src/assets/i18n` folder. By default, there are two languages: English and French. You can add more languages by adding a new JSON file in this folder. The name of the file must be the language code (e.g. `es.json` for Spanish).

Be careful about the organization of the translations. The keys must be organized by components. 

For example, if you have a component called `home.component.ts`, you need to create a key called `home` in the JSON file of each language. Then, you can add the translations of this component in this key.
```json
{
  "home": {
    "title": "Welcome to my website!"
  }
}
```

For general translations, you can set them in the root of the JSON file. For example:
```json
{
  "app": "My website"
}
```

To use the translations, you need to add the `translate` pipe to the HTML element you want to translate. If your want to uppercase the translation, you can add the `uppercase` pipe after the `translate` pipe. For example:
```html
<!-- General translation -->
<h1>{{ 'home.title' | translate }}</h1>

<!-- Uppercase translation -->
<h1>{{ 'home.title' | translate | uppercase }}</h1>
```

Also, be careful about the repetition of the translations. If you have a translation that is used in multiple components, you need to create a key for it in the JSON file of each language. Then, you can use it in the HTML element you want to translate. For example:
```json
{
  "app": {
    "title": "My website"
  },
  "home": {
    "title": "Welcome to my website!"
  }
}
```

### Shared components
In this skeleton, you'll find a folder called `shared`. This folder contains the components that are used in multiple components.

If you want to create a new shared component, just follow these steps:

1. Create a new folder in the `shared` folder. The name of the folder must be the name of the component in kebab case (e.g. `my-component`).
```bash
ng generate component shared/my-component
```

2. In the `shared.module.ts` file, add the component to the `declarations` and `exports` arrays.
```typescript
...
@NgModule({
  declarations: [
    MyComponentComponent // Add the component here
  ],
  imports: [
    ...
  ],
  exports: [
    MyComponentComponent // Add the component here
  ]
})
...
```

Finally, you can simply use the component in the HTML of the components you want. For example:
```html
<app-my-component></app-my-component>
```


## Commits convention
To make the commits more readable, we use a convention for the commit messages. The commit message must be structured as follows:

```bash
[GITMOJI][TYPE]: [DESCRIPTION]
[BODY]
```

For example:
```bash
🐛 fix: Fixing the bug of the login page
- Fixing the bug of the login page
```

To do that with Git, you can simply use the following command which will open a text editor where you can write your commit message:
```bash
git commit
```

Down below, you can find the list of the types of commits that you can use with the Gitmoji:

| Type  | Gitmoji | Description            |
|-------| --- |------------------------|
| init  | 🎉 | Initial commit         |
| tag   | 🔖 | Version tag            |
| feat  | ✨ | New feature            |
| fix   | 🐛 | Bugfix                 |
| docs  | 📝 | Documentation          |
| style | 🎨 | Cosmetic / Refactor code           |
| rem   | 🔥 | Removing code/files    |
| secu  | 🔒 | Security               |

Please, respect this convention when you make a commit, it's important for the readability of the commits !!!

## Contributing
If you want to contribute to this project, you can fork it and make a pull request. I will be happy to review your pull request and merge it if it's relevant :)
