# Singlish Playwright Test Suite

This project contains automated UI and functional tests for the **Swift Translator** application using Playwright. The test suite validates the Singlish-to-Sinhala translation functionality.

## Project Overview

- **Application Under Test**: [Swift Translator](https://www.swifttranslator.com/)
- **Testing Framework**: Playwright (TypeScript)
- **Test Scope**: UI and Functional Testing
- **Browser Coverage**: Chromium

## Test Suite Details

### Total Test Count: **26 Tests**

The test suite is organized into **4 test files** with the following breakdown:

#### 1. **Positive Functional Tests** (IT23324510_positive_functional.spec.ts)
   - **Count**: 24 tests
   - **Purpose**: Validate correct translation of valid Singlish input to Sinhala
   - **Test Cases**:
     - Pos_Fun_0001: Greeting phrase
     - Pos_Fun_0002: Mixed-language input
     - Pos_Fun_0003: Short request
     - Pos_Fun_0004: Simple sentence
     - Pos_Fun_0005: Compound sentence
     - Pos_Fun_0006: Question sentence
     - Pos_Fun_0007: Imperative
     - Pos_Fun_0008: Polite phrase
     - Pos_Fun_0009: Negative sentence
     - Pos_Fun_0010 through Pos_Fun_0024: Various sentence structures

#### 2. **Negative Functional Tests** (IT23324510_negative_functional.spec.ts)
   - **Count**: 10 tests
   - **Purpose**: Validate that invalid or malformed inputs are rejected
   - **Test Cases**:
     - Neg_Fun_0001: Empty input
     - Neg_Fun_0002: Random symbols
     - Neg_Fun_0003: Numbers only
     - Neg_Fun_0004: English only
     - Neg_Fun_0005: Wrong spelling
     - Neg_Fun_0006: Slang input
     - Neg_Fun_0007: Mixed symbols
     - Neg_Fun_0008: Whitespace input
     - Neg_Fun_0009: Gibberish
     - Neg_Fun_0010: Special characters

#### 3. **Positive UI Tests** (IT23324510_positive_ui.spec.ts)
   - **Count**: 3 tests
   - **Purpose**: Validate UI behavior and rendering
   - **Test Cases**:
     - Pos_UI_0001: Real-time conversion display
     - Pos_UI_0002: Clear input functionality
     - Pos_UI_0003: Font rendering

#### 4. **Negative UI Tests** (IT23324510_negative_ui.spec.ts)
   - **Count**: 3 tests
   - **Purpose**: Validate edge cases and UI robustness
   - **Test Cases**:
     - Neg_UI_0001: Long UI lag handling
     - Neg_UI_0002: Overflow handling
     - Neg_UI_0003: Page reload behavior

---

## How Tests Are Conducted

### Test Flow:
1. **Navigation**: Navigate to the Swift Translator website
2. **Input Handling**: Enter Singlish text into the input textarea
3. **Event Simulation**: Simulate composition events to trigger translation
4. **Verification**: Assert expected Sinhala output

### Key Testing Techniques:
- **Element Interaction**: Using Playwright's `getByPlaceholder()`, `locator()`, and `getByRole()` methods
- **Text Input**: Sequential key pressing with `pressSequentially()` to simulate user input
- **Event Dispatching**: Composition events to trigger real-time translation
- **Assertion**: Comparing actual output with expected Sinhala text
- **Timeout Handling**: Network idle wait and custom navigation timeouts

### Test Execution Flow:
```
Test Start
  ↓
Navigate to https://www.swifttranslator.com/
  ↓
Clear and focus input field
  ↓
Enter Singlish text sequentially
  ↓
Dispatch composition/input events
  ↓
Wait for translation
  ↓
Assert output matches expected Sinhala
  ↓
Close page
  ↓
Test End
```

---

## How to Run Tests

### Prerequisites:
- Node.js (v16 or higher)
- npm

### Installation:
```bash
npm install
```

### Run All Tests:
```bash
npm test
```

### Run Tests in Headed Mode (see browser):
```bash
npm run test:headed
```

### Run Tests in UI Mode (interactive):
```bash
npm run test:ui
```

### Run Specific Test File:
```bash
npx playwright test tests/IT23324510_positive_functional.spec.ts
```

### Run Specific Test:
```bash
npx playwright test -g "Pos_Fun_0001"
```

### Run with Debug Mode:
```bash
npx playwright test --debug
```

### Generate and View Test Report:
```bash
npx playwright test
npx playwright show-report
```

---

## Project Structure

```
singlish-playwright/
├── tests/
│   ├── IT23324510_positive_functional.spec.ts   (24 tests)
│   ├── IT23324510_negative_functional.spec.ts   (10 tests)
│   ├── IT23324510_positive_ui.spec.ts           (3 tests)
│   └── IT23324510_negative_ui.spec.ts           (3 tests)
├── playwright.config.ts                          (Playwright configuration)
├── package.json                                  (Dependencies and scripts)
└── README.md                                     (This file)
```

---

## Test Results

- **Test Report Location**: `playwright-report/index.html`
- **Test Results Location**: `test-results/`

After running tests, view the HTML report:
```bash
npx playwright show-report
```

---

## Configuration

### Playwright Config (`playwright.config.js`)
- **Framework**: Playwright Test
- **Browser**: Chromium
- **Navigation Timeout**: 60000ms
- **Default Timeout**: 30000ms
- **Screenshot**: On failure

### Test Characteristics:
- **Network Idle Wait**: All tests wait for network idle before assertions
- **Composition Events**: Properly simulates IME composition for text input
- **Delay Between Keys**: 35ms delay to simulate natural user input
- **Page Cleanup**: Each test closes the page after completion

---

## Passing/Failing Criteria

### Positive Tests (Pass when):
- Translation output matches expected Sinhala text
- UI elements are visible and interactive
- Real-time conversion works correctly

### Negative Tests (Pass when):
- Invalid input is properly rejected
- UI gracefully handles edge cases
- System remains stable under stress

---

## Dependencies

```json
{
  "@playwright/test": "^1.58.0",
  "@types/node": "^25.0.10"
}
```

---

## Notes on Excel File

No Excel file is included in this repository. The test data is embedded directly in the TypeScript test files as JavaScript objects for streamlined execution and version control. If you need to export test results to Excel, you can:

1. Generate HTML reports: `npx playwright show-report`
2. Export JSON results: `npx playwright test --reporter=json`
3. Parse results programmatically and export to Excel

---

## Troubleshooting

### Common Issues:

1. **Tests failing due to network timeout**: Increase `navigationTimeout` in `playwright.config.js`
2. **Composition events not triggering translation**: Ensure the website handles browser composition events
3. **Flaky tests**: Increase timeout values or add additional wait conditions

### Debug Commands:
```bash
npx playwright test --debug              # Interactive debug mode
npx playwright test --trace on           # Generate trace for debugging
npx playwright test --headed             # Run with visible browser
```

---

## Author
IT23324510 - ITPM Assignment 1

## License
ISC
