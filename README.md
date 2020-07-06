# papertrail README

## Features

This extension will fetch (tail) event messages from papertrailapp.com and write it to the output pane. I built it to avoid having to switch between a browser and VS Code.

This is an unoffical extension. I am in no means associated to papertrail or solarwinds.

## Requirements

You will need to get an API (auth) token from papertrail first. Some information on this can be found in the official documentation on [https://help.papertrailapp.com/kb/how-it-works/http-api/#authentication]

## Extension Settings

This extension contributes the following settings:

- `papertrail.token`: Papertrail auth token (required)
- `papertrail.system_id`: Papertrail system id to filter (optional)
- `papertrail.group_id`: Papertrail group id to filter (optional)

## Known Issues

This is an inital release missing many, many features. Especially there currently is no command to stop receiving events. Use at your own risk.

## Release Notes

### 0.0.1

Initial release of papertrail.
