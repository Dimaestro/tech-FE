export default {
  parserPreset: {
    parserOpts: {
      headerPattern:
        /^(feat|fix|wip|patch|build|docs|style|refactor|test|chore)\/([A-Z]{3}-\d+):\s+([a-zA-Z0-9-]+)\s*\|\s*([a-zA-Z0-9-_. ]+)$/,
      headerCorrespondence: ['type', 'scope', 'component', 'subject'],
    },
  },
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'wip',
        'patch',
        'build',
        'docs',
        'style',
        'refactor',
        'test',
        'chore',
      ],
    ],
    'scope-case': [2, 'always', 'upper-case'],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-max-length': [2, 'always', 72],
    'body-max-line-length': [2, 'always', 100],
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
    'footer-max-line-length': [2, 'always', 100],
  },
};
