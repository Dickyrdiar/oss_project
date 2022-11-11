/* eslint-disable import/prefer-default-export */
import { Octokit } from '@octokit/rest';

export const octokit = new Octokit({
  auth: process.env.GITHUB_OUTH,
  has_issues: true,
  has_projects: true,
  has_wiki: true,
});
