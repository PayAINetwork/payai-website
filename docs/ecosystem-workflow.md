# Reviewing ecosystem submissions

Public issues are proposals only. They do not start a workflow or publish a project.

1. Check the submission's live PayAI integration, public statement, text and links.
2. Ask the applicant to upload a PNG, JPEG or WebP image directly to the issue (maximum 2 MiB). External hosts and SVG are not accepted.
3. Run **Add Project to Ecosystem** from `main`, supplying the issue number. For example: `gh workflow run add-project.yml --ref main -f issue_number=123`.
4. Review the generated draft PR. Approve pending GitHub Actions runs if GitHub requests it, then require the `navigation` and `security` checks and an independent review before merging.

Only repository writers can dispatch the workflow. It checks both the original actor and the person re-running a job. Image retrieval happens in a separate job without repository write permission; every redirect must stay on an approved GitHub image host. The publisher checks the artifact again, verifies the issue has not changed and creates only two data files on a new submission branch. It cannot update `main` or merge a PR. Website and testimonial links are reviewed manually rather than fetched by automation.

An existing submission branch is never overwritten. If processing must be repeated, review the existing branch and PR first, then remove the obsolete branch intentionally before starting a new run.

## Incident recovery

Do not restore the old issue-triggered workflow. Keep protected-branch reviews, required checks and administrator enforcement enabled. Never add environment dumps or credential values to issues, PRs, application routes or build logs. Build and validate a fresh deployment without reused build cache before promoting it after an incident.
