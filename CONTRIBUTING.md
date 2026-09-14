# Contributing to CareMesh AI

Thank you for helping improve CareMesh AI.

## Before opening a change

1. Search [existing issues](https://github.com/hsussmart/caremesh-ai/issues).
2. Open an issue for significant behavior or architecture changes.
3. Keep changes focused and avoid committing secrets, patient identifiers, generated deployment output, or production data.
4. Add or update tests and documentation when behavior changes.

## Development workflow

1. Fork the repository and create a branch from `main`.
2. Install the Python and web-client dependencies.
3. Make the change using the existing formatting and naming conventions.
4. Run the relevant Python checks and `npm run lint` / `npm run build` in `democlient`.
5. Open a pull request that explains the problem, approach, validation, and any deployment impact.

## Healthcare safety

Changes that affect prompts, clinical data handling, or model output must preserve the project's safety boundaries. Do not present generated content as verified medical advice. Use synthetic or properly de-identified test data only.

## Reporting problems

Use [GitHub issues](https://github.com/hsussmart/caremesh-ai/issues/new) for reproducible bugs and feature requests. Report security vulnerabilities privately as described in [SECURITY.md](SECURITY.md).

By contributing, you agree that your contribution is provided under the repository's MIT License.
