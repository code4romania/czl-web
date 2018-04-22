# Ce zicea legea - Web UI

[![GitHub contributors](https://img.shields.io/github/contributors/code4romania/czl-web.svg?style=for-the-badge)]() [![GitHub last commit](https://img.shields.io/github/last-commit/code4romania/czl-web.svg?style=for-the-badge)]() [![License: MPL 2.0](https://img.shields.io/badge/license-MPL%202.0-brightgreen.svg?style=for-the-badge)](https://opensource.org/licenses/MPL-2.0)

* LAWMAKING TRACKED  EVERY STEP OF THE WAY
* centralized information helps people stay informed
* automatization can help citizens track and monitor legal initiatives
* making a closed and complex environment accessible to all
* increasing accountability among legislators

[See the project live](http://cezicelegea.ro/)

With dozens of institutions involved in the process and incomplete information fragmented across a myriad of websites, it is almost impossible
for a regular citizen to follow the long process by which a proposal becomes law.

In these circumstances it is almost impossible to speak of active engagement in the legislative drafting process on the part of the citizens.

Right now people and entities interested in tracking legislation initiatives have to visit over 29 websites daily for updates. This places a large burden on legal
professionals, civil society actors and private corporations which are investing time and resources daily to stay up to date with legislation
initiatives. Once CeZiceLegea will be launched these costs will be reduced substantially.

CeZiceLegea aims to keep citizens informed at any time about changes in legislation and make them active participants in the legislative drafting process. Users will be able to track and
monitor proposed legislation through all the approval stages and be notified of the changes made.

As an extra feature, to give a sense of the wider context, CeZiceLegea will also allow access to current consolidated legislation.

[Built with](#built-with) | [Repos and projects](#repos-and-projects) | [Deployment](#deployment) | [Contributing](#contributing) | [Feedback](#feedback) | [License](#license) | [About Code4Ro](#about-code4ro)

## Built With

* [Create React App](https://github.com/facebookincubator/create-react-app) was used to bootstrap the project.
* [Material UI](https://material-ui-next.com/) will make it look awesome.
* [React Router](https://github.com/ReactTraining/react-router) powers the navigation.
* [Redux](https://redux.js.org/) for state management.
* [Storybook](https://github.com/storybooks/storybook) helps us with showcasing and developing decoupled components.

### Prerequisites

[Node](https://nodejs.org/en/) >= 8.9.4.

[Yarn](https://yarnpkg.com/en/) >= 1.3.2.

## Deployment

First of all, install dependencies:
```bash
yarn install
```

Launch application locally (http://localhost:3000/):

```bash
yarn start
```

Launch showcase of components (http://localhost:9009/):

```bash
yarn storybook
```

Run unit tests, [Jest](https://facebook.github.io/jest/)-based (not much here ATM, hackaton...):

```bash
yarn test
```

Generate a production build:

```bash
yarn build
```

## Repos and projects

Related projects:  
https://github.com/code4romania/czl-scrape  
https://github.com/code4romania/czl-api  

## Contributing

If you would like to contribute to one of our repositories, first identify the scale of what you would like to contribute. If it is small (grammar/spelling or a bug fix) feel free to start working on a fix. If you are submitting a feature or substantial code contribution, please discuss it with the team and ensure it follows the product roadmap.

* Fork it (https://github.com/code4romania/czl-web/fork)
* Create your feature branch (git checkout -b feature/fooBar)
* Commit your changes (git commit -am 'Add some fooBar')
* Push to the branch (git push origin feature/fooBar)
* Create a new Pull Request

List any pending features and planned improvements for the project.

## Feedback

* Request a new feature on GitHub.
* Vote for popular feature requests.
* File a bug in GitHub Issues.
* Email us with other feedback contact@code4.ro

## License

This project is licensed under the MPL 2.0 License - see the LICENSE.md file for details

## About Code4Ro

Started in 2016, Code for Romania is a civic tech NGO, official member of the Code for All network. We have a community of over 500 volunteers (developers, ux/ui, communications, data scientists, graphic designers, devops, it security and more) who work pro-bono for developing digital solutions to solve social problems. #techforsocialgood. If you want to learn more details about our projects [visit our site](https://www.code4.ro/en/) or if you want to talk to one of our staff members, please e-mail us at contact@code4.ro.

Last, but not least, we rely on donations to ensure the infrastructure, logistics and management of our community that is widely spread accross 11 timezones, coding for social change to make Romania and the world a better place. If you want to support us, [you can do it here](https://code4.ro/en/donate/).
