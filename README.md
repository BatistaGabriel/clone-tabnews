# clone-tabnews

Implementação do projeto do https://curso.dev

# MISC

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
npm pkg set type=module engines.node=$(node -v)
```
