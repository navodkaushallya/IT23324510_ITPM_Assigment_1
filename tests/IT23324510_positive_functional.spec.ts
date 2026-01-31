import { test, expect } from "@playwright/test";

// Increase navigation timeout for all tests in this file
test.use({ navigationTimeout: 60000 });

const testCases = [
  {
    id: "Pos_Fun_0001",
    name: "Greeting phrase",
    input: "mama vaevata yanavaa.",
    expected: "මම වැවට යනවා.",
  },
  {
    id: "Pos_Fun_0002",
    name: "Mixed-language input",
    input: "mata gedhara yanna oonee naehae.",
    expected: "මට ගෙදර යන්න ඕනේ නැහැ.",
  },
  {
    id: "Pos_Fun_0003",
    name: "Short request",
    input: "mama gamee yanavaa, haebaeyi vahina nisaa yannee naee.",
    expected: "මම ගමේ යනවා, හැබැයි වහින නිසා යන්නේ නෑ.",
  },
  {
    id: "Pos_Fun_0004",
    name: "Simple sentence",
    input: "mama hari, ehenam api yamu.",
    expected: "මම හරි, එහෙනම් අපි යමු.",
  },
  {
    id: "Pos_Fun_0005",
    name: "Compound sentence",
    input: "oyaa ehe yanavanam mama gedhara innavaa.",
    expected: "ඔයා එහෙ යනවනම් මම ගෙදර ඉන්නවා.",
  },
  {
    id: "Pos_Fun_0006",
    name: "Question sentence",
    input: "ohu parakku vunee maarga thadhabadhaya nisaa.",
    expected: "ඔහු පරක්කු වුනේ මාර්ග තදබදය නිසා.",
  },
  {
    id: "Pos_Fun_0007",
    name: "Imperative",
    input: "oyaalata kohomadha?",
    expected: "ඔයාලට කොහොමද?",
  },
  {
    id: "Pos_Fun_0008",
    name: "Polite phrase",
    input: "nuba kiiyatadha enna hithan inne?",
    expected: "නුබ කීයටද එන්න හිතන් ඉන්නේ?",
  },
  {
    id: "Pos_Fun_0009",
    name: "Negative sentence",
    input: "karuNaakaralaa meeka poddak ehaata karanna.",
    expected: "කරුණාකරලා මේක පොඩ්ඩක් එහාට කරන්න.",
  },
  {
    id: "Pos_Fun_0010",
    name: "Long sentence",
    input: "vahaama eya sidhuu karanu.",
    expected: "වහාම එය සිදූ කරනු.",
  },
  {
    id: "Pos_Fun_0011",
    name: "Thanks phrase",
    input: "mama iiyee paadam karanna giyaa.",
    expected: "මම ඊයේ පාඩම් කරන්න ගියා.",
  },
  {
    id: "Pos_Fun_0012",
    name: "Apology phrase",
    input: "ohu heta dhuvanna yanava.",
    expected: "ඔහු හෙට දුවන්න යනව.",
  },
  {
    id: "Pos_Fun_0013",
    name: "Instruction sentence",
    input: "ovun yayi.",
    expected: "ඔවුන් යයි.",
  },
  {
    id: "Pos_Fun_0014",
    name: "Request sentence",
    input: "ovun enavaa.",
    expected: "ඔවුන් එනවා.",
  },
  {
    id: "Pos_Fun_0015",
    name: "Future tense",
    input: "aayubohoovevaa.",
    expected: "ආයුබොහෝවෙවා.",
  },
  {
    id: "Pos_Fun_0016",
    name: "Past tense",
    input: "suba raathriyak!",
    expected: "සුබ රාත්‍රියක්!",
  },
  {
    id: "Pos_Fun_0017",
    name: "Emotional phrase",
    input: "mata ayee oona venava.",
    expected: "මට අයේ ඕන වෙනව.",
  },
  {
    id: "Pos_Fun_0018",
    name: "Advice sentence",
    input: "thee bonna.",
    expected: "තේ බොන්න.",
  },
  {
    id: "Pos_Fun_0019",
    name: "Motivation",
    input: "baee baee.",
    expected: "හරි හරි.",
  },
  {
    id: "Pos_Fun_0020",
    name: "Simple chat",
    input: "Teams meeting ekak thiyennee.",
    expected: "Teams meeting එකක් තියෙන්නේ.",
  },
  {
    id: "Pos_Fun_0021",
    name: "Polite request",
    input: "naendhaa Negombo yanna hadhannee.",
    expected: "නැන්දා Negombo යන්න හදන්නේ.",
  },
  {
    id: "Pos_Fun_0022",
    name: "Simple answer",
    input: "araka hodhata vaeda karanavaadha?",
    expected: "අරක හොදට වැඩ කරනවාද?",
  },
  {
    id: "Pos_Fun_0023",
    name: "Simple negative",
    input: "dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva aethi athara, ehi samastha dhiga pramaaNaya kiloomiitar 300k pamaNa vana bava pravaahana,mahaamaarga saha naagarika sQQvarDhana amaathYaa bimal rathnaayaka saDHahan kaLeeya.",
    expected: "දිට්වා සුළි කුණාටුව සමග ඇති වූ ගංවතුර සහ නායයෑම් හේතුවෙන් මාර්ග සංවර්ධන අධිකාරිය සතු මාර්ග කෝටස් 430ක් විනාශයට පත්ව ඇති අතර, එහි සමස්ථ දිග ප්‍රමාණය කිලෝමීටර් 300ක් පමණ වන බව ප්‍රවාහන,මහාමාර්ග සහ නාගරික සංවර්ධන අමාත්‍යා බිමල් රත්නායක සඳහන් කළේය.",
  },
  {
    id: "Pos_Fun_0024",
    name: "Simple thanks",
    input: "mamanaannayanavaa",
    expected: "Invalid input",
  },
];

test.describe("Positive Functional Tests", () => {
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
      await expect(outputBox).toContainText(tc.expected, { timeout: 10000 });
      const output = await outputBox.textContent();
      expect(output).toContain(tc.expected);
      await page.close();
    });
  }
});
