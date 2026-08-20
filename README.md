# Quartz Comments Garden

A lightweight comment system for Quartz websites, powered by [Comments Garden](https://github.com/fardm/comments-garden).

## Installation

### 1. Deploy Comments Garden

First, deploy the Comments Garden backend by following the setup instructions in the [Comments Garden repository](https://github.com/fardm/comments-garden).

After deployment, you will have a Worker URL similar to:

`https://comments-garden.<your-username>.workers.dev`

### 2. Install the Quartz Plugin

Inside your Quartz project, run:

`npx quartz plugin add github:fardm/comments-garden-quartz`

Then open quartz.config.yaml to review the plugin configuration:

```yaml
- source: github:fardm/comments-garden-quartz
  enabled: true
  options:
    backendUrl: https://comments-garden.<your-username>.workers.dev
    type: full
  layout:
    position: afterBody
    priority: 100
```

Replace `backendUrl` with the Worker URL generated during the Comments Garden deployment.

### 3. Run Quartz

Start your Quartz website:

`npx quartz build --serve`

The comments section should now appear on your pages.

## Recent Comments

Comments Garden also provides a **Recent Comments** widget that can be displayed in the Quartz sidebar.

Add another instance of the plugin to your `quartz.config.ts`:

```yaml
- source: github:fardm/comments-garden-quartz
  enabled: true
  options:
    backendUrl: https://comments-garden.<your-username>.workers.dev
    type: recent
    limit: 8
  order: 100
  layout:
    position: right
    priority: 100
```

This will display the latest comments in the right sidebar of your Quartz website.
