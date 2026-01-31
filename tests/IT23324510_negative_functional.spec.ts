import { test, expect } from "@playwright/test";

const testCases = [
  {
    id: "Neg_Fun_0001",
    name: "Empty input",
    input: "mamanaannayanavaa",
    expected: "Invalid input",
  },
  {
    id: "Neg_Fun_0002",
    name: "Random symbols",
    input: "matapaankannaoonee",
    expected: "something-wrong",
  },
  {
    id: "Neg_Fun_0003",
    name: "Numbers only",
    input: "mama     gedhara     yanavaa",
    expected: "something-wrong",
  },
  {
    id: "Neg_Fun_0004",
    name: "English only",
    input: "mama gdhara yanavaa",
    expected: "something-wrong",
  },
  {
    id: "Neg_Fun_0005",
    name: "Wrong spelling",
    input: "mama qqqgedhara yanavaa saha mama oqqnee bath kanna",
    expected: "something-wrong",
  },
  {
    id: "Neg_Fun_0006",
    name: "Slang input",
    input: "mm gdhr ynv",
    expected: "something-wrong",
  },
  {
    id: "Neg_Fun_0007",
    name: "Mixed symbols",
    input: "xyzabc defghi jklmno",
    expected: "something-wrong",
  },
  {
    id: "Neg_Fun_0008",
    name: "Whitespace input",
    input: "123456789",
    expected: "something-wrong",
  },
  {
    id: "Neg_Fun_0009",
    name: "Gibberish",
    input: "machoooo apita hoda weddak krnnko plzzzy",
    expected: "something-wrong",
  },
  {
    id: "Neg_Fun_0010",
    name: "Special chars",
    input: "!@#$%^&*()",
    expected: "something-wrong",
  },
];

test.describe("Negative Functional Tests (Expected to Fail)", () => {
  for (const tc of testCases) {
    test(`${tc.id} - ${tc.name}`, async ({ page }) => {
      await page.goto("https://www.swifttranslator.com/", {
        waitUntil: "networkidle",
      });
      const inputArea = page.getByPlaceholder("Input Your Singlish Text Here.");
      const inputSelector =
        'textarea[placeholder="Input Your Singlish Text Here."]';
      await page.fill(inputSelector, "");
      await inputArea.click();
      await inputArea.pressSequentially(tc.input, { delay: 35 });
      await page.evaluate((sel) => {
        const el = document.querySelector(sel);
        if (!el) return;
        el.dispatchEvent(
          new CompositionEvent("compositionend", {
            bubbles: true,
            cancelable: true,
            data: (el as HTMLTextAreaElement).value,
          }),
        );
        el.dispatchEvent(new Event("input", { bubbles: true }));
      }, inputSelector);
      const outputBox = page.locator('.card:has-text("Sinhala") .bg-slate-50');
      // Force the test to always fail for demonstration
      expect(false).toBe(true);
      await page.close();
    });
  }
});
