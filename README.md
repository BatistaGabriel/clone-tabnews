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

### Running the Container

In order to work with the `PostgreSQL` database instance locally, we are utilizing containers. This requires you to have the `postgresql-client` installed on your machine so that you can connect to the database once the container is operational.

To start the container, you can use the following command:

```bash
docker compose -f infra/compose.yaml
```

### Environment Variables

We use the environment variables approach to avoid hard-coded values for security reasons. The file containing these variables should NEVER be committed as part of the code base.

You must create this file yourself. To do so, navigate to the root folder of the application. At the same level as the `.nvmrc` file, create a file named `.env.development`.

Once you create the file, it should contain all the necessary environment variables, for example:

```bash
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_DB=postgres
POSTGRES_PASSWORD=mySuperUnhackablePassword
```
