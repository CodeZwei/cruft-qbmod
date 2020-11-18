# Roadmap

Add cleaner options to generate a project id.

```json
  "mod_id": "{{ cookiecutter.mod_name|title|replace(' ', '') }}",
```

Find a way to list an array of thumbnail images.

Find a way to record the create and updated timestamps.


## Testing and export

Reverse engineer a simpler way to launch a local game instance with the local mod in use. Especially a way to use the mod repo structure as is.

Maybe symlink in the mod folder into the public folder?
Maybe simplify the local server so it can be included in cruft.
Maybe wrap that in a launcher package instead (like spindle)

Add some Actions Workflows so that when a Tag is pushed, a release is created, and the exportable `.zip` file is created and uploaded to the release.

Maybe look into deploying to loverslab?
