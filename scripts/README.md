# GitHub Issues Generator

This script automatically creates GitHub issues for all epics and stories from `_bmad-output/planning-artifacts/epics.md`.

## Prerequisites

1. **Install GitHub CLI:**
   ```bash
   # macOS
   brew install gh

   # Or download from https://cli.github.com/
   ```

2. **Authenticate with GitHub:**
   ```bash
   gh auth login
   ```
   Follow the prompts to authenticate with your GitHub account.

## Usage

### 1. Preview (Dry Run)

To see what issues would be created without actually creating them:

```bash
# Edit the script and set DRY_RUN = true
node scripts/create-github-issues.js
```

### 2. Create Issues

To create all issues:

```bash
node scripts/create-github-issues.js
```

## What Gets Created

### Labels

The script creates the following labels:

- `epic-1` through `epic-8`: One label per epic (color-coded)
- `story`: All user stories get this label
- `ready-for-dev`: Indicates story is ready for implementation

### Issues

For each of the **49 stories**, a GitHub issue is created with:

- **Title:** `[Epic N] Story N.M: Story Title`
- **Body:** Contains:
  - Epic context and description
  - User story (As a/I want/So that)
  - Acceptance criteria (Given/When/Then/And)
  - Link back to epics.md
- **Labels:** Epic label + `story` + `ready-for-dev`

### Example Issue

```
Title: [Epic 1] Story 1.1: Initialize Next.js 16 Project with App Router

Body:
## Epic 1: Project Foundation & Infrastructure Setup

Development environment is ready with Next.js 16, proper tooling, and deployment pipeline configured for fast, reliable builds

---

## Story 1.1: Initialize Next.js 16 Project with App Router

### User Story

As a developer,
I want to create a new Next.js 16 project with App Router, TypeScript, Turbopack, and src directory structure,
So that I have a modern, performant foundation for building the wildlife photography portfolio.

### Acceptance Criteria

- **Given** I need to start the BMAD-site project
- **When** I run `npx create-next-app@latest` with flags: `--app`, `--typescript`, `--tailwind`, `--eslint`, `--turbopack`, `--src-dir`, `--import-alias "@/*"`
- **Then** A new Next.js 16 project is created with:
  - App Router structure in `src/app/`
  - TypeScript configuration file (`tsconfig.json`)
  - Tailwind CSS installed and configured
  ...

---

🤖 Generated from epics.md
```

Labels: `epic-1`, `story`, `ready-for-dev`

## Output

The script will show progress and results:

```
🚀 BMAD-site GitHub Issues Generator

✓ GitHub CLI is installed and authenticated

📖 Parsing epics.md...

Found 8 epics with 49 stories

🏷️  Creating epic labels...

✓ Created label: epic-1
✓ Created label: epic-2
...

📝 Creating GitHub issues...

📦 Epic 1: Project Foundation & Infrastructure Setup
   Creating 6 story issues...

   ✓ Story 1.1: https://github.com/[user]/BMAD-site/issues/1
   ✓ Story 1.2: https://github.com/[user]/BMAD-site/issues/2
   ...

============================================================

✅ GitHub Issues Creation Complete!

   Success: 49 issues

============================================================

🔗 View issues: gh issue list
🔗 Or visit: https://github.com/[user]/BMAD-site/issues
```

## Viewing Issues

After creation, you can:

1. **View in terminal:**
   ```bash
   gh issue list
   ```

2. **View in browser:**
   ```bash
   gh issue list --web
   ```

3. **Filter by epic:**
   ```bash
   gh issue list --label epic-1
   ```

4. **Filter by status:**
   ```bash
   gh issue list --state open --label story
   ```

## Project Board Integration (Optional)

You can create a GitHub project board to track stories:

1. Go to your repository on GitHub
2. Click **Projects** → **New project**
3. Choose **Board** view
4. Add columns: **Backlog**, **In Progress**, **Review**, **Done**
5. Add all issues with `story` label to the board

## Customization

Edit `scripts/create-github-issues.js` to customize:

- `DRY_RUN`: Set to `true` to preview without creating
- `CREATE_EPIC_LABELS`: Set to `false` to skip label creation
- Label colors and names
- Issue title/body format

## Troubleshooting

### "gh: command not found"

Install GitHub CLI: https://cli.github.com/

### "Not authenticated"

Run: `gh auth login`

### "Failed to create issue"

- Check you have write access to the repository
- Ensure you're in the correct repository directory
- Check GitHub API rate limits: `gh api rate_limit`

### Issues created in wrong repository

Make sure you're in the BMAD-site directory when running the script.

## Notes

- The script is **idempotent** with labels (uses `--force` flag)
- Issues are **NOT idempotent** - running twice creates duplicates
- Consider using `DRY_RUN` mode first to preview
- You can delete all created issues with:
  ```bash
  gh issue list --label story --json number --jq '.[].number' | xargs -I {} gh issue delete {}
  ```
