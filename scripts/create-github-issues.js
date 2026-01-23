#!/usr/bin/env node

/**
 * GitHub Issues Generator for BMAD-site Epics and Stories
 *
 * This script parses the epics.md file and creates GitHub issues for each story.
 *
 * Prerequisites:
 * 1. Install GitHub CLI: brew install gh (macOS) or see https://cli.github.com/
 * 2. Authenticate: gh auth login
 * 3. Run: node scripts/create-github-issues.js
 */

const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

// Configuration
const EPICS_FILE = path.join(__dirname, '../_bmad-output/planning-artifacts/epics.md');
const CREATE_EPIC_LABELS = true; // Create epic labels
const DRY_RUN = false; // Set to true to preview without creating issues

// Parse the epics.md file
function parseEpicsFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const epics = [];
  let currentEpic = null;
  let currentStory = null;
  let inStorySection = false;
  let inAcceptanceCriteria = false;

  const lines = content.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Epic detection: ## Epic N: Title
    if (line.match(/^## Epic \d+:/)) {
      if (currentEpic && currentStory) {
        currentEpic.stories.push(currentStory);
      }

      const epicMatch = line.match(/^## Epic (\d+): (.+)$/);
      if (epicMatch) {
        currentEpic = {
          number: parseInt(epicMatch[1]),
          title: epicMatch[2].trim(),
          description: '',
          stories: []
        };
        epics.push(currentEpic);
        currentStory = null;
        inStorySection = false;
      }
      continue;
    }

    // Story detection: ### Story N.M: Title
    if (line.match(/^### Story \d+\.\d+:/)) {
      if (currentStory) {
        currentEpic.stories.push(currentStory);
      }

      const storyMatch = line.match(/^### Story (\d+)\.(\d+): (.+)$/);
      if (storyMatch) {
        currentStory = {
          epicNumber: parseInt(storyMatch[1]),
          storyNumber: parseInt(storyMatch[2]),
          title: storyMatch[3].trim(),
          userStory: '',
          acceptanceCriteria: []
        };
        inStorySection = true;
        inAcceptanceCriteria = false;
      }
      continue;
    }

    // Capture epic description (first paragraph after epic title)
    if (currentEpic && !currentStory && !currentEpic.description && line.trim() && !line.startsWith('#') && !line.startsWith('**')) {
      currentEpic.description = line.trim();
      continue;
    }

    // Capture user story (As a... I want... So that...)
    if (inStorySection && !inAcceptanceCriteria && currentStory) {
      if (line.startsWith('As a ') || line.startsWith('I want ') || line.startsWith('So that ')) {
        currentStory.userStory += line.trim() + '\n';
      }

      if (line.includes('**Acceptance Criteria:**')) {
        inAcceptanceCriteria = true;
      }
      continue;
    }

    // Capture acceptance criteria
    if (inAcceptanceCriteria && currentStory) {
      if (line.startsWith('**Given**') || line.startsWith('**When**') || line.startsWith('**Then**') || line.startsWith('**And**')) {
        currentStory.acceptanceCriteria.push(line.trim());
      }

      // Stop at next story or epic
      if (line.startsWith('###') || line.startsWith('##')) {
        inAcceptanceCriteria = false;
      }
    }
  }

  // Add last story
  if (currentEpic && currentStory) {
    currentEpic.stories.push(currentStory);
  }

  return epics;
}

// Create GitHub label
function createLabel(name, color, description) {
  try {
    execSync(`gh label create "${name}" --color "${color}" --description "${description}" --force`, {
      stdio: 'pipe'
    });
    console.log(`✓ Created label: ${name}`);
  } catch (error) {
    // Label might already exist, ignore error
  }
}

// Create GitHub issue
function createIssue(title, body, labels) {
  const labelsStr = labels.map(l => `"${l}"`).join(',');

  if (DRY_RUN) {
    console.log(`[DRY RUN] Would create issue: ${title}`);
    console.log(`Labels: ${labels.join(', ')}`);
    console.log(`Body length: ${body.length} chars`);
    console.log('---');
    return null;
  }

  try {
    const result = execSync(
      `gh issue create --title "${title.replace(/"/g, '\\"')}" --body "${body.replace(/"/g, '\\"')}" --label ${labelsStr}`,
      { encoding: 'utf-8' }
    );
    return result.trim();
  } catch (error) {
    console.error(`✗ Failed to create issue: ${title}`);
    console.error(error.message);
    return null;
  }
}

// Format story as GitHub issue
function formatStoryAsIssue(epic, story) {
  const title = `[Epic ${epic.number}] Story ${story.epicNumber}.${story.storyNumber}: ${story.title}`;

  let body = `## Epic ${epic.number}: ${epic.title}\n\n`;
  body += `${epic.description}\n\n`;
  body += `---\n\n`;
  body += `## Story ${story.epicNumber}.${story.storyNumber}: ${story.title}\n\n`;
  body += `### User Story\n\n`;
  body += story.userStory + '\n';
  body += `### Acceptance Criteria\n\n`;

  story.acceptanceCriteria.forEach(ac => {
    body += `- ${ac}\n`;
  });

  body += `\n---\n\n`;
  body += `🤖 Generated from [epics.md](_bmad-output/planning-artifacts/epics.md)\n`;

  return { title, body };
}

// Main execution
function main() {
  console.log('🚀 BMAD-site GitHub Issues Generator\n');

  // Check if gh CLI is installed
  try {
    execSync('gh --version', { stdio: 'pipe' });
  } catch (error) {
    console.error('❌ GitHub CLI (gh) is not installed.');
    console.error('Install it from: https://cli.github.com/');
    console.error('Or on macOS: brew install gh');
    process.exit(1);
  }

  // Check if authenticated
  try {
    execSync('gh auth status', { stdio: 'pipe' });
  } catch (error) {
    console.error('❌ Not authenticated with GitHub CLI.');
    console.error('Run: gh auth login');
    process.exit(1);
  }

  console.log('✓ GitHub CLI is installed and authenticated\n');

  // Parse epics file
  console.log(`📖 Parsing ${EPICS_FILE}...\n`);
  const epics = parseEpicsFile(EPICS_FILE);
  console.log(`Found ${epics.length} epics with ${epics.reduce((sum, e) => sum + e.stories.length, 0)} stories\n`);

  // Create epic labels
  if (CREATE_EPIC_LABELS) {
    console.log('🏷️  Creating epic labels...\n');
    epics.forEach(epic => {
      const labelName = `epic-${epic.number}`;
      const colors = ['0E8A16', '1D76DB', '5319E7', 'B60205', 'D93F0B', 'FBCA04', '0052CC', 'E99695'];
      const color = colors[(epic.number - 1) % colors.length];
      createLabel(labelName, color, `Epic ${epic.number}: ${epic.title}`);
    });
    console.log();
  }

  // Create story-related labels
  console.log('🏷️  Creating story labels...\n');
  createLabel('story', 'C5DEF5', 'User story for implementation');
  createLabel('ready-for-dev', '0E8A16', 'Story is ready for development');
  console.log();

  // Create issues for each story
  console.log('📝 Creating GitHub issues...\n');
  let successCount = 0;
  let failCount = 0;

  epics.forEach(epic => {
    console.log(`\n📦 Epic ${epic.number}: ${epic.title}`);
    console.log(`   Creating ${epic.stories.length} story issues...\n`);

    epic.stories.forEach(story => {
      const { title, body } = formatStoryAsIssue(epic, story);
      const labels = [`epic-${epic.number}`, 'story', 'ready-for-dev'];

      const issueUrl = createIssue(title, body, labels);

      if (issueUrl) {
        console.log(`   ✓ Story ${story.epicNumber}.${story.storyNumber}: ${issueUrl}`);
        successCount++;
      } else if (!DRY_RUN) {
        console.log(`   ✗ Story ${story.epicNumber}.${story.storyNumber}: Failed`);
        failCount++;
      }
    });
  });

  console.log('\n' + '='.repeat(60));
  console.log('\n✅ GitHub Issues Creation Complete!\n');
  console.log(`   Success: ${successCount} issues`);
  if (failCount > 0) {
    console.log(`   Failed:  ${failCount} issues`);
  }
  console.log('\n' + '='.repeat(60));
  console.log('\n🔗 View issues: gh issue list');
  console.log('🔗 Or visit: https://github.com/[your-username]/BMAD-site/issues\n');
}

// Run the script
main();
