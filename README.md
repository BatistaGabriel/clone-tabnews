# clone-tabnews

Implementação do projeto do https://curso.dev

## Start Here

### Running the Project

If this is your first time interacting with a `Node` project, there are a few things you need to do before getting the project up and running. First, install `node` and `nvm` -- both are important to have on your machine.

Once you have installed node, we can move on to installing all the necessary dependencies for the project. You can do this by executing the following command:

```bash
npm install
```

After this command is executed and all the dependencies are installed, it is time to use the `dev` script to get the project up and running. To see what this script will do, go to `package.json` and look under the `scripts` section for the key `dev`.

To run this script, use the following command:

```bash
npm run dev
```

### Adjusting Your Editor

_All the configurations mentioned here were performed using `vscode` as the editor._

First of all, make sure to install editor plugins capable of interacting with the `.editorconfig` and `.prettierignore` files. If you are using `vscode`, you can search for `editorconfig` and `prettier`.

After installing those plugins, configure your editor by going to the `Settings` page and following these steps:

- Search for `formatter` and set the default formatter to `Prettier`.
- Search for `format on save` and enable the option to format the file on save.
- Search for `auto save` and turn this option `off`.

### Environment variables

We use the environment variables approach to avoid hard-coded values for security reasons. The file containing variables for your `production environment` **should NEVER be committed** as part of the codebase.

For `development`, we are using a file called `.env.development`, located at the same level as the `.nvmrc` file. There, you will find all the necessary environment variables for running the application locally.

## Linting

### Fixing Local Linting Issues

To fix linting issues before you commit code, you can create a `pre-commit hook`, which will help you avoid sending code to the codebase that might break your lint build. Since hooks _are not managed by Git_, you need to configure them on your machine.

First, create the `pre-commit` file using the command:

```bash
touch .git/hooks/pre-commit
```

Then, edit this file to call the `lint:prettier:fix` script, which will be responsible for fixing linting issues. Your file should look like this:

```bash
#!/bin/sh
npm run lint:prettier:fix
```

If you encounter permission issues, grant the following permission to the `pre-commit` file:

```bash
chmod +x .git/hooks/pre-commit
```

## Working with NVM

### Setting .nvmrc file content

To follow some best practices on node projects, we will use [NVM](https://github.com/nvm-sh/nvm). One of the required things in the project is to have on the root of your project folder a file called `.nvmrc` which should contain the node version that better suits the project.
This will allow other developers who use nvm to run your project in the correct version. We can set the content of this file by using the following command:

```bash
node -v > .nvmrc
```

### Setting project engines

Another best practice is to set the engines that your project requires, like the .nvmrc file approach this one will indicate node which engine your project uses and this will taken into consideration when installing libs to the project.
We can set that information after the project creation by running the following command:

```bash
npm pkg set engines.node=$(node -v)
```
