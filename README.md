# Weather app ☔️.

![Demo](assets/demo.gif)

This is app is a app showcase. We are going to use some stack technologies like.

- React Native.
- Expo 52.
- Weather API
- Redux Toolkit.
- Typescript.
- Jest and RNTL

## 📚 Roadmap.

- Set up expo project.
- Set up Eslint, Prettier
- Check the Rest API, understand how it works, and what parameters are requiered, to get the right information.
- Create Interfaces and Types based on the API
- Set up Redux and Redux persist.
- Create list of test.
- Create components matching the propossed test based on the requirements.
- Connect with physical location

## Installation

### Cloning and installing dependencies

Clone the project from the url, enter to the project folder and install the dependencies.

```bash
  cd weather-app
  yarn install
```

### Getting the API KEY

After that create a file into the root project folder called .env. Inside add your API_KEY that you can get for free on https://www.weatherapi.com/.

The file should look like this.

```bash
   EXPO_PUBLIC_API_KEY=c08ca7fa27ea453fb2c145802242312
```

This is an example key. This one isn't working, you have to get your own.

### Running the project.

Into the project folder, you can start the project running the command, or use the same commands to run an expo project.

For iOS

```bash
    npm run ios
```

For Android

```bash
    npm run android
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

To generate coverage

```bash
  npm run coverage
```

## Authors

@juanpaternina

- [Github Profile](https://www.github.com/juanpaternina)
- [Linkedin Profile](https://www.linkedin.com/in/juanpaternina)

## License

[MIT](https://choosealicense.com/licenses/mit/)
