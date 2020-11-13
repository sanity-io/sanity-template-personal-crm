# Running the template (for developing the Starter)

To run this locally, you'll want to rename `~/studio/.env-template` to `~/studio/.env.development` and modify the values for a project with your test data.

From there, you'll be able to run `sanity start` inside the Studio like normal.

If you want to create a frontend for the Starter, use [sanity.io/create](https://create.sanity.io) to create a new project with test data, and then create the frontend as a sibling to the `/studio` directory.

You'll then modify the `/.sanity-template/manifest.json` to describe the new site for Netlify following [the official guide](https://www.sanity.io/guides/creating-a-1-click-sanity-starter-project#creating-metadata-and-deployment-information-in-sanity-templatejson-977da85223dc).

## Use this starter template to make your own starter

Feel free to hit the [”Use this template”](https://github.com/sanity-io/sanity-template-personal-crm/generate) button to make your own starter that can be deployed through sanity.io/create.

Check out our [documentation for building starter templates](https://www.sanity.io/docs/starter-templates).

[Let us know in the #i-made-this channel in our Slack community if you have made one, and in #help if you need help](https://slack.sanity.io).

